import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'
import { practices } from '../../lib/practices'

export const metadata = {
  title: 'What We Do | MZM Africa',
  description: 'Investment facilitation into Zimbabwe, export and market access, equipment and energy sourcing, and market-entry advisory, across five sectors.',
}

const capabilities = [
  {
    num: '01',
    name: 'Investment Facilitation into Zimbabwe',
    need: 'Asian investors see opportunity in Zimbabwe but face unfamiliar rules, unverified sellers and new requirements to process minerals and produce in the country. ZIDA approved over USD 3 billion of investment in the first half of 2026, and its focus is now on approvals that become operating projects.',
    capability: [
      'Opportunity sourcing across five sectors, matched to the investor’s mandate',
      'Title, ownership, licence and counterparty checks with the relevant Zimbabwean authority',
      'Transaction structuring under the reserved-sector rules, the processing requirements and the critical minerals framework',
      'Preparation of ZIDA investment licence and Special Economic Zone applications, filed in the investor’s name with licensed counsel',
      'Site, partner and supplier introductions',
      'Support after licensing, through construction and commissioning',
    ],
    impact: 'Investors reach ZIDA with a complete, compliant project, and deal with one accountable team from first meeting to operation.',
  },
  {
    num: '02',
    name: 'Export and Market Access: Zimbabwe to Asia',
    need: 'In June 2026, five mineral lines made up 86.8% of Zimbabwe’s goods exports and three buyers took 92.3%. Vietnam imported 1.71 million tonnes of cotton in 2025 with no significant African supplier, and tobacco is still the only established Zimbabwean export to Vietnam.',
    capability: [
      'Buyer identification and introductions: spinning mills, tobacco manufacturers, leather and footwear makers, nut processors and food importers',
      'Producer verification: registration, capacity, quality and certification',
      'Product-by-product checks of Vietnamese import rules, including plant health, food safety and the raw tobacco tariff quota',
      'Export documentation coordinated with licensed Zimbabwean clearing agents',
      'Support for the official plant health process that opens Vietnam to each fresh fruit',
    ],
    impact: 'Zimbabwean producers reach new Asian buyers. Asian buyers secure verified supply, with documentation in order before the first shipment.',
  },
  {
    num: '03',
    name: 'Equipment, Technology and Energy Sourcing',
    need: 'Power and equipment decide whether a licensed project operates. Government has directed that new smelting capacity and large mines provide their own power, and rules gazetted in July 2026 let own-use plants between 100 kW and 10 MW register rather than apply for a licence.',
    capability: [
      'Captive solar and battery storage sourcing for mines, processors and factories',
      'Processing machinery for minerals, agro-processing, textiles and leather',
      'Supplier verification, technical specifications and procurement documents',
      'Introductions to licensed power developers',
      'Coordination of ZERA registration and licensing with the operator',
    ],
    impact: 'Power and equipment are specified, sourced and verified before operations begin.',
  },
  {
    num: '04',
    name: 'Market Entry and Regulatory Advisory',
    need: 'Zimbabwe’s rules changed substantially in 2026: critical minerals, raw export controls, a new industrial policy and energy reforms. Vietnamese investors must also register outward investment at home, and that registration requires documents from the host country.',
    capability: [
      'Sector entry briefings on regulation, incentives, labour and operating conditions',
      'Reserved-sector and ownership analysis under SI 215 of 2025 and the Finance Act',
      'A Zimbabwe-side document pack prepared for Vietnam’s outward investment registration (Decree 103/2026) and foreign exchange registration (Circular 34/2026)',
      'Institutional engagement through official channels: ZIDA, ZimTrade, the sector ministries, VCCI and VIETRADE',
      'Coordination with the client’s legal and tax advisers, and with licensed counsel in Zimbabwe',
    ],
    impact: 'Investment decisions are made on current rules, and approvals in both countries are prepared together.',
  },
]

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Four capabilities. Five sectors."
        accent="One accountable team."
        lead="MZM delivers four capabilities: investment facilitation into Zimbabwe, export and market access for Zimbabwean producers, equipment and energy sourcing, and market-entry advisory. We apply them across mining, agriculture, energy, manufacturing, and tourism and hospitality, with one verification standard and one team accountable in Hanoi and in Zimbabwe."
        image="/images/zimbabwe-landscape.jpg"
      />

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {capabilities.map((c) => (
            <article key={c.num} id={`capability-${c.num}`} className="border border-white/10 bg-[#0A0E18] grid grid-cols-1 lg:grid-cols-12 scroll-mt-24">
              <div className="lg:col-span-4 p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="font-serif text-5xl font-bold text-[#C4A04A]/40 mb-4">{c.num}</div>
                <h2 className="font-serif text-3xl font-semibold leading-snug mb-6">{c.name}</h2>
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">The Market Need</div>
                <p className="text-gray-300 font-light leading-relaxed text-sm">{c.need}</p>
              </div>
              <div className="lg:col-span-8 p-10 flex flex-col">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4">The Capability</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {c.capability.map((x) => (
                    <li key={x} className="flex gap-3 text-gray-200 font-light leading-relaxed"><span className="text-[#C4A04A] shrink-0">—</span>{x}</li>
                  ))}
                </ul>
                <div className="border-l-2 border-[#C4A04A] bg-[#C4A04A]/5 px-6 py-4">
                  <div className="text-[10px] font-black tracking-widest uppercase text-[#C4A04A] mb-1">Client Impact</div>
                  <p className="text-white font-light">{c.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Our Sectors</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Applied in <span className="text-[#C4A04A] italic">five sectors.</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {practices.map((p) => (
              <Link key={p.slug} href={p.href} className="group bg-[#080C14] p-7 hover:bg-[#0D1320] transition-colors">
                <div className="font-serif text-2xl font-bold text-[#C4A04A]/50 mb-3">{p.num}</div>
                <div className="font-serif text-xl font-semibold leading-snug mb-3 group-hover:text-[#C4A04A] transition-colors">{p.title}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-2">Discuss a mandate.</h2>
            <p className="text-gray-400 font-light">Tell us the sector, the objective and the timeline. We reply within 48 hours.</p>
          </div>
          <Link href="/contact?type=consultation" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">Schedule an Executive Consultation</Link>
        </div>
      </section>
    </>
  )
}
