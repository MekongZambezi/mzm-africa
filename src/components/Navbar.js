'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '../i18n/navigation'
import LanguageSwitcher from './LanguageSwitcher'

const SUB_LINKS = {
  capabilities: ['/what-we-do#capability-01', '/what-we-do#capability-02', '/what-we-do#capability-03', '/what-we-do#capability-04'],
  sectors: ['/business', '/business/mining', '/business/agriculture', '/business/energy', '/business/manufacturing', '/business/tourism'],
  opportunity: ['/opportunity#context', '/opportunity#thesis'],
  approach: ['/how-we-work#framework', '/how-we-work#commitments', '/governance', '/fraud-notice'],
  corridor: ['/corridor#invest', '/corridor#source', '/corridor#producers'],
  about: ['/about', '/team', '/about#offices'],
}

const TOP_LINKS = [
  ['capabilities', '/what-we-do'],
  ['sectors', '/business'],
  ['opportunity', '/opportunity'],
  ['approach', '/how-we-work'],
  ['corridor', '/corridor'],
  ['about', '/about'],
  ['news', '/news'],
  ['contact', '/contact'],
]

const Chevron = () => <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>

export default function Navbar() {
  const t = useTranslations('Nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = TOP_LINKS.map(([key, href]) => ({
    key,
    label: t(key),
    href,
    children: SUB_LINKS[key] ? t.raw(`${key}Sub`).map((label, i) => ({ label, href: SUB_LINKS[key][i] })) : null,
  }))

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-[#080C14]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" aria-label={t('homeLabel')} className="flex items-center shrink-0">
          <img src="/images/mzm-logo.jpg" alt="MZM Africa" className="h-12 w-auto object-contain" />
        </Link>

        <ul className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.key} className="relative group">
              <Link href={item.href} className={`flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors ${isActive(item.href) ? 'text-[#C4A04A]' : 'text-gray-300 hover:text-white'}`}>
                {item.label}
                {item.children && <Chevron />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block group-focus-within:block bg-[#0F1520] border border-white/10 min-w-[260px] shadow-2xl z-50">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-5 py-3 text-sm text-gray-300 hover:text-[#C4A04A] hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors">{child.label}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <LanguageSwitcher />
          <Link href="/contact?type=consultation" className="hidden 2xl:inline-block whitespace-nowrap text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-5 py-2.5 hover:bg-[#C4A04A] hover:text-[#080C14] transition-colors">
            {t('cta')}
          </Link>
        </div>

        <div className="xl:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? t('closeMenu') : t('openMenu')} aria-expanded={mobileOpen} className="text-white p-2">
            {mobileOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#0F1520] border-t border-white/10 px-6 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="mb-4 pb-4 border-b border-white/10">
            <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-3">{t('language')}</div>
            <LanguageSwitcher variant="buttons" onSwitch={() => setMobileOpen(false)} />
          </div>
          {navItems.map((item) => (
            <div key={item.key}>
              <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-gray-200 hover:text-[#C4A04A] border-b border-white/5">{item.label}</Link>
              {item.children && item.children.map((child) => (
                <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2.5 pl-4 text-sm text-gray-400 hover:text-[#C4A04A] border-b border-white/5">— {child.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/contact?type=consultation" onClick={() => setMobileOpen(false)} className="block mt-4 text-center text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-5 py-3">{t('cta')}</Link>
        </div>
      )}
    </nav>
  )
}
