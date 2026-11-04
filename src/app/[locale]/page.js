import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../i18n/navigation'
import { practices } from '../../lib/practices'
import { getPosts, formatDate } from '../../lib/news'

const Arrow = ({ cls = 'w-3 h-3' }) => (
  <svg className={`${cls} group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
)

const Label = ({ children }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-7 h-px bg-[#C4A04A]" />
    <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{children}</span>
  </div>
)

export default async function Home({ params: { locale } }) {
  setRequestLocale(locale)
  const m = await getMessages()
  const c = m.Home
  const sectors = m.Sectors.items
  const n = m.News
  // The newest article is featured automatically; the next two sit beside it.
  const [latest, ...others] = getPosts(locale)
  const recent = others.slice(0, 2)

  return (
    <>
      {/* HERO */}
      <style>{`@keyframes mzmFade{0%,40%{opacity:0}50%,90%{opacity:1}100%{opacity:0}}@keyframes mzmZoom{from{transform:scale(1)}to{transform:scale(1.08)}}.mzm-fade{animation:mzmFade 18s ease-in-out infinite}.mzm-zoom{animation:mzmZoom 18s ease-out infinite alternate}@media (prefers-reduced-motion:reduce){.mzm-fade,.mzm-zoom{animation:none}}.mzm-hero-a{background-image:url(/images/hero-victoria-falls-sm.jpg)}.mzm-hero-b{background-image:url(/images/hanoi-sm.jpg)}@media (min-width:768px){.mzm-hero-a{background-image:url(/images/hero-victoria-falls.jpg);background-position:62% center}.mzm-hero-b{background-image:url(/images/hanoi.jpg)}}`}</style>
      <section className="relative min-h-screen flex flex-col justify-end pt-24 pb-6 md:pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mzm-zoom mzm-hero-a" />
        <div className="absolute inset-0 bg-cover bg-center mzm-fade mzm-hero-b" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/50 to-[#080C14]/20" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#080C14]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col">
          <div className="flex items-center gap-4 mb-5 md:mb-8">
            <div className="w-10 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.25em] uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="text-[42px] md:text-6xl lg:text-[76px] font-serif font-bold leading-[1.02] mb-5 md:mb-8 max-w-[1150px]">
            {c.h1[0]}<br /><span className="text-[#C4A04A] italic">{c.h1[1]}</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl font-light mb-7 md:mb-10 max-w-3xl leading-relaxed">{c.sub}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact?type=consultation" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-7 md:px-9 py-4 md:py-5 hover:bg-[#E0CA8E] transition-colors">{c.cta1}</Link>
            <Link href="/contact?type=brief" className="hidden sm:inline-block text-white text-xs font-bold tracking-widest uppercase px-9 py-5 border border-white/40 hover:border-[#C4A04A] hover:text-[#C4A04A] transition-colors">{c.cta2}</Link>
          </div>
          {latest && (
            <Link href={`/news/${latest.slug}`} className="group order-first md:order-last mb-7 md:mb-0 md:mt-10 flex items-center gap-4 md:gap-6 bg-[#080C14]/80 backdrop-blur border border-white/15 border-l-2 border-l-[#C4A04A] p-4 md:p-5 hover:bg-[#0D1320] transition-colors">
              {latest.image && <img src={latest.image} alt="" className="hidden md:block w-36 h-20 object-cover shrink-0" />}
              <div className="min-w-0 flex-1">
                <div className="text-[11px] mb-1.5"><span className="text-[#C4A04A] font-bold tracking-widest uppercase">{n.latest}</span><span className="text-gray-300 ml-3">{formatDate(latest.date, locale)}</span></div>
                <div lang={latest.lang} className="font-serif text-base md:text-2xl font-semibold leading-snug line-clamp-3 md:line-clamp-2 group-hover:text-[#C4A04A] transition-colors">{latest.title}</div>
              </div>
              <span className="text-[#C4A04A] shrink-0"><Arrow cls="w-5 h-5" /></span>
            </Link>
          )}
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      {latest && (
        <section className="py-20 bg-[#0A0E18] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <Label>{n.eyebrow}</Label>
                <h2 className="font-serif text-4xl md:text-5xl font-bold">{n.latestPlural}</h2>
              </div>
              <Link href="/news" className="hidden sm:inline-flex group shrink-0 text-[#C4A04A] text-xs font-bold tracking-widest uppercase items-center gap-2">{n.all} <Arrow /></Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Link href={`/news/${latest.slug}`} className="group lg:col-span-2 border border-white/10 hover:border-[#C4A04A]/40 transition-colors">
                {latest.image && <div className="overflow-hidden aspect-[16/9]"><img src={latest.image} alt={latest.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>}
                <div className="p-6 md:p-8">
                  <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-3">{latest.category || n.update}</div>
                  <h3 lang={latest.lang} className="font-serif text-2xl md:text-4xl font-bold leading-tight mb-3 group-hover:text-[#C4A04A] transition-colors">{latest.title}</h3>
                  <p lang={latest.lang} className="text-gray-300 font-light leading-relaxed mb-4">{latest.excerpt}</p>
                  <div className="text-gray-400 text-xs">{formatDate(latest.date, locale)}</div>
                </div>
              </Link>
              <div className="flex flex-col gap-8">
                {recent.map((p) => (
                  <Link key={p.slug} href={`/news/${p.slug}`} className="group flex-1 border border-white/10 hover:border-[#C4A04A]/40 transition-colors">
                    {p.image && <div className="overflow-hidden h-40"><img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>}
                    <div className="p-6">
                    <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-3">{p.category || n.update}</div>
                    <h3 lang={p.lang} className="font-serif text-xl font-semibold leading-snug mb-3 group-hover:text-[#C4A04A] transition-colors">{p.title}</h3>
                    <p lang={p.lang} className="text-gray-400 text-sm font-light leading-relaxed mb-3 line-clamp-3">{p.excerpt}</p>
                    <div className="text-gray-400 text-xs">{formatDate(p.date, locale)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/news" className="sm:hidden group mt-8 inline-flex text-[#C4A04A] text-xs font-bold tracking-widest uppercase items-center gap-2">{n.all} <Arrow /></Link>
          </div>
        </section>
      )}

      {/* THREE PILLARS */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <Label>{c.mandateLabel}</Label>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">{c.mandateTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.mandateTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.pillars.map(([title, body, link, href], i) => (
              <Link key={href} href={href} className="group bg-[#080C14] p-10 hover:bg-[#0D1320] transition-colors relative flex flex-col">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#C4A04A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="font-serif text-5xl font-bold text-[#C4A04A]/70 mb-6">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-3xl font-semibold mb-5">{title}</h3>
                <p className="text-gray-300 font-light leading-relaxed mb-8 flex-1">{body}</p>
                <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">{link} <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE SECTORS */}
      <section className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <Label>{c.sectorsLabel}</Label>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">{c.sectorsTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.sectorsTitle[1]}</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{c.sectorsSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {practices.map((p) => {
              const [title, summary] = c.sectorText[p.slug]
              return (
                <Link key={p.slug} href={p.href} className="group relative overflow-hidden border border-white/10 hover:border-[#C4A04A]/50 transition-colors min-h-[420px] flex flex-col justify-end">
                  <img src={p.image} srcSet={`${p.imageSm} 800w, ${p.image} 1600w`} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" width="1600" height="1067" loading="lazy" decoding="async" alt={sectors[p.slug].imageAlt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/80 to-[#080C14]/10" />
                  <div className="relative p-6">
                    <div className="font-serif text-2xl font-bold text-[#C4A04A] mb-2">{p.num}</div>
                    <h3 className="font-serif text-2xl font-semibold mb-2 leading-snug">{title}</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">{summary}</p>
                    <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">{c.explore} <Arrow /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <Label>{c.factsLabel}</Label>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">{c.factsTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.factsTitle[1]}</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.facts.map(([num, text]) => (
              <div key={num} className="border-t-2 border-[#C4A04A] pt-6">
                <div className="font-serif text-4xl md:text-5xl font-bold text-white leading-none mb-4">{num}</div>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
          {c.factsSource && <p className="mt-10 text-xs text-gray-400 font-light">{c.factsSource}</p>}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 relative overflow-hidden mzm-hero-b" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#080C14]/90" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center gap-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">{c.closeTitle}</h2>
            <p className="text-gray-300 font-light text-lg">{c.closeSub}</p>
          </div>
          <Link href="/contact?type=consultation" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">{c.cta1}</Link>
        </div>
      </section>
    </>
  )
}
