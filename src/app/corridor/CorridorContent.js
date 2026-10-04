'use client'
import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'
import { practices } from '../../lib/practices'
import { useLang } from '../../context/LanguageContext'

// Corridor page copy in English and Vietnamese. Chinese falls back to English.
const en = {
  hero: {
    eyebrow: 'Flagship Programme',
    title: 'The Zimbabwe-Vietnam',
    accent: 'Corridor.',
    lead: 'A two-way programme. We bring Vietnamese investment into Zimbabwe, and we take Zimbabwean products to Vietnamese buyers. Our team in Bulawayo and our Asia desk in Hanoi manage both directions.',
  },
  doors: [
    { id: 'invest', who: 'For Investors', title: 'Invest in Zimbabwe', body: 'Verified opportunities across our five practices, structured for Zimbabwean law and policy.', cta: 'See investment practices' },
    { id: 'source', who: 'For Buyers and Importers', title: 'Source from Zimbabwe', body: 'Zimbabwean producers of agricultural and processed goods, verified before introduction through our Hanoi desk.', cta: 'See export and market access' },
    { id: 'producers', who: 'For Zimbabwean Producers', title: 'Sell into Vietnam', body: 'Buyer introductions, export documentation and market entry support for growers and processors.', cta: 'Register your interest' },
  ],
  flowsLabel: 'What Flows Each Way',
  flowsTitle: ['One corridor, ', 'two directions.'],
  flows: [
    ['Into Zimbabwe', ['Investment capital for processing and agro-industry', 'Equipment, machinery and solar technology', 'Processing and supply-chain expertise', 'Clean mobility for tourism destinations']],
    ['Into Asia', ['Tobacco, cotton and horticultural produce', 'Leather, nuts and processed foods', 'Processed minerals and metals', 'Verified investment opportunities']],
  ],
  whyLabel: 'Why the Corridor Works',
  whyTitle: ['Two sets of national priorities ', 'that point the same way.'],
  whyLead: 'Zimbabwe wants investment in value addition and new markets for its exports. Vietnam wants its companies to invest abroad and needs raw materials for its processing industries. The Corridor serves both.',
  priorities: [
    ['Zimbabwe', [
      ['Investment', 'National Development Strategy 2 (2026 to 2030) and the National Industrial Development Policy II call for investment in value addition, agro-processing and mineral beneficiation.'],
      ['Export markets', 'Export earnings are concentrated in a few minerals and a few buyers. ZimTrade and the Horticulture Recovery and Growth Plan prioritise new markets for agricultural and manufactured goods.'],
    ]],
    ['Vietnam', [
      ['Investing abroad', 'The GoGlobal Programme (Decision 626/QD-TTg, 2026), led by the Ministry of Industry and Trade, supports Vietnamese firms investing abroad in agro-processing, textiles, leather and manufacturing, and names Africa as a potential market.'],
      ['Raw materials', 'Vietnam’s processing industries import large volumes of cotton, tobacco and other agricultural raw materials.'],
    ]],
  ],
  status: { now: 'Established Trade', open: 'Enquiries Welcome', access: 'Awaiting Market Access' },
  exportLabel: 'Export and Market Access',
  exportTitle: ['Zimbabwean products', 'for Vietnamese buyers.'],
  exportLead: 'Each product line shows where it stands today, so buyers know which trade is established and what depends on market access approval.',
  products: [
    { title: 'Tobacco', status: 'now', image: '/images/product-tobacco.jpg', alt: 'Cured tobacco leaves', body: 'Flue-cured Virginia leaf supplied through licensed Zimbabwean merchants. Tobacco is already the main product Zimbabwe sells to Vietnam.' },
    { title: 'Processed and Shelf-Stable Foods', status: 'open', image: '/images/product-foods.jpg', alt: 'Dried fruit and nuts', body: 'Dried fruit, nuts, juice concentrates, tea and coffee. Import requirements are confirmed product by product before any supply commitment.' },
    { title: 'Fresh Fruit', status: 'access', image: '/images/product-fruit.jpg', alt: 'Blueberries growing on the bush', body: 'Blueberries, citrus and avocados. Fresh fruit can be supplied once Vietnam approves import access for each fruit through its plant health process.' },
    { title: 'Processed Minerals', status: 'open', image: '/images/product-minerals.jpg', alt: 'Rolled steel products', body: 'Ferrochrome and other processed metals from licensed producers, sold through Zimbabwe’s official mineral marketing channels.' },
  ],
  moreProducts: [
    ['Cotton lint', 'For spinning mills. Vietnam’s textile industry imports most of the cotton it uses.'],
    ['Leather and hides', 'Raw hides and finished leather for footwear and leather goods manufacturers.'],
    ['Macadamia and other nuts', 'In-shell and processed nuts for Asian processors and food importers.'],
  ],
  stepsTitle: 'How an export deal works',
  stepsLead: 'The same verification standard we apply to investors applies to every supplier we introduce.',
  steps: [
    ['01', 'Verify the producer', 'Registration, capacity, quality and certification checked in Zimbabwe.'],
    ['02', 'Match the buyer', 'Introductions to Vietnamese importers and processors through our Hanoi desk.'],
    ['03', 'Meet import rules', 'Plant health certificates, product standards and customs documents prepared in advance.'],
    ['04', 'Ship and settle', 'Pre-shipment inspection, licensed clearing agents, and payment through recognised banking channels.'],
  ],
  investLabel: 'Investment into Zimbabwe',
  investTitle: ['Five ', 'investment practices.'],
  practiceText: {},
  instLabel: 'Official Channels',
  instTitle: ['The institutions ', 'every deal runs through.'],
  instLead: 'MZM does not offer routes around Zimbabwe’s institutions. Every investment, mineral sale and export follows the official channel for it, and we prepare our clients for each one.',
  institutions: [
    ['ZIDA', 'Zimbabwe Investment and Development Agency', 'Investment licences, Special Economic Zone permits and investor registration.'],
    ['ZimTrade', 'National trade development and promotion agency', 'Export development, market information and buyer programmes.'],
    ['MMCZ', 'Minerals Marketing Corporation of Zimbabwe', 'Marketing and sale of minerals other than gold and silver.'],
    ['Fidelity Gold Refinery', 'Gold buying and refining', 'Sale of all gold produced in Zimbabwe.'],
    ['ZERA', 'Zimbabwe Energy Regulatory Authority', 'Licensing and registration of power generation.'],
    ['Sector ministries', 'Mines, Agriculture, Industry and Commerce, Energy, Tourism', 'Sector permits, policy approvals and reserved-sector rules.'],
  ],
  buyerTitle: 'Buying from Zimbabwe?',
  buyerBody: 'Tell our Hanoi desk which products, volumes and specifications you need.',
  buyerCta: 'Contact the Trade Desk',
  producerTitle: 'A Zimbabwean producer?',
  producerBody: 'Register your products for verification and buyer introductions in Vietnam.',
  producerCta: 'Register as a Supplier',
}

const vi = {
  hero: {
    eyebrow: 'Chương Trình Trọng Điểm',
    title: 'Hành Lang',
    accent: 'Zimbabwe - Việt Nam.',
    lead: 'Một chương trình hai chiều. Chúng tôi đưa đầu tư của Việt Nam vào Zimbabwe và đưa sản phẩm của Zimbabwe đến người mua Việt Nam. Đội ngũ tại Bulawayo và văn phòng châu Á tại Hà Nội quản lý cả hai chiều.',
  },
  doors: [
    { id: 'invest', who: 'Dành cho Nhà Đầu Tư', title: 'Đầu tư vào Zimbabwe', body: 'Các cơ hội đã được thẩm định thuộc năm lĩnh vực của chúng tôi, được cấu trúc phù hợp với pháp luật và chính sách của Zimbabwe.', cta: 'Xem các lĩnh vực đầu tư' },
    { id: 'source', who: 'Dành cho Người Mua và Nhà Nhập Khẩu', title: 'Nhập hàng từ Zimbabwe', body: 'Các nhà sản xuất nông sản và hàng chế biến của Zimbabwe, được thẩm định trước khi giới thiệu qua văn phòng Hà Nội.', cta: 'Xem xuất khẩu và tiếp cận thị trường' },
    { id: 'producers', who: 'Dành cho Nhà Sản Xuất Zimbabwe', title: 'Bán hàng vào Việt Nam', body: 'Kết nối người mua, hồ sơ xuất khẩu và hỗ trợ gia nhập thị trường cho người trồng trọt và doanh nghiệp chế biến.', cta: 'Đăng ký quan tâm' },
  ],
  flowsLabel: 'Dòng Chảy Hai Chiều',
  flowsTitle: ['Một hành lang, ', 'hai chiều.'],
  flows: [
    ['Vào Zimbabwe', ['Vốn đầu tư cho chế biến và nông công nghiệp', 'Thiết bị, máy móc và công nghệ điện mặt trời', 'Chuyên môn về chế biến và chuỗi cung ứng', 'Giao thông sạch cho các điểm đến du lịch']],
    ['Vào châu Á', ['Thuốc lá, bông và nông sản làm vườn', 'Da, các loại hạt và thực phẩm chế biến', 'Khoáng sản và kim loại đã qua chế biến', 'Các cơ hội đầu tư đã được thẩm định']],
  ],
  whyLabel: 'Vì Sao Hành Lang Hiệu Quả',
  whyTitle: ['Hai hệ thống ưu tiên quốc gia ', 'cùng một hướng.'],
  whyLead: 'Zimbabwe cần đầu tư vào gia tăng giá trị và thị trường mới cho hàng xuất khẩu. Việt Nam muốn doanh nghiệp của mình đầu tư ra nước ngoài và cần nguyên liệu cho các ngành chế biến. Hành Lang phục vụ cả hai.',
  priorities: [
    ['Zimbabwe', [
      ['Đầu tư', 'Chiến lược Phát triển Quốc gia 2 (2026 đến 2030) và Chính sách Phát triển Công nghiệp Quốc gia II kêu gọi đầu tư vào gia tăng giá trị, chế biến nông sản và chế biến sâu khoáng sản.'],
      ['Thị trường xuất khẩu', 'Kim ngạch xuất khẩu tập trung vào một số ít khoáng sản và một số ít người mua. ZimTrade và Kế hoạch Phục hồi và Tăng trưởng Ngành Làm vườn ưu tiên thị trường mới cho nông sản và hàng chế tạo.'],
    ]],
    ['Việt Nam', [
      ['Đầu tư ra nước ngoài', 'Chương trình GoGlobal (Quyết định 626/QĐ-TTg, 2026) do Bộ Công Thương chủ trì hỗ trợ doanh nghiệp Việt Nam đầu tư ra nước ngoài trong chế biến nông sản, dệt may, da giày và sản xuất, và xác định châu Phi là thị trường tiềm năng.'],
      ['Nguyên liệu', 'Các ngành chế biến của Việt Nam nhập khẩu khối lượng lớn bông, thuốc lá và các nguyên liệu nông sản khác.'],
    ]],
  ],
  status: { now: 'Đã Có Giao Thương', open: 'Tiếp Nhận Yêu Cầu', access: 'Chờ Mở Cửa Thị Trường' },
  exportLabel: 'Xuất Khẩu và Tiếp Cận Thị Trường',
  exportTitle: ['Sản phẩm Zimbabwe', 'cho người mua Việt Nam.'],
  exportLead: 'Mỗi dòng sản phẩm đều ghi rõ tình trạng hiện tại, để người mua biết mặt hàng nào đã có giao thương và mặt hàng nào còn chờ phê duyệt tiếp cận thị trường.',
  products: [
    { title: 'Thuốc lá', status: 'now', image: '/images/product-tobacco.jpg', alt: 'Lá thuốc lá đã sấy', body: 'Lá thuốc lá Virginia sấy lò, cung cấp qua các thương nhân Zimbabwe được cấp phép. Thuốc lá hiện là mặt hàng chính Zimbabwe xuất sang Việt Nam.' },
    { title: 'Thực phẩm chế biến và bảo quản lâu', status: 'open', image: '/images/product-foods.jpg', alt: 'Trái cây sấy và các loại hạt', body: 'Trái cây sấy, các loại hạt, nước ép cô đặc, chè và cà phê. Yêu cầu nhập khẩu được xác nhận theo từng sản phẩm trước mọi cam kết cung ứng.' },
    { title: 'Trái cây tươi', status: 'access', image: '/images/product-fruit.jpg', alt: 'Việt quất trên cây', body: 'Việt quất, cam quýt và bơ. Trái cây tươi chỉ được cung ứng sau khi Việt Nam cấp phép nhập khẩu cho từng loại quả theo quy trình kiểm dịch thực vật.' },
    { title: 'Khoáng sản chế biến', status: 'open', image: '/images/product-minerals.jpg', alt: 'Sản phẩm thép cán', body: 'Ferrochrome và các kim loại chế biến khác từ nhà sản xuất được cấp phép, bán qua các kênh tiếp thị khoáng sản chính thức của Zimbabwe.' },
  ],
  moreProducts: [
    ['Bông xơ', 'Dành cho các nhà máy kéo sợi. Ngành dệt may Việt Nam nhập khẩu phần lớn lượng bông sử dụng.'],
    ['Da thô và da thuộc', 'Da thô và da thành phẩm cho các nhà sản xuất giày dép và đồ da.'],
    ['Mắc ca và các loại hạt khác', 'Hạt nguyên vỏ và hạt chế biến cho doanh nghiệp chế biến và nhà nhập khẩu thực phẩm châu Á.'],
  ],
  stepsTitle: 'Quy trình một giao dịch xuất khẩu',
  stepsLead: 'Tiêu chuẩn thẩm định áp dụng cho nhà đầu tư cũng được áp dụng cho mọi nhà cung cấp chúng tôi giới thiệu.',
  steps: [
    ['01', 'Thẩm định nhà sản xuất', 'Kiểm tra đăng ký, năng lực, chất lượng và chứng nhận tại Zimbabwe.'],
    ['02', 'Kết nối người mua', 'Giới thiệu đến nhà nhập khẩu và doanh nghiệp chế biến Việt Nam qua văn phòng Hà Nội.'],
    ['03', 'Đáp ứng quy định nhập khẩu', 'Chuẩn bị trước giấy chứng nhận kiểm dịch thực vật, tiêu chuẩn sản phẩm và hồ sơ hải quan.'],
    ['04', 'Giao hàng và thanh toán', 'Giám định trước khi giao hàng, đại lý thông quan được cấp phép và thanh toán qua các kênh ngân hàng được công nhận.'],
  ],
  investLabel: 'Đầu Tư vào Zimbabwe',
  investTitle: ['Năm ', 'lĩnh vực đầu tư.'],
  practiceText: {
    mining: ['Khai khoáng và Chế biến sâu', 'Đầu tư tuân thủ pháp luật vào crôm, lithium và ngành khoáng sản của Zimbabwe, được cấu trúc để chế biến trong nước theo khung chính sách chế biến sâu và Khoáng sản Chiến lược năm 2026.'],
    agriculture: ['Nông nghiệp và Chế biến Nông sản', 'Đầu tư vào chế biến, kho bãi và chuỗi lạnh, cùng kết nối người mua châu Á cho thuốc lá, bông, nông sản làm vườn và thực phẩm chế biến của Zimbabwe.'],
    energy: ['Năng lượng', 'Điện tự dùng và thiết bị điện mặt trời cho khai khoáng, chế biến và nông công nghiệp, tìm nguồn qua văn phòng châu Á của chúng tôi.'],
    manufacturing: ['Sản xuất và Khu Công nghiệp', 'Lựa chọn địa điểm và hỗ trợ gia nhập Đặc khu Kinh tế cho các nhà sản xuất châu Á, tập trung vào dệt may, da giày và công nghiệp chế biến.'],
    tourism: ['Du lịch và Giao thông', 'Đầu tư khách sạn, khu nghỉ dưỡng và hợp tác giao thông sạch cho các điểm đến du lịch của Zimbabwe.'],
  },
  instLabel: 'Kênh Chính Thức',
  instTitle: ['Các cơ quan ', 'mọi giao dịch đều đi qua.'],
  instLead: 'MZM không cung cấp con đường vòng qua các cơ quan của Zimbabwe. Mọi khoản đầu tư, giao dịch khoáng sản và hàng xuất khẩu đều đi qua kênh chính thức tương ứng, và chúng tôi chuẩn bị cho khách hàng ở từng bước.',
  institutions: [
    ['ZIDA', 'Cơ quan Đầu tư và Phát triển Zimbabwe', 'Giấy phép đầu tư, giấy phép Đặc khu Kinh tế và đăng ký nhà đầu tư.'],
    ['ZimTrade', 'Cơ quan phát triển và xúc tiến thương mại quốc gia', 'Phát triển xuất khẩu, thông tin thị trường và chương trình kết nối người mua.'],
    ['MMCZ', 'Tổng công ty Tiếp thị Khoáng sản Zimbabwe', 'Tiếp thị và bán các loại khoáng sản ngoài vàng và bạc.'],
    ['Fidelity Gold Refinery', 'Thu mua và tinh luyện vàng', 'Bán toàn bộ vàng được sản xuất tại Zimbabwe.'],
    ['ZERA', 'Cơ quan Quản lý Năng lượng Zimbabwe', 'Cấp phép và đăng ký các dự án phát điện.'],
    ['Các bộ ngành', 'Mỏ, Nông nghiệp, Công nghiệp và Thương mại, Năng lượng, Du lịch', 'Giấy phép ngành, phê duyệt chính sách và quy định về các ngành dành riêng cho công dân Zimbabwe.'],
  ],
  buyerTitle: 'Bạn muốn mua hàng từ Zimbabwe?',
  buyerBody: 'Hãy cho văn phòng Hà Nội biết sản phẩm, khối lượng và quy cách bạn cần.',
  buyerCta: 'Liên Hệ Bộ Phận Thương Mại',
  producerTitle: 'Bạn là nhà sản xuất Zimbabwe?',
  producerBody: 'Đăng ký sản phẩm để được thẩm định và kết nối với người mua tại Việt Nam.',
  producerCta: 'Đăng Ký Nhà Cung Cấp',
}

const Arrow = () => (
  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
)

const Title = ([plain, accent]) => (
  <>{plain}<span className="text-[#C4A04A] italic">{accent}</span></>
)

export default function CorridorContent() {
  const { lang } = useLang()
  const c = lang === 'vi' ? vi : en
  const STATUS = {
    now: { label: c.status.now, cls: 'bg-green-900/40 text-green-400' },
    open: { label: c.status.open, cls: 'bg-[#C4A04A]/10 text-[#C4A04A]' },
    access: { label: c.status.access, cls: 'bg-white/5 text-gray-300' },
  }

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} accent={c.hero.accent} lead={c.hero.lead} image="/images/hanoi.jpg" />

      {/* THREE DOORS */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.doors.map((d) => (
              <a key={d.id} href={`#${d.id}`} className="group bg-[#080C14] p-10 hover:bg-[#0D1320] transition-colors relative">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C4A04A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-[#C4A04A] text-[10px] font-black tracking-widest uppercase mb-4">{d.who}</div>
                <h2 className="font-serif text-3xl font-semibold mb-3">{d.title}</h2>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">{d.body}</p>
                <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase flex items-center gap-2">{d.cta} <Arrow /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT FLOWS EACH WAY */}
      <section className="py-20 bg-[#0A0E18] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.flowsLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{Title(c.flowsTitle)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.flows.map(([title, items]) => (
              <div key={title} className="border border-white/10 bg-[#080C14] p-10">
                <h3 className="font-serif text-2xl font-semibold mb-6">{title}</h3>
                <ul className="space-y-3">
                  {items.map((i) => (
                    <li key={i} className="flex gap-3 text-gray-300 font-light border-b border-white/5 pb-3 last:border-0">
                      <span className="text-[#C4A04A] shrink-0">—</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY FIT */}
      <section className="py-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.whyLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{Title(c.whyTitle)}</h2>
          <p className="text-gray-400 font-light max-w-3xl mb-12 leading-relaxed">{c.whyLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.priorities.map(([country, items]) => (
              <div key={country} className="border border-white/10 bg-[#0A0E18] p-10">
                <h3 className="font-serif text-3xl font-semibold mb-6 text-[#C4A04A]">{country}</h3>
                {items.map(([title, body]) => (
                  <div key={title} className="py-5 border-t border-white/10">
                    <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">{title}</div>
                    <p className="text-gray-200 font-light leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT AND MARKET ACCESS */}
      <section id="source" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <SectionLabel>{c.exportLabel}</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">{c.exportTitle[0]}<br /><span className="text-[#C4A04A] italic">{c.exportTitle[1]}</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">{c.exportLead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.products.map((p) => (
              <article key={p.title} className="border border-white/10 bg-[#0A0E18] flex flex-col">
                <div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" /></div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className={`self-start text-[10px] font-black tracking-widest uppercase px-3 py-1 ${STATUS[p.status].cls}`}>{STATUS[p.status].label}</span>
                  <h3 className="font-serif text-2xl font-semibold leading-snug">{p.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.moreProducts.map(([title, body]) => (
              <div key={title} className="bg-[#0A0E18] p-6">
                <span className={`inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 mb-3 ${STATUS.open.cls}`}>{STATUS.open.label}</span>
                <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-serif text-3xl font-bold mb-2">{c.stepsTitle}</h3>
            <p className="text-gray-400 font-light mb-10 max-w-2xl">{c.stepsLead}</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.steps.map(([num, title, body]) => (
                <li key={num}>
                  <div className="font-serif text-3xl text-[#C4A04A] font-semibold mb-3 leading-none">{num}</div>
                  <div className="w-full h-0.5 mb-5" style={{ background: 'linear-gradient(90deg,#C4A04A,transparent)' }} />
                  <h4 className="font-sans font-bold text-lg mb-2 text-white">{title}</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* INVEST */}
      <section id="invest" className="py-24 bg-[#0A0E18] border-t border-white/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.investLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">{Title(c.investTitle)}</h2>
          <div className="border-t border-white/10">
            {practices.map((p) => {
              const [title, summary] = c.practiceText[p.slug] || [p.title, p.summary]
              return (
                <Link key={p.slug} href={p.href} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-10 py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                  <span className="flex items-baseline gap-5">
                    <span className="font-serif text-xl text-[#C4A04A]/50 font-bold">{p.num}</span>
                    <span className="font-serif text-2xl md:text-3xl font-semibold group-hover:text-[#C4A04A] transition-colors">{title}</span>
                  </span>
                  <span className="text-gray-400 font-light text-sm md:max-w-md md:text-right">{summary}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="py-24 bg-[#080C14] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>{c.instLabel}</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{Title(c.instTitle)}</h2>
          <p className="text-gray-400 font-light max-w-3xl mb-12 leading-relaxed">{c.instLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.institutions.map(([abbr, name, role]) => (
              <div key={abbr} className="bg-[#080C14] p-8">
                <div className="font-serif text-2xl font-bold text-[#C4A04A] mb-1">{abbr}</div>
                <div className="text-gray-400 text-xs font-medium mb-4">{name}</div>
                <p className="text-gray-200 text-sm font-light leading-relaxed">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAS */}
      <section id="producers" className="py-20 bg-[#080C14] border-t border-white/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 border border-[#C4A04A]/35" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <h2 className="font-serif text-3xl font-bold mb-3">{c.buyerTitle}</h2>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">{c.buyerBody}</p>
            <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">{c.buyerCta}</Link>
          </div>
          <div className="p-10 border border-white/10 bg-[#0A0E18]">
            <h2 className="font-serif text-3xl font-bold mb-3">{c.producerTitle}</h2>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">{c.producerBody}</p>
            <Link href="/contact" className="inline-block text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">{c.producerCta}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
