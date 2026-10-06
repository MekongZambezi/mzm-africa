import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Governance', '/governance')
}

export default async function Governance({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).Governance

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead} />

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.reviewLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{c.reviewTitle[0]}<span className="text-[#C4A04A] italic">{c.reviewTitle[1]}</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mb-12">{c.reviewSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.checks.map(([title, body], i) => (
              <div key={title} className="bg-[#080C14] p-8">
                <div className="font-serif text-3xl font-bold text-[#C4A04A]/30 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>{c.officialsLabel}</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight">{c.officialsTitle[0]}<span className="text-[#C4A04A] italic">{c.officialsTitle[1]}</span></h2>
            <p className="text-gray-300 font-light leading-relaxed mt-6">{c.officialsBody}</p>
          </div>
          <ul className="border-t border-white/10">
            {c.officials.map((o) => (
              <li key={o} className="flex gap-4 py-5 border-b border-white/10 text-gray-200 font-light leading-relaxed"><span className="text-[#C4A04A] shrink-0">—</span>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {c.columns.map(([title, body]) => (
            <div key={title}>
              <div className="w-full h-0.5 mb-6" style={{ background: 'linear-gradient(90deg,#C4A04A,transparent)' }} />
              <h3 className="font-sans font-bold text-lg mb-3 text-white">{title}</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-gray-400 font-light">{c.fraudPrompt}</p>
          <Link href="/fraud-notice" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">{c.fraudLink}</Link>
        </div>
      </section>
    </>
  )
}
