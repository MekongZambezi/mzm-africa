'use client'
import Link from 'next/link'
import NewsTicker from '../components/NewsTicker'
import { useLang } from '../context/LanguageContext'
import { practices } from '../lib/practices'

// Homepage copy in English and Vietnamese. Chinese falls back to English.
const en = {
  eyebrow: 'Mekong Zambezi Meridian Consultants',
  h1: ['Building trade between', 'Zimbabwe and Vietnam.'],
  sub: 'Asian investment into Zimbabwe. Zimbabwean products into Asia.',
  cta1: 'Discover what we do',
  cta2: 'Contact us',
  cta3: ['Two Economies', ['What each country', 'brings to the other.'], 'Zimbabwe’s development strategy and Vietnam’s GoGlobal Programme point at many of the same sectors. We work where they overlap.', [['For Investors', 'Invest in Zimbabwe', 'Checked opportunities in five sectors.', '/business'], ['For Buyers', 'Buy from Zimbabwe', 'Verified producers of tobacco, cotton, nuts, fruit and more.', '/corridor#source'], ['For Zimbabwean Producers', 'Sell into Vietnam', 'Buyer introductions and export support.', '/corridor#producers']]],
  stats: [['Zimbabwe', ['Lithium, chrome, gold and other minerals', 'Cotton, tobacco, nuts and fruit', 'Special Economic Zones with tax incentives', 'Victoria Falls and five UNESCO World Heritage Sites']], ['Vietnam', ['Factories that import raw materials', 'Processing, machinery and solar equipment', 'Companies investing abroad under GoGlobal', '1.71 million tonnes of cotton imported in 2025']]],
  sectorsLabel: 'Our Business',
  sectorsTitle: ['Five sectors.', 'One standard.'],
  sectorsSub: 'We work in the sectors where Zimbabwe most wants investment, and we apply the same checks in each.',
  explore: 'Explore',
  sectorText: {},
  viewAll: 'View all sectors',
  teamLabel: 'Why MZM',
  teamTitle: ['Zimbabwe and Vietnam,', 'doing business directly.'],
  teamSub: 'Zimbabwe has no embassy in Hanoi, and Vietnam has none in Harare. MZM works on the ground in both countries, so you deal with the same small team from first meeting to delivery.',
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
  instLink: 'See what each institution does',
  zimShort: ['ZIDA', 'ZimTrade', 'Ministry of Mines', 'MMCZ', 'Fidelity Gold Refinery', 'Ministry of Industry and Commerce', 'ZERA', 'TIMB', 'Zimbabwe Tourism Authority'],
  vnShort: ['VCCI', 'Ministry of Industry and Trade', 'VIETRADE (GoGlobal)', 'Ministry of Finance', 'State Bank of Vietnam', 'Plant Production and Protection Department'],
  zim: ['Zimbabwe', ['Zimbabwe Investment and Development Agency (ZIDA)', 'ZimTrade', 'Ministry of Mines and Mining Development', 'Minerals Marketing Corporation of Zimbabwe (MMCZ)', 'Fidelity Gold Refinery', 'Ministry of Industry and Commerce', 'Zimbabwe Energy Regulatory Authority (ZERA)', 'Zimbabwe Tourism Authority']],
  vn: ['Vietnam', ['Vietnam Chamber of Commerce and Industry (VCCI)', 'Ministry of Industry and Trade and the Vietnam Trade Promotion Agency (GoGlobal Programme)', 'Ministry of Finance (outward investment registration)', 'State Bank of Vietnam (foreign exchange for outward investment)', 'Plant Production and Protection Department (fruit market access)', 'Sector associations: textiles, leather, tobacco, fruit, steel and energy']],
  ctaTitle: 'Have a project or a product in mind?',
  ctaSub: 'Tell us what you are looking for. We reply within 48 hours, from Hanoi or from Zimbabwe.',
  ctaBtn: 'Contact Us',
}

const vi = {
  eyebrow: 'Mekong Zambezi Meridian Consultants',
  h1: ['Xây dựng thương mại giữa', 'Zimbabwe và Việt Nam.'],
  sub: 'Đầu tư châu Á vào Zimbabwe. Sản phẩm Zimbabwe vào châu Á.',
  cta1: 'Tìm hiểu về chúng tôi',
  cta2: 'Liên hệ',
  cta3: ['Hai Nền Kinh Tế', ['Mỗi quốc gia', 'mang lại gì cho nhau.'], 'Chiến lược phát triển của Zimbabwe và Chương trình GoGlobal của Việt Nam cùng hướng tới nhiều lĩnh vực chung. Chúng tôi làm việc ở nơi hai bên gặp nhau.', [['Dành cho Nhà Đầu Tư', 'Đầu tư vào Zimbabwe', 'Cơ hội đã được kiểm tra trong năm lĩnh vực.', '/business'], ['Dành cho Người Mua', 'Mua hàng từ Zimbabwe', 'Nhà sản xuất thuốc lá, bông, các loại hạt, trái cây đã được thẩm định.', '/corridor#source'], ['Dành cho Nhà Sản Xuất Zimbabwe', 'Bán hàng vào Việt Nam', 'Kết nối người mua và hỗ trợ xuất khẩu.', '/corridor#producers']]],
  stats: [['Zimbabwe', ['Lithium, crôm, vàng và các khoáng sản khác', 'Bông, thuốc lá, các loại hạt và trái cây', 'Đặc khu Kinh tế với ưu đãi thuế', 'Thác Victoria và năm Di sản Thế giới UNESCO']], ['Việt Nam', ['Nhà máy nhập khẩu nguyên liệu', 'Thiết bị chế biến, máy móc và điện mặt trời', 'Doanh nghiệp đầu tư ra nước ngoài theo GoGlobal', '1,71 triệu tấn bông nhập khẩu năm 2025']]],
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
  teamTitle: ['Zimbabwe và Việt Nam,', 'làm ăn trực tiếp.'],
  teamSub: 'Zimbabwe không có đại sứ quán tại Hà Nội, và Việt Nam không có đại sứ quán tại Harare. MZM làm việc tại cả hai nước, để bạn làm việc với cùng một đội ngũ từ buổi gặp đầu tiên đến khi hoàn tất.',
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
  instLink: 'Xem vai trò của từng cơ quan',
  zimShort: ['ZIDA', 'ZimTrade', 'Bộ Mỏ', 'MMCZ', 'Fidelity Gold Refinery', 'Bộ Công nghiệp và Thương mại', 'ZERA', 'TIMB', 'Cơ quan Du lịch Zimbabwe'],
  vnShort: ['VCCI', 'Bộ Công Thương', 'Cục Xúc tiến Thương mại (GoGlobal)', 'Bộ Tài chính', 'Ngân hàng Nhà nước', 'Cục Trồng trọt và Bảo vệ Thực vật'],
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
      <style>{`@keyframes mzmFade{0%,40%{opacity:0}50%,90%{opacity:1}100%{opacity:0}}@keyframes mzmZoom{from{transform:scale(1)}to{transform:scale(1.08)}}.mzm-fade{animation:mzmFade 18s ease-in-out infinite}.mzm-zoom{animation:mzmZoom 18s ease-out infinite alternate}@media (prefers-reduced-motion:reduce){.mzm-fade,.mzm-zoom{animation:none}}`}</style>
      <section className="relative h-screen min-h-[640px] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mzm-zoom" style={{ backgroundImage: 'url(/images/zimbabwe-landscape.jpg)' }} />
        <div className="absolute inset-0 bg-cover bg-center mzm-fade" style={{ backgroundImage: 'url(/images/hanoi.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/45 to-[#080C14]/20" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#080C14]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-[0.25em] uppercase">{c.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-serif font-bold leading-[1.0] mb-8">
            <span className="lg:whitespace-nowrap">{c.h1[0]}</span><br /><span className="text-[#C4A04A] italic lg:whitespace-nowrap">{c.h1[1]}</span>
          </h1>
          <p className="text-white text-xl md:text-2xl font-light mb-12 max-w-3xl">{c.sub}</p>
          <div className="flex flex-wrap gap-8 items-center">
            <Link href="/business" className="bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-5 hover:bg-[#E0CA8E] transition-colors">{c.cta1}</Link>
            <Link href="/contact" className="group text-white text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 hover:text-[#C4A04A] transition-colors">{c.cta2} <Arrow cls="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <NewsTicker />

      {/* TWO ECONOMIES */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <Label>{c.cta3[0]}</Label>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">{c.cta3[1][0]}<br /><span className="text-[#C4A04A] italic">{c.cta3[1][1]}</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{c.cta3[2]}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-6">
            {c.stats.map(([title, items]) => (
              <div key={title} className="bg-[#0A0E18] p-10">
                <h3 className="font-serif text-3xl font-semibold mb-6 text-[#C4A04A]">{title}</h3>
                <ul className="space-y-3">
                  {items.map((it) => <li key={it} className="flex gap-3 text-gray-200 font-light"><span className="text-[#C4A04A] shrink-0">—</span>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.cta3[3].map(([who, title, body, href]) => (
              <Link key={href} href={href} className="group border border-white/10 hover:border-[#C4A04A]/50 bg-[#080C14] p-8 transition-colors">
                <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">{who}</div>
                <div className="font-serif text-2xl font-semibold mb-2 group-hover:text-[#C4A04A] transition-colors">{title}</div>
                <p className="text-gray-400 text-sm font-light mb-5">{body}</p>
                <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2"><Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            {[[c.zim[0], c.zimShort], [c.vn[0], c.vnShort]].map(([country, items]) => (
              <div key={country}>
                <div className="font-serif text-2xl font-semibold text-[#C4A04A] mb-4">{country}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => <span key={it} className="text-xs text-gray-200 border border-white/15 px-3 py-2">{it}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8"><Link href="/corridor#channels" className="group text-[#C4A04A] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">{c.instLink} <Arrow cls="w-4 h-4" /></Link></div>
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
