import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero, { SectionLabel } from '../../../components/PageHero'
import { practices, getPractice } from '../../../lib/practices'

const SLUGS = ['agriculture', 'energy', 'manufacturing', 'tourism']

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const p = getPractice(params.slug)
  if (!p) return {}
  return { title: `${p.title} | MZM Africa`, description: p.summary }
}

export default function PracticePage({ params }) {
  if (!SLUGS.includes(params.slug)) notFound()
  const p = getPractice(params.slug)
  const others = practices.filter((o) => o.slug !== p.slug)

  return (
    <>
      <PageHero eyebrow={`Our Business · Practice ${p.num}`} title={p.title} lead={p.lead} image={p.image} />

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>Why This Sector</SectionLabel>
            <h2 className="font-serif text-4xl font-bold mb-8 leading-tight">
              The opportunity <span className="text-[#C4A04A] italic">in Zimbabwe.</span>
            </h2>
            <ul className="space-y-0 border-t border-white/10">
              {p.context.map((c) => (
                <li key={c} className="flex gap-4 py-5 border-b border-white/10 text-gray-300 font-light leading-relaxed">
                  <span className="w-2 h-2 bg-[#C4A04A] rounded-full mt-2.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F1520] border border-white/8 p-8">
            <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-5">What MZM Delivers</div>
            <ul className="space-y-3">
              {p.services.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-gray-300 font-light border-b border-white/5 pb-3 last:border-0">
                  <span className="text-[#C4A04A] shrink-0 mt-0.5 text-xs">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0E18] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Policy Alignment</SectionLabel>
          <h2 className="font-serif text-4xl font-bold mb-10 leading-tight">Where both countries' <span className="text-[#C4A04A] italic">priorities meet.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[['What Zimbabwe is prioritising', p.zimbabwe, 'Bulawayo'], ['What Vietnam is prioritising', p.vietnam, 'Hanoi']].map(([title, items, city]) => (
              <div key={title} className="bg-[#080C14] p-8">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-2">{city}</div>
                <h3 className="font-serif text-2xl font-semibold mb-5 text-[#C4A04A]">{title}</h3>
                <ul className="space-y-3">
                  {items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-gray-200 font-light leading-relaxed"><span className="text-[#C4A04A] shrink-0">—</span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A0E18] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <SectionLabel>How We Work Here</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-snug">Clear about what <span className="text-[#C4A04A] italic">we do and do not do.</span></h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">{p.boundaries}</p>
            <p className="text-gray-400 font-light leading-relaxed">
              Every opportunity in this practice passes MZM's verification standard before it reaches an investor, and every fee is agreed in writing and disclosed to all parties.{' '}
              <Link href="/how-we-work" className="text-[#C4A04A] underline underline-offset-4">Read how we work</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">Discuss a {p.title.toLowerCase()} opportunity.</h2>
            <p className="text-gray-400 font-light">
              Write to <a href={`mailto:${p.contact}`} className="text-[#C4A04A] hover:text-[#E0CA8E]">{p.contact}</a>. We respond within 48 hours.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="pb-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-5">Other Practices</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {others.map((o) => (
              <Link key={o.slug} href={o.href} className="bg-[#080C14] p-6 hover:bg-[#0D1320] transition-colors">
                <div className="font-serif text-xl text-[#C4A04A]/40 font-bold mb-2">{o.num}</div>
                <div className="font-serif text-lg font-semibold leading-snug">{o.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
