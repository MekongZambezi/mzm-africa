import { Fragment } from 'react'

export const metadata = {
  title: 'Privacy Policy | MZM Africa',
  description: 'How MZM Africa collects, uses and protects personal information submitted through mzmafrica.com.',
}

const sections = [
  {
    heading: 'Who we are',
    body: [
      'This website, mzmafrica.com, is operated by Mekong Zambezi Meridian Consultants ("MZM", "we", "us"), a company registered in Zimbabwe. MZM is responsible for the personal information collected through this website.',
    ],
  },
  {
    heading: 'Information we collect',
    body: [
      'When you send an enquiry through our contact form, we collect the details you provide: your first and last name, email address, company name, area of interest and message.',
      'When you email us directly, we receive your email address and the contents of your email.',
      'We do not ask for, and ask you not to send through this website, identity documents, bank or card details, or any other sensitive personal information.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use the information you send us to respond to your enquiry, to assess whether we can assist you, and to correspond with you about a potential engagement.',
      'We do not sell your personal information, and we do not use it to send marketing messages unless you have asked us to.',
    ],
  },
  {
    heading: 'Who processes it',
    body: [
      'Contact form submissions are received and stored by Netlify, Inc., which hosts this website, and are forwarded to our business email. These providers may process and store data outside Zimbabwe. We share your information only with service providers that support our business and with professional advisers where needed to respond to your enquiry, or where the law requires it.',
    ],
  },
  {
    heading: 'Website data',
    body: [
      'Our hosting provider records standard technical information, such as IP addresses and the pages requested, to operate and secure the website.',
      'This website loads fonts from Google Fonts, which means your browser connects to Google servers and shares your IP address with Google.',
      'If you choose a language on this website, your choice is saved in your own browser so the site remembers it on your next visit. We do not use advertising or tracking cookies.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep enquiry information only for as long as needed to respond to you, to manage any resulting engagement, and to meet our legal and record-keeping obligations.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You can ask us to confirm what personal information we hold about you, to correct it, or to delete it. You can also object to how we use it. To make a request, email projects@mzmafrica.com. We may need to confirm your identity before acting on a request.',
      'We handle personal information in line with applicable data protection law, including Zimbabwe\'s Cyber and Data Protection Act. If you are not satisfied with our response, you may contact the relevant data protection authority.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'We take reasonable steps to protect the personal information we hold against loss, misuse and unauthorised access. No method of transmission over the internet is completely secure.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The date at the top of this page shows when it was last changed.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">Privacy Policy</h1>
          <div className="text-gray-500 text-sm">Last updated 4 October 2026</div>
        </div>
      </section>

      <section className="py-16 bg-[#080C14]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="article-body">
            {sections.map((s) => (
              <Fragment key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Fragment>
            ))}
            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to{' '}
              <a href="mailto:projects@mzmafrica.com">projects@mzmafrica.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
