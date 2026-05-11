import Link from 'next/link'
export const metadata = { title: 'Services | MZM Africa' }

const services = [
  {
    id: 'facilitation',
    icon: '⛏',
    title: 'Investment Facilitation',
    lead: 'Connecting qualified investors with vetted Zimbabwean mineral assets.',
    body: 'We source, screen, and structure investment opportunities across Zimbabwe\'s chrome, gold, copper, and nickel sectors. Our facilitation covers the full project lifecycle — from initial asset identification and due diligence through SPV formation, legal structuring, and first capital deployment.',
    deliverables: ['SPV formation and structuring', 'Escrow-controlled claim transfer via mining lawyers', 'Binding Shareholders Agreements', 'Monthly distribution and annual audit frameworks', 'Investor onboarding and MMCZ registration support'],
  },
  {
    id: 'advisory',
    icon: '📊',
    title: 'Beneficiation Advisory',
    lead: 'Technical and commercial advisory on in-country mineral processing.',
    body: 'Zimbabwe\'s February 2026 blanket raw mineral export ban mandates all minerals be beneficiated domestically before export. We advise on the full beneficiation pathway — from flowsheet design and equipment procurement through offtake negotiation with domestic smelters and MMCZ-registered trading houses.',
    deliverables: ['Wash plant and processing flowsheet design', 'Equipment procurement (Chinese and Vietnamese OEM networks)', 'Domestic smelter offtake negotiation (Zimasco, Afrochine)', 'MMCZ-registered trading house introductions', 'Phased beneficiation roadmaps (Phase 1: concentrate; Phase 2: ferrochrome)'],
  },
  {
    id: 'trading',
    icon: '🔁',
    title: 'Commodity Trading',
    lead: 'Structured mineral trading through compliant, regulated channels.',
    body: 'We facilitate chrome, gold, copper, and nickel trading through MMCZ-registered channels to Chinese, Vietnamese, and broader Asian buyers. All commodity trading activity is structured to comply with Zimbabwe\'s mineral export regulations, MMCZ requirements, and ZiMRA obligations.',
    deliverables: ['Chrome concentrate offtake to CIF China buyers', 'Gold doré trading via Fidelity Gold Refinery', 'USDT and USD payment structure advisory', 'Cross-border trade documentation', 'Buyer-seller introduction and negotiation support'],
  },
  {
    id: 'dd',
    icon: '🔎',
    title: 'Due Diligence & Asset Validation',
    lead: 'Independent validation of Zimbabwean mining assets before capital deployment.',
    body: 'We conduct thorough geological, legal, and financial due diligence on Zimbabwean mining claims and concessions on behalf of investors. Our assessments are frank — we have flagged and recommended against deals that do not meet investor-grade standards, and we bring the same rigour to every mandate.',
    deliverables: ['Assay result interpretation and sampling gap analysis', 'Mining title and claims verification', 'CAPEX and operational cost validation', 'Regulatory compliance review', 'Independent DD report with go/no-go recommendation'],
  },
]

export default function Services() {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">What We Do</h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 space-y-0">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`py-16 border-b border-white/8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div>
                <div className="text-4xl mb-5">{s.icon}</div>
                <h2 className="font-serif text-4xl font-bold mb-3">{s.title}</h2>
                <p className="text-[#C4A04A] font-medium text-lg mb-5">{s.lead}</p>
                <p className="text-gray-400 font-light leading-relaxed">{s.body}</p>
              </div>
              <div className="bg-[#0F1520] border border-white/8 p-8">
                <div className="text-xs font-black tracking-widest uppercase text-gray-500 mb-5">What We Deliver</div>
                <ul className="space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-gray-300 font-light">
                      <span className="text-[#C4A04A] mt-0.5 shrink-0">◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-16 text-center">
          <h2 className="font-serif text-3xl font-bold mb-3">Ready to work with us?</h2>
          <p className="text-gray-400 font-light mb-8">Tell us about your investment mandate and we'll respond within 48 hours.</p>
          <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
