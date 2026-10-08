import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Opportunity', '/opportunity')
}

const Dash = () => <span className="text-[#C4A04A] shrink-0">—</span>

export default async function Opportunity({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).Opportunity

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead} image="/images/hanoi.jpg" />

      <section id="context" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.contextLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{c.contextTitle[0]}<span className="text-[#C4A04A] italic">{c.contextTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[[c.zimbabweTitle, c.zimbabwe], [c.vietnamTitle, c.vietnam]].map(([country, items]) => (
              <div key={country} className="border border-white/10 bg-[#0A0E18] p-10">
                <h3 className="font-serif text-3xl font-semibold mb-6 text-[#C4A04A]">{country}</h3>
                <ul className="space-y-4">
                  {items.map((it) => <li key={it} className="flex gap-3 text-gray-200 font-light leading-relaxed"><Dash />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border border-[#C4A04A]/40 p-10" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <h3 className="font-serif text-2xl font-semibold mb-5">{c.betweenTitle}</h3>
            <ul className="space-y-4">
              {c.between.map((it) => <li key={it} className="flex gap-3 text-gray-200 font-light leading-relaxed"><Dash />{it}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="thesis" className="py-28 bg-[#0A0E18] border-y border-white/10 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>{c.thesisLabel}</SectionLabel>
          <blockquote className="font-serif text-3xl md:text-5xl font-semibold leading-snug text-white border-l-2 border-[#C4A04A] pl-8 md:pl-12">
            {c.thesis[0]} <span className="text-[#C4A04A] italic">{c.thesis[1]}</span>
          </blockquote>
        </div>
      </section>

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.focusLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{c.focusTitle[0]}<span className="text-[#C4A04A] italic">{c.focusTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {c.values.map(([title, body], i) => (
              <div key={title} className="bg-[#080C14] p-8">
                <div className="font-serif text-3xl font-bold text-[#C4A04A]/70 mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-11 border border-[#C4A04A]/35" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">{c.visionLabel}</div>
            <p className="font-serif text-3xl font-semibold leading-snug">{c.vision}</p>
          </div>
          <div className="p-11 border border-white/10 bg-[#121826]">
            <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">{c.missionLabel}</div>
            <p className="font-serif text-3xl font-semibold leading-snug">{c.mission}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-2">{c.ctaTitle}</h2>
            <p className="text-gray-400 font-light">{c.ctaSub}</p>
          </div>
          <Link href="/how-we-work" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">{c.cta}</Link>
        </div>
      </section>
    </>
  )
}
