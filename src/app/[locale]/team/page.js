import { getMessages, setRequestLocale } from 'next-intl/server'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Team', '/team')
}

export default async function Team({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).Team

  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">{c.title}<br /><span className="text-[#C4A04A] italic">{c.accent}</span></h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.members.map((member) => (
              <div key={member.name} className="border border-white/10 p-8 hover:border-[#C4A04A]/30 transition-colors">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full border border-[#C4A04A]/40 bg-[#0F1520] flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-xl text-[#C4A04A]">{member.initials}</span>
                  </div>
                  <div>
                    <h2 className="font-sans font-bold text-xl">{member.name}</h2>
                    <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mt-0.5">{member.role}</div>
                    <div className="text-gray-500 text-xs mt-1">{member.location}</div>
                  </div>
                </div>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
