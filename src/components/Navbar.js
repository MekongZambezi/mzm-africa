'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '../context/LanguageContext'

const LANG_LABELS = { en: 'EN', vi: 'VI' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, switchLang, t } = useLang()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!t) return null

  const withLinks = (labels, hrefs, fallback) => labels.map((l, i) => ({ label: l, href: hrefs[i] || fallback }))

  const navItems = [
    { label: t.nav.capabilities, href: '/what-we-do', children: withLinks(t.nav.capabilitiesSub, ['/what-we-do#capability-01', '/what-we-do#capability-02', '/what-we-do#capability-03', '/what-we-do#capability-04'], '/what-we-do') },
    { label: t.nav.sectors, href: '/business', children: withLinks(t.nav.sectorsSub, ['/business', '/business/mining', '/business/agriculture', '/business/energy', '/business/manufacturing', '/business/tourism'], '/business') },
    { label: t.nav.opportunity, href: '/opportunity', children: withLinks(t.nav.opportunitySub, ['/opportunity#context', '/opportunity#thesis'], '/opportunity') },
    { label: t.nav.approach, href: '/how-we-work', children: withLinks(t.nav.approachSub, ['/how-we-work#framework', '/how-we-work#commitments', '/governance', '/fraud-notice'], '/how-we-work') },
    { label: t.nav.corridor, href: '/corridor', children: withLinks(t.nav.corridorSub, ['/corridor#invest', '/corridor#source', '/corridor#producers'], '/corridor') },
    { label: t.nav.about, href: '/about', children: withLinks(t.nav.aboutSub, ['/about', '/team', '/about#offices'], '/about') },
    { label: t.nav.news, href: '/news' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080C14]/95 backdrop-blur-md border-b border-white/8' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <img src="/images/mzm-logo.jpg" alt="MZM Africa" className="h-12 w-auto object-contain" />
        </Link>

        <ul className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link href={item.href} className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/')) ? 'text-[#C4A04A]' : 'text-gray-300 hover:text-white'}`}>
                {item.label}
                {item.children && <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block group-focus-within:block bg-[#0F1520] border border-white/10 min-w-[260px] shadow-2xl z-50">
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className="block px-5 py-3 text-sm text-gray-300 hover:text-[#C4A04A] hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors">{child.label}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-1 border border-white/15 px-1 py-1">
            {Object.entries(LANG_LABELS).map(([code, label]) => (
              <button key={code} onClick={() => switchLang(code)} aria-pressed={lang === code} aria-label={code === 'vi' ? 'Tiếng Việt' : 'English'} className={`text-xs font-bold tracking-wider px-2 py-1 transition-colors ${lang === code ? 'bg-[#C4A04A] text-[#080C14]' : 'text-gray-500 hover:text-gray-300'}`}>
                {label}
              </button>
            ))}
          </div>
          <Link href="/contact?type=consultation" className="hidden 2xl:inline-block whitespace-nowrap text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-5 py-2.5 hover:bg-[#C4A04A] hover:text-[#080C14] transition-colors">
            {t.nav.cta}
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} className="xl:hidden text-white p-2">
          {mobileOpen
            ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#0F1520] border-t border-white/10 px-6 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex gap-2 mb-4 pb-4 border-b border-white/8">
            {Object.entries(LANG_LABELS).map(([code, label]) => (
              <button key={code} onClick={() => switchLang(code)} className={`text-xs font-bold px-3 py-1.5 border transition-colors ${lang === code ? 'border-[#C4A04A] text-[#C4A04A] bg-[#C4A04A]/10' : 'border-white/15 text-gray-400'}`}>{label}</button>
            ))}
          </div>
          {navItems.map((item) => (
            <div key={item.label}>
              <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-gray-200 hover:text-[#C4A04A] border-b border-white/5">{item.label}</Link>
              {item.children && item.children.map((child) => (
                <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2.5 pl-4 text-sm text-gray-400 hover:text-[#C4A04A] border-b border-white/5">— {child.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/contact?type=consultation" onClick={() => setMobileOpen(false)} className="block mt-4 text-center text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-5 py-3">{t.nav.cta}</Link>
        </div>
      )}
    </nav>
  )
}
