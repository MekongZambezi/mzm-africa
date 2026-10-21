import { getTranslations } from 'next-intl/server'
import { routing } from './routing'

export const SITE_URL = 'https://mzmafrica.com'

// Default link-preview image (1200 x 630) for WhatsApp, Zalo, LinkedIn and email.
export const OG_IMAGE = { url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'MZM Africa: investment and trade between Zimbabwe and Vietnam' }

// Open Graph and Twitter tags for one page. Next.js replaces, rather than merges,
// the parent layout's openGraph, so every page passes the full set.
export function social(locale, title, description, image = OG_IMAGE) {
  const images = [image]
  return {
    openGraph: { siteName: 'MZM Africa', title, description, images, locale: locale === 'vi' ? 'vi_VN' : 'en_GB', alternateLocale: locale === 'vi' ? ['en_GB'] : ['vi_VN'] },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}

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
    ...social(locale, t('metaTitle'), t('metaDescription')),
  }
}
