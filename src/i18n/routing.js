import { defineRouting } from 'next-intl/routing'

// English and Vietnamese. Every URL carries its language: /en/... and /vi/...
// A visitor arriving at a plain URL is sent to the language their browser asks for;
// a choice made with the language switcher is remembered in the NEXT_LOCALE cookie.
export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  localePrefix: 'always',
})
