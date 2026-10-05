/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      { source: '/minerals', destination: '/business/mining', permanent: true },
      { source: '/services', destination: '/business/mining', permanent: true },
    ]
  },
}
module.exports = nextConfig
