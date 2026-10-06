import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { practices } from '../../../lib/practices'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Sectors', '/business')
}

const Arrow = () => (
  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
)

export default async function Sectors({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).Sectors
  const t = await getTranslations('Sectors')

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead} image="/images/zimbabwe-landscape.jpg" />

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => {
            const s = c.items[p.slug]
            return (
              <Link key={p.slug} href={p.href} className="group border border-white/10 bg-[#0A0E18] hover:border-[#C4A04A]/50 transition-colors flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={s.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#C4A04A]/40">{p.num}</span>
                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-[#C4A04A]/10 text-[#C4A04A]">{t('sectorTag', { num: p.num })}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">{s.title}</h2>
                  <p className="text-gray-400 text-sm font-light leading-relaxed flex-1">{s.summary}</p>
                  <div className="mt-6 text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">{c.exploreSector} <Arrow /></div>
                </div>
              </Link>
            )
          })}

          <Link href="/corridor" className="group border border-[#C4A04A]/40 p-8 flex flex-col justify-between" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <div>
              <SectionLabel>{c.corridorLabel}</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold mb-4 leading-snug">{c.corridorTitle}</h2>
              <p className="text-gray-300 text-sm font-light leading-relaxed">{c.corridorBody}</p>
            </div>
            <div className="mt-8 text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">{c.corridorLink} <Arrow /></div>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold mb-2">{c.processTitle}</h2>
            <p className="text-gray-400 font-light">{c.processBody}</p>
          </div>
          <Link href="/how-we-work" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">{c.processCta}</Link>
        </div>
      </section>
    </>
  )
}
