import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from './markdown'

// English articles live in content/news/<slug>.md.
// A Vietnamese version is optional: content/news/vi/<slug>.md, same file name.
const NEWS_DIR = path.join(process.cwd(), 'content/news')
const VI_DIR = path.join(NEWS_DIR, 'vi')

function readFile(file) {
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  if (data.date instanceof Date) data.date = data.date.toISOString().slice(0, 10)
  data.date = String(data.date || '')
  return { data, content }
}

function load(slug, locale) {
  const enFile = path.join(NEWS_DIR, `${slug}.md`)
  if (!fs.existsSync(enFile)) return null
  const viFile = path.join(VI_DIR, `${slug}.md`)
  const hasVi = fs.existsSync(viFile)
  const lang = locale === 'vi' && hasVi ? 'vi' : 'en'
  const { data, content } = readFile(lang === 'vi' ? viFile : enFile)
  return { ...data, slug, lang, hasVi, content }
}

export function getSlugs() {
  if (!fs.existsSync(NEWS_DIR)) return []
  return fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
}

// Newest first, each article in the reader's language when a translation exists.
export function getPosts(locale) {
  return getSlugs()
    .map((slug) => {
      const { content, ...post } = load(slug, locale)
      return post
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPost(slug, locale) {
  const post = load(slug, locale)
  if (!post) return null
  const words = post.content.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length
  const contentHtml = await markdownToHtml(post.content)
  const { content, ...rest } = post
  return { ...rest, contentHtml, minutes: Math.max(1, Math.round(words / 220)) }
}

export function formatDate(d, locale) {
  const date = new Date(`${d}T00:00:00Z`)
  if (isNaN(date)) return d
  return date.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}
