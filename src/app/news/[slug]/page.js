import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from '../../../lib/markdown'
import Link from 'next/link'
import { notFound } from 'next/navigation'

function formatDate(d) {
  const date = new Date(`${d}T00:00:00Z`)
  if (isNaN(date)) return d
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

async function getPost(slug) {
  const filePath = path.join(process.cwd(), 'content/news', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  if (data.date instanceof Date) data.date = data.date.toISOString().slice(0, 10)
  const contentHtml = await markdownToHtml(content)
  return { ...data, slug, contentHtml }
}

// Build every article at deploy time, so a broken article or chart fails the
// build (and the live site stays as it was) instead of failing for visitors.
export function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/news')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => ({ slug: f.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | MZM Africa`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', images: post.image ? [post.image] : [] },
  }
}

export default async function NewsPost({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/news" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6 hover:gap-3 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            Back to News
          </Link>
          <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-3">{post.category || 'Update'}</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="text-gray-500 text-sm">{formatDate(post.date)}</div>
        </div>
      </section>

      <section className="py-16 bg-[#080C14]">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>
    </>
  )
}
