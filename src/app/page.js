'use client'
import Link from 'next/link'
import NewsTicker from '../components/NewsTicker'
import { useLang } from '../context/LanguageContext'
import { practices } from '../lib/practices'

// Homepage copy in English and Vietnamese. Chinese falls back to English.
const en = {
  eyebrow: 'Mekong Zambezi Meridian Consultants',
  h1: ['One team in', 'Zimbabwe and Vietnam.'],
  sub: 'We help Asian companies invest in Zimbabwe, and help Zimbabwean producers sell to Asia. Our Managing Director leads the Asia desk in Hanoi. Our Commercial Director runs our operations in Zimbabwe.',
  cta1: 'Invest in Zimbabwe',
  cta2: 'Buy from Zimbabwe',
  stats: [['5', 'Sectors, one standard'], ['2', 'Countries, one team'], ['2', 'Directions: investment in, exports out'], ['48hr', 'Reply to every enquiry']],
  sectorsLabel: 'Our Business',
  sectorsTitle: ['Five sectors.', 'One standard.'],
  sectorsSub: 'We work in the sectors where Zimbabwe most wants investment, and we apply the same checks in each.',
  explore: 'Explore',
  sectorText: {},
  viewAll: 'View all sectors',
  teamLabel: 'Why MZM',
  teamTitle: ['A named person', 'in each country.'],
  teamSub: 'You deal with the same small team from first meeting to delivery, in Vietnam and in Zimbabwe.',
  team: [
    ['Hanoi, Vietnam', 'Andy Moyo', 'Managing Director', 'Meets Vietnamese and Asian investors, buyers and trade bodies, and leads every engagement.'],
    ['Zimbabwe', 'Ebern Moyo', 'Commercial Director', 'Runs MZM’s operations in Zimbabwe: checks opportunities, works with Zimbabwean institutions and manages delivery on the ground.'],
  ],
  teamLink: 'Meet the team',
  corridorLabel: 'Flagship Programme',
  corridorTitle: ['The Zimbabwe-Vietnam Corridor.', 'Two directions, one team.'],
  corridorBody: 'We bring Vietnamese investment into Zimbabwe, and we take Zimbabwean products to Vietnamese buyers. Our Hanoi desk works with companies in Vietnam. Our Zimbabwe team checks every opportunity and supplier on the ground.',
  into: ['Into Zimbabwe', ['Investment in processing and industry', 'Equipment and solar technology', 'Processing and supply-chain skills', 'Hotel and hospitality investment']],
  out: ['Into Asia', ['Tobacco and cotton', 'Nuts, fruit and processed foods', 'Leather and hides', 'Processed minerals']],
  corridorCta1: 'Invest in Zimbabwe',
  corridorCta2: 'Buy from Zimbabwe',
  trustLabel: 'How We Protect Our Clients',
  trustTitle: ['Three commitments', 'in every sector.'],
  trust: [
    ['01', 'We check before we introduce', 'Before any introduction, we check title, ownership and licences with the relevant Zimbabwean authority, and we check the people behind them.'],
    ['02', 'Every fee in writing', 'Fees are agreed in a signed letter and disclosed to every party before work begins.'],
    ['03', 'No paid access', 'We work through ZIDA, ZimTrade, the ministries and the official sales channels. We never pay, or promise payment to, any official.'],
  ],
  instLabel: 'Official Channels',
  instTitle: ['The institutions', 'our clients work through.'],
  instNote: 'MZM is a private firm and does not represent any government body.',
  zim: ['Zimbabwe', ['Zimbabwe Investment and Development Agency (ZIDA)', 'ZimTrade', 'Ministry of Mines and Mining Development', 'Minerals Marketing Corporation of Zimbabwe (MMCZ)', 'Fidelity Gold Refinery', 'Ministry of Industry and Commerce', 'Zimbabwe Energy Regulatory Authority (ZERA)', 'Zimbabwe Tourism Authority']],
  vn: ['Vietnam', ['Vietnam Chamber of Commerce and Industry (VCCI)', 'Ministry of Industry and Trade and the Vietnam Trade Promotion Agency (GoGlobal Programme)', 'Ministry of Finance (outward investment registration)', 'State Bank of Vietnam (foreign exchange for outward investment)', 'Plant Production and Protection Department (fruit market access)', 'Sector associations: textiles, leather, tobacco, fruit, steel and energy']],
  ctaTitle: 'Have a project or a product in mind?',
  ctaSub: 'Tell us what you are looking for. We reply within 48 hours, from Hanoi or from Zimbabwe.',
  ctaBtn: 'Contact Us',
}

const vi = {
  eyebrow: 'Mekong Zambezi Meridian Consultants',
  h1: ['Một đội ngũ tại', 'Zimbabwe và Việt Nam.'],
  sub: 'Chúng tôi giúp doanh nghiệp châu Á đầu tư vào Zimbabwe và giúp nhà sản xuất Zimbabwe bán hàng sang châu Á. Giám đốc Điều hành của chúng tôi phụ trách văn phòng châu Á tại Hà Nội. Giám đốc Thương mại điều hành hoạt động của chúng tôi tại Zimbabwe.',
  cta1: 'Đầu tư vào Zimbabwe',
  cta2: 'Mua hàng từ Zimbabwe',
  stats: [['5', 'Lĩnh vực, một tiêu chuẩn'], ['2', 'Quốc gia, một đội ngũ'], ['2', 'Chiều: đầu tư vào, xuất khẩu ra'], ['48 giờ', 'Phản hồi mọi yêu cầu']],
  sectorsLabel: 'Lĩnh Vực Hoạt Động',
  sectorsTitle: ['Năm lĩnh vực.', 'Một tiêu chuẩn.'],
  sectorsSub: 'Chúng tôi hoạt động trong các lĩnh vực Zimbabwe ưu tiên thu hút đầu tư nhất, và áp dụng cùng một quy trình kiểm tra cho mỗi lĩnh vực.',
  explore: 'Xem chi tiết',
  sectorText: {
    mining: ['Khai khoáng và Chế biến', 'Đầu tư vào crôm, lithium, vàng và các khoáng sản khác, với quặng được chế biến ngay tại Zimbabwe.'],
    agriculture: ['Nông nghiệp và Chế biến Nông sản', 'Đầu tư vào chế biến, kho bãi và chuỗi lạnh, cùng kết nối người mua châu Á cho thuốc lá, bông, các loại hạt và trái cây của Zimbabwe.'],
    energy: ['Năng lượng', 'Điện mặt trời và lưu trữ cho mỏ, nhà máy chế biến và nhà máy sản xuất, với thiết bị từ các nhà sản xuất châu Á.'],
    manufacturing: ['Sản xuất và Khu Công nghiệp', 'Lựa chọn địa điểm và gia nhập Đặc khu Kinh tế cho nhà sản xuất châu Á trong dệt may, da giày, thực phẩm và chế biến kim loại.'],
    tourism: ['Du lịch và Khách sạn', 'Đầu tư khách sạn, khu nghỉ dưỡng và trung tâm hội nghị tại các điểm du lịch chính của Zimbabwe.'],
  },
  viewAll: 'Xem tất cả lĩnh vực',
  teamLabel: 'Vì Sao Chọn MZM',
  teamTitle: ['Một người phụ trách', 'tại mỗi quốc gia.'],
  teamSub: 'Bạn làm việc với cùng một đội ngũ từ buổi gặp đầu tiên đến khi hoàn tất, tại Việt Nam và tại Zimbabwe.',
  team: [
    ['Hà Nội, Việt Nam', 'Andy Moyo', 'Giám đốc Điều hành', 'Làm việc với nhà đầu tư, người mua và các hiệp hội thương mại Việt Nam và châu Á, và phụ trách mọi dự án.'],
    ['Zimbabwe', 'Ebern Moyo', 'Giám đốc Thương mại', 'Điều hành hoạt động của MZM tại Zimbabwe: kiểm tra cơ hội, làm việc với các cơ quan Zimbabwe và quản lý triển khai tại chỗ.'],
  ],
  teamLink: 'Gặp gỡ đội ngũ',
  corridorLabel: 'Chương Trình Trọng Điểm',
  corridorTitle: ['Hành Lang Zimbabwe - Việt Nam.', 'Hai chiều, một đội ngũ.'],
  corridorBody: 'Chúng tôi đưa đầu tư của Việt Nam vào Zimbabwe và đưa sản phẩm Zimbabwe đến người mua Việt Nam. Văn phòng Hà Nội làm việc với doanh nghiệp tại Việt Nam. Đội ngũ tại Zimbabwe kiểm tra mọi cơ hội và nhà cung cấp tại chỗ.',
  into: ['Vào Zimbabwe', ['Đầu tư vào chế biến và công nghiệp', 'Thiết bị và công nghệ điện mặt trời', 'Kỹ năng chế biến và chuỗi cung ứng', 'Đầu tư khách sạn và dịch vụ lưu trú']],
  out: ['Vào châu Á', ['Thuốc lá và bông', 'Các loại hạt, trái cây và thực phẩm chế biến', 'Da thô và da thuộc', 'Khoáng sản đã chế biến']],
  corridorCta1: 'Đầu tư vào Zimbabwe',
  corridorCta2: 'Mua hàng từ Zimbabwe',
  trustLabel: 'Cách Chúng Tôi Bảo Vệ Khách Hàng',
  trustTitle: ['Ba cam kết', 'trong mọi lĩnh vực.'],
  trust: [
    ['01', 'Kiểm tra trước khi giới thiệu', 'Trước mọi giới thiệu, chúng tôi kiểm tra quyền sở hữu, giấy phép với cơ quan có thẩm quyền của Zimbabwe, và kiểm tra những người đứng sau.'],
    ['02', 'Mọi khoản phí đều bằng văn bản', 'Phí được thỏa thuận bằng thư ký kết và công khai với tất cả các bên trước khi bắt đầu.'],
    ['03', 'Không trả tiền để tiếp cận', 'Chúng tôi làm việc qua ZIDA, ZimTrade, các bộ ngành và kênh bán hàng chính thức. Chúng tôi không bao giờ trả, hoặc hứa trả, tiền cho bất kỳ quan chức nào.'],
  ],
  instLabel: 'Kênh Chính Thức',
  instTitle: ['Các cơ quan', 'khách hàng của chúng tôi làm việc cùng.'],
  instNote: 'MZM là doanh nghiệp tư nhân và không đại diện cho bất kỳ cơ quan nhà nước nào.',
  zim: ['Zimbabwe', ['Cơ quan Đầu tư và Phát triển Zimbabwe (ZIDA)', 'ZimTrade', 'Bộ Mỏ và Phát triển Khai khoáng', 'Tổng công ty Tiếp thị Khoáng sản Zimbabwe (MMCZ)', 'Fidelity Gold Refinery', 'Bộ Công nghiệp và Thương mại', 'Cơ quan Quản lý Năng lượng Zimbabwe (ZERA)', 'Cơ quan Du lịch Zimbabwe']],
  vn: ['Việt Nam', ['Liên đoàn Thương mại và Công nghiệp Việt Nam (VCCI)', 'Bộ Công Thương và Cục Xúc tiến Thương mại (Chương trình GoGlobal)', 'Bộ Tài chính (đăng ký đầu tư ra nước ngoài)', 'Ngân hàng Nhà nước Việt Nam (ngoại hối cho đầu tư ra nước ngoài)', 'Cục Trồng trọt và Bảo vệ Thực vật (mở cửa thị trường trái cây)', 'Các hiệp hội ngành: dệt may, da giày, thuốc lá, rau quả, thép và năng lượng']],
  ctaTitle: 'Bạn có dự án hoặc sản phẩm cần tìm?',
  ctaSub: 'Hãy cho chúng tôi biết nhu cầu của bạn. Chúng tôi phản hồi trong vòng 48 giờ, từ Hà Nội hoặc từ Zimbabwe.',
  ctaBtn: 'Liên Hệ',
}

const Arrow = ({ cls = 'w-3 h-3' }) => (
  <svg className={`${cls} group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
)

const Label = ({ children }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-7 h-px bg-[#C4A04A]" />
    <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{children}</span>
  </div>
)

export default function Home() {
  const { lang } = useLang()
  const c = lang === 'vi' ? vi : en

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden">
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.jpg" className="absolute inset-0 w-full h-full object-cover">
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/70 via-[#080C14]/55 to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.25em] uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[82px] font-serif font-bold leading-none mb-6" style={{ maxWidth: '900px' }}>
            {c.h1[0]}<br /><span className="text-[#C4A04A] italic">{c.h1[1]}</span>
          </h1>
          <p className="text-gray-200 text-lg font-light max-w-2xl mb-10 leading-relaxed">{c.sub}</p>
          <div className="flex flex-wrap gap-4 items-center mb-16">
            <Link href="/business" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">{c.cta1}</Link>
            <Link href="/corridor#source" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/50 hover:bg-[#C4A04A]/10 transition-colors">{c.cta2}</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-8 gap-y-6">
            {c.stats.map(([num, label]) => (
              <div key={label} className="pr-6 border-r border-white/10 last:border-0">
                <div className="text-[#C4A04A] font-serif font-bold text-4xl leading-none mb-1">{num}</div>
                <div className="text-gray-400 text-xs font-medium leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsTicker />

      {/* FIVE SECTORS, EQUAL WEIGHT */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <Label>{c.sectorsLabel}</Label>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">{c.sectorsTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.sectorsTitle[1]}</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{c.sectorsSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {practices.map((p) => {
              const [title, summary] = c.sectorText[p.slug] || [p.title, p.summary]
              return (
                <Link key={p.slug} href={p.href} className="group relative overflow-hidden border border-white/10 hover:border-[#C4A04A]/50 transition-colors min-h-[420px] flex flex-col justify-end">
                  <img src={p.image} alt={p.imageAlt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/80 to-[#080C14]/10" />
                  <div className="relative p-6">
                    <div className="font-serif text-2xl font-bold text-[#C4A04A] mb-2">{p.num}</div>
                    <h3 className="font-serif text-2xl font-semibold mb-2 leading-snug">{title}</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">{summary}</p>
                    <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">{c.explore} <Arrow /></span>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-right">
            <Link href="/business" className="group text-[#C4A04A] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">{c.viewAll} <Arrow cls="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* TEAM IN TWO COUNTRIES */}
      <section className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div>
            <Label>{c.teamLabel}</Label>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{c.teamTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.teamTitle[1]}</span></h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">{c.teamSub}</p>
            <Link href="/team" className="group text-[#C4A04A] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">{c.teamLink} <Arrow cls="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.team.map(([place, name, role, body]) => (
              <div key={name} className="border border-white/10 bg-[#080C14] p-8 border-t-2 border-t-[#C4A04A]">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4">{place}</div>
                <div className="font-serif text-3xl font-semibold">{name}</div>
                <div className="text-[#C4A04A] text-sm font-semibold mb-4">{role}</div>
                <p className="text-gray-300 font-light leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORRIDOR */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundImage: 'url(/images/hanoi.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#080C14]/90" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Label>{c.corridorLabel}</Label>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{c.corridorTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.corridorTitle[1]}</span></h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-10">{c.corridorBody}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/corridor#invest" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">{c.corridorCta1}</Link>
              <Link href="/corridor#source" className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">{c.corridorCta2}</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[c.into, c.out].map(([title, items]) => (
              <div key={title} className="bg-[#080C14]/85 p-8">
                <h3 className="font-serif text-2xl font-semibold mb-5 text-[#C4A04A]">{title}</h3>
                <ul className="space-y-3">
                  {items.map((it) => <li key={it} className="flex gap-3 text-sm text-gray-200 font-light"><span className="text-[#C4A04A] shrink-0">—</span>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <Label>{c.trustLabel}</Label>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-14">{c.trustTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.trustTitle[1]}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {c.trust.map(([num, title, body]) => (
              <div key={num} className="bg-[#080C14] p-10">
                <div className="font-serif text-4xl font-bold text-[#C4A04A]/30 mb-6">{num}</div>
                <h3 className="font-serif text-2xl font-semibold mb-4 leading-snug">{title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="py-24 bg-[#0A0E18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <Label>{c.instLabel}</Label>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">{c.instTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.instTitle[1]}</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{c.instNote}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[c.zim, c.vn].map(([country, items]) => (
              <div key={country} className="border border-white/10 bg-[#080C14]">
                <div className="px-8 py-5 border-b border-white/10 font-serif text-2xl font-semibold text-[#C4A04A]">{country}</div>
                <ul>
                  {items.map((it) => <li key={it} className="px-8 py-4 border-b border-white/5 last:border-0 text-sm text-gray-200 font-light">{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{c.ctaTitle}</h2>
            <p className="text-gray-400 font-light">{c.ctaSub}</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">{c.ctaBtn}</Link>
        </div>
      </section>
    </>
  )
}
