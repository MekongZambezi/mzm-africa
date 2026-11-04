import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import { pageMetadata } from '../../../i18n/meta'
import { getPosts, formatDate } from '../../../lib/news'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'News', '/news')
}

export default async function News({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).News
  const [lead, ...rest] = getPosts(locale)
  const tag = (post) => locale === 'vi' && post.lang === 'en' && <span className="ml-3 text-gray-400 font-normal normal-case tracking-normal">{c.englishTag}</span>

  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">{c.title}</h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          {!lead ? (
            <div className="text-center py-20 text-gray-400">
              <div className="font-serif text-2xl mb-2">{c.empty}</div>
              <p className="font-light">{c.emptySub}</p>
            </div>
          ) : (
            <>
              <Link href={`/news/${lead.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 border border-white/10 hover:border-[#C4A04A]/40 transition-colors mb-10">
                {lead.image && (
                  <div className="overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-full">
                    <img src={lead.image} alt={lead.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-7 md:p-10 flex flex-col justify-center">
                  <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-3">{c.latest} · {lead.category || c.update}{tag(lead)}</div>
                  <h2 lang={lead.lang} className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-[#C4A04A] transition-colors">{lead.title}</h2>
                  <p lang={lead.lang} className="text-gray-300 font-light leading-relaxed mb-6">{lead.excerpt}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-400 text-xs">{formatDate(lead.date, locale)}</span>
                    <span className="text-[#C4A04A] text-xs font-bold tracking-wider uppercase">{c.readMore} →</span>
                  </div>
                </div>
              </Link>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/news/${post.slug}`} className="group border border-white/10 hover:border-[#C4A04A]/30 transition-colors">
                    {post.image && (
                      <div className="h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-2">{post.category || c.update}{tag(post)}</div>
                      <h2 lang={post.lang} className="font-serif text-xl font-bold mb-3 group-hover:text-[#C4A04A] transition-colors leading-snug">{post.title}</h2>
                      <p lang={post.lang} className="text-gray-400 text-sm font-light leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{formatDate(post.date, locale)}</span>
                        <span className="text-[#C4A04A] text-xs font-bold tracking-wider uppercase flex items-center gap-1">{c.readMore} →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
