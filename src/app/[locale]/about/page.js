import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'About', '/about')
}

const Label = ({ children }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-7 h-px bg-[#C4A04A]" />
    <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">{children}</span>
  </div>
)

const OFFICE_IMAGES = ['/images/zimbabwe-landscape.jpg', '/images/hanoi.jpg']

export default async function About({ params: { locale } }) {
  setRequestLocale(locale)
  const c = (await getMessages()).About

  return (
    <>
      <section className="pt-40 pb-24 border-b border-white/10 relative overflow-hidden bg-[#080C14]">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 100% at 0% 0%, #16233f 0%, rgba(8,12,20,0) 55%)' }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <Label>{c.eyebrow}</Label>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-[18ch] leading-[1.1]">
            {c.title}{' '}<span className="text-[#C4A04A] italic font-medium">{c.accent}</span>
          </h1>
          <p className="text-gray-200 font-light text-lg md:text-xl max-w-2xl leading-relaxed">{c.lead}</p>
        </div>
      </section>

      <section className="py-24 bg-[#080C14]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Label>{c.whatLabel}</Label>
            <h2 className="font-serif text-4xl font-bold mb-7 leading-tight max-w-[20ch]">{c.whatTitle[0]}<span className="text-[#C4A04A] italic font-medium">{c.whatTitle[1]}</span></h2>
            {c.whatParas.map((para, i) => (
              <p key={i} className={`font-light leading-relaxed mb-5 ${i === 0 ? 'text-gray-200 text-lg' : 'text-gray-300'}`}>{para}</p>
            ))}
          </div>
          <div className="border border-white/10 rounded-sm bg-[#121826]">
            {c.points.map(([title, desc]) => (
              <div key={title} className="flex gap-5 p-7 border-b border-white/10 last:border-0">
                <div className="w-2 h-2 bg-[#C4A04A] rounded-full mt-2 shrink-0 shadow-[0_0_0_4px_rgba(196,160,74,0.12)]" />
                <div>
                  <h3 className="font-sans font-bold text-[15px] mb-2 text-white">{title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Label>{c.storyLabel}</Label>
            <h2 className="font-serif text-4xl font-bold mb-7 leading-tight max-w-[20ch]">{c.storyTitle[0]}<span className="text-[#C4A04A] italic font-medium">{c.storyTitle[1]}</span></h2>
            {c.storyParas.map((para, i) => (
              <p key={i} className={`font-light leading-relaxed mb-5 ${i === 0 ? 'text-gray-200' : 'text-gray-300'}`}>{para}</p>
            ))}
          </div>
          <div className="h-80 rounded-sm border border-white/10 relative overflow-hidden" style={{ backgroundImage: 'url(/images/about-operations.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-[#080C14]/35" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080C14] to-transparent h-28" />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 text-xs text-gray-400 tracking-wide">
              {c.imageCaption[0]}<span className="text-[#C4A04A] font-semibold">{c.imageCaption[1]}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="offices" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <Label>{c.officesLabel}</Label>
          <h2 className="font-serif text-4xl font-bold mb-12 max-w-xl leading-tight">{c.officesTitle[0]}<span className="text-[#C4A04A] italic font-medium">{c.officesTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {c.offices.map(([kind, city, desc, alt], i) => (
              <div key={city} className="border border-white/10 bg-[#121826]">
                <div className="aspect-[16/9] overflow-hidden"><img src={OFFICE_IMAGES[i]} alt={alt} className="w-full h-full object-cover" /></div>
                <div className="p-8">
                  <div className="text-[#C4A04A] text-xs font-black tracking-[0.2em] uppercase mb-2">{kind}</div>
                  <h3 className="font-serif text-3xl font-semibold mb-3">{city}</h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5">{c.moreTitle}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.moreLinks.map(([label, href]) => (
              <Link key={href} href={href} className="bg-[#080C14] p-6 font-serif text-2xl font-semibold hover:text-[#C4A04A] hover:bg-[#0D1320] transition-colors">{label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
