'use client'
import { useState, useEffect } from 'react'
import { useLocale, useMessages } from 'next-intl'
import { Link } from '../../../i18n/navigation'
import ChatLinks from '../../../components/ChatLinks'

// Submitted values stay in English so enquiries read the same in the MZM inbox,
// whichever language the visitor used. The visitor's language is sent as a field.
const ENQUIRY_VALUES = { meeting: 'Meeting with our team', brief: 'Zimbabwe investment brief request', general: 'General enquiry' }
const INTEREST_GROUPS = [
  ['sector', ['mining', 'agriculture', 'energy', 'manufacturing', 'tourism']],
  ['corridor', ['buying', 'selling']],
  ['general', ['equipment', 'advisory', 'government']],
]
const INTEREST_VALUES = {
  mining: 'Mining and Beneficiation', agriculture: 'Agriculture and Agro-processing', energy: 'Energy',
  manufacturing: 'Manufacturing and Industrial Parks', tourism: 'Tourism and Hospitality',
  buying: 'Buying Zimbabwean Products', selling: 'Selling Zimbabwean Products into Vietnam',
  equipment: 'Equipment and Energy Sourcing', advisory: 'Market Entry Advisory', government: 'Government, Chamber or Trade Body',
}

const inputCls = 'w-full bg-[#0F1520] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C4A04A]/60 focus:outline-none transition-colors placeholder-gray-600'
const labelCls = 'block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2'

export default function Contact() {
  const c = useMessages().Contact
  const locale = useLocale()
  const [status, setStatus] = useState('idle')
  const [enquiryType, setEnquiryType] = useState('general')

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type')
    if (type === 'consultation') setEnquiryType('meeting')
    if (type === 'brief') setEnquiryType('brief')
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
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">{c.title} <span className="text-[#C4A04A] italic">{c.accent}</span></h1>
          <p className="text-gray-200 font-light text-lg max-w-2xl leading-relaxed">{c.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-[#080C14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-6">{c.whoLabel}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {c.who.map(([who, what]) => (
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
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">{c.formTitle[0]}<span className="text-[#C4A04A] italic">{c.formTitle[1]}</span></h2>
            <p className="text-gray-300 font-light leading-relaxed mb-10">{c.formIntro}</p>

            <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4">{c.nextLabel}</div>
            <ol className="border-t border-white/10 mb-10">
              {c.next.map(([title, body], i) => (
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
              {[[c.emailLabel, 'projects@mzmafrica.com', 'mailto:projects@mzmafrica.com'], [c.hqLabel, c.hq, null], [c.asiaLabel, c.asia, null]].map(([label, value, href]) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 border border-[#C4A04A]/30 flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-[#C4A04A]" /></div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">{label}</div>
                    {href ? <a href={href} className="text-white hover:text-[#C4A04A] transition-colors">{value}</a> : <div className="text-white">{value}</div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 border border-[#C4A04A]/30 flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-[#C4A04A]" /></div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">{c.whatsappLabel}</div>
                <ChatLinks label={c.chatAria} />
              </div>
            </div>

            <div className="mt-10 border border-[#C4A04A]/30 bg-[#C4A04A]/5 p-5 text-sm text-gray-300 font-light leading-relaxed">
              <span className="text-white font-semibold">{c.fraudTitle}</span> {c.fraudBody}{' '}
              <Link href="/fraud-notice" className="text-[#C4A04A] underline underline-offset-2">{c.fraudLink}</Link>.
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="border border-green-500/30 bg-green-900/20 p-8 text-center">
                <div className="text-green-400 text-4xl mb-4">✓</div>
                <h3 className="font-serif text-2xl font-bold mb-2">{c.successTitle}</h3>
                <p className="text-gray-400 font-light">{c.successBody}</p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="language" value={locale === 'vi' ? 'Vietnamese' : 'English'} />

                <div className="grid grid-cols-2 gap-5">
                  {[['firstName', 'text'], ['lastName', 'text']].map(([name, type]) => (
                    <div key={name}>
                      <label htmlFor={`f-${name}`} className={labelCls}>{c.fields[name]}</label>
                      <input id={`f-${name}`} type={type} name={name} placeholder={c.placeholders[name]} required className={inputCls} />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="f-email" className={labelCls}>{c.fields.email}</label>
                  <input id="f-email" type="email" autoComplete="email" name="email" placeholder={c.placeholders.email} required className={inputCls} />
                </div>

                <div>
                  <label htmlFor="f-enquiryType" className={labelCls}>{c.fields.enquiryType}</label>
                  <select id="f-enquiryType" name="enquiryType" value={ENQUIRY_VALUES[enquiryType]} onChange={(e) => setEnquiryType(Object.keys(ENQUIRY_VALUES).find((k) => ENQUIRY_VALUES[k] === e.target.value))} className={`${inputCls} appearance-none`}>
                    {Object.entries(ENQUIRY_VALUES).map(([key, value]) => <option key={key} value={value}>{c.enquiryTypes[key]}</option>)}
                  </select>
                  {enquiryType === 'brief' && <p className="text-xs text-[#C4A04A] mt-2">{c.briefNote}</p>}
                </div>

                <div>
                  <label htmlFor="f-company" className={labelCls}>{c.fields.organisation}</label>
                  <input id="f-company" type="text" name="company" autoComplete="organization" placeholder={c.placeholders.organisation} className={inputCls} />
                </div>

                <div>
                  <label htmlFor="f-interest" className={labelCls}>{c.fields.interest}</label>
                  <select id="f-interest" name="interest" defaultValue="" className={`${inputCls} appearance-none`}>
                    <option value="">{c.selectOne}</option>
                    {INTEREST_GROUPS.map(([group, keys]) => (
                      <optgroup key={group} label={c.groups[group]}>
                        {keys.map((k) => <option key={k} value={INTEREST_VALUES[k]}>{c.interests[k]}</option>)}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="f-message" className={labelCls}>{c.fields.message}</label>
                  <textarea id="f-message" name="message" rows={5} placeholder={c.placeholders.message} className={`${inputCls} resize-none`} />
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {c.privacyBefore} <Link href="/privacy" className="text-[#C4A04A] underline underline-offset-2">{c.privacyLink}</Link>.
                </p>

                <button type="submit" disabled={status === 'sending'} className="w-full bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase py-4 hover:bg-[#E0CA8E] transition-colors disabled:opacity-60">
                  {status === 'sending' ? c.sending : c.submit}
                </button>

                {status === 'error' && <p className="text-red-400 text-sm text-center">{c.error}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
