import Link from 'next/link'
import NewsTicker from '../components/NewsTicker'

const services = [
  { icon: '⛏', title: 'Investment Facilitation', desc: 'Connecting qualified investors with vetted Zimbabwean chrome, gold, copper and nickel assets across the full project lifecycle.', href: '/services#facilitation' },
  { icon: '📊', title: 'Beneficiation Advisory', desc: 'Technical and commercial advisory on converting raw ore to export-grade concentrate — aligned with Zimbabwe\'s 2026 mineral export mandate.', href: '/services#advisory' },
  { icon: '🔁', title: 'Commodity Trading', desc: 'Structured trading of chrome, gold, copper and nickel through MMCZ-registered channels to Chinese, Vietnamese, and Asian buyers.', href: '/services#trading' },
  { icon: '🔎', title: 'Due Diligence', desc: 'Independent geological, legal, and financial validation of Zimbabwean mining claims — protecting investor capital before deployment.', href: '/services#dd' },
]

const minerals = [
  { symbol: 'Cr', name: 'Chrome', status: 'Active', color: 'bg-green-900/40 text-green-400', desc: 'Great Dyke corridor — 48–52% Cr₂O₃ concentrate for domestic smelters and CIF China offtake.' },
  { symbol: 'Au', name: 'Gold', status: 'Active', color: 'bg-green-900/40 text-green-400', desc: 'ASM cluster model via hub-and-spoke gravity + VAT leach processing through FGR-regulated channels.' },
  { symbol: 'Cu', name: 'Copper', status: 'Pipeline', color: 'bg-yellow-900/40 text-yellow-400', desc: 'Magondi Belt stratabound copper targets in Mashonaland West under active evaluation.' },
  { symbol: 'Ni', name: 'Nickel', status: 'Pipeline', color: 'bg-yellow-900/40 text-yellow-400', desc: 'Zimbabwe nickel belt sulphide deposits tracked against Asian EV battery demand.' },
]

const stats = [
  { num: '2.8B', label: 'Tonnes Chrome Reserves, Great Dyke' },
  { num: '#2', label: 'Global Platinum Group Metal Producer' },
  { num: '$17T', label: 'Estimated Untapped Mineral Wealth' },
  { num: '2026', label: 'Beneficiation Mandate In Effect' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/70 via-[#080C14]/60 to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/80 to-transparent" />

        {/* Diagonal lines accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C4A04A 0, #C4A04A 1px, transparent 1px, transparent 40px)' }} />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-4 mb-6 fade-up">
            <div className="w-10 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.25em] uppercase">Mekong Zambezi Meridian Consultants</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-none mb-6 fade-up fade-up-delay-1" style={{ maxWidth: '800px' }}>
            Africa&apos;s Minerals.<br />
            <span className="text-[#C4A04A] italic">Asia&apos;s Capital.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed fade-up fade-up-delay-2">
            Zimbabwe&apos;s youth-owned mining facilitation and beneficiation advisory firm — bridging the Great Dyke with Southeast Asian investor and OEM networks.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-16 fade-up fade-up-delay-3">
            <Link href="/contact" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">
              Partner With Us
            </Link>
            <Link href="/about" className="text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:text-[#C4A04A] transition-colors">
              About MZM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-8 gap-y-6">
            {stats.map((s) => (
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

      {/* SERVICES */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            End-to-end mining<br />
            <span className="text-[#C4A04A] italic">facilitation & advisory</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mb-14 text-lg">We don&apos;t just advise — we structure deals, validate assets, and walk investors from due diligence to production.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-[#080C14] p-10 hover:bg-[#0F1520] transition-colors relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C4A04A] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="text-3xl mb-6">{s.icon}</div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{s.desc}</p>
                <div className="mt-6 text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  Learn more <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MINERALS */}
      <section className="py-24 bg-[#0A0E18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Mineral Focus</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">
            Four commodities.<br />
            <span className="text-[#C4A04A] italic">Extraordinary geology.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {minerals.map((m) => (
              <div key={m.name} className="border border-white/10 p-8 hover:border-[#C4A04A]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-[#C4A04A]/50 leading-none mb-2">{m.symbol}</div>
                <div className="font-serif text-3xl font-semibold mb-3">{m.name}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">{m.desc}</p>
                <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${m.color}`}>{m.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/minerals" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2 justify-end hover:gap-3 transition-all">
              View all minerals <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ZIM BANNER */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#080C14]/88" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Why Zimbabwe. Why Now.</span>
            <div className="w-7 h-px bg-[#C4A04A]" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold max-w-3xl mx-auto mb-6 leading-tight">
            A policy inflection point<br />
            <span className="text-[#C4A04A] italic">no investor should miss</span>
          </h2>
          <p className="text-gray-300 font-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Zimbabwe&apos;s February 2026 blanket raw mineral export ban mandates in-country beneficiation before export — creating a structural, urgent demand for processing infrastructure capital.
          </p>
          <Link href="/about#role" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">
            Read The Opportunity
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080C14] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Ready to explore an opportunity?</h2>
            <p className="text-gray-400 font-light">Whether investor, OEM supplier, or offtake partner — we&apos;d like to hear from you.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
