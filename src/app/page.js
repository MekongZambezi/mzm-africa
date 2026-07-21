'use client'
import Link from 'next/link'
import NewsTicker from '../components/NewsTicker'
import { useLang } from '../context/LanguageContext'

const SERVICE_ICONS = [
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  <svg key="4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
]

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
            <Link href="/about" className="text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:text-[#C4A04A] transition-colors">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
            {[
              {
                num: '01',
                title: 'Structure before investors',
                body: 'Most brokers find interest then build structure. MZM builds structure then finds investors. The SPV, escrow arrangement, title verification, shareholder agreement, and financial model are done before the first investor conversation. When you engage MZM, you are looking at a deal, not a discussion about whether one is possible.',
              },
              {
                num: '02',
                title: 'The legal requirement, not just a preference',
                body: "Under Zimbabwe's May 2026 Critical Minerals framework, foreign investment in the country's declared critical minerals must be structured through a Zimbabwean entity within the State SPV. MZM is that entity. This is not positioning. It is the legal requirement for any investor who wants to participate in Zimbabwe's minerals sector correctly.",
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
      <section className="py-16 bg-[#0A0E18] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
              The deal is structured before you arrive.
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

      {/* SERVICES */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0A0E18' }}>
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-10"
          style={{
            backgroundImage: 'url(/images/mining-processing.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-[#0A0E18] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{t.services.label}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {t.services.heading1}<br />
            <span className="text-[#C4A04A] italic">{t.services.heading2}</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mb-14 text-lg">{t.services.sub}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 max-w-4xl">
            {t.services.items.map((s, i) => (
              <Link key={s.title} href={s.href} className="group bg-[#0A0E18] p-10 hover:bg-[#111825] transition-colors relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C4A04A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-[#C4A04A] mb-5">{SERVICE_ICONS[i]}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{s.desc}</p>
                <div className="mt-6 text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  {t.services.learnMore}
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
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
          <div className="mt-8 text-right">
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
          backgroundImage: 'url(/images/mining-site-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-[#080C14]/88" />
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
      <section className="py-20 bg-[#0A0E18] border-t border-white/8">
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
                <div key={label} className="flex gap-5 p-6 border-b border-white/8 last:border-0">
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
              The deal is structured before you arrive.
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
