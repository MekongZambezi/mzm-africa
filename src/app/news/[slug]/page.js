import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getPost(slug) {
  const filePath = path.join(process.cwd(), 'content/news', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return { ...data, slug, contentHtml: processed.toString() }
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
          <div className="text-gray-500 text-sm">{post.date}</div>
        </div>
      </section>

      <section className="py-16 bg-[#080C14]">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-invert prose-gold max-w-none text-gray-300 font-light leading-relaxed"
            style={{ fontFamily: 'Mulish, sans-serif' }}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>
    </>
  )
}
