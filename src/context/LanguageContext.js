'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../lib/i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('mzm-lang')
    if (saved && translations[saved]) setLang(saved)
  }, [])

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('mzm-lang', l)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
