const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      { source: '/:locale(en|vi)/minerals', destination: '/:locale/business/mining', permanent: true },
      { source: '/:locale(en|vi)/services', destination: '/:locale/business/mining', permanent: true },
      { source: '/:locale(en|vi)/why-we-do-it', destination: '/:locale/opportunity', permanent: true },
      { source: '/:locale(en|vi)/team', destination: '/:locale/about', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/minerals', destination: '/business/mining', permanent: true },
      { source: '/services', destination: '/business/mining', permanent: true },
      { source: '/why-we-do-it', destination: '/opportunity', permanent: true },
    ]
  },
}
module.exports = withNextIntl(nextConfig)
