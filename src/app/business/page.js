import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'
import { practices } from '../../lib/practices'

export const metadata = {
  title: 'Our Business | MZM Africa',
  description: 'MZM operates five investment practices in Zimbabwe: Mining and Beneficiation, Agriculture and Agro-processing, Energy, Manufacturing and Industrial Parks, and Tourism and Mobility.',
}

export default function Business() {
  return (
    <>
      <PageHero
        eyebrow="Our Business"
        title="Five practices."
        accent="One standard."
        lead="MZM is organised into five investment practices aligned with the priorities of Zimbabwe's National Development Strategy 2. Mining and Beneficiation is our lead practice. Every practice applies the same verification, structuring and approval process."
        image="/images/zimbabwe-landscape.jpg"
      />

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => (
            <Link key={p.slug} href={p.href} className="group border border-white/10 bg-[#0A0E18] hover:border-[#C4A04A]/50 transition-colors flex flex-col">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-[#C4A04A]/40">{p.num}</span>
                  <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 ${p.slug === 'mining' ? 'bg-[#C4A04A] text-[#080C14]' : 'bg-[#C4A04A]/10 text-[#C4A04A]'}`}>{p.tag}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold mb-3">{p.title}</h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed flex-1">{p.summary}</p>
                <div className="mt-6 text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  Explore the practice
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          ))}

          <Link href="/corridor" className="group border border-[#C4A04A]/40 p-8 flex flex-col justify-between" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <div>
              <SectionLabel>Flagship Programme</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold mb-4 leading-snug">The Zimbabwe-Vietnam Corridor</h2>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                A two-way programme that runs across all five practices: Vietnamese investment into Zimbabwe, and Zimbabwean products to Vietnamese buyers.
              </p>
            </div>
            <div className="mt-8 text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              About the Corridor
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-[#0A0E18] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold mb-2">The same process in every sector.</h2>
            <p className="text-gray-400 font-light">Verification before introduction, disclosed fees, and full regulatory alignment. See how an MZM engagement works.</p>
          </div>
          <Link href="/how-we-work" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">
            How We Work
          </Link>
        </div>
      </section>
    </>
  )
}
