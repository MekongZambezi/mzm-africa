import { getMessages, setRequestLocale } from 'next-intl/server'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'FraudNotice', '/fraud-notice')
}

export default async function FraudNotice({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).FraudNotice

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead} />

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>{c.label}</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight">{c.listTitle[0]}<span className="text-[#C4A04A] italic">{c.listTitle[1]}</span></h2>
          </div>
          <ul className="border-t border-white/10">
            {c.genuine.map((g) => (
              <li key={g} className="flex gap-4 py-5 border-b border-white/10 text-gray-200 font-light leading-relaxed"><span className="text-[#C4A04A] shrink-0">—</span>{g}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">{c.unsureTitle}</h2>
          <p className="text-gray-300 font-light leading-relaxed max-w-3xl">
            {c.unsureBefore}{' '}
            <a href="mailto:projects@mzmafrica.com" className="text-[#C4A04A] underline underline-offset-4">projects@mzmafrica.com</a>{' '}
            {c.unsureAfter}
          </p>
        </div>
      </section>
    </>
  )
}
