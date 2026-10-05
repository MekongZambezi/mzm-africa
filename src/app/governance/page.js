import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'

export const metadata = {
  title: 'Governance and Ethics | MZM Africa',
  description: 'MZM governance standards: mandate review, dealing with officials, conflicts of interest and fee disclosure.',
}

const checks = [
  ['Verification', 'Title, documents and counterparty identity pass our verification standard.'],
  ['Regulatory fit', 'The structure complies with current Zimbabwean law and sector policy, including the sectors reserved for Zimbabwean citizens.'],
  ['Conflict check', 'No MZM team member or related business holds an undisclosed interest.'],
  ['Fee letter', 'Fees are agreed in writing and disclosed to all parties.'],
  ['Registration', 'Foreign investment is registered with the Zimbabwe Investment and Development Agency from the outset.'],
]

const officials = [
  'MZM never pays, or promises payment to, any official for access, approval or speed.',
  'MZM does not work with anyone who charges a fee for introductions to officials.',
  'Public figures may convene meetings or make introductions. They are never signatories to, or recipients of, MZM fees.',
  'Gifts and hospitality above a modest value are recorded in a register.',
]

export default function Governance() {
  return (
    <>
      <PageHero
        eyebrow="Governance and Ethics"
        title="Controls you can see,"
        accent="before you commit."
        lead="Investors, buyers and regulators should know how MZM works before they work with us. These standards apply to every mandate in every sector."
      />

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Mandate Review</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Five checks <span className="text-[#C4A04A] italic">before any mandate.</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mb-12">No mandate is accepted until the Managing Director has confirmed all five.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {checks.map(([title, body], i) => (
              <div key={title} className="bg-[#080C14] p-8">
                <div className="font-serif text-3xl font-bold text-[#C4A04A]/30 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E18] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Dealing with Officials</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight">Institutional channels, <span className="text-[#C4A04A] italic">no paid access.</span></h2>
            <p className="text-gray-300 font-light leading-relaxed mt-6">
              MZM engages government through institutions: the Zimbabwe Investment and Development Agency, sector ministries, chambers of commerce and diplomatic missions.
            </p>
          </div>
          <ul className="border-t border-white/10">
            {officials.map((o) => (
              <li key={o} className="flex gap-4 py-5 border-b border-white/10 text-gray-200 font-light leading-relaxed">
                <span className="text-[#C4A04A] shrink-0">—</span>{o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            ['Official channels', 'Investment is registered with ZIDA, minerals are sold through Zimbabwe’s official marketing channels, and exports follow ZimTrade and customs procedures. MZM does not offer routes around them.'],
            ['Conflicts of interest', 'Any interest an MZM team member or related business holds in a transaction is disclosed in writing to all parties before work begins.'],
            ['Corporate structure', 'MZM is a Zimbabwe-registered firm headquartered in Bulawayo, with an Asia desk in Hanoi. Fees are invoiced only through MZM’s registered company accounts.'],
          ].map(([title, body]) => (
            <div key={title}>
              <div className="w-full h-0.5 mb-6" style={{ background: 'linear-gradient(90deg,#C4A04A,transparent)' }} />
              <h3 className="font-sans font-bold text-lg mb-3 text-white">{title}</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-white/8 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-gray-400 font-light">Received a message claiming to be from MZM that you are unsure about?</p>
          <Link href="/fraud-notice" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">Read our fraud notice</Link>
        </div>
      </section>
    </>
  )
}
