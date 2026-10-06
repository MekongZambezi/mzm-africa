import { getMessages, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { practices } from '../../../lib/practices'
import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Corridor', '/corridor')
}

const STATUS_STYLE = {
  now: 'bg-green-900/40 text-green-400',
  open: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  access: 'bg-white/5 text-gray-300',
}

const Arrow = () => (
  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
)

const Title = ([plain, accent]) => (
  <>{plain}<span className="text-[#C4A04A] italic">{accent}</span></>
)

export default async function Corridor({ params: { locale } }) {
  setRequestLocale(locale)
  const m = await getMessages()
  const c = m.Corridor
  const sectors = m.Sectors.items

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} accent={c.hero.accent} lead={c.hero.lead} image="/images/hanoi.jpg" />

      {/* THREE DOORS */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.doors.map((d) => (
              <a key={d.id} href={`#${d.id}`} className="group bg-[#080C14] p-10 hover:bg-[#0D1320] transition-colors relative">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C4A04A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-[#C4A04A] text-[10px] font-black tracking-widest uppercase mb-4">{d.who}</div>
                <h2 className="font-serif text-3xl font-semibold mb-3">{d.title}</h2>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">{d.body}</p>
                <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">{d.cta} <Arrow /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT FLOWS EACH WAY */}
      <section className="py-20 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.flowsLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{Title(c.flowsTitle)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.flows.map(([title, items]) => (
              <div key={title} className="border border-white/10 bg-[#080C14] p-10">
                <h3 className="font-serif text-2xl font-semibold mb-6">{title}</h3>
                <ul className="space-y-3">
                  {items.map((i) => (
                    <li key={i} className="flex gap-3 text-gray-300 font-light border-b border-white/5 pb-3 last:border-0"><span className="text-[#C4A04A] shrink-0">—</span>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY FIT */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.whyLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{Title(c.whyTitle)}</h2>
          <p className="text-gray-400 font-light max-w-3xl mb-12 leading-relaxed">{c.whyLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.priorities.map(([country, items]) => (
              <div key={country} className="border border-white/10 bg-[#0A0E18] p-10">
                <h3 className="font-serif text-3xl font-semibold mb-6 text-[#C4A04A]">{country}</h3>
                {items.map(([title, body]) => (
                  <div key={title} className="py-5 border-t border-white/10">
                    <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">{title}</div>
                    <p className="text-gray-200 font-light leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT AND MARKET ACCESS */}
      <section id="source" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <SectionLabel>{c.exportLabel}</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">{c.exportTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.exportTitle[1]}</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{c.exportLead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.products.map((p) => (
              <article key={p.title} className="border border-white/10 bg-[#0A0E18] flex flex-col">
                <div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" /></div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className={`self-start text-[10px] font-black tracking-widest uppercase px-3 py-1 ${STATUS_STYLE[p.status]}`}>{c.status[p.status]}</span>
                  <h3 className="font-serif text-2xl font-semibold leading-snug">{p.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.moreProducts.map(([title, body]) => (
              <div key={title} className="bg-[#0A0E18] p-6">
                <span className={`inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 mb-3 ${STATUS_STYLE.open}`}>{c.status.open}</span>
                <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <h3 className="font-serif text-3xl font-bold mb-2">{c.stepsTitle}</h3>
            <p className="text-gray-400 font-light mb-10 max-w-2xl">{c.stepsLead}</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.steps.map(([num, title, body]) => (
                <li key={num}>
                  <div className="font-serif text-3xl text-[#C4A04A] font-semibold mb-3 leading-none">{num}</div>
                  <div className="w-full h-0.5 mb-5" style={{ background: 'linear-gradient(90deg,#C4A04A,transparent)' }} />
                  <h4 className="font-sans font-bold text-lg mb-2 text-white">{title}</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* INVEST */}
      <section id="invest" className="py-24 bg-[#0A0E18] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.investLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{Title(c.investTitle)}</h2>
          <div className="border-t border-white/10">
            {practices.map((p) => (
              <Link key={p.slug} href={p.href} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-10 py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                <span className="flex items-baseline gap-5">
                  <span className="font-serif text-xl text-[#C4A04A]/50 font-bold">{p.num}</span>
                  <span className="font-serif text-2xl md:text-3xl font-semibold group-hover:text-[#C4A04A] transition-colors">{sectors[p.slug].title}</span>
                </span>
                <span className="text-gray-400 font-light text-sm md:max-w-md md:text-right">{sectors[p.slug].summary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section id="channels" className="py-24 bg-[#080C14] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.instLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{Title(c.instTitle)}</h2>
          <p className="text-gray-400 font-light max-w-3xl mb-12 leading-relaxed">{c.instLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.institutions.map(([abbr, name, role]) => (
              <div key={abbr} className="bg-[#080C14] p-8">
                <div className="font-serif text-2xl font-bold text-[#C4A04A] mb-1">{abbr}</div>
                <div className="text-gray-400 text-xs font-medium mb-4">{name}</div>
                <p className="text-gray-200 text-sm font-light leading-relaxed">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAS */}
      <section id="producers" className="py-20 bg-[#080C14] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 border border-[#C4A04A]/35" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <h2 className="font-serif text-3xl font-bold mb-3">{c.buyerTitle}</h2>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">{c.buyerBody}</p>
            <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">{c.buyerCta}</Link>
          </div>
          <div className="p-10 border border-white/10 bg-[#0A0E18]">
            <h2 className="font-serif text-3xl font-bold mb-3">{c.producerTitle}</h2>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">{c.producerBody}</p>
            <Link href="/contact" className="inline-block text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">{c.producerCta}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
