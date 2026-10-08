import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Approach', '/how-we-work')
}

export default async function OurApproach({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).Approach

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead} image="/images/practice-manufacturing.jpg" />

      <section id="framework" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.frameworkLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">{c.frameworkTitle[0]}<span className="text-[#C4A04A] italic">{c.frameworkTitle[1]}</span></h2>
          <ol className="border-t border-white/10">
            {c.steps.map(([num, title, body, output]) => (
              <li key={num} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10">
                <div className="md:col-span-1 font-serif text-5xl font-bold text-[#C4A04A] leading-none">{num}</div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-3xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-300 font-light leading-relaxed">{body}</p>
                </div>
                <div className="md:col-span-4 md:pl-6 md:border-l border-white/10">
                  <div className="text-[10px] font-black tracking-widest uppercase text-[#C4A04A] mb-2">{c.outputLabel}</div>
                  <p className="text-white font-light">{output}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.presenceLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{c.presenceTitle[0]}<span className="text-[#C4A04A] italic">{c.presenceTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.presence.map(([place, title, body]) => (
              <div key={title} className="border border-white/10 border-t-2 border-t-[#C4A04A] bg-[#080C14] p-8">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">{place}</div>
                <h3 className="font-serif text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commitments" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.commitmentsLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{c.commitmentsTitle[0]}<span className="text-[#C4A04A] italic">{c.commitmentsTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {c.commitments.map(([title, body]) => (
              <div key={title} className="bg-[#080C14] p-8 flex gap-5">
                <span className="w-2 h-2 bg-[#C4A04A] mt-3 shrink-0" />
                <div>
                  <h3 className="font-sans font-bold text-lg mb-2 text-white">{title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            <Link href="/governance" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{c.governanceLink}</Link>
            <Link href="/fraud-notice" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{c.fraudLink}</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-t border-white/10">
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
