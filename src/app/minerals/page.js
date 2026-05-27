import Link from 'next/link'
export const metadata = { title: 'Minerals | MZM Africa' }

const activeMinerals = [
  {
    id: 'chrome',
    symbol: 'Cr',
    name: 'Chrome',
    tier: 'Critical Mineral — 22 May 2026',
    status: 'Active — Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: '48–52% Cr₂O₃',
    region: 'Great Dyke Corridor, Zimbabwe',
    body: "The Great Dyke is the world's largest chromite resource — a 550-kilometre layered mafic intrusion carrying Cr₂O₃ grades of 44–52% across consistently mineable seam widths. Zimbabwe's in-situ chromite resource is estimated at 10.8 billion tonnes. The February 2026 raw mineral export ban redirected all unbeneficiated ore to domestic processing, creating immediate structural demand for wash plant and concentrator investment that the market has not yet fully met. MZM's chrome project is live — title verified, assay confirmed, CAPEX modelled, and SPV structure in place.",
    keyFacts: [
      'CIF China benchmark: $320–380/t for 48–50% Cr₂O₃',
      '50 TPH wash plant capital requirement: $310K–$410K',
      'Estimated payback: approximately 2.6 months at full utilisation',
      'Net margin: $48/t at base case pricing',
      'Domestic offtake: Zimasco and Afrochine smelters',
      'Export route: CIF China via Beira, Letter of Credit structure',
    ],
    policy: 'Chrome is declared a Critical Mineral under the 22 May 2026 Ministry of Mines announcement. The State holds mandatory minimum shareholding via designated SPVs. Raw chrome export is prohibited without Minister-approved conditional transitional plan. MZM structures all chrome investments within this framework.',
    image: '/images/mining-processing.jpg',
  },
  {
    id: 'lithium',
    symbol: 'Li',
    name: 'Lithium',
    tier: 'Critical Mineral — 22 May 2026',
    status: 'Active — Investor Ready',
    statusColor: 'bg-green-900/40 text-green-400',
    grade: 'Spodumene — Hard Rock',
    region: 'Zimbabwe Lithium Belt',
    body: "Zimbabwe hosts three Tier 1 hard-rock lithium deposits — Bikita, Arcadia, and Kamativi — carrying spodumene, petalite, and lepidolite mineralisation across Masvingo, Harare, and Matabeleland North provinces. Arcadia holds an indicated resource exceeding 40 million tonnes at 1.08% Li₂O. Asian demand for battery-grade lithium carbonate and spodumene concentrate is structurally outpacing supply. Zimbabwe holds the largest lithium deposits on the continent. MZM's lithium project is live and structured for compliant foreign investment under the Critical Minerals framework.",
    keyFacts: [
      'Battery-grade spodumene: 6% Li₂O concentrate target',
      'Arcadia indicated resource: 40 million tonnes at 1.08% Li₂O',
      'Asian EV supply chain demand: primary offtake market',
      'State SPV co-investment: structured and accounted for',
      'Minister of Mines prior approval: required and in progress',
      'Title verified. CAPEX confirmed. Structure in place.',
    ],
    policy: 'Lithium is declared a Critical Mineral under the 22 May 2026 announcement. Raw lithium export is prohibited without a Minister-approved conditional transitional plan. All exploitation requires State SPV mandatory minimum shareholding. MZM navigates this framework on behalf of investors.',
    image: '/images/mining-site-1.jpg',
  },
  {
    id: 'gold',
    symbol: 'Au',
    name: 'Gold',
    tier: 'Strategic Mineral — 22 May 2026',
    status: 'Large-Scale Foreign Investment Only',
    statusColor: 'bg-yellow-900/40 text-yellow-500',
    grade: 'Large-Scale: Above 20kg/month',
    region: 'Zimbabwe Greenstone Belts',
    body: "Zimbabwe's Archean greenstone belts host one of Africa's most structurally complex orogenic gold systems — over 4,000 registered claims across the Harare, Midlands, and Matabeleland provinces. Gold is declared a Strategic Mineral under the May 2026 instruments. Following the Ministry of Mines policy statement of 22 May 2026, the small and medium scale gold mining sector is reserved exclusively for Zimbabwean citizens and wholly Zimbabwean-owned entities. Foreign participation is legally permissible only in large-scale operations that exceed 20 kilograms per month in production and USD 15 million in capital investment.",
    keyFacts: [
      'Small/medium scale gold: reserved for Zimbabwean citizens only',
      'Foreign participation threshold: above 20kg/month AND above USD 15M capital',
      'Deadline for foreign operators at small scale to transition: 1 January 2027',
      'Proxy and nominee structures: explicitly unlawful under the policy',
      'Large-scale gold: open to foreign investment when structured correctly',
      'All gold marketing: through Fidelity Gold Refinery, mandatory',
    ],
    policy: 'MZM does not facilitate foreign investment in small or medium scale gold operations. Any investor seeking gold exposure through MZM must qualify for large-scale classification. MZM structures only compliant large-scale gold participation and confirms investor qualification before engagement proceeds.',
    image: '/images/mining-site-2.jpg',
  },
  {
    id: 'copper',
    symbol: 'Cu',
    name: 'Copper',
    tier: 'Critical Mineral — 22 May 2026',
    status: 'Pipeline — Not Yet Investor Ready',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    grade: '2.0–3.7% Cu (Antech verified)',
    region: 'Magondi Belt, Mashonaland West',
    body: "Zimbabwe's Magondi Belt hosts stratabound sediment-hosted copper mineralisation in Mashonaland West. Verified assay results confirm commercial-grade copper across multiple samples. The Magondi Belt's historically productive Alaska, Mangula, and Mhangura deposits established metallurgical and processing precedent for the belt. Additional porphyry and skarn copper targets in the Zambezi Belt remain largely undrilled to modern standards. MZM is progressing metallurgical testwork and SPV structuring. This is a pipeline project — substantive investor engagement opens when it is investor-ready.",
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

const pipelineMinerals = [
  {
    symbol: 'PGM',
    name: 'Platinum Group Metals',
    tier: 'Critical Mineral — 22 May 2026',
    status: 'Pipeline',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    region: 'Great Dyke, Zimbabwe',
    body: "Zimbabwe is the world's second-largest PGM producer. The Great Dyke's Main Sulphide Zone averages 3.5–4.5 g/t combined PGE — platinum, palladium, rhodium, ruthenium, iridium, and osmium. Ruthenium is independently declared a Critical Mineral. Palladium's sustained premium in autocatalyst and electronics markets makes Zimbabwe's palladium-dominant profile commercially distinct. Significant undeveloped strike remains open beyond current producer footprints.",
    keyFacts: [
      'MSZ grade: 3.5–4.5 g/t combined PGE',
      'Palladium-dominant profile: premium over platinum sustained',
      'Ruthenium: independently declared Critical Mineral',
      'State SPV co-investment: mandatory',
      'Undeveloped Great Dyke strike: significant entry points remain',
    ],
  },
  {
    symbol: 'Ni',
    name: 'Nickel',
    tier: 'Critical Mineral — 22 May 2026',
    status: 'Pipeline',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    region: 'Zimbabwe Nickel Belt',
    body: 'Epoch, Trojan, Shangani, and Hunters Road define Zimbabwe\'s nickel belt — pentlandite-pyrrhotite sulphide mineralisation averaging 0.6–1.2% Ni with conventional processing characteristics suited to Class 1 nickel production. Chinese, South Korean, and Vietnamese battery manufacturers are actively seeking upstream supply security in stable African jurisdictions.',
    keyFacts: [
      'Average grade: 0.6–1.2% Ni',
      'Mineralisation: pentlandite-pyrrhotite magmatic sulphide',
      'Primary demand: EV battery cathode supply chain',
      'Key deposits: Epoch, Trojan, Shangani, Hunters Road',
      'State SPV co-investment: mandatory',
    ],
  },
  {
    symbol: 'Mn',
    name: 'Manganese',
    tier: 'Critical Mineral — 22 May 2026',
    status: 'Pipeline',
    statusColor: 'bg-[#C4A04A]/10 text-[#C4A04A]',
    region: 'Gwanda & Insiza, Matabeleland South',
    body: 'Near-surface oxide manganese in the Gwanda and Insiza greenstone sequences is amenable to low-cost open-pit extraction. Global manganese demand is bifurcating — steelmaking alloy demand remains the primary driver while battery-grade high-purity manganese sulphate is establishing a premium market for EV cathode producers across Asia.',
    keyFacts: [
      'Deposit style: near-surface oxide enrichment',
      'Dual demand: steelmaking alloy and battery-grade HPMS',
      'Processing: amenable to low-strip open-pit',
      'Asian EV cathode demand: growing premium market',
      'State SPV co-investment: mandatory',
    ],
  },
]

const evaluationMinerals = [
  {
    symbol: 'REE',
    name: 'Rare Earth Elements',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Manicaland Province, Zimbabwe',
    desc: 'Dorowa, Shawa, and Chishanya carbonatite complexes carry light rare earth mineralisation — cerium, lanthanum, and neodymium — directly relevant to permanent magnet manufacturing for wind turbines and EV motors. Among the most underexplored carbonatite REE provinces in Africa.',
  },
  {
    symbol: 'Gr',
    name: 'Graphite',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Multiple Provinces, Zimbabwe',
    desc: 'Crystalline flake graphite occurrences in metamorphic sequences. Critical battery anode material with global supply currently dominated by China — creating structural demand for stable African sources from Asian battery manufacturers.',
  },
  {
    symbol: 'W',
    name: 'Tungsten',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Eastern Highlands, Zimbabwe',
    desc: 'Skarn and vein-type tungsten mineralisation in the eastern highlands. High-value, low-occurrence Critical Mineral with applications in cutting tools, armaments, electronics, and aerospace manufacturing. Demand concentrated among industrialised economies.',
  },
  {
    symbol: 'Nb',
    name: 'Niobium',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Carbonatite Complexes, Zimbabwe',
    desc: 'Niobium mineralisation in carbonatite and pegmatite systems. Global supply dominated by a single Brazilian producer — creating strategic interest from steel manufacturers, aerospace companies, and superconductor producers.',
  },
  {
    symbol: 'Sb',
    name: 'Antimony',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Greenstone Belts, Zimbabwe',
    desc: 'Hydrothermal vein antimony in the greenstone belts, historically produced in association with gold. Chinese export restrictions in 2024 created urgent demand from Western and Asian industrial buyers for alternative sources.',
  },
  {
    symbol: 'Ta',
    name: 'Tantalum',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Bikita & Kamativi Pegmatites',
    desc: 'Columbite-tantalite and wodginite in Bikita and Kamativi pegmatite systems, in direct association with lithium mineralisation. Critical input for aerospace, medical, and electronics capacitor manufacturing.',
  },
  {
    symbol: 'U',
    name: 'Uranium',
    tier: 'Critical Mineral — 22 May 2026',
    region: 'Multiple Provinces, Zimbabwe',
    desc: 'Zimbabwe holds uranium mineralisation across several geological settings. Declared Critical Mineral under the May 2026 instruments. Investment subject to additional international safeguards and sector-specific regulatory requirements.',
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
            Zimbabwe's Critical Minerals.<br />
            <span className="text-[#C4A04A] italic">Every one that matters.</span>
          </h1>
          <p className="text-gray-400 font-light max-w-2xl text-lg leading-relaxed">
            On 22 May 2026, Zimbabwe's Ministry of Mines formally classified the country's mineral endowment into three investment tiers. All projects are structured under the current regulatory framework. Status, legal classification, and investor eligibility are stated plainly for each commodity.
          </p>
        </div>
      </section>

      {/* Policy summary bar */}
      <div className="bg-[#0F1520] border-b border-[#C4A04A]/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6 items-center">
          <span className="text-[#C4A04A] text-xs font-black tracking-widest uppercase">22 May 2026 — Ministry of Mines</span>
          <span className="text-gray-400 text-xs font-light">14 Critical Minerals declared — State SPV co-investment mandatory for all foreign participation.</span>
          <span className="text-gray-400 text-xs font-light">Small/medium scale gold reserved for Zimbabwean citizens — effective immediately.</span>
          <Link href="/news" className="text-[#C4A04A] text-xs font-bold tracking-wider uppercase hover:underline ml-auto">Read Full Policy</Link>
        </div>
      </div>

      {/* ACTIVE MANDATES */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-px bg-green-400" />
            <span className="text-green-400 text-xs font-black tracking-widest uppercase">Active Mandates — Investor Ready</span>
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
        </div>
      </section>

      {/* PIPELINE */}
      <section className="py-20 bg-[#0A0E18] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-black tracking-widest uppercase">Pipeline — Under Active Development</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Declared Critical Minerals.<br />
            <span className="text-[#C4A04A] italic">Structured entry when investor-ready.</span>
          </h2>
          <p className="text-gray-400 font-light mb-14 max-w-2xl">
            All five commodities below are formally declared Critical Minerals under Zimbabwe's May 2026 instruments. Foreign investment is open through the State SPV framework. MZM will not accept investor capital until each mandate meets investor-ready standards.
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
                      <span className="text-[#C4A04A] shrink-0">—</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVALUATION / TRACKED */}
      <section className="py-20 bg-[#080C14] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-gray-500" />
            <span className="text-gray-500 text-xs font-black tracking-widest uppercase">Under Evaluation — Tracked Against Confirmed Market Demand</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Additional Declared<br />
            <span className="text-[#C4A04A] italic">Critical Minerals.</span>
          </h2>
          <p className="text-gray-400 font-light mb-14 max-w-2xl">
            Every commodity listed below is formally declared a Critical Mineral under Zimbabwe's May 2026 Ministry of Mines instruments. Each has a documented deposit, an established global market, and a defined path to structure. MZM tracks all of them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {evaluationMinerals.map((m) => (
              <div key={m.symbol} className="border border-white/8 p-7 hover:border-[#C4A04A]/30 transition-colors">
                <div className="font-serif text-4xl font-bold text-[#C4A04A]/20 leading-none mb-2">{m.symbol}</div>
                <h3 className="font-serif text-xl font-semibold mb-1">{m.name}</h3>
                <div className="text-[10px] text-[#C4A04A] font-bold tracking-wider mb-3">{m.tier}</div>
                <div className="text-[10px] text-gray-600 font-medium tracking-wide mb-3 uppercase">{m.region}</div>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{m.desc}</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-600 px-2 py-1 border border-white/8">Under Evaluation</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#0F1520] border border-white/8">
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-3xl">
              Every commodity in this portfolio is formally classified under Zimbabwe's May 2026 Ministry of Mines instruments. Two mandates are investor-ready today. The pipeline behind them is deliberate, not speculative — every commodity tracked here has a confirmed deposit, an established market, and a defined path to structure.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-white/8">
        <h2 className="font-serif text-3xl font-bold mb-3">Interested in chrome or lithium?</h2>
        <p className="text-gray-400 font-light mb-8 max-w-xl mx-auto">Both projects are investor-ready. Contact MZM to receive the relevant investment brief under NDA.</p>
        <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
          Request An Investment Brief
        </Link>
      </div>
    </>
  )
}
