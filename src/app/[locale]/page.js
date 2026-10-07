import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../i18n/navigation'
import { practices } from '../../lib/practices'

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

  return (
    <>
      {/* HERO */}
      <style>{`@keyframes mzmFade{0%,40%{opacity:0}50%,90%{opacity:1}100%{opacity:0}}@keyframes mzmZoom{from{transform:scale(1)}to{transform:scale(1.08)}}.mzm-fade{animation:mzmFade 18s ease-in-out infinite}.mzm-zoom{animation:mzmZoom 18s ease-out infinite alternate}@media (prefers-reduced-motion:reduce){.mzm-fade,.mzm-zoom{animation:none}}`}</style>
      <section className="relative h-screen min-h-[680px] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mzm-zoom" style={{ backgroundImage: 'url(/images/zimbabwe-landscape.jpg)' }} />
        <div className="absolute inset-0 bg-cover bg-center mzm-fade" style={{ backgroundImage: 'url(/images/hanoi.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/50 to-[#080C14]/20" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#080C14]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.25em] uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="text-[42px] md:text-6xl lg:text-[76px] font-serif font-bold leading-[1.02] mb-8 max-w-[1150px]">
            {c.h1[0]}<br /><span className="text-[#C4A04A] italic">{c.h1[1]}</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl font-light mb-12 max-w-3xl leading-relaxed">{c.sub}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact?type=consultation" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-9 py-5 hover:bg-[#E0CA8E] transition-colors">{c.cta1}</Link>
            <Link href="/contact?type=brief" className="text-white text-xs font-bold tracking-widest uppercase px-9 py-5 border border-white/40 hover:border-[#C4A04A] hover:text-[#C4A04A] transition-colors">{c.cta2}</Link>
          </div>
        </div>
      </section>

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
                  <img src={p.image} alt={sectors[p.slug].imageAlt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundImage: 'url(/images/hanoi.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
