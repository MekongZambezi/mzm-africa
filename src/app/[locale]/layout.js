// Fonts are served from this site rather than Google Fonts: faster first paint,
// and visitors' IP addresses are not sent to a third party.
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource/mulish/300.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/500.css'
import '@fontsource/mulish/600.css'
import '@fontsource/mulish/700.css'
import '../../styles/globals.css'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '../../i18n/routing'
import { alternates, social, SITE_URL } from '../../i18n/meta'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Meta' })
  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: alternates(locale, ''),
    ...social(locale, t('title'), t('description')),
  }
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) notFound()
  setRequestLocale(locale)

  const messages = await getMessages()
  // Only the namespaces that client components need are sent to the browser.
  const clientMessages = { Nav: messages.Nav, Contact: messages.Contact, Common: messages.Common }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#C4A04A] focus:text-[#080C14] focus:px-4 focus:py-2 focus:text-sm focus:font-bold">{messages.Common.skip}</a>
          <Navbar />
          <main id="main" tabIndex={-1}>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
