// Structural data for MZM's five sectors. All wording (titles, summaries, focus
// areas, institutions) lives in messages/en.json and messages/vi.json under
// Sectors.items, so both languages carry the same depth for every sector.

// Short muted header loops (free-licence stock, trimmed and compressed).
// Generic footage only: never captioned as an MZM project or a named site.
const HERO_VIDEOS = {
  mining: { src: '/videos/mining-hero.mp4', webm: '/videos/mining-hero.webm', poster: '/videos/mining-hero-poster.jpg' },
  manufacturing: { src: '/videos/manufacturing-hero.mp4', webm: '/videos/manufacturing-hero.webm', poster: '/videos/manufacturing-hero-poster.jpg' },
  energy: { src: '/videos/energy-hero.mp4', webm: '/videos/energy-hero.webm', poster: '/videos/energy-hero-poster.jpg' },
}

export const practices = ['mining', 'agriculture', 'energy', 'manufacturing', 'tourism'].map((slug, i) => ({
  slug,
  href: `/business/${slug}`,
  num: String(i + 1).padStart(2, '0'),
  image: `/images/practice-${slug}.jpg`,
  contact: 'projects@mzmafrica.com',
  video: HERO_VIDEOS[slug] || null,
}))

export function getPractice(slug) {
  return practices.find((p) => p.slug === slug)
}

// Badge colours for each focus-area status. Labels are in Sectors.status.
export const STATUS_STYLE = {
  open: 'bg-green-900/40 text-green-400',
  trade: 'bg-green-900/40 text-green-400',
  conditions: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  enquiries: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  large: 'bg-[#C4A04A]/10 text-[#C4A04A]',
  access: 'bg-white/5 text-gray-300',
}
