import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { markdownToHtml } from '../../../../lib/markdown'
import { Link } from '../../../../i18n/navigation'
import { alternates } from '../../../../i18n/meta'

function formatDate(d, locale) {
  const date = new Date(`${d}T00:00:00Z`)
  if (isNaN(date)) return d
  return date.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

async function getPost(slug) {
  const filePath = path.join(process.cwd(), 'content/news', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  if (data.date instanceof Date) data.date = data.date.toISOString().slice(0, 10)
  const contentHtml = await markdownToHtml(content)
  return { ...data, slug, contentHtml }
}

// Every article is built at deploy time in both language versions of the site.
export function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/news')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => ({ slug: f.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params: { locale, slug } }) {
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | MZM Africa`,
    description: post.excerpt,
    alternates: alternates(locale, `/news/${slug}`),
    openGraph: { title: post.title, description: post.excerpt, type: 'article', images: post.image ? [post.image] : [] },
  }
}

export default async function NewsPost({ params: { locale, slug } }) {
  const post = await getPost(slug)
  if (!post) notFound()
  setRequestLocale(locale)
  const c = (await getMessages()).News

  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/news" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6 hover:gap-3 transition-all">← {c.back}</Link>
          <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-3">{post.category || c.update}</div>
          <h1 lang="en" className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="text-gray-500 text-sm">{formatDate(post.date, locale)}</div>
          {c.englishOnly && <p className="text-gray-400 text-sm font-light mt-4">{c.englishOnly}</p>}
        </div>
      </section>

      <section className="py-16 bg-[#080C14]">
        <div className="max-w-3xl mx-auto px-6">
          <div lang="en" className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </section>
    </>
  )
}
