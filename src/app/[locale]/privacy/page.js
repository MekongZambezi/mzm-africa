import { Fragment } from 'react'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Privacy', '/privacy')
}

export default async function Privacy({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).Privacy

  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">{c.title}</h1>
          <div className="text-gray-400 text-sm">{c.updated}</div>
        </div>
      </section>

      <section className="py-16 bg-[#080C14]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="article-body">
            {c.sections.map((s) => (
              <Fragment key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
              </Fragment>
            ))}
            <h2>{c.contactHeading}</h2>
            <p>{c.contactBefore} <a href="mailto:projects@mzmafrica.com">projects@mzmafrica.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
