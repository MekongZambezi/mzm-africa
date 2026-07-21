
export const metadata = { title: 'About MZM Africa | Mekong Zambezi Meridian Consultants' }

export default function About() {
  return (
    <>
      {/* HERO: solid gradient, no text over photo */}
      <section className="pt-40 pb-24 border-b border-white/10 relative overflow-hidden bg-[#080C14]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 100% at 0% 0%, #16233f 0%, rgba(8,12,20,0) 55%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">
              About MZM Africa
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-[16ch] leading-[1.1]">
            Zimbabwe's minerals,{' '}
            <span className="text-[#C4A04A] italic font-medium">structured for serious capital.</span>
          </h1>
          <p className="text-gray-200 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
            Mekong Zambezi Meridian Consultants is a Zimbabwe-registered mining facilitation
            and deal-structuring firm, connecting the country's minerals to investors
            and buyers across Asia.
          </p>
        </div>
      </section>

      {/* WHAT MZM IS */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-[#C4A04A]" />
              <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">
                What MZM Is
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold mb-7 leading-tight max-w-[20ch]">
              The meridian between{' '}
              <span className="text-[#C4A04A] italic font-medium">title and capital.</span>
            </h2>
            <p className="text-gray-200 font-light text-lg leading-relaxed mb-5">
              MZM sits at the centre point between two parties: the title holder who owns the
              ground, and the investor who holds the capital to develop it. We identify, verify,
              and structure investment-ready opportunities in chrome, lithium and gold, then bring
              compliant, fully structured deals to qualified international investors.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-5">
              Under Zimbabwe's May 2026 Critical Minerals framework, foreign investment in the
              country's declared critical minerals must be structured through a compliant
              Zimbabwean SPV that includes the State's mandatory minimum shareholding.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              MZM structures compliant deals within that framework, on behalf of investors and
              claim holders, from SPV formation through to Ministry of Mines and MMCZ approval.
            </p>
          </div>
          <div className="border border-white/10 rounded-sm bg-[#121826]">
            {[
              ['Zimbabwe-Registered and Compliant', 'Incorporated in Zimbabwe, with direct working relationships across the Ministry of Mines, MMCZ, and FGR. Not a foreign firm claiming access, but a Zimbabwean firm that holds it.'],
              ['Structure First', 'The SPV, escrow, title verification, shareholder agreement, and CAPEX model are complete before the investor call. You arrive at a deal, not a prospect.'],
              ['Hanoi Commercial Base', 'An operational presence in Vietnam, with direct access to Vietnamese and Chinese OEM equipment networks and the Asian investor community allocating capital to African minerals.'],
              ['Compliant by Design', 'Every deal is built to comply with Zimbabwe\'s beneficiation mandate and the Critical Minerals framework from day one. That structural discipline keeps investor capital clear of regulatory risk.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-5 p-7 border-b border-white/10 last:border-0">
                <div className="w-2 h-2 bg-[#C4A04A] rounded-full mt-2 shrink-0 shadow-[0_0_0_4px_rgba(196,160,74,0.12)]" />
                <div>
                  <h3 className="font-sans font-bold text-[15px] mb-2 text-white">{title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">
              Vision &amp; Mission
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div
              className="p-11 rounded-sm border border-[#C4A04A]/35"
              style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}
            >
              <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">
                Vision
              </div>
              <p className="font-serif text-3xl font-semibold leading-snug text-white">
                To be the primary Zimbabwean deal-structuring firm for critical minerals
                investment between Africa and Asia by 2030.
              </p>
            </div>
            <div className="p-11 rounded-sm border border-white/10 bg-[#121826]">
              <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">
                Mission
              </div>
              <p className="font-serif text-3xl font-semibold leading-snug text-white">
                To structure, verify, and close compliant mineral investment deals that generate
                returns for investors and lasting value for Zimbabwe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 bg-[#080C14]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-[#C4A04A]" />
              <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">
                Why Bulawayo and Hanoi
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold mb-7 leading-tight max-w-[20ch]">
              A deliberate bridge{' '}
              <span className="text-[#C4A04A] italic font-medium">between two economies.</span>
            </h2>
            <p className="text-gray-200 font-light leading-relaxed mb-5">
              MZM was founded by Zimbabweans who saw a persistent gap: the mining sector had the
              geology, the reform momentum, and the political will, but lacked structured access
              to the capital concentrated in East and Southeast Asia.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-5">
              The Hanoi base is not incidental. Vietnam is an industrial economy with OEM
              manufacturing capacity and investors actively seeking African mineral supply-chain
              exposure. MZM's presence there is an operational reality, not a marketing claim.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              Zimbabwe's May 2026 regulatory changes made this bridge more relevant, not less.
              Foreign investors now need a compliant Zimbabwean partner in the SPV structure.
              MZM was built to be exactly that.
            </p>
          </div>
          <div
            className="h-80 rounded-sm border border-white/10 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/about-operations.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#080C14]/35" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080C14] to-transparent h-28" />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 text-xs text-gray-400 tracking-wide">
              Ore processing and <span className="text-[#C4A04A] font-semibold">beneficiation operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ROLE */}
      <section id="role" className="py-24 bg-[#0A0E18] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">
              Our Role in Zimbabwe's Mining Sector
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold mb-14 max-w-xl leading-tight">
            What MZM actually does{' '}
            <span className="text-[#C4A04A] italic font-medium">in practice.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['01', 'Deal Structuring', 'MZM builds the legal and commercial framework, including the SPV, escrow, title verification, and shareholder agreement, before approaching investors. Every deal presented has been through this process.'],
              ['02', 'Regulatory Navigation', 'MZM manages the Ministry of Mines approval process, MMCZ registration, ZiMRA compliance, and the Critical Minerals SPV requirement on behalf of investors. Working relationships, not contacts on a list.'],
              ['03', 'Capital and Equipment Bridge', 'MZM connects Zimbabwean projects to Vietnamese and Chinese OEM equipment networks and the Asian investor community. A geographic and relational advantage built over time, not sourced from a directory.'],
            ].map(([num, title, desc]) => (
              <div key={title}>
                <div className="font-serif text-3xl text-[#C4A04A] font-semibold mb-3 leading-none">
                  {num}
                </div>
                <div className="w-full h-0.5 mb-6" style={{ background: 'linear-gradient(90deg,#C4A04A,transparent)' }} />
                <h3 className="font-sans font-bold text-lg mb-3 text-white">{title}</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
