import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'

export const metadata = {
  title: 'Why We Do It | MZM Africa',
  description: 'Zimbabwe wants investment and new export markets. Vietnam wants raw materials and markets for its companies. Why MZM works between the two.',
}

const zimbabwe = [
  'National Development Strategy 2 (2026 to 2030) and the Zimbabwe National Industrial Development Policy II prioritise value addition, agro-processing and manufactured exports.',
  'Since February 2026, raw mineral exports need an approved processing plan. In May 2026, 14 critical minerals were declared.',
  'Export earnings are concentrated in a few minerals and a few buyers.',
]

const vietnam = [
  'The GoGlobal Programme (Decision 626/QD-TTg, 6 April 2026) supports Vietnamese firms investing abroad and names Africa as a market.',
  'Vietnamese outward investment reached USD 1.36 billion in 2025, up 88.7%.',
  'Vietnamese factories import cotton, tobacco, leather and other raw materials at scale.',
]

const between = [
  'In November 2025 the two governments agreed to work towards a bilateral trade agreement and an investment protection agreement, and Zimbabwe appointed a special envoy to promote Vietnamese investment.',
  'Neither country has an embassy in the other’s capital. Zimbabwe is represented from Kuala Lumpur and Vietnam from Pretoria.',
]

const values = [
  ['Processing at home', 'We favour projects that add value in Zimbabwe: processing plants, packhouses, factories, and the power to run them.'],
  ['Zimbabwean partners', 'We respect the sectors reserved for Zimbabwean citizens, and build supply and technology partnerships with Zimbabwean-owned businesses.'],
  ['Long-term partnership', 'We measure an engagement by whether the project operates and lasts, not by how quickly a deal is signed.'],
  ['The right to decline', 'Opportunities that fail our checks are not presented, whatever their size.'],
]

const Dash = () => <span className="text-[#C4A04A] shrink-0">—</span>

export default function WhyWeDoIt() {
  return (
    <>
      <PageHero
        eyebrow="Why We Do It"
        title="Each economy needs"
        accent="what the other has."
        lead="Zimbabwe wants investment and new export markets. Vietnam wants raw materials and markets for its companies. Both governments set this out in their own policies."
        image="/images/hanoi.jpg"
      />

      <section id="context" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>The Strategic Context</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Why this matters <span className="text-[#C4A04A] italic">now.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[['Zimbabwe', zimbabwe], ['Vietnam', vietnam]].map(([country, items]) => (
              <div key={country} className="border border-white/10 bg-[#0A0E18] p-10">
                <h3 className="font-serif text-3xl font-semibold mb-6 text-[#C4A04A]">{country}</h3>
                <ul className="space-y-4">
                  {items.map((it) => <li key={it} className="flex gap-3 text-gray-200 font-light leading-relaxed"><Dash />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border border-[#C4A04A]/40 p-10" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <h3 className="font-serif text-2xl font-semibold mb-5">Between the two countries</h3>
            <ul className="space-y-4">
              {between.map((it) => <li key={it} className="flex gap-3 text-gray-200 font-light leading-relaxed"><Dash />{it}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="thesis" className="py-28 bg-[#0A0E18] border-y border-white/10 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Our Core Thesis</SectionLabel>
          <blockquote className="font-serif text-3xl md:text-5xl font-semibold leading-snug text-white border-l-2 border-[#C4A04A] pl-8 md:pl-12">
            Zimbabwe’s resources should be processed in Zimbabwe, financed and equipped by partners who intend to stay. Business between Zimbabwe and Vietnam should run through checked counterparties and official channels, with people on the ground in both countries. <span className="text-[#C4A04A] italic">MZM exists to make that the standard.</span>
          </blockquote>
        </div>
      </section>

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Our Focus</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Value addition <span className="text-[#C4A04A] italic">over transaction speed.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {values.map(([title, body], i) => (
              <div key={title} className="bg-[#080C14] p-8">
                <div className="font-serif text-3xl font-bold text-[#C4A04A]/30 mb-4">{String(i + 1).padStart(2, '0')}</div>
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
            <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">Vision</div>
            <p className="font-serif text-3xl font-semibold leading-snug">To be the leading Zimbabwean investment and trade firm on the Zimbabwe-Vietnam corridor by 2030.</p>
          </div>
          <div className="p-11 border border-white/10 bg-[#121826]">
            <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">Mission</div>
            <p className="font-serif text-3xl font-semibold leading-snug">To bring checked investment and trade between Asia and Zimbabwe that benefits investors, buyers and Zimbabwe.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-2">See how we deliver.</h2>
            <p className="text-gray-400 font-light">One process, five stages, run in both countries.</p>
          </div>
          <Link href="/how-we-work" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">How We Do It</Link>
        </div>
      </section>
    </>
  )
}
