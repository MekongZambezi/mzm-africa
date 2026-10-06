'use client'
import Link from 'next/link'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  if (!t) return null
  const f = t.footer

  return (
    <footer className="bg-[#050810] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">
          <div className="md:col-span-1">
            <img src="/images/mzm-logo.jpg" alt="MZM Africa" className="h-16 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed font-light">{f.desc}</p>
          </div>
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">{f.company}</h4>
            <ul className="space-y-3">
              {f.companyLinks.map((label, i) => (
                <li key={i}><Link href={['/what-we-do', '/opportunity', '/how-we-work', '/about', '/team', '/governance'][i] || '/about'} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">{f.services}</h4>
            <ul className="space-y-3">
              {f.serviceLinks.map((label, i) => (
                <li key={i}><Link href={['/business/mining', '/business/agriculture', '/business/energy', '/business/manufacturing', '/business/tourism', '/corridor'][i] || '/business'} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">{f.contact}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{f.email}</div>
                <a href="mailto:projects@mzmafrica.com" className="hover:text-[#C4A04A] transition-colors">projects@mzmafrica.com</a>
              </li>
              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{f.offices}</div>
                <div>{f.hq}</div>
                <div>{f.asia}</div>
              </li>
              <li>
                <Link href="/contact?type=brief" className="inline-block mt-2 text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-4 py-2 hover:bg-[#C4A04A] hover:text-[#080C14] transition-colors">{f.enquire}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Mekong Zambezi Meridian Consultants. {f.rights}</p>
          <p className="text-xs text-gray-600">{f.registered} · <Link href="/fraud-notice" className="text-gray-400 hover:text-[#C4A04A] transition-colors">{f.fraud}</Link> · <Link href="/governance" className="hover:text-gray-400 transition-colors">{f.companyLinks[3]}</Link> · <Link href="/privacy" className="hover:text-gray-400 transition-colors">{f.privacy}</Link></p>
        </div>
      </div>
    </footer>
  )
}
