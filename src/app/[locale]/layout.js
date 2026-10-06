import '../../styles/globals.css'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '../../i18n/routing'
import { alternates, SITE_URL } from '../../i18n/meta'
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
    openGraph: {
      siteName: 'MZM Africa',
      title: t('title'),
      description: t('description'),
      locale: locale === 'vi' ? 'vi_VN' : 'en_GB',
      alternateLocale: locale === 'vi' ? ['en_GB'] : ['vi_VN'],
    },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Mulish:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
