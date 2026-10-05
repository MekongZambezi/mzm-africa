import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { practices, getPractice, STATUS } from '../../../lib/practices'

const STATUS_STYLE = {
  open: 'bg-green-900/40 text-green-400',
  trade: 'bg-green-900/40 text-green-400',
  conditions: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  enquiries: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  large: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  access: 'bg-white/5 text-gray-300',
}

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const p = getPractice(params.slug)
  if (!p) return {}
  return { title: `${p.title} | MZM Africa`, description: p.summary }
}

const Dash = () => <span className="text-[#C4A04A] shrink-0">—</span>

export default function PracticePage({ params }) {
  const p = getPractice(params.slug)
  if (!p) notFound()
  const others = practices.filter((o) => o.slug !== p.slug)

  return (
    <>
      <PageHero eyebrow={`Our Business · Sector ${p.num} of 05`} title={p.title} lead={p.lead} image={p.image} />

      {/* WHY + WHAT */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>Why This Sector</SectionLabel>
            <h2 className="font-serif text-4xl font-bold mb-8 leading-tight">
              The opportunity <span className="text-[#C4A04A] italic">in Zimbabwe.</span>
            </h2>
            <ul className="border-t border-white/10">
              {p.context.map((c) => (
                <li key={c} className="flex gap-4 py-5 border-b border-white/10 text-gray-300 font-light leading-relaxed">
                  <span className="w-2 h-2 bg-[#C4A04A] rounded-full mt-2.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F1520] border border-white/10 p-8">
            <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5">What MZM Does</div>
            <ul className="space-y-3">
              {p.services.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-gray-200 font-light border-b border-white/5 pb-3 last:border-0">
                  <Dash />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Focus Areas</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-4 leading-tight">Where we work, <span className="text-[#C4A04A] italic">and where it stands today.</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mb-10">Each area shows its current position under Zimbabwean and Vietnamese rules, so you know what is open now.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.focus.map((f) => (
              <div key={f.name} className="border border-white/10 bg-[#080C14] p-7 flex flex-col gap-3">
                <span className={`self-start text-[10px] font-black tracking-widest uppercase px-3 py-1 ${STATUS_STYLE[f.status]}`}>{STATUS[f.status]}</span>
                <h3 className="font-serif text-2xl font-semibold leading-snug">{f.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Policy Alignment</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-10 leading-tight">Where both countries’ <span className="text-[#C4A04A] italic">priorities meet.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[['Zimbabwe’s priorities', p.zimbabwe], ['Vietnam’s priorities', p.vietnam]].map(([title, items]) => (
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
          <SectionLabel>Institutions</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-4 leading-tight">The bodies <span className="text-[#C4A04A] italic">this sector works through.</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mb-10">MZM prepares clients for each of these institutions. MZM is a private firm and does not represent any of them.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[['Zimbabwe', p.zimInstitutions], ['Vietnam', p.vnInstitutions]].map(([country, items]) => (
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

      {/* BOUNDARIES */}
      <section className="py-16 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <SectionLabel>What We Do Not Do</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-snug">Clear limits, <span className="text-[#C4A04A] italic">stated up front.</span></h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">{p.boundaries}</p>
            <p className="text-gray-400 font-light leading-relaxed">
              Every opportunity is checked before it reaches an investor, and every fee is agreed in writing and disclosed to all parties.{' '}
              <Link href="/how-we-work" className="text-[#C4A04A] underline underline-offset-4">Read how we work</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">Discuss an opportunity in {p.title.toLowerCase()}.</h2>
            <p className="text-gray-400 font-light">
              Write to <a href={`mailto:${p.contact}`} className="text-[#C4A04A] hover:text-[#E0CA8E]">{p.contact}</a>. We reply within 48 hours.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* OTHER SECTORS */}
      <section className="py-16 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5">Other Sectors</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {others.map((o) => (
              <Link key={o.slug} href={o.href} className="bg-[#080C14] p-6 hover:bg-[#0D1320] transition-colors">
                <div className="font-serif text-xl text-[#C4A04A]/50 font-bold mb-2">{o.num}</div>
                <div className="font-serif text-lg font-semibold leading-snug">{o.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
