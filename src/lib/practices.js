// Structural data for MZM's five sectors. All wording (titles, summaries, focus
// areas, institutions) lives in messages/en.json and messages/vi.json under
// Sectors.items, so both languages carry the same depth for every sector.

export const practices = ['mining', 'agriculture', 'energy', 'manufacturing', 'tourism'].map((slug, i) => ({
  slug,
  href: `/business/${slug}`,
  num: String(i + 1).padStart(2, '0'),
  image: `/images/practice-${slug}.jpg`,
  contact: 'projects@mzmafrica.com',
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
