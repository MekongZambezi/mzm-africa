
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
            One team in{' '}
            <span className="text-[#C4A04A] italic font-medium">Zimbabwe and Vietnam.</span>
          </h1>
          <p className="text-gray-200 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
            Mekong Zambezi Meridian Consultants is a Zimbabwe-registered firm, headquartered in
            Bulawayo with an Asia desk in Hanoi. We help Asian companies invest in Zimbabwe, and
            help Zimbabwean producers sell to Asia, across five sectors: mining, agriculture,
            energy, manufacturing, and tourism and hospitality.
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
              Between Zimbabwean opportunity{' '}
              <span className="text-[#C4A04A] italic font-medium">and Asian capital.</span>
            </h2>
            <p className="text-gray-200 font-light text-lg leading-relaxed mb-5">
              MZM works between two sides: Zimbabwean owners, producers and projects, and the
              Asian investors and buyers who want to work with them. We find opportunities, check
              them on the ground, prepare them under Zimbabwean law, and introduce them to the
              right investor or buyer.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-5">
              Our Managing Director leads the Asia desk in Hanoi. Our Commercial Director runs
              our operations in Zimbabwe. Clients deal with the same small team in both countries.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              Every engagement runs through Zimbabwe's official channels: ZIDA, ZimTrade, the
              sector ministries, and the official sales channels for minerals and gold.
            </p>
          </div>
          <div className="border border-white/10 rounded-sm bg-[#121826]">
            {[
              ['Zimbabwe-Registered', 'Incorporated in Zimbabwe and familiar with the procedures of ZIDA, ZimTrade, the sector ministries, MMCZ, Fidelity Gold Refinery and ZERA.'],
              ['Checked Before Introduction', 'Title, ownership, licences and the people involved are checked before any opportunity or supplier is introduced.'],
              ['Hanoi Asia Desk', 'A working presence in Vietnam, meeting Vietnamese investors, buyers, equipment suppliers and trade bodies in person.'],
              ['Five Sectors, One Standard', 'Mining, agriculture, energy, manufacturing, and tourism and hospitality all follow the same checks, the same fee rules and the same team.'],
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
                To be the leading Zimbabwean investment facilitation firm on the Zimbabwe-Asia
                corridor by 2030.
              </p>
            </div>
            <div className="p-11 rounded-sm border border-white/10 bg-[#121826]">
              <div className="text-[#C4A04A] text-xs font-black tracking-[0.24em] uppercase mb-5">
                Mission
              </div>
              <p className="font-serif text-3xl font-semibold leading-snug text-white">
                To bring checked investment and trade between Asia and Zimbabwe that benefits
                investors, buyers and Zimbabwe.
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
              MZM was founded by Zimbabweans who saw a gap: Zimbabwe has minerals, land, produce
              and tourism assets, and wants investment and new export markets, but has had little
              direct contact with the capital and buyers in East and Southeast Asia.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-5">
              We chose Hanoi on purpose. Vietnam is a manufacturing economy that imports the raw
              materials Zimbabwe produces, and its GoGlobal Programme, launched in 2026, encourages
              Vietnamese firms to invest abroad, with Africa named as a market.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              Zimbabwe's 2026 reforms, from processing requirements in mining to new energy and
              industrial policies, mean new investors need a partner who knows the rules on the
              ground. MZM was built to be that partner.
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
              Processing and <span className="text-[#C4A04A] font-semibold">value addition in Zimbabwe</span>
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
              Our Role
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold mb-14 max-w-xl leading-tight">
            What MZM actually does{' '}
            <span className="text-[#C4A04A] italic font-medium">in practice.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['01', 'Checking Opportunities', 'MZM checks title, ownership, licences and the people involved before any opportunity or supplier is presented. Opportunities that fail the checks are not presented.'],
              ['02', 'Working Through Institutions', 'MZM prepares clients for ZIDA licensing, sector ministry approvals, ZERA registration and export procedures, working with licensed counsel. Applications are made in the client\'s own name.'],
              ['03', 'Connecting Two Markets', 'MZM connects Zimbabwean projects and producers with Asian investors, buyers and equipment suppliers, through relationships built in person in Hanoi and in Zimbabwe.'],
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

      {/* OFFICES */}
      <section id="offices" className="py-24 bg-[#080C14] border-t border-white/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.22em] uppercase">Our Offices</span>
          </div>
          <h2 className="font-serif text-4xl font-bold mb-12 max-w-xl leading-tight">
            One firm,{' '}
            <span className="text-[#C4A04A] italic font-medium">two bases.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              ['Headquarters', 'Bulawayo, Zimbabwe', 'Project origination, field verification, regulatory approvals and delivery on the ground.', '/images/zimbabwe-landscape.jpg', 'Grassland and hills in Zimbabwe'],
              ['Asia Desk', 'Hanoi, Vietnam', 'Investor, buyer and supplier relationships across Vietnam and Southeast Asia.', '/images/hanoi.jpg', 'Lake and skyline in Hanoi'],
            ].map(([kind, city, desc, img, alt]) => (
              <div key={city} className="border border-white/10 bg-[#121826]">
                <div className="aspect-[16/9] overflow-hidden"><img src={img} alt={alt} className="w-full h-full object-cover" /></div>
                <div className="p-8">
                  <div className="text-[#C4A04A] text-xs font-black tracking-[0.2em] uppercase mb-2">{kind}</div>
                  <h3 className="font-serif text-3xl font-semibold mb-3">{city}</h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
