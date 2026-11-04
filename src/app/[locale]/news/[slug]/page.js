import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { getPost, getPosts, getSlugs, formatDate } from '../../../../lib/news'
import { Link } from '../../../../i18n/navigation'
import { alternates, social, OG_IMAGE } from '../../../../i18n/meta'

// Every article is built at deploy time in both language versions of the site.
export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { locale, slug } }) {
  const post = await getPost(slug, locale)
  if (!post) return {}
  const url = `/news/${slug}`
  return {
    title: `${post.title} | MZM Africa`,
    description: post.excerpt,
    // Without a translation the /vi address repeats the English text, so search engines are pointed at /en.
    alternates: post.hasVi ? alternates(locale, url) : { canonical: `/en${url}` },
    ...(() => {
      const sm = social(locale, post.title, post.excerpt, post.image ? { url: post.image, alt: post.title } : OG_IMAGE)
      return { ...sm, openGraph: { ...sm.openGraph, type: 'article', publishedTime: post.date } }
    })(),
  }
}

const LANGUAGES = [['en', 'English'], ['vi', 'Tiếng Việt']]

export default async function NewsPost({ params: { locale, slug } }) {
  const post = await getPost(slug, locale)
  if (!post) notFound()
  setRequestLocale(locale)
  const c = (await getMessages()).News
  const more = getPosts(locale).filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="pt-36 pb-12 bg-[#0A0E18] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/news" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6 hover:gap-3 transition-all">← {c.back}</Link>
          <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-3">{post.category || c.update}</div>
          <h1 lang={post.lang} className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">{formatDate(post.date, locale)} · {post.minutes} {c.minRead}</div>
            {post.hasVi && (
              <div className="flex gap-2" role="group" aria-label={c.readIn}>
                {LANGUAGES.map(([code, name]) => (
                  <Link key={code} href={`/news/${slug}`} locale={code} lang={code} aria-current={post.lang === code ? 'true' : undefined}
                    className={`text-xs font-bold px-3 py-2 border transition-colors ${post.lang === code ? 'border-[#C4A04A] text-[#C4A04A] bg-[#C4A04A]/10' : 'border-white/20 text-gray-300 hover:border-[#C4A04A]/60'}`}>
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {locale === 'vi' && post.lang === 'en' && <p className="text-gray-400 text-sm font-light mt-4">{c.englishOnly}</p>}
        </div>
      </section>

      <section className="py-14 bg-[#080C14]">
        <div className="max-w-3xl mx-auto px-6">
          {post.image && <img src={post.image} alt={post.title} className="w-full h-auto mb-10 border border-white/10" />}
          <div lang={post.lang} className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <div className="mt-14 border-t-2 border-[#C4A04A] pt-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">{c.ctaTitle}</h2>
            <p className="text-gray-300 font-light leading-relaxed mb-6">{c.ctaBody}</p>
            <Link href="/contact?type=consultation" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">{c.ctaButton}</Link>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="py-16 bg-[#0A0E18] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-bold mb-8">{c.more}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {more.map((p) => (
                <Link key={p.slug} href={`/news/${p.slug}`} className="group border-t border-white/20 hover:border-[#C4A04A] pt-4 transition-colors">
                  <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-2">{p.category || c.update}</div>
                  <h3 lang={p.lang} className="font-serif text-xl font-semibold leading-snug mb-2 group-hover:text-[#C4A04A] transition-colors">{p.title}</h3>
                  <div className="text-gray-400 text-xs">{formatDate(p.date, locale)}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
