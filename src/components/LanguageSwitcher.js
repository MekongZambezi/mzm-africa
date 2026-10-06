'use client'
import { useEffect, useRef, useState, useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '../i18n/navigation'

const LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'vi', short: 'VI', name: 'Tiếng Việt' },
]

// Switches between /en/... and /vi/... on the same page. The middleware stores
// the choice in the NEXT_LOCALE cookie, so the next visit opens in that language.
export default function LanguageSwitcher({ variant = 'dropdown', onSwitch }) {
  const locale = useLocale()
  const t = useTranslations('Nav')
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [pending, startTransition] = useTransition()
  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const esc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc) }
  }, [])

  function select(code) {
    setOpen(false)
    if (code === locale) return
    const search = typeof window !== 'undefined' ? window.location.search : ''
    startTransition(() => {
      router.replace(`${pathname}${search}`, { locale: code })
      onSwitch && onSwitch()
    })
  }

  if (variant === 'buttons') {
    return (
      <div className="flex gap-2" role="group" aria-label={t('language')}>
        {LANGUAGES.map((l) => (
          <button key={l.code} type="button" onClick={() => select(l.code)} aria-pressed={locale === l.code} lang={l.code}
            className={`text-xs font-bold px-3 py-1.5 border transition-colors ${locale === l.code ? 'border-[#C4A04A] text-[#C4A04A] bg-[#C4A04A]/10' : 'border-white/15 text-gray-400'}`}>
            {l.name}
          </button>
        ))}
      </div>
    )
  }

  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0]
  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open} aria-label={`${t('language')}: ${current.name}`}
        className={`flex items-center gap-2 border border-white/15 px-3 py-2 text-xs font-bold tracking-wider text-gray-200 hover:border-[#C4A04A]/60 transition-colors ${pending ? 'opacity-60' : ''}`}>
        <svg className="w-4 h-4 text-[#C4A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" strokeWidth={1.5} /><path strokeWidth={1.5} d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9M12 3c-2.5 2.6-3.8 5.6-3.8 9s1.3 6.4 3.8 9" /></svg>
        {current.short}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <ul role="listbox" aria-label={t('language')} className="absolute right-0 top-full mt-1 min-w-[170px] bg-[#0F1520] border border-white/10 shadow-2xl z-50">
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={locale === l.code}>
              <button type="button" lang={l.code} onClick={() => select(l.code)}
                className={`w-full flex items-center justify-between gap-4 px-4 py-3 text-sm text-left border-b border-white/5 last:border-0 transition-colors ${locale === l.code ? 'text-[#C4A04A]' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                <span>{l.name}</span>
                <span className="text-[10px] font-black tracking-widest text-gray-500">{l.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
