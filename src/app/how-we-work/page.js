import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'

export const metadata = {
  title: 'How We Do It | MZM Africa',
  description: 'One process for every mandate: discovery and alignment, verification on the ground, structuring and approvals, execution, and implementation, run from Hanoi and Zimbabwe.',
}

const steps = [
  ['01', 'Discovery and Alignment', 'We define the mandate: sector, scale, timeline and objectives. We confirm the opportunity fits Zimbabwean law and policy, and check for conflicts of interest. A signed fee letter is in place before work begins.', 'Agreed mandate and signed fee letter'],
  ['02', 'Verification on the Ground', 'Our Zimbabwe team checks title, ownership, licences and the people involved with the relevant authority, and visits the site or producer. Opportunities that fail are not presented.', 'Verification report'],
  ['03', 'Structuring and Approvals', 'We prepare the structure within the reserved-sector rules, the processing requirements and sector policy, and prepare ZIDA, ministry, ZERA or export filings with licensed counsel, in the client’s own name. For Vietnamese investors, we prepare the Zimbabwe documents needed for registration at home.', 'Approval-ready file in both countries'],
  ['04', 'Introduction and Execution', 'Under a non-disclosure agreement, we introduce the parties and manage negotiation, documentation and approvals through to signing.', 'Signed agreements and filed applications'],
  ['05', 'Implementation and Governance', 'After licensing, we coordinate suppliers, partners, power and permits through to operation, and report to both parties at agreed points.', 'An operating project or an established supply line'],
]

const presence = [
  ['Hanoi, Vietnam', 'Asia Desk', 'Led by Managing Director Andy Moyo. Meets Vietnamese and Asian investors, buyers, equipment suppliers and trade bodies in person, in their own time zone.'],
  ['Zimbabwe', 'Operations', 'Led by Commercial Director Ebern Moyo, with Deputy Managing Director Chido A. Mumvuri leading business development. Checks opportunities and suppliers on the ground, works with Zimbabwean institutions and manages delivery.'],
  ['Both countries', 'Both sides of every approval', 'We work through ZIDA, ZimTrade, the sector ministries, MMCZ, Fidelity Gold Refinery and ZERA in Zimbabwe, and VCCI, VIETRADE and the relevant ministries in Vietnam. MZM is a private firm and does not represent any of them.'],
]

const commitments = [
  ['Verification before introduction', 'No opportunity, producer or counterparty is introduced before it passes our checks.'],
  ['Official channels only', 'Investment is registered with ZIDA, minerals are sold through MMCZ or Fidelity Gold Refinery, power projects are licensed or registered with ZERA, and exports follow ZimTrade and customs procedures.'],
  ['Current law, applied', 'Structures follow the 2026 reserved-sector rules, processing requirements and critical minerals framework, with licensed counsel on every engagement.'],
  ['Fees in writing', 'Fees are agreed in a signed letter and disclosed to every party. Any interest held by an MZM team member is disclosed before work begins.'],
  ['No paid access', 'We never pay, or promise payment to, any official, and we do not work with anyone who charges for introductions to officials.'],
  ['Confidentiality', 'Project details are shared only under a non-disclosure agreement.'],
]

export default function HowWeDoIt() {
  return (
    <>
      <PageHero
        eyebrow="How We Do It"
        title="One process. Two countries."
        accent="Every mandate."
        lead="Every engagement follows the same five stages, run jointly by our Asia desk in Hanoi and our team in Zimbabwe."
        image="/images/practice-manufacturing.jpg"
      />

      <section id="framework" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>The Operational Framework</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">Five stages, <span className="text-[#C4A04A] italic">each with a defined output.</span></h2>
          <ol className="border-t border-white/10">
            {steps.map(([num, title, body, output]) => (
              <li key={num} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10">
                <div className="md:col-span-1 font-serif text-5xl font-bold text-[#C4A04A] leading-none">{num}</div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-3xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-300 font-light leading-relaxed">{body}</p>
                </div>
                <div className="md:col-span-4 md:pl-6 md:border-l border-white/10">
                  <div className="text-[10px] font-black tracking-widest uppercase text-[#C4A04A] mb-2">Output</div>
                  <p className="text-white font-light">{output}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Cross-Border Advantage</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">On the ground <span className="text-[#C4A04A] italic">in both countries.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {presence.map(([place, title, body]) => (
              <div key={title} className="border border-white/10 border-t-2 border-t-[#C4A04A] bg-[#080C14] p-8">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">{place}</div>
                <h3 className="font-serif text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commitments" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Risk Management</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Execution <span className="text-[#C4A04A] italic">commitments.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {commitments.map(([title, body]) => (
              <div key={title} className="bg-[#080C14] p-8 flex gap-5">
                <span className="w-2 h-2 bg-[#C4A04A] mt-3 shrink-0" />
                <div>
                  <h3 className="font-sans font-bold text-lg mb-2 text-white">{title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            <Link href="/governance" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Governance and ethics →</Link>
            <Link href="/fraud-notice" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Fraud notice →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-2">Bring us a mandate.</h2>
            <p className="text-gray-400 font-light">We reply to every enquiry within 48 hours.</p>
          </div>
          <Link href="/contact?type=consultation" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">Schedule an Executive Consultation</Link>
        </div>
      </section>
    </>
  )
}
