'use client'
import Link from 'next/link'
import NewsTicker from '../components/NewsTicker'
import { useLang } from '../context/LanguageContext'
import { practices } from '../lib/practices'

const MINERAL_STATUS = [
  'bg-green-900/40 text-green-400',
  'bg-green-900/40 text-green-400',
  'bg-green-900/40 text-green-400',
  'bg-[#C4A04A]/10 text-[#C4A04A]',
  'bg-[#C4A04A]/10 text-[#C4A04A]',
  'bg-white/5 text-gray-400',
]

export default function Home() {
  const { t } = useLang()
  if (!t) return null

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/70 via-[#080C14]/55 to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.25em] uppercase">Mekong Zambezi Meridian Consultants</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[82px] font-serif font-bold leading-none mb-6" style={{ maxWidth: '820px' }}>
            {t.hero.headline1}<br />
            <span className="text-[#C4A04A] italic">{t.hero.headline2}</span>
          </h1>

          <p className="text-gray-300 text-lg font-light max-w-2xl mb-3 leading-relaxed">
            {t.hero.sub}
          </p>
          <p className="text-gray-500 text-xs font-light max-w-lg mb-10 leading-relaxed tracking-wide uppercase">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-16">
            <Link href="/contact" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">
              {t.hero.cta1}
            </Link>
            <Link href="/business" className="text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:text-[#C4A04A] transition-colors">
              {t.hero.cta2}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-8 gap-y-6">
            {t.hero.stats.map((s) => (
              <div key={s.num} className="pr-6 border-r border-white/10 last:border-0">
                <div className="text-[#C4A04A] font-serif font-bold text-4xl leading-none mb-1">{s.num}</div>
                <div className="text-gray-400 text-xs font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS TICKER */}
      <NewsTicker />

      {/* OUR BUSINESS: FIVE PRACTICES */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-px bg-[#C4A04A]" />
                <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{t.homePractices.label}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                {t.homePractices.heading1}<br />
                <span className="text-[#C4A04A] italic">{t.homePractices.heading2}</span>
              </h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{t.homePractices.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {practices.map((p, i) => (
              <Link
                key={p.slug}
                href={p.href}
                className={`group relative overflow-hidden border border-white/10 hover:border-[#C4A04A]/50 transition-colors min-h-[340px] flex flex-col justify-end ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
              >
                <img src={p.image} alt={p.imageAlt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/75 to-[#080C14]/15" />
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-serif text-2xl font-bold text-[#C4A04A]">{p.num}</span>
                    {i === 0 && <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-[#C4A04A] text-[#080C14]">{t.homePractices.lead}</span>}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2 leading-snug">{t.homePractices.items[i].title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 max-w-md">{t.homePractices.items[i].summary}</p>
                  <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    {t.homePractices.explore}
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/business" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 hover:gap-3 transition-all">
              {t.homePractices.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* THE CORRIDOR */}
      <section className="py-24 relative overflow-hidden border-y border-white/10" style={{ backgroundImage: 'url(/images/hanoi.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#080C14]/90" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-px bg-[#C4A04A]" />
              <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{t.homeCorridor.label}</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {t.homeCorridor.heading1}<br />
              <span className="text-[#C4A04A] italic">{t.homeCorridor.heading2}</span>
            </h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-10">{t.homeCorridor.body}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/corridor#invest" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">{t.homeCorridor.cta1}</Link>
              <Link href="/corridor#source" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">{t.homeCorridor.cta2}</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[[t.homeCorridor.intoTitle, t.homeCorridor.into, 'Bulawayo'], [t.homeCorridor.outTitle, t.homeCorridor.out, 'Hanoi']].map(([title, items, city]) => (
              <div key={title} className="bg-[#080C14]/85 p-8">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-2">{city}</div>
                <h3 className="font-serif text-2xl font-semibold mb-5 text-[#C4A04A]">{title}</h3>
                <ul className="space-y-3">
                  {items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-gray-200 font-light"><span className="text-[#C4A04A] shrink-0">—</span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CLAIMS */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">What Sets MZM Apart</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
            Three things that matter<br />
            <span className="text-[#C4A04A] italic">before capital moves</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                num: '01',
                title: 'Structure before investors',
                body: 'Most brokers find interest then build structure. MZM builds structure then finds investors. The SPV, escrow arrangement, title verification, shareholder agreement, and financial model are done before the first investor conversation. When you engage MZM, you are looking at a deal, not a discussion about whether one is possible.',
              },
              {
                num: '02',
                title: 'Built for the State SPV framework',
                body: "Under Zimbabwe's May 2026 Critical Minerals framework, the State takes a mandatory minimum shareholding, through designated special purpose vehicles, in the exploitation of declared critical minerals. MZM structures foreign participation to meet that requirement, including State participation, ministerial approval and in-country processing, so each deal is compliant from the outset.",
              },
              {
                num: '03',
                title: 'Working relationships, not directory entries',
                body: "MZM's relationships with Zimbabwe's Ministry of Mines, MMCZ, and FGR are operational. When a deal requires ministry sign-off, an export permit, or a regulatory clearance, MZM navigates that directly. This is what separates a firm that understands Zimbabwe from one that claims to.",
              },
            ].map((claim) => (
              <div key={claim.num} className="bg-[#080C14] p-10 hover:bg-[#0D1320] transition-colors border-t-2 border-transparent hover:border-[#C4A04A]">
                <div className="font-serif text-4xl font-bold text-[#C4A04A]/25 mb-6">{claim.num}</div>
                <h3 className="font-serif text-2xl font-semibold mb-4 leading-snug">{claim.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{claim.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
              Review a mandate in detail.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Chrome, lithium and gold mandates, SPV established, title verified, capital model confirmed. Request an investment brief and receive a full project overview within 48 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors text-center">
              Request An Investment Brief
            </Link>
            <Link href="/contact" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors text-center">
              Speak To The Team
            </Link>
          </div>
        </div>
      </section>

      {/* MINERALS */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{t.minerals.label}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">
            {t.minerals.heading1}<br />
            <span className="text-[#C4A04A] italic">{t.minerals.heading2}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.minerals.items.map((m, i) => (
              <div key={m.name} className="border border-white/10 p-8 hover:border-[#C4A04A]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-[#C4A04A]/40 leading-none mb-2">{m.symbol}</div>
                <div className="font-serif text-3xl font-semibold mb-3">{m.name}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">{m.desc}</p>
                <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${MINERAL_STATUS[i]}`}>{m.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-end gap-8">
            <Link href="/services" className="text-gray-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-[#C4A04A] transition-colors">
              {t.nav.howWeWorkSub[3]}
            </Link>
            <Link href="/minerals" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2 justify-end hover:gap-3 transition-all">
              {t.minerals.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ZIMBABWE */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/policy-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#080C14]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#080C14]/85 to-[#080C14]/30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#C4A04A]" />
              <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Why Zimbabwe. Why Now.</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.zimBanner.heading1}<br />
              <span className="text-[#C4A04A] italic">{t.zimBanner.heading2}</span>
            </h2>
            <p className="text-gray-300 font-light text-lg mb-6 leading-relaxed max-w-2xl">
              Zimbabwe's May 2026 Critical Minerals declaration formally defined the investment architecture for the country's declared critical minerals, mandating State SPV co-investment for all foreign participation.
            </p>
            <p className="text-gray-400 font-light text-base mb-10 leading-relaxed max-w-xl">
              This does not complicate the investment case. It defines it. Investors who understand the framework and work within it have a clearer, more protected path than at any previous point in Zimbabwe's mining history.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about#role" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">
                {t.zimBanner.cta}
              </Link>
              <Link href="/news" className="text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:text-[#C4A04A] transition-colors border border-white/20 px-8 py-4 hover:border-[#C4A04A]/40">
                Read The Policy Update
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY STATEMENT */}
      <section className="py-20 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-px bg-[#C4A04A]" />
                <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">MZM Policy Position</span>
              </div>
              <h2 className="font-serif text-3xl font-bold mb-6">Where MZM stands<br /><span className="text-[#C4A04A] italic">on the May 2026 announcements</span></h2>
              <p className="text-gray-300 font-light leading-relaxed mb-4">
                Zimbabwe's Ministry of Mines issued two policy instruments on 22 May 2026. The small and medium scale gold mining sector is now reserved exclusively for Zimbabwean citizens and wholly Zimbabwean-owned entities. Fourteen minerals have been formally declared Critical Minerals, with mandatory State SPV co-investment now required for all exploitation.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                MZM's active mandates in chrome, lithium and gold are structured in full compliance with both instruments. MZM does not facilitate investment in sectors or at scales that conflict with government policy.
              </p>
            </div>
            <div className="space-y-0 border border-white/10">
              {[
                ['Chrome', 'Active. Investor-ready. Declared Critical Mineral. SPV structured, title verified, CAPEX confirmed.'],
                ['Lithium', 'Active. Investor-ready. Declared Critical Mineral. SPV structured, title verified, CAPEX confirmed.'],
                ['Gold', 'Active. Declared Strategic Mineral. Foreign participation restricted to large-scale operations above 20kg per month and USD 15M capital. MZM structures large-scale entry only.'],
                ['Copper', 'Declared Critical Mineral. Pipeline, under commercial evaluation.'],
                ['Quartz', 'Under commercial and market assessment. Pipeline, recently added to MZM\'s mandate.'],
                ['Other Minerals', 'Zimbabwe\'s remaining declared minerals are evaluated under mandate as investor demand and title availability develop.'],
              ].map(([label, desc]) => (
                <div key={label} className="flex gap-5 p-6 border-b border-white/10 last:border-0">
                  <div className="font-serif text-sm font-bold text-[#C4A04A] min-w-[100px] mt-0.5 shrink-0">{label}</div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONVEYOR IMAGE DIVIDER */}
      <div
        className="h-64 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/mining-conveyor.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#080C14]/70" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">
              Structured within Zimbabwe's regulatory framework.
            </p>
            <p className="text-[#C4A04A] text-sm font-medium tracking-widest uppercase">Chrome · Lithium · Gold</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{t.cta.heading}</h2>
            <p className="text-gray-400 font-light">{t.cta.sub}</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            {t.cta.btn}
          </Link>
        </div>
      </section>
    </>
  )
}
