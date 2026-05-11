'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: 'Our Story', href: '/about#story' },
      { label: 'Our Role in Mining', href: '/about#role' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Investment Facilitation', href: '/services#facilitation' },
      { label: 'Beneficiation Advisory', href: '/services#advisory' },
      { label: 'Commodity Trading', href: '/services#trading' },
      { label: 'Due Diligence', href: '/services#dd' },
    ],
  },
  {
    label: 'Minerals',
    href: '/minerals',
    children: [
      { label: 'Chrome', href: '/minerals#chrome' },
      { label: 'Gold', href: '/minerals#gold' },
      { label: 'Copper', href: '/minerals#copper' },
      { label: 'Nickel', href: '/minerals#nickel' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080C14]/95 backdrop-blur-md border-b border-white/8' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/mzm-logo.jpg"
            alt="MZM Africa — Mekong Zambezi Meridian Consultants"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  pathname === item.href ? 'text-[#C4A04A]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                )}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-[#0F1520] border border-white/10 min-w-[220px] shadow-2xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3 text-sm text-gray-300 hover:text-[#C4A04A] hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:block text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-5 py-2.5 hover:bg-[#C4A04A] hover:text-[#080C14] transition-colors"
        >
          Get In Touch
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F1520] border-t border-white/10 px-6 py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-gray-200 hover:text-[#C4A04A] border-b border-white/5"
              >
                {item.label}
              </Link>
              {item.children && item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 pl-4 text-sm text-gray-400 hover:text-[#C4A04A] border-b border-white/5"
                >
                  — {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block mt-4 text-center text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-5 py-3">
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
