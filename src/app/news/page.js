import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export const metadata = { title: 'News & Insights | MZM Africa' }

function getPosts() {
  const postsDir = path.join(process.cwd(), 'content/news')
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(raw)
    return { slug: filename.replace('.md', ''), ...data }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export default function News() {
  const posts = getPosts()

  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">News & Insights</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">Latest From MZM</h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <div className="font-serif text-2xl mb-2">No posts yet</div>
              <p className="font-light">Check back soon for news and updates from MZM Africa.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/news/${post.slug}`} className="group border border-white/10 hover:border-[#C4A04A]/30 transition-colors">
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-2">{post.category || 'Update'}</div>
                    <h2 className="font-serif text-xl font-bold mb-3 group-hover:text-[#C4A04A] transition-colors leading-snug">{post.title}</h2>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs">{post.date}</span>
                      <span className="text-[#C4A04A] text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                        Read more
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
