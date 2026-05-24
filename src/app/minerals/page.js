import Link from 'next/link'
export const metadata = { title: 'Minerals | MZM Africa' }

const minerals = [
  {
    id: 'chrome',
    symbol: 'Cr',
    name: 'Chrome',
    status: 'Active — Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: '48–52% Cr₂O₃',
    region: 'Great Dyke Corridor, Zimbabwe',
    classification: 'Critical Mineral — 22 May 2026',
    body: "Zimbabwe's Great Dyke is one of the world's largest chrome belts. MZM's chrome project is live — title verified, assay confirmed, CAPEX modelled, and SPV structure in place. This is a functioning investment opportunity, not a pipeline item.",
    keyFacts: [
      'CIF China benchmark: $320–380/t for 48–50% Cr₂O₃',
      '50 TPH wash plant capital requirement: $310K–$410K',
      'Estimated payback: approximately 2.6 months at full utilisation',
      'Net margin: $48/t at base case pricing',
      'Domestic offtake: Zimasco and Afrochine smelters',
      'Export route: CIF China via Beira, Letter of Credit structure',
    ],
    policy: 'Chrome is declared a Critical Mineral under the 22 May 2026 Ministry of Mines announcement. The State holds mandatory minimum shareholding via designated SPVs. MZM structures all chrome investments within this framework. Investors seeking to participate outside this framework will not achieve regulatory clearance.',
    image: '/images/mining-processing.jpg',
  },
  {
    id: 'lithium',
    symbol: 'Li',
    name: 'Lithium',
    status: 'Active — Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: 'Spodumene — Hard Rock',
    region: 'Zimbabwe Lithium Belt',
    classification: 'Critical Mineral — 22 May 2026',
    body: 'Zimbabwe holds significant lithium resources concentrated in hard rock spodumene deposits. Global battery demand — driven by electric vehicle manufacturing concentrated in Asia — is the structural demand driver. MZM\'s lithium project is live and structured for compliant foreign investment under the Critical Minerals framework.',
    keyFacts: [
      'Battery-grade spodumene: 6% Li₂O concentrate target',
      'Asian EV supply chain demand: primary offtake market',
      'State SPV co-investment: structured and accounted for',
      'Minister of Mines prior approval: required and in progress',
      'No raw lithium export: mandatory concentrate processing before export',
      'Title verified. CAPEX confirmed. Structure in place.',
    ],
    policy: 'Lithium is declared a Critical Mineral under the 22 May 2026 announcement. Raw lithium export is prohibited without a Minister-approved conditional transitional plan. All exploitation requires State SPV mandatory minimum shareholding. MZM navigates this framework on behalf of investors.',
    image: '/images/mining-site-1.jpg',
  },
  {
    id: 'gold',
    symbol: 'Au',
    name: 'Gold',
    status: 'Large-Scale Foreign Investment Only',
    statusColor: 'bg-yellow-900/40 text-yellow-500',
    grade: 'Large-Scale: Above 20kg/month',
    region: 'Zimbabwe Greenstone Belts',
    classification: 'Strategic Mineral — 22 May 2026',
    body: 'Following the Ministry of Mines policy statement of 22 May 2026, the small and medium scale gold mining sector is reserved exclusively for Zimbabwean citizens and wholly Zimbabwean-owned entities. Foreign participation is legally permissible only in large-scale operations that exceed 20 kilograms per month in production and $15 million in capital investment.',
    keyFacts: [
      'Small/medium scale gold: reserved for Zimbabwean citizens only',
      'Foreign participation threshold: above 20kg/month AND above $15M capital',
      'Deadline for foreign operators at small scale to transition or exit: 1 January 2027',
      'Proxy and nominee structures: explicitly unlawful under the policy',
      'Large-scale gold: open to foreign investment — structured correctly',
      'All gold marketing: through Fidelity Gold Refinery, mandatory',
    ],
    policy: 'MZM does not facilitate foreign investment in small or medium scale gold operations. Any investor seeking gold exposure through MZM must qualify for large-scale classification. MZM structures only compliant large-scale gold participation and will confirm investor qualification before any engagement proceeds.',
    image: '/images/mining-site-2.jpg',
  },
  {
    id: 'copper',
    symbol: 'Cu',
    name: 'Copper',
    status: 'Pipeline — Not Yet Investor Ready',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    grade: '2.0–3.7% Cu (Antech verified)',
    region: 'Magondi Belt, Mashonaland West',
    classification: 'Critical Mineral — 22 May 2026',
    body: 'Zimbabwe\'s Magondi Belt hosts stratabound sediment-hosted copper mineralisation in Mashonaland West. Verified assay results confirm commercial-grade copper across multiple samples. MZM is progressing metallurgical testwork and SPV structuring. This is a pipeline project — substantive investor engagement will open when it is investor-ready.',
    keyFacts: [
      'Antech-verified: 3.73% Cu (Sample P7839)',
      'Antech-verified: 2.45% Cu (Sample P7840)',
      'Declared Critical Mineral: State SPV co-investment required',
      'Metallurgical testwork: in progress',
      'Processing route: modular SX-EW under evaluation',
      'Investor-ready timeline: to be confirmed',
    ],
    policy: 'Copper is declared a Critical Mineral. Raw copper export is prohibited. Processing to concentrate or cathode is required before export. State SPV mandatory shareholding applies. MZM will not take investor capital into this project until it meets investor-ready standards.',
    image: '/images/mining-conveyor.jpg',
  },
]

export default function Minerals() {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Mineral Projects</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Current Projects<br />
            <span className="text-[#C4A04A] italic">and Policy Position</span>
          </h1>
          <p className="text-gray-400 font-light max-w-2xl text-lg leading-relaxed">
            All projects are structured under Zimbabwe's current regulatory framework. Status, legal classification, and investor eligibility are stated plainly for each commodity.
          </p>
        </div>
      </section>

      {/* Policy summary bar */}
      <div className="bg-[#0F1520] border-b border-[#C4A04A]/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6 items-center">
          <span className="text-[#C4A04A] text-xs font-black tracking-widest uppercase">22 May 2026 Policy Update</span>
          <span className="text-gray-400 text-xs font-light">Chrome, lithium, copper, nickel and PGMs declared Critical Minerals — State SPV co-investment mandatory.</span>
          <span className="text-gray-400 text-xs font-light">Small/medium scale gold reserved for Zimbabwean citizens — effective immediately.</span>
          <Link href="/news" className="text-[#C4A04A] text-xs font-bold tracking-wider uppercase hover:underline ml-auto">Read Full Policy</Link>
        </div>
      </div>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {minerals.map((m, idx) => (
            <div key={m.id} id={m.id}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="font-serif text-7xl font-bold text-[#C4A04A]/25 leading-none">{m.symbol}</div>
                    <div>
                      <h2 className="font-serif text-4xl font-bold">{m.name}</h2>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${m.statusColor}`}>{m.status}</span>
                        <span className="text-[10px] font-bold text-[#C4A04A] border border-[#C4A04A]/30 px-3 py-1 tracking-wider">{m.classification}</span>
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

                <div className={idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div
                    className="h-72 md:h-full min-h-[280px] border border-white/10"
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
                          <span className="text-[#C4A04A] shrink-0 mt-0.5 text-xs">—</span>
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

        <div className="max-w-7xl mx-auto px-6 pt-20 text-center border-t border-white/8 mt-24">
          <h2 className="font-serif text-3xl font-bold mb-3">Interested in chrome or lithium?</h2>
          <p className="text-gray-400 font-light mb-8 max-w-xl mx-auto">Both projects are investor-ready. Contact MZM to receive the relevant investment brief under NDA.</p>
          <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Request An Investment Brief
          </Link>
        </div>
      </section>
    </>
  )
}
