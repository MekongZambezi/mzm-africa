import PageHero, { SectionLabel } from '../../components/PageHero'

export const metadata = {
  title: 'Fraud and Impersonation Notice | MZM Africa',
  description: 'How to recognise genuine communication from MZM Consultants and what to do if you receive a suspicious message using our name.',
}

const genuine = [
  'MZM email comes only from addresses ending in @mzmafrica.com. Our team may also contact you on WhatsApp, WeChat or Zalo, but documents and payment details are only ever sent from an @mzmafrica.com address.',
  'Fees are agreed in a signed fee letter before any work begins.',
  'Payments to MZM are made only to MZM’s registered company bank accounts, never to a personal account.',
  'MZM never asks for payment to release documents, reserve a claim, or secure access to officials.',
  'Project details are shared only after a non-disclosure agreement, never through unsolicited messages.',
]

export default function FraudNotice() {
  return (
    <>
      <PageHero
        eyebrow="Fraud and Impersonation Notice"
        title="Protect yourself"
        accent="from impersonation."
        lead="Mining and trade opportunities attract fraud, and our name may be used by people who do not work for MZM. Here is how to recognise genuine communication from us."
      />

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>How MZM Communicates</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight">Five things that are <span className="text-[#C4A04A] italic">always true.</span></h2>
          </div>
          <ul className="border-t border-white/10">
            {genuine.map((g) => (
              <li key={g} className="flex gap-4 py-5 border-b border-white/10 text-gray-200 font-light leading-relaxed">
                <span className="text-[#C4A04A] shrink-0">—</span>{g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">If you are unsure</h2>
          <p className="text-gray-300 font-light leading-relaxed max-w-3xl">
            Do not send money or documents. Forward the message to{' '}
            <a href="mailto:projects@mzmafrica.com" className="text-[#C4A04A] underline underline-offset-4">projects@mzmafrica.com</a>{' '}
            and we will confirm within 48 hours whether it came from MZM.
          </p>
        </div>
      </section>
    </>
  )
}
