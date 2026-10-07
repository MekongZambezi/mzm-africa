import fs from 'fs'
import path from 'path'
import { practices } from '../lib/practices'
import { routing } from '../i18n/routing'

const SITE = 'https://mzmafrica.com'

// One entry per page per language, each listing its other-language versions
// so search engines index the English and Vietnamese pages as a pair.
export default function sitemap() {
  const newsDir = path.join(process.cwd(), 'content/news')
  const news = fs.existsSync(newsDir) ? fs.readdirSync(newsDir).filter((f) => f.endsWith('.md')).map((f) => `/news/${f.replace(/\.md$/, '')}`) : []
  const paths = ['', '/what-we-do', '/business', ...practices.map((p) => p.href), '/opportunity', '/how-we-work', '/corridor', '/about', '/news', ...news, '/contact', '/governance', '/fraud-notice', '/privacy']
  const now = new Date()
  return paths.flatMap((p) =>
    routing.locales.map((locale) => ({
      url: `${SITE}/${locale}${p}`,
      lastModified: now,
      alternates: { languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE}/${l}${p}`])) },
    }))
  )
}
