export const metadata = { title: 'About MZM Africa | Mekong Zambezi Meridian Consultants' }

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">About MZM Africa</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">Who We Are</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Built at the intersection of<br />
              <span className="text-[#C4A04A] italic">mineral wealth and capital flow</span>
            </h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">
              MZM Africa — Mekong Zambezi Meridian Consultants — is a Zimbabwean youth-owned mining facilitation and beneficiation advisory firm with a commercial presence in Hanoi, Vietnam.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              We were built specifically to bridge Zimbabwe&apos;s extraordinary mineral endowment with the capital, OEM networks, and offtake relationships concentrated in Southeast Asia. We understand both the regulatory landscape in Harare and the commercial expectations in Hanoi.
            </p>
          </div>
          <div className="space-y-0 border border-white/10">
            {[
              ['01', 'Zimbabwe-Registered & Compliant', 'Fully registered in Zimbabwe with direct MMCZ, Ministry of Mines, and ZiMRA relationships.'],
              ['02', 'Southeast Asia Commercial Presence', 'Operational base in Hanoi, Vietnam with active Vietnamese and regional OEM and investor relationships.'],
              ['03', 'Youth-Led, Government-Aligned', 'Aligned with Zimbabwe\'s national beneficiation mandate and youth economic empowerment agenda.'],
              ['04', 'Deal-Structuring Specialists', 'We structure SPVs, escrow arrangements, and binding shareholder agreements — not just introductions.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-6 p-7 border-b border-white/8 last:border-0">
                <div className="text-[#C4A04A]/50 font-serif text-sm font-bold mt-1 min-w-[28px]">{num}</div>
                <div>
                  <h3 className="font-sans font-bold text-base mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-[#0A0E18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Vision & Mission</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#C4A04A]/30 p-10">
              <div className="text-[#C4A04A] text-xs font-black tracking-widest uppercase mb-4">Our Vision</div>
              <p className="font-serif text-3xl font-semibold leading-snug">
                To be the leading bridge between Zimbabwe&apos;s mineral sector and Asian capital markets by 2030.
              </p>
            </div>
            <div className="border border-white/10 p-10 bg-[#0F1520]">
              <div className="text-[#C4A04A] text-xs font-black tracking-widest uppercase mb-4">Our Mission</div>
              <p className="font-serif text-3xl font-semibold leading-snug">
                To maximise investor returns and Zimbabwe&apos;s mineral value through responsible, youth-led facilitation and beneficiation advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Our Story</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">From Harare to Hanoi —<br /><span className="text-[#C4A04A] italic">a deliberate bridge</span></h2>
              <p className="text-gray-300 font-light leading-relaxed mb-5">
                MZM Africa was founded by a team of young Zimbabweans who recognised a persistent gap: Zimbabwe&apos;s mining sector had abundant geology and regulatory reform momentum, but lacked structured access to the capital networks concentrated in East and Southeast Asia.
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-5">
                The establishment of a commercial presence in Hanoi, Vietnam was deliberate — not incidental. Vietnam is a rapidly growing industrial economy with strong OEM manufacturing capacity and investors actively seeking exposure to African mineral supply chains.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                Today MZM operates across chrome, gold, and copper plays in Zimbabwe, with an active pipeline of investor introductions, asset due diligence mandates, and offtake facilitation assignments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['Chrome', 'Great Dyke Corridor'], ['Gold', 'Greenstone Belts'], ['Copper', 'Magondi Belt'], ['Hanoi', 'SEA Hub']].map(([title, sub]) => (
                <div key={title} className="bg-[#0F1520] border border-white/8 p-6">
                  <div className="font-serif text-2xl font-bold text-[#C4A04A] mb-1">{title}</div>
                  <div className="text-gray-500 text-xs font-medium">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section id="role" className="py-20 bg-[#0A0E18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Our Role in Zimbabwe Mining</span>
          </div>
          <h2 className="font-serif text-4xl font-bold mb-14 max-w-xl">
            More than advisors —<br />
            <span className="text-[#C4A04A] italic">deal architects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Capital Formation', 'We raise structured investment capital for vetted mineral projects — from SPV formation through first distribution.'],
              ['Regulatory Navigation', 'We guide investors through MMCZ registration, ZiMRA compliance, Ministry of Mines approvals, and SPV legal structures.'],
              ['Offtake Facilitation', 'We identify and negotiate with domestic smelters, MMCZ-registered trading houses, and Asian off-takers on behalf of our clients.'],
            ].map(([title, desc]) => (
              <div key={title} className="border-t-2 border-[#C4A04A] pt-6">
                <h3 className="font-sans font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
