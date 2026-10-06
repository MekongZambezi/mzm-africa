import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { practices } from '../../../lib/practices'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Capabilities', '/what-we-do')
}

export default async function Capabilities({ params: { locale } }) {
  setRequestLocale(locale)
  const m = await getMessages()
  const c = m.Capabilities
  const sectors = m.Sectors.items

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead} image="/images/zimbabwe-landscape.jpg" />

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {c.items.map((item) => (
            <article key={item.num} id={`capability-${item.num}`} className="border border-white/10 bg-[#0A0E18] grid grid-cols-1 lg:grid-cols-12 scroll-mt-24">
              <div className="lg:col-span-4 p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="font-serif text-5xl font-bold text-[#C4A04A]/40 mb-4">{item.num}</div>
                <h2 className="font-serif text-3xl font-semibold leading-snug mb-6">{item.name}</h2>
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">{c.needLabel}</div>
                <p className="text-gray-300 font-light leading-relaxed text-sm">{item.need}</p>
              </div>
              <div className="lg:col-span-8 p-10 flex flex-col">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4">{c.capabilityLabel}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {item.capability.map((x) => (
                    <li key={x} className="flex gap-3 text-gray-200 font-light leading-relaxed"><span className="text-[#C4A04A] shrink-0">—</span>{x}</li>
                  ))}
                </ul>
                <div className="border-l-2 border-[#C4A04A] bg-[#C4A04A]/5 px-6 py-4">
                  <div className="text-[10px] font-black tracking-widest uppercase text-[#C4A04A] mb-1">{c.impactLabel}</div>
                  <p className="text-white font-light">{item.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.sectorsLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{c.sectorsTitle[0]}<span className="text-[#C4A04A] italic">{c.sectorsTitle[1]}</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {practices.map((p) => (
              <Link key={p.slug} href={p.href} className="group bg-[#080C14] p-7 hover:bg-[#0D1320] transition-colors">
                <div className="font-serif text-2xl font-bold text-[#C4A04A]/50 mb-3">{p.num}</div>
                <div className="font-serif text-xl font-semibold leading-snug mb-3 group-hover:text-[#C4A04A] transition-colors">{sectors[p.slug].title}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{sectors[p.slug].summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-2">{c.ctaTitle}</h2>
            <p className="text-gray-400 font-light">{c.ctaSub}</p>
          </div>
          <Link href="/contact?type=consultation" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">{c.cta}</Link>
        </div>
      </section>
    </>
  )
}
