'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold">Get In Touch</h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Ready to explore<br />
              <span className="text-[#C4A04A] italic">an opportunity?</span>
            </h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-10">
              Whether you&apos;re an investor, OEM supplier, or potential offtake partner — we&apos;d like to hear from you. We respond within 48 hours.
            </p>

            <div className="space-y-6">
              {[
                ['Email', 'info@mzmafrica.com', 'mailto:info@mzmafrica.com'],
                ['Zimbabwe Office', 'Harare, Zimbabwe', null],
                ['Vietnam Office', 'Hanoi, Vietnam', null],
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

            <div className="mt-10 border-t border-white/8 pt-8">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Areas of Interest</div>
              <div className="flex flex-wrap gap-2">
                {['Chrome Investment', 'Gold Investment', 'Copper / Nickel', 'Commodity Trading', 'OEM Supply', 'General Partnership'].map((tag) => (
                  <span key={tag} className="text-xs text-[#C4A04A] border border-[#7A6230] px-3 py-1 font-medium">{tag}</span>
                ))}
              </div>
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
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Company</label>
                  <input type="text" name="company" placeholder="Your company name" className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600" />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Area of Interest</label>
                  <select name="interest" className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors appearance-none">
                    <option value="">Select one</option>
                    <option>Chrome Investment Opportunity</option>
                    <option>Gold Investment Opportunity</option>
                    <option>Copper / Nickel Opportunity</option>
                    <option>Commodity Trading / Offtake</option>
                    <option>OEM / Equipment Supply</option>
                    <option>General Partnership Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Message</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your investment mandate or what you're looking for..." className="w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600 resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase py-4 hover:bg-[#E0CA8E] transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please email us directly at info@mzmafrica.com</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
