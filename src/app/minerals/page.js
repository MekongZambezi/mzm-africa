import Link from 'next/link'
export const metadata = { title: 'Minerals | MZM Africa' }

const minerals = [
  {
    id: 'chrome',
    symbol: 'Cr',
    name: 'Chrome',
    status: 'Active',
    grade: '48–52% Cr₂O₃',
    region: 'Great Dyke Corridor',
    statusColor: 'bg-green-900/40 text-green-400',
    body: 'Zimbabwe\'s Great Dyke is one of the world\'s premier chrome belts, hosting an estimated 2.8 billion tonnes of chrome ore reserves. MZM facilitates investment in alluvial and hard-rock chrome wash plant operations targeting 48–52% Cr₂O₃ concentrate grade.',
    keyFacts: [
      'CIF China benchmark: $320–380/t for 48–50% Cr₂O₃',
      '50 TPH wash plant: $310K–$410K capital raise',
      'Est. ~2.6 month payback at full utilisation',
      '$48/t net margin at base case pricing',
      'Phase 1 offtake: Zimasco, Afrochine domestic smelters',
      'Phase 2: Toll smelting to ferrochrome',
    ],
    policy: 'Zimbabwe\'s February 2026 raw mineral export ban mandates domestic beneficiation. Chrome concentrate must now be processed to at least wash plant grade before export — creating immediate demand for wash plant capital.',
  },
  {
    id: 'gold',
    symbol: 'Au',
    name: 'Gold',
    status: 'Active',
    grade: 'SG 90%+ Doré',
    region: 'Zimbabwe Greenstone Belts',
    statusColor: 'bg-green-900/40 text-green-400',
    body: 'Zimbabwe\'s gold sector is experiencing a significant production uptick, driven by ASM formalisation, the ZMF gold cluster programme, and elevated spot prices. MZM facilitates investment in a hub-and-spoke processing model targeting multiple ASM producers.',
    keyFacts: [
      'FGR buying price: ~$144.87/g for SG 90%+ doré',
      'Hub-and-spoke: gravity + VAT leach processing',
      '~7.5 month payback (Base scenario)',
      'MMCZ commission: 0.875% of gross value',
      '10% royalty triggered at $5,000/oz spot',
      'RBZ currency split policy applies to all gold exports',
    ],
    policy: 'All gold in Zimbabwe must be sold through the Fidelity Gold Refinery (FGR). The ZMF gold cluster programme provides government-backed support for hub-and-spoke processing models targeting ASM producers.',
  },
  {
    id: 'copper',
    symbol: 'Cu',
    name: 'Copper',
    status: 'Pipeline',
    grade: '2.0–3.7% Cu',
    region: 'Magondi Belt, Mashonaland West',
    statusColor: 'bg-yellow-900/40 text-yellow-400',
    body: 'Zimbabwe\'s Magondi Belt hosts stratabound sediment-hosted copper sulphide and oxide mineralisation in Mashonaland West and Midlands. MZM is currently evaluating modular copper beneficiation opportunities in this corridor.',
    keyFacts: [
      'Antech-verified: 3.73% Cu (Sample P7839)',
      'Antech-verified: 2.45% Cu (Sample P7840)',
      'Modular SX-EW processing model under evaluation',
      'Sulphide vs oxide mineralogy: critical variable',
      'Metallurgical testwork required before capital commitment',
      'Base case planning grade: 2.0% Cu',
    ],
    policy: 'Copper falls under Zimbabwe\'s 2026 beneficiation mandate. Raw copper ore export is prohibited — minimum processing to copper cathode or concentrate is required for export.',
  },
  {
    id: 'nickel',
    symbol: 'Ni',
    name: 'Nickel',
    status: 'Pipeline',
    grade: 'Sulphide Deposits',
    region: 'Zimbabwe Nickel Belt',
    statusColor: 'bg-yellow-900/40 text-yellow-400',
    body: 'Zimbabwe\'s nickel belt hosts significant sulphide deposits historically mined by Bindura Nickel Corporation. The global transition to electric vehicles is driving renewed interest in battery-grade nickel supply chains, with Asian battery manufacturers actively seeking long-term supply relationships.',
    keyFacts: [
      'Battery-grade nickel demand driven by EV transition',
      'Asian OEM and battery manufacturer interest active',
      'Sulphide deposits require flotation processing',
      'Historical BNC operations provide geological reference',
      'Pipeline — active market intelligence gathering',
      'Investor IOIs being taken for early-stage exposure',
    ],
    policy: 'Nickel is covered under Zimbabwe\'s 2026 beneficiation mandate. Export requires minimum processing — creating an opportunity for modular flotation plant investment.',
  },
]

export default function Minerals() {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Mineral Focus</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">Four Commodities.<br /><span className="text-[#C4A04A] italic">Extraordinary Geology.</span></h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {minerals.map((m) => (
            <div key={m.id} id={m.id} className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="font-serif text-7xl font-bold text-[#C4A04A]/30 leading-none">{m.symbol}</div>
                  <div>
                    <h2 className="font-serif text-4xl font-bold">{m.name}</h2>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${m.statusColor}`}>{m.status}</span>
                      <span className="text-[10px] font-bold tracking-wider text-gray-500 border border-white/10 px-3 py-1">{m.grade}</span>
                      <span className="text-[10px] font-bold tracking-wider text-gray-500 border border-white/10 px-3 py-1">{m.region}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-light leading-relaxed mb-5">{m.body}</p>
                <div className="border-l-2 border-[#C4A04A]/40 pl-4 bg-[#0F1520] p-4">
                  <div className="text-xs font-black tracking-widest uppercase text-gray-500 mb-2">Policy Context</div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{m.policy}</p>
                </div>
              </div>
              <div className="bg-[#0F1520] border border-white/8 p-8">
                <div className="text-xs font-black tracking-widest uppercase text-gray-500 mb-5">Key Facts & Figures</div>
                <ul className="space-y-3">
                  {m.keyFacts.map((fact) => (
                    <li key={fact} className="flex gap-3 text-sm text-gray-300 font-light border-b border-white/5 pb-3 last:border-0">
                      <span className="text-[#C4A04A] shrink-0 mt-0.5">◆</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 text-center border-t border-white/8 mt-20">
          <h2 className="font-serif text-3xl font-bold mb-3">Interested in a specific opportunity?</h2>
          <p className="text-gray-400 font-light mb-8">We&apos;ll send you a confidential investment brief for the relevant commodity.</p>
          <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Request A Brief
          </Link>
        </div>
      </section>
    </>
  )
}
