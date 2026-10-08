import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Detects the visitor's language (cookie, then browser Accept-Language) and
// redirects plain URLs to /en/... or /vi/...
export default createMiddleware(routing)

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, PDFs,
  // netlify-forms.html, sitemap.xml, robots.txt).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
