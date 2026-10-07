import { notFound } from 'next/navigation'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '../../../../i18n/navigation'
import PageHero, { SectionLabel } from '../../../../components/PageHero'
import { practices, getPractice, STATUS_STYLE } from '../../../../lib/practices'
import { alternates } from '../../../../i18n/meta'

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params: { locale, slug } }) {
  const p = getPractice(slug)
  if (!p) return {}
  const item = (await getMessages({ locale })).Sectors.items[slug]
  return { title: `${item.title} | MZM Africa`, description: item.summary, alternates: alternates(locale, p.href) }
}

const Dash = () => <span className="text-[#C4A04A] shrink-0">—</span>

export default async function SectorPage({ params: { locale, slug } }) {
  const p = getPractice(slug)
  if (!p) notFound()
  setRequestLocale(locale)
  const m = await getMessages()
  const t = await getTranslations('SectorPage')
  const c = m.SectorPage
  const s = m.Sectors.items[slug]
  const status = m.Sectors.status
  const others = practices.filter((o) => o.slug !== slug)

  return (
    <>
      <PageHero eyebrow={t('eyebrow', { num: p.num })} title={s.title} lead={s.lead} image={p.image} video={p.video} />

      {/* WHY + WHAT */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>{c.whyLabel}</SectionLabel>
            <h2 className="font-serif text-4xl font-bold mb-8 leading-tight">{c.whyTitle[0]}<span className="text-[#C4A04A] italic">{c.whyTitle[1]}</span></h2>
            <ul className="border-t border-white/10">
              {s.context.map((x) => (
                <li key={x} className="flex gap-4 py-5 border-b border-white/10 text-gray-300 font-light leading-relaxed">
                  <span className="w-2 h-2 bg-[#C4A04A] rounded-full mt-2.5 shrink-0" />{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F1520] border border-white/10 p-8">
            <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5">{c.whatLabel}</div>
            <ul className="space-y-3">
              {s.services.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-gray-200 font-light border-b border-white/5 pb-3 last:border-0"><Dash />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.focusLabel}</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-4 leading-tight">{c.focusTitle[0]}<span className="text-[#C4A04A] italic">{c.focusTitle[1]}</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mb-10">{c.focusSub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.focus.map((f) => (
              <div key={f.name} className="border border-white/10 bg-[#080C14] p-7 flex flex-col gap-3">
                <span className={`self-start text-[10px] font-black tracking-widest uppercase px-3 py-1 ${STATUS_STYLE[f.status]}`}>{status[f.status]}</span>
                <h3 className="font-serif text-2xl font-semibold leading-snug">{f.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT (optional, per sector) */}
      {s.spotlight && (
        <section className="py-20 bg-[#080C14]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <SectionLabel>{s.spotlight.label}</SectionLabel>
              <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">{s.spotlight.title[0]}<span className="text-[#C4A04A] italic">{s.spotlight.title[1]}</span></h2>
              <p className="text-gray-300 font-light text-lg leading-relaxed mb-8">{s.spotlight.body}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-8">
                {s.spotlight.facts.map(([n, t]) => (
                  <div key={n} className="bg-[#0A0E18] p-6">
                    <div className="font-serif text-3xl font-bold text-[#C4A04A] mb-2 leading-none">{n}</div>
                    <div className="text-gray-400 text-sm font-light leading-snug">{t}</div>
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4">{s.spotlight.pointsLabel}</div>
              <ul className="space-y-3 mb-6">
                {s.spotlight.points.map((x) => <li key={x} className="flex gap-3 text-sm text-gray-200 font-light leading-relaxed"><Dash />{x}</li>)}
              </ul>
              <p className="text-xs text-gray-400">{s.spotlight.source}</p>
            </div>
            <div className="lg:col-span-2 border border-white/10 overflow-hidden">
              <img src={s.spotlight.image} alt={s.spotlight.alt} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* POLICY */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.policyLabel}</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-10 leading-tight">{c.policyTitle[0]}<span className="text-[#C4A04A] italic">{c.policyTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[[c.zimPriorities, s.zimbabwe], [c.vnPriorities, s.vietnam]].map(([title, items]) => (
              <div key={title} className="bg-[#080C14] p-8">
                <h3 className="font-serif text-2xl font-semibold mb-5 text-[#C4A04A]">{title}</h3>
                <ul className="space-y-3">
                  {items.map((it) => <li key={it} className="flex gap-3 text-sm text-gray-200 font-light leading-relaxed"><Dash />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="py-20 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.instLabel}</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-4 leading-tight">{c.instTitle[0]}<span className="text-[#C4A04A] italic">{c.instTitle[1]}</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mb-10">{c.instSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[[c.zimbabwe, s.zimInstitutions], [c.vietnam, s.vnInstitutions]].map(([country, items]) => (
              <div key={country} className="border border-white/10 bg-[#080C14]">
                <div className="px-8 py-5 border-b border-white/10 font-serif text-2xl font-semibold text-[#C4A04A]">{country}</div>
                {items.map(([name, role]) => (
                  <div key={name} className="px-8 py-5 border-b border-white/5 last:border-0">
                    <div className="text-white font-semibold text-sm mb-1">{name}</div>
                    <div className="text-gray-400 text-sm font-light">{role}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITS */}
      <section className="py-16 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <SectionLabel>{c.limitsLabel}</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-snug">{c.limitsTitle[0]}<span className="text-[#C4A04A] italic">{c.limitsTitle[1]}</span></h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">{s.boundaries}</p>
            <p className="text-gray-400 font-light leading-relaxed">
              {c.limitsBody}{' '}
              <Link href="/how-we-work" className="text-[#C4A04A] underline underline-offset-4">{c.readHow}</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">{t('ctaTitle', { sector: s.title })}</h2>
            <p className="text-gray-400 font-light">
              {c.ctaWrite} <a href={`mailto:${p.contact}`} className="text-[#C4A04A] underline underline-offset-4 hover:text-[#E0CA8E]">{p.contact}</a>. {c.ctaReply}
            </p>
          </div>
          <Link href="/contact?type=consultation" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">{c.getInTouch}</Link>
        </div>
      </section>

      {/* OTHER SECTORS */}
      <section className="py-16 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5">{c.otherSectors}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {others.map((o) => (
              <Link key={o.slug} href={o.href} className="bg-[#080C14] p-6 hover:bg-[#0D1320] transition-colors">
                <div className="font-serif text-xl text-[#C4A04A]/70 font-bold mb-2">{o.num}</div>
                <div className="font-serif text-lg font-semibold leading-snug">{m.Sectors.items[o.slug].title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
