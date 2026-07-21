
import Link from 'next/link'
export const metadata = { title: 'Minerals | MZM Africa' }

const activeMinerals = [
  {
    id: 'chrome',
    symbol: 'Cr',
    name: 'Chrome',
    tier: 'Critical Mineral · 22 May 2026',
    status: 'Active · Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: 'Chrome Concentrate',
    region: 'Zimbabwe',
    body: "Zimbabwe holds one of the world's most significant chromite endowments, and the February 2026 raw mineral export regulations redirected unbeneficiated ore to domestic processing, creating structural demand for wash plant and concentrator investment. MZM's chrome mandate is live: title verified, assay confirmed, CAPEX modelled, and SPV structure in place. Project specifics, including location, grade data and financial models, are disclosed to qualified investors under NDA.",
    keyFacts: [
      'SPV structured and title verified',
      'Independent assay confirmed',
      'CAPEX model complete',
      'Domestic beneficiation and export offtake routes established',
      'Full project detail available under NDA',
    ],
    policy: 'Chrome is declared a Critical Mineral under the 22 May 2026 Ministry of Mines announcement. The State holds mandatory minimum shareholding via designated SPVs. Raw chrome export is prohibited without a Minister-approved conditional transitional plan. MZM structures all chrome investments within this framework.',
    image: '/images/mining-processing.jpg',
  },
  {
    id: 'lithium',
    symbol: 'Li',
    name: 'Lithium',
    tier: 'Critical Mineral · 22 May 2026',
    status: 'Active · Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: 'Hard Rock Lithium',
    region: 'Zimbabwe',
    body: "Zimbabwe holds the largest lithium deposits in Africa, and Asian demand for battery-grade lithium products is structurally outpacing supply. MZM's lithium mandate is live and structured for compliant foreign investment under the Critical Minerals framework: title verified, CAPEX confirmed, and State SPV co-investment accounted for. Project specifics, including location, resource data and financial models, are disclosed to qualified investors under NDA.",
    keyFacts: [
      'SPV structured and title verified',
      'CAPEX model complete',
      'State SPV co-investment structured and accounted for',
      'Asian battery supply chain: primary offtake market',
      'Full project detail available under NDA',
    ],
    policy: 'Lithium is declared a Critical Mineral under the 22 May 2026 announcement. Raw lithium export is prohibited without a Minister-approved conditional transitional plan. All exploitation requires State SPV mandatory minimum shareholding. MZM navigates this framework on behalf of investors.',
    image: '/images/mining-site-1.jpg',
  },
  {
    id: 'gold',
    symbol: 'Au',
    name: 'Gold',
    tier: 'Strategic Mineral · 22 May 2026',
    status: 'Active · Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: 'Large-Scale Structures Only',
    region: 'Zimbabwe',
    body: "Gold is declared a Strategic Mineral under the May 2026 instruments. Following the Ministry of Mines policy statement of 22 May 2026, the small and medium scale gold mining sector is reserved exclusively for Zimbabwean citizens and wholly Zimbabwean-owned entities. Foreign participation is legally permissible only in large-scale operations exceeding the prescribed production and capital thresholds. MZM's gold mandate is live and structured on that basis: SPV structured, title verified, CAPEX confirmed. Project specifics are disclosed to qualified investors under NDA.",
    keyFacts: [
      'Small and medium scale gold: reserved for Zimbabwean citizens',
      'Foreign participation: large-scale operations only',
      'SPV structured, title verified, CAPEX confirmed',
      'All gold marketing through Fidelity Gold Refinery, mandatory',
      'Full project detail available under NDA',
    ],
    policy: 'MZM does not facilitate foreign investment in small or medium scale gold operations. Any investor seeking gold exposure through MZM must qualify for large-scale classification. MZM structures only compliant large-scale gold participation and confirms investor qualification before engagement proceeds.',
    image: '/images/mining-site-2.jpg',
  },
]

const pipelineMinerals = [
  {
    symbol: 'Cu',
    name: 'Copper',
    tier: 'Critical Mineral · 22 May 2026',
    status: 'Pipeline',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    region: 'Zimbabwe',
    body: 'Copper opportunities are under commercial evaluation, aligned with Asian refined-metal demand. Copper is a declared Critical Mineral: raw export is prohibited and processing is required before export, with State SPV mandatory shareholding applying. MZM will not take investor capital into a copper structure until it meets investor-ready standards.',
    keyFacts: [
      'Declared Critical Mineral: State SPV co-investment required',
      'Commercial evaluation in progress',
      'Processing routes under assessment',
      'Investor-ready timeline: to be confirmed',
    ],
  },
  {
    symbol: 'Qz',
    name: 'Quartz',
    tier: 'Recently Added to Mandate',
    status: 'Pipeline',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    region: 'Zimbabwe',
    body: 'High-purity quartz is under commercial and market assessment, recently added to MZM\'s mandate. Demand for high-purity quartz is driven by semiconductor, solar and specialty glass manufacturing across Asian industrial markets. MZM will open investor engagement when the mandate meets investor-ready standards.',
    keyFacts: [
      'Recently added to MZM\'s mandate',
      'Commercial and market assessment in progress',
      'Demand driven by semiconductor and solar manufacturing',
      'Investor-ready timeline: to be confirmed',
    ],
  },
  {
    symbol: '+',
    name: 'Other Minerals',
    tier: 'Across Zimbabwe\'s Declared Mineral Base',
    status: 'On Request',
    statusColor: 'bg-white/5 text-gray-400',
    region: 'Zimbabwe',
    body: 'Whatever commodity an investor is seeking, MZM sources, verifies and structures access to it across Zimbabwe\'s declared mineral base, under the same compliant SPV framework applied to every active mandate. Enquiries are assessed against title availability, market demand and regulatory classification.',
    keyFacts: [
      'Sourcing and verification on investor request',
      'Same compliant SPV framework as active mandates',
      'Assessed against title availability and market demand',
      'Contact MZM to open a commodity-specific conversation',
    ],
  },
]

export default function Minerals() {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Declared. Classified. Open for Investment.</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            The minerals MZM works across.<br />
            <span className="text-[#C4A04A] italic">Structured. Verified. Compliant.</span>
          </h1>
          <p className="text-gray-400 font-light max-w-2xl text-lg leading-relaxed">
            MZM's mandate covers chrome, lithium, gold, copper and quartz, with further minerals structured on investor request. Every mandate is built under Zimbabwe's current regulatory framework. Status, legal classification, and investor eligibility are stated plainly for each commodity.
          </p>
        </div>
      </section>

      {/* Policy summary bar */}
      <div className="bg-[#0F1520] border-b border-[#C4A04A]/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6 items-center">
          <span className="text-[#C4A04A] text-xs font-black tracking-widest uppercase">22 May 2026 · Ministry of Mines</span>
          <span className="text-gray-400 text-xs font-light">14 Critical Minerals declared. State SPV co-investment mandatory for all foreign participation.</span>
          <span className="text-gray-400 text-xs font-light">Small and medium scale gold reserved for Zimbabwean citizens, effective immediately.</span>
          <Link href="/news" className="text-[#C4A04A] text-xs font-bold tracking-wider uppercase hover:underline ml-auto">Read Full Policy</Link>
        </div>
      </div>

      {/* ACTIVE MANDATES */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-px bg-green-400" />
            <span className="text-green-400 text-xs font-black tracking-widest uppercase">Active Mandates · Investor Ready</span>
          </div>
          <div className="space-y-28">
            {activeMinerals.map((m, idx) => (
              <div key={m.id} id={m.id}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="flex items-start gap-5 mb-6">
                      <div className="font-serif text-7xl font-bold text-[#C4A04A]/25 leading-none">{m.symbol}</div>
                      <div>
                        <h2 className="font-serif text-4xl font-bold">{m.name}</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${m.statusColor}`}>{m.status}</span>
                          <span className="text-[10px] font-bold text-[#C4A04A] border border-[#C4A04A]/30 px-3 py-1 tracking-wider">{m.tier}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="text-[11px] text-gray-500 border border-white/10 px-3 py-1">{m.grade}</span>
                      <span className="text-[11px] text-gray-500 border border-white/10 px-3 py-1">{m.region}</span>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed mb-5">{m.body}</p>
                    <div className="border-l-2 border-[#C4A04A]/50 pl-4 py-1 bg-[#0F1520] px-5 py-4">
                      <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-2">Policy Position</div>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{m.policy}</p>
                    </div>
                  </div>

                  <div className={`flex flex-col ${idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div
                      className="flex-1 min-h-[280px] border border-white/10"
                      style={{
                        backgroundImage: `url(${m.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="h-full bg-[#080C14]/40" />
                    </div>
                    <div className="bg-[#0F1520] border border-white/8 border-t-0 p-7">
                      <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-4">Key Facts</div>
                      <ul className="space-y-3">
                        {m.keyFacts.map((fact) => (
                          <li key={fact} className="flex gap-3 text-sm text-gray-300 font-light border-b border-white/5 pb-3 last:border-0">
                            <span className="text-[#C4A04A] shrink-0 mt-0.5 text-xs">·</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="py-20 bg-[#0A0E18] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-black tracking-widest uppercase">Pipeline and On Request</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            The pipeline behind the mandates.<br />
            <span className="text-[#C4A04A] italic">Structured entry when investor-ready.</span>
          </h2>
          <p className="text-gray-400 font-light mb-14 max-w-2xl">
            Copper and quartz are progressing through commercial evaluation, and MZM structures access to any other commodity across Zimbabwe's declared mineral base on investor request. MZM will not accept investor capital until a mandate meets investor-ready standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
            {pipelineMinerals.map((m) => (
              <div key={m.symbol} className="bg-[#0A0E18] p-8 hover:bg-[#0D1320] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="font-serif text-5xl font-bold text-[#C4A04A]/30 leading-none">{m.symbol}</div>
                  <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${m.statusColor}`}>{m.status}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-1">{m.name}</h3>
                <div className="text-[10px] text-[#C4A04A] font-bold tracking-wider mb-4">{m.tier}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-5">{m.body}</p>
                <ul className="space-y-2 border-t border-white/8 pt-4">
                  {m.keyFacts.map((fact) => (
                    <li key={fact} className="flex gap-2 text-xs text-gray-500 font-light">
                      <span className="text-[#C4A04A] shrink-0">·</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-white/8">
        <h2 className="font-serif text-3xl font-bold mb-3">Interested in chrome, lithium or gold?</h2>
        <p className="text-gray-400 font-light mb-8 max-w-xl mx-auto">All three mandates are investor-ready. Contact MZM to receive the relevant investment brief under NDA.</p>
        <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
          Request An Investment Brief
        </Link>
      </div>
    </>
  )
}
