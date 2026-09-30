import { remark } from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'
import { remarkCharts } from './charts'

// Converts an article's markdown into HTML.
// Supports: headings, lists, tables, footnotes, strikethrough, task lists,
// links, images, quotes, and ```chart blocks (see src/lib/charts.js).
export async function markdownToHtml(markdown) {
  const file = await remark()
    .use(gfm)
    .use(remarkCharts)
    .use(html, { sanitize: false })
    .process(markdown)

  return String(file)
    // Wide tables scroll sideways on phones instead of breaking the layout
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>')
    // Links to other websites open in a new tab
    .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"')
}
