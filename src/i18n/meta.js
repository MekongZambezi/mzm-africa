import { getTranslations } from 'next-intl/server'
import { routing } from './routing'

export const SITE_URL = 'https://mzmafrica.com'

// Canonical URL plus hreflang alternates for one page.
// path is the locale-free path, e.g. '' for the homepage or '/about'.
export function alternates(locale, path = '') {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`]))
  return {
    canonical: `/${locale}${path}`,
    languages: { ...languages, 'x-default': `/${routing.defaultLocale}${path}` },
  }
}

// Standard metadata for a page whose namespace has metaTitle and metaDescription keys.
export async function pageMetadata(locale, namespace, path) {
  const t = await getTranslations({ locale, namespace })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: alternates(locale, path),
    openGraph: { title: t('metaTitle'), description: t('metaDescription'), locale: locale === 'vi' ? 'vi_VN' : 'en_GB' },
  }
}
