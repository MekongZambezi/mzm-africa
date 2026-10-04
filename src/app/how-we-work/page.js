import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'

export const metadata = {
  title: 'How We Work | MZM Africa',
  description: 'The MZM engagement process: verification before introduction, structuring within Zimbabwean law, disclosed fees, and support through approval and closing.',
}

const steps = [
  ['01', 'Originate', 'Our Zimbabwe desk identifies projects; our Asia desk identifies investors, buyers and suppliers. Every lead is logged in a single pipeline.'],
  ['02', 'Screen', 'Title, documents and counterparties are checked against our verification standard. Opportunities that fail are closed and never shown to an investor.'],
  ['03', 'Mandate review', 'Senior review against five checks: verification, regulatory fit, conflicts of interest, a signed fee letter, and investment registration with ZIDA.'],
  ['04', 'Package', 'An investor-ready document set: summary, verified data, regulatory position and proposed structure.'],
  ['05', 'Match', 'The package is presented to pre-qualified counterparties under a non-disclosure agreement.'],
  ['06', 'Structure and approve', 'Terms are negotiated and the required registrations and ministry approvals are managed with licensed counsel.'],
  ['07', 'Close and follow through', 'MZM remains available after closing to support the relationship through the first year of operation.'],
]

const standard = [
  ['Title and documents', 'Ownership, registration and permits verified with the relevant registry before any introduction.'],
  ['Counterparty identity', 'Company registration, directors and authority to transact confirmed for every party we introduce.'],
  ['Reserved sectors', 'Structures respect the sectors reserved for Zimbabwean citizens, with foreign participation only where the law allows it.'],
  ['Official channels', 'Licensing, mineral sales and exports run through the institutions that govern them.'],
  ['Regulatory fit', 'Each structure is checked against current Zimbabwean law and policy before investors are quoted.'],
]

const fees = [
  'Every fee is agreed in a signed fee letter before work begins.',
  'Every fee is disclosed to all parties to the transaction.',
  'MZM does not add undisclosed margins to any price.',
  'Fees are invoiced only through MZM’s registered company accounts.',
]

export default function HowWeWork() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Verified before"
        accent="you see it."
        lead="One process applies in every practice. Opportunities are screened before they reach an investor, structured within Zimbabwean law, and supported through approval to closing."
        image="/images/mining-site-2.jpg"
      />

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>The Engagement Process</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">Seven steps, <span className="text-[#C4A04A] italic">from first lead to closing.</span></h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {steps.map(([num, title, body]) => (
              <li key={num} className="bg-[#080C14] p-8">
                <div className="font-serif text-4xl font-bold text-[#C4A04A]/30 mb-4">{num}</div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
              </li>
            ))}
            <li className="bg-[#0F1520] p-8 flex flex-col justify-between">
              <p className="text-gray-300 font-light text-sm leading-relaxed">Mining clients can read our detailed mining services: investment facilitation, beneficiation advisory, commodity trading and due diligence.</p>
              <Link href="/services" className="mt-6 text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Mining services →</Link>
            </li>
          </ol>
        </div>
      </section>

      <section id="verification" className="py-24 bg-[#0A0E18] border-y border-white/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Verification Standard</SectionLabel>
            <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">What we check <span className="text-[#C4A04A] italic">before an introduction.</span></h2>
            <p className="text-gray-300 font-light leading-relaxed">
              Fraudulent documents and unverified claims are a real risk in cross-border deals. Our verification standard protects investors, buyers and genuine project owners alike.
            </p>
          </div>
          <div className="border border-white/10 bg-[#121826]">
            {standard.map(([title, desc]) => (
              <div key={title} className="flex gap-5 p-7 border-b border-white/10 last:border-0">
                <div className="w-2 h-2 bg-[#C4A04A] rounded-full mt-2 shrink-0" />
                <div>
                  <h3 className="font-sans font-bold text-[15px] mb-2 text-white">{title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fees" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Fee Principles</SectionLabel>
            <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">Transparent fees, <span className="text-[#C4A04A] italic">agreed in writing.</span></h2>
            <p className="text-gray-300 font-light leading-relaxed">
              MZM is paid through disclosed professional fees: verification fees, market entry packages, mandate fees and success fees on completed transactions. Fee levels are set out in each engagement letter.
            </p>
          </div>
          <ul className="space-y-0 border-t border-white/10">
            {fees.map((f) => (
              <li key={f} className="flex gap-4 py-5 border-b border-white/10 text-gray-200 font-light">
                <span className="text-[#C4A04A] shrink-0">—</span>{f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-[#0A0E18] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">Read our governance standards.</h2>
            <p className="text-gray-400 font-light">How MZM deals with officials, conflicts of interest and fee disclosure.</p>
          </div>
          <Link href="/governance" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Governance and Ethics
          </Link>
        </div>
      </section>
    </>
  )
}
