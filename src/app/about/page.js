export const metadata = { title: 'About MZM Africa | Mekong Zambezi Meridian Consultants' }

export default function About() {
  return (
    <>
      <section
        className="pt-36 pb-16 border-b border-white/8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/mining-site-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-[#080C14]/88" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">About MZM Africa</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Who We Are</h1>
          <p className="text-gray-300 font-light text-xl max-w-2xl leading-relaxed">
            MZM is the Zimbabwean firm that structures the deal before it finds the investor — and the legal partner foreign capital now requires to operate in Zimbabwe's critical minerals sector.
          </p>
        </div>
      </section>

      {/* What MZM is */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#C4A04A]" />
              <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">What MZM Is</span>
            </div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Not a broker.<br />
              <span className="text-[#C4A04A] italic">The architecture.</span>
            </h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-5">
              MZM Africa — Mekong Zambezi Meridian Consultants — is a Zimbabwe-registered, youth-owned mining facilitation and deal structuring firm with a commercial presence in Hanoi, Vietnam.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-5">
              We identify, verify, and structure investment-ready opportunities in chrome and lithium — connecting qualified international investors to compliant, government-aligned deals through frameworks that are built before the first investor conversation happens.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Under Zimbabwe's May 2026 Critical Minerals framework, every foreign investment in chrome, lithium, copper, nickel, and PGMs must be structured through a Zimbabwean entity within the State SPV. MZM is that entity.
            </p>
          </div>
          <div className="border border-white/10">
            {[
              ['Zimbabwe-Registered and Compliant', 'Incorporated in Zimbabwe. Direct working relationships with the Ministry of Mines, MMCZ, and FGR. Not a foreign firm claiming Zimbabwe access — a Zimbabwean firm with it.'],
              ['Structure First', 'The SPV, escrow arrangement, title verification, shareholder agreement, and CAPEX model are done before the investor call. You arrive at a deal.'],
              ['Hanoi Commercial Base', 'Operational presence in Vietnam. Direct access to Vietnamese and Chinese OEM equipment networks and the Asian investor community that has capital allocated to African critical minerals.'],
              ['Government-Aligned by Design', 'Every deal MZM structures is built to comply with Zimbabwe\'s national beneficiation mandate and the May 2026 Critical Minerals framework from day one. This is not compliance for its own sake — it is the structural protection that keeps investor capital from regulatory risk.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-5 p-7 border-b border-white/8 last:border-0">
                <div className="w-1.5 h-1.5 bg-[#C4A04A] rounded-full mt-2 shrink-0" />
                <div>
                  <h3 className="font-sans font-bold text-sm mb-2 text-white">{title}</h3>
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
              <div className="text-[#C4A04A] text-xs font-black tracking-widest uppercase mb-4">Vision</div>
              <p className="font-serif text-3xl font-semibold leading-snug">
                To be the primary Zimbabwean deal structuring firm for critical minerals investment between Africa and Asia by 2030.
              </p>
            </div>
            <div className="border border-white/10 p-10 bg-[#0F1520]">
              <div className="text-[#C4A04A] text-xs font-black tracking-widest uppercase mb-4">Mission</div>
              <p className="font-serif text-3xl font-semibold leading-snug">
                To structure, verify, and close compliant mineral investment deals that generate returns for investors and lasting value for Zimbabwe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#C4A04A]" />
              <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Why Harare and Hanoi</span>
            </div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              A deliberate bridge,<br />
              <span className="text-[#C4A04A] italic">not a coincidence</span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-5">
              MZM was founded by Zimbabweans who identified a persistent gap: Zimbabwe's mining sector had the geology, the regulatory reform momentum, and the political will — but lacked structured access to the capital networks concentrated in East and Southeast Asia.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-5">
              The Hanoi base is not incidental. Vietnam is an industrial economy with OEM manufacturing capacity and investors who are actively seeking African mineral supply chain exposure. MZM's presence there is an operational reality, not a marketing claim.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Zimbabwe's May 2026 regulatory changes have made this bridge more relevant, not less. Foreign investors now need a compliant Zimbabwean partner in the SPV structure. MZM was built to be exactly that.
            </p>
          </div>
          <div
            className="h-80 border border-white/10 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/mining-processing.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#080C14]/30" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080C14] to-transparent h-24" />
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section id="role" className="py-20 bg-[#0A0E18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Our Role in Zimbabwe's Mining Sector</span>
          </div>
          <h2 className="font-serif text-4xl font-bold mb-14 max-w-xl">
            What MZM actually does<br />
            <span className="text-[#C4A04A] italic">in practice</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['Deal Structuring', 'MZM builds the legal and commercial framework — SPV, escrow, title verification, shareholder agreement — before approaching investors. Every deal MZM presents has been through this process.'],
              ['Regulatory Navigation', 'MZM navigates the Ministry of Mines approval process, MMCZ registration, ZiMRA compliance, and the Critical Minerals SPV requirement on behalf of investors. These are working relationships, not contacts on a list.'],
              ['Capital and Equipment Bridge', 'MZM connects Zimbabwean mineral projects to Vietnamese and Chinese OEM equipment networks and the Asian investor community. This is a geographic and relational advantage built over time — not sourced from a directory.'],
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
