import Link from 'next/link'
export const metadata = { title: 'Services | MZM Africa' }

const services = [
  {
    id: 'facilitation',
    num: '01',
    title: 'Investment Facilitation',
    lead: 'Connecting qualified investors with verified Zimbabwean mineral assets — structured before the conversation starts.',
    body: "MZM identifies, verifies, and structures investment opportunities in Zimbabwe's chrome, lithium, and critical minerals sector. The SPV, escrow arrangement, title verification, shareholder agreement, and financial model are in place before an investor is approached. You arrive at a deal, not a discussion about whether one is possible.",
    deliverables: [
      'SPV formation structured under Zimbabwe\'s Critical Minerals framework',
      'Escrow-controlled claim transfer through registered mining lawyers',
      'Binding Shareholders Agreement with governance, profit schedule, and exit provisions',
      'Monthly distribution framework and annual independent audit requirement',
      'MMCZ registration and Ministry of Mines approval navigation',
    ],
  },
  {
    id: 'advisory',
    num: '02',
    title: 'Beneficiation Advisory',
    lead: 'Technical and commercial advisory on in-country mineral processing — mandatory under current Zimbabwe law.',
    body: "Zimbabwe's February 2026 raw mineral export ban and May 2026 Critical Minerals declaration together prohibit the export of chrome, lithium, copper, nickel, and PGMs in raw form. Processing is not optional — it is the legal condition for export. MZM advises on the processing pathway from flowsheet design through equipment procurement to domestic smelter and offtake agreements.",
    deliverables: [
      'Wash plant and processing flowsheet design for chrome and lithium',
      'Equipment procurement through Vietnamese and Chinese OEM networks',
      'Domestic smelter offtake structuring — Zimasco, Afrochine',
      'MMCZ-registered trading house introductions',
      'Beneficiation roadmap compliant with Minister-approved transitional plan requirements',
    ],
  },
  {
    id: 'trading',
    num: '03',
    title: 'Commodity Trading',
    lead: 'Structured mineral trading through MMCZ-registered channels to Asian buyers.',
    body: 'MZM facilitates chrome and lithium trading through MMCZ-registered channels to Chinese and Vietnamese industrial buyers. All trading activity is structured to comply with Zimbabwe\'s mineral export regulations, MMCZ requirements, ZiMRA obligations, and the RBZ foreign currency framework. MZM does not facilitate trades that conflict with the current regulatory framework.',
    deliverables: [
      'Chrome concentrate offtake to CIF China buyers on Letter of Credit',
      'Lithium spodumene concentrate offtake to Asian battery supply chains',
      'MMCZ export permit management per consignment',
      'RBZ forex compliance through SPV banking structure',
      'Buyer introduction, negotiation support, and trade documentation',
    ],
  },
  {
    id: 'dd',
    num: '04',
    title: 'Due Diligence and Asset Validation',
    lead: 'Independent verification of Zimbabwean mining assets before capital is deployed.',
    body: 'MZM conducts geological, legal, and financial due diligence on Zimbabwean mining claims on behalf of investors. The output is a frank assessment — not a document designed to close a deal. MZM has recommended against investments that did not meet the standard. That record is what makes a positive assessment from MZM mean something.',
    deliverables: [
      'Assay result interpretation and sampling gap analysis',
      'Mining title and claims verification through the Mines Registry',
      'CAPEX and operational cost validation against current equipment pricing',
      'Regulatory compliance review under current Zimbabwe mining law',
      'Independent DD report with a clear go or no-go recommendation',
    ],
  },
]

export default function Services() {
  return (
    <>
      <section
        className="pt-36 pb-16 border-b border-white/8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/mining-site-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#080C14]/90" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">What We Do</h1>
          <p className="text-gray-400 font-light text-lg max-w-xl leading-relaxed">
            Four services. Each one built around a single principle: the deal is structured, verified, and compliant before investor capital moves.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 space-y-0">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="py-16 border-b border-white/8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="font-serif text-5xl font-bold text-[#C4A04A]/20 mb-4">{s.num}</div>
                <h2 className="font-serif text-4xl font-bold mb-3">{s.title}</h2>
                <p className="text-[#C4A04A] font-medium text-lg mb-5 leading-snug">{s.lead}</p>
                <p className="text-gray-400 font-light leading-relaxed">{s.body}</p>
              </div>
              <div className="bg-[#0F1520] border border-white/8 p-8">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-5">What MZM Delivers</div>
                <ul className="space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-gray-300 font-light border-b border-white/5 pb-3 last:border-0">
                      <span className="text-[#C4A04A] shrink-0 mt-0.5 text-xs">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/8 mt-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">Ready to discuss a specific project?</h2>
            <p className="text-gray-400 font-light">Tell us what you are looking for and we will respond within 48 hours.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
