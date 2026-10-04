import Link from 'next/link'
import PageHero, { SectionLabel } from '../../components/PageHero'
import { practices } from '../../lib/practices'

export const metadata = {
  title: 'The Zimbabwe-Vietnam Corridor | MZM Africa',
  description: 'A two-way programme: Vietnamese investment into Zimbabwe, and Zimbabwean products to Vietnamese buyers. Managed from Bulawayo and Hanoi.',
}

const doors = [
  { id: 'invest', who: 'For Investors', title: 'Invest in Zimbabwe', body: 'Verified opportunities across our five practices, structured for Zimbabwean law and policy.', cta: 'See investment practices' },
  { id: 'source', who: 'For Buyers and Importers', title: 'Source from Zimbabwe', body: 'Verified Zimbabwean producers of agricultural and processed goods, introduced through our Hanoi desk.', cta: 'See export and market access' },
  { id: 'producers', who: 'For Zimbabwean Producers', title: 'Sell into Vietnam', body: 'Buyer introductions, export documentation and market entry support for growers and processors.', cta: 'Register your interest' },
]

const STATUS = {
  now: { label: 'Supplying Now', cls: 'bg-green-900/40 text-green-400' },
  open: { label: 'Enquiries Welcome', cls: 'bg-[#C4A04A]/10 text-[#C4A04A]' },
  access: { label: 'Awaiting Market Access', cls: 'bg-white/5 text-gray-300' },
}

const products = [
  { title: 'Tobacco', status: 'now', image: '/images/product-tobacco.jpg', alt: 'Cured tobacco leaves', body: 'Flue-cured Virginia leaf from Zimbabwean growers and merchants. Tobacco is already the main product traded between the two countries.' },
  { title: 'Processed and Shelf-Stable Foods', status: 'open', image: '/images/product-foods.jpg', alt: 'Dried fruit and nuts', body: 'Dried fruit, nuts, juice concentrates, tea and coffee. Import requirements are confirmed product by product before any supply commitment.' },
  { title: 'Fresh Fruit', status: 'access', image: '/images/product-fruit.jpg', alt: 'Blueberries growing on the bush', body: 'Blueberries, citrus and avocados. Fresh fruit can be supplied once Vietnam approves import access for each fruit through its plant health process.' },
  { title: 'Processed Minerals', status: 'open', image: '/images/product-minerals.jpg', alt: 'Rolled steel products', body: 'Ferrochrome and other processed metals from licensed Zimbabwean producers, handled with our Mining and Beneficiation practice.' },
]

const exportSteps = [
  ['01', 'Verify the producer', 'Registration, capacity, quality and certification checked in Zimbabwe.'],
  ['02', 'Match the buyer', 'Introductions to Vietnamese importers and processors through our Hanoi desk.'],
  ['03', 'Meet import rules', 'Plant health certificates, product standards and customs documents prepared in advance.'],
  ['04', 'Ship and settle', 'Pre-shipment inspection and payment through recognised banking channels.'],
]

const flows = {
  into: ['Investment capital for processing and agro-industry', 'Equipment, machinery and solar technology', 'Processing and supply-chain expertise', 'Clean mobility for tourism destinations'],
  out: ['Tobacco, horticulture and agricultural produce', 'Processed minerals and metals', 'Verified investment opportunities', 'Access to Southern African markets'],
}

const Arrow = () => (
  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
)

export default function Corridor() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Programme"
        title="The Zimbabwe-Vietnam"
        accent="Corridor."
        lead="A two-way programme. We bring Vietnamese investment into Zimbabwe, and we take Zimbabwean products to Vietnamese buyers. Our team in Bulawayo and our Asia desk in Hanoi manage both directions."
        image="/images/hanoi.jpg"
      />

      {/* THREE DOORS */}
      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {doors.map((d) => (
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
          <SectionLabel>What Flows Each Way</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">One corridor, <span className="text-[#C4A04A] italic">two directions.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[['Into Zimbabwe', flows.into], ['Into Asia', flows.out]].map(([title, items]) => (
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

      {/* EXPORT AND MARKET ACCESS */}
      <section id="source" className="py-24 bg-[#080C14] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <SectionLabel>Export and Market Access</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Zimbabwean products<br /><span className="text-[#C4A04A] italic">for Vietnamese buyers.</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">Each product line shows where it stands today, so buyers know what can be supplied now and what depends on market access approval.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <article key={p.title} className="border border-white/10 bg-[#0A0E18] flex flex-col">
                <div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.alt} className="w-full h-full object-cover" /></div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className={`self-start text-[10px] font-black tracking-widest uppercase px-3 py-1 ${STATUS[p.status].cls}`}>{STATUS[p.status].label}</span>
                  <h3 className="font-serif text-2xl font-semibold leading-snug">{p.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-serif text-3xl font-bold mb-2">How an export deal works</h3>
            <p className="text-gray-400 font-light mb-10 max-w-2xl">The same verification standard we apply to investors applies to every supplier we introduce.</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {exportSteps.map(([num, title, body]) => (
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
          <SectionLabel>Investment into Zimbabwe</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Five <span className="text-[#C4A04A] italic">investment practices.</span></h2>
          <div className="border-t border-white/10">
            {practices.map((p) => (
              <Link key={p.slug} href={p.href} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-10 py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                <span className="flex items-baseline gap-5">
                  <span className="font-serif text-xl text-[#C4A04A]/50 font-bold">{p.num}</span>
                  <span className="font-serif text-2xl md:text-3xl font-semibold group-hover:text-[#C4A04A] transition-colors">{p.title}</span>
                </span>
                <span className="text-gray-400 font-light text-sm md:max-w-md md:text-right">{p.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTAS */}
      <section id="producers" className="py-20 bg-[#080C14] border-t border-white/8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 border border-[#C4A04A]/35" style={{ background: 'linear-gradient(160deg,#1a2135,rgba(18,23,35,0.25))' }}>
            <h2 className="font-serif text-3xl font-bold mb-3">Buying from Zimbabwe?</h2>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">Tell our Hanoi desk what you need. We reply in English or Vietnamese.</p>
            <Link href="/contact" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#E0CA8E] transition-colors">Contact the Trade Desk · Liên Hệ</Link>
          </div>
          <div className="p-10 border border-white/10 bg-[#0A0E18]">
            <h2 className="font-serif text-3xl font-bold mb-3">A Zimbabwean producer?</h2>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">Register your products for verification and buyer introductions in Vietnam.</p>
            <Link href="/contact" className="inline-block text-[#C4A04A] text-xs font-bold tracking-widest uppercase px-8 py-4 border border-[#C4A04A]/40 hover:bg-[#C4A04A]/10 transition-colors">Register as a Supplier</Link>
          </div>
        </div>
      </section>
    </>
  )
}
