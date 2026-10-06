
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [enquiryType, setEnquiryType] = useState('General enquiry')

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type')
    if (type === 'consultation') setEnquiryType('Executive consultation')
    if (type === 'brief') setEnquiryType('Discussion brief request')
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      if (!res.ok) throw new Error('Form submission failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Bring us <span className="text-[#C4A04A] italic">a mandate.</span></h1>
          <p className="text-gray-200 font-light text-lg max-w-2xl leading-relaxed">Investment into Zimbabwe, supply from Zimbabwe, or entry into Vietnam. Tell us what you need, and the right person in Hanoi or Zimbabwe will respond.</p>
        </div>
      </section>

      <section className="py-16 bg-[#080C14] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-6">Who should contact us</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {[
              ['Institutional and corporate investors', 'Investment opportunities in any of our five sectors'],
              ['Vietnamese and Asian companies investing abroad', 'Market entry, sites, partners and approvals in Zimbabwe'],
              ['Buyers and importers', 'Verified supply of tobacco, cotton, leather, nuts, fruit, processed foods and processed minerals'],
              ['Zimbabwean producers and title holders', 'Buyer introductions, export support and investment partners'],
              ['Government agencies, chambers and trade bodies', 'Investment promotion, trade missions and business forums'],
            ].map(([who, what]) => (
              <div key={who} className="bg-[#080C14] p-6">
                <div className="font-serif text-lg font-semibold mb-2 leading-snug">{who}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">Tell us about <span className="text-[#C4A04A] italic">your mandate.</span></h2>
            <p className="text-gray-300 font-light leading-relaxed mb-10">
              The more specific your enquiry, the faster we can respond. Please include the sector, what you want to invest in, buy or sell, the approximate scale and your timeline.
            </p>

            <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4">What happens next</div>
            <ol className="border-t border-white/10 mb-10">
              {[
                ['Acknowledgement within 48 hours', 'Every enquiry receives a reply from an @mzmafrica.com address within 48 hours.'],
                ['A first call', 'The Managing Director or the Commercial Director arranges a call to understand your mandate.'],
                ['Non-disclosure agreement', 'Project details are exchanged only once a non-disclosure agreement is signed.'],
                ['Signed fee letter', 'Work begins only after fees are agreed in writing.'],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5 py-4 border-b border-white/10">
                  <span className="font-serif text-2xl font-bold text-[#C4A04A] leading-none w-6 shrink-0">{i + 1}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{title}</div>
                    <p className="text-gray-400 text-sm font-light">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="space-y-6">
              {[
                ['Email', 'projects@mzmafrica.com', 'mailto:projects@mzmafrica.com'],
                                ['Headquarters', 'Bulawayo, Zimbabwe', null],
                ['Asia Desk', 'Hanoi, Vietnam', null],
              ].map(([label, value, href]) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 border border-[#C4A04A]/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-[#C4A04A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-white hover:text-[#C4A04A] transition-colors">{value}</a>
                    ) : (
                      <div className="text-white">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-[#C4A04A]/30 bg-[#C4A04A]/5 p-5 text-sm text-gray-300 font-light leading-relaxed">
              <span className="text-white font-semibold">Protect yourself from impersonation.</span> MZM email comes only from addresses ending in @mzmafrica.com. MZM never asks for payment to release documents or to secure access to officials.{' '}
              <Link href="/fraud-notice" className="text-[#C4A04A] underline underline-offset-2">Read our fraud notice</Link>.
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="border border-green-500/30 bg-green-900/20 p-8 text-center">
                <div className="text-green-400 text-4xl mb-4">✓</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Thank You</h3>
                <p className="text-gray-400 font-light">We&apos;ve received your enquiry and will respond within 48 hours.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-2 gap-5">
                  {[['First Name', 'firstName', 'text', 'John'], ['Last Name', 'lastName', 'text', 'Smith']].map(([label, name, type, placeholder]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">{label}</label>
                      <input type={type} name={name} placeholder={placeholder} required className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600" />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Email Address</label>
                  <input type="email" name="email" placeholder="john@company.com" required className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600" />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Enquiry Type</label>
                  <select name="enquiryType" value={enquiryType} onChange={(e) => setEnquiryType(e.target.value)} className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors appearance-none">
                    <option>Executive consultation</option>
                    <option>Discussion brief request</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Organisation and Role</label>
                  <input type="text" name="company" placeholder="Your organisation and position" className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600" />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Area of Interest</label>
                  <select name="interest" className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors appearance-none">
                    <option value="">Select one</option>
                    <optgroup label="Sector">
                      <option>Mining and Beneficiation</option>
                      <option>Agriculture and Agro-processing</option>
                      <option>Energy</option>
                      <option>Manufacturing and Industrial Parks</option>
                      <option>Tourism and Hospitality</option>
                    </optgroup>
                    <optgroup label="The Corridor">
                      <option>Buying Zimbabwean Products</option>
                      <option>Selling Zimbabwean Products into Vietnam</option>
                    </optgroup>
                    <optgroup label="General">
                      <option>Equipment and Energy Sourcing</option>
                      <option>Market Entry Advisory</option>
                      <option>Government, Chamber or Trade Body</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Message</label>
                  <textarea name="message" rows={5} placeholder="Describe your mandate: sector, objective, approximate scale and timeline. Please do not send confidential documents until a non-disclosure agreement is in place." className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600 resize-none" />
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  By sending this form you agree to MZM handling your details as set out in our <Link href="/privacy" className="text-[#C4A04A] underline underline-offset-2">privacy policy</Link>.
                </p>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase py-4 hover:bg-[#E0CA8E] transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please email us directly at projects@mzmafrica.com</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
