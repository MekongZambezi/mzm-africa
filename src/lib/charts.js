// Renders ```chart blocks in news articles into static HTML/SVG at build time.
// No JavaScript runs in the visitor's browser, so charts load instantly.
//
// Usage in a markdown article:
//
// ```chart
// {
//   "type": "bar",                      // "bar" (columns), "hbar" (horizontal bars) or "line"
//   "title": "Mineral export earnings",
//   "subtitle": "January to June, US$ billion",
//   "labels": ["H1 2025", "H1 2026"],
//   "series": [{ "name": "Export earnings", "values": [1.376, 2.532] }],
//   "prefix": "US$", "suffix": "bn", "decimals": 2,
//   "source": "MMCZ, via NewsDay, 17 July 2026"
// }
// ```
//
// Up to 3 series per chart. Colours are fixed and tested for colour-blind readers.

const COLORS = ['#B38E3A', '#3987e5', '#d55181']
const MAX_SERIES = COLORS.length

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Picks a clean axis: 3 to 5 gridlines at round steps (1, 2, 2.5 or 5 x 10^n)
function niceScale(dataMax) {
  if (dataMax <= 0) return { max: 1, step: 0.25 }
  const raw = dataMax / 4
  const exp = Math.pow(10, Math.floor(Math.log10(raw)))
  const f = raw / exp
  const step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * exp
  return { max: Math.ceil(dataMax / step - 1e-9) * step, step }
}

function makeFormatter(cfg) {
  const decimals = Number.isInteger(cfg.decimals) ? cfg.decimals : undefined
  return (v) => {
    const n = Number(v).toLocaleString('en-US', {
      minimumFractionDigits: decimals ?? 0,
      maximumFractionDigits: decimals ?? 2,
    })
    return `${cfg.prefix || ''}${n}${cfg.suffix || ''}`
  }
}

function tickFormatter(cfg) {
  return (v) => `${cfg.prefix || ''}${Number(v).toLocaleString('en-US', { maximumFractionDigits: 2 })}${cfg.suffix || ''}`
}

function validate(cfg) {
  const where = cfg.title ? `chart "${cfg.title}"` : 'chart'
  if (!['bar', 'hbar', 'line'].includes(cfg.type)) throw new Error(`${where}: "type" must be "bar", "hbar" or "line"`)
  if (!Array.isArray(cfg.labels) || cfg.labels.length === 0) throw new Error(`${where}: "labels" must be a non-empty list`)
  if (!Array.isArray(cfg.series) || cfg.series.length === 0) throw new Error(`${where}: "series" must be a non-empty list`)
  if (cfg.series.length > MAX_SERIES) throw new Error(`${where}: at most ${MAX_SERIES} series per chart; split it into two charts`)
  cfg.series.forEach((s, i) => {
    if (!Array.isArray(s.values) || s.values.length !== cfg.labels.length) {
      throw new Error(`${where}: series ${i + 1} needs exactly ${cfg.labels.length} values, one per label`)
    }
    s.values.forEach((v) => {
      if (v !== null && typeof v !== 'number') throw new Error(`${where}: values must be numbers (or null for a gap)`)
    })
  })
  const all = cfg.series.flatMap((s) => s.values).filter((v) => v !== null)
  if (all.some((v) => v < 0)) throw new Error(`${where}: negative values are not supported`)
}

function legend(cfg) {
  if (cfg.series.length < 2) return ''
  const items = cfg.series
    .map((s, i) => `<span class="chart-legend-item"><span class="chart-swatch" style="background:${COLORS[i]}"></span>${esc(s.name)}</span>`)
    .join('')
  return `<div class="chart-legend">${items}</div>`
}

function dataTable(cfg, fmt) {
  const head = `<tr><th></th>${cfg.series.map((s) => `<th>${esc(s.name)}</th>`).join('')}</tr>`
  const rows = cfg.labels
    .map((l, i) => `<tr><td>${esc(l)}</td>${cfg.series.map((s) => `<td>${s.values[i] === null ? 'n/a' : esc(fmt(s.values[i]))}</td>`).join('')}</tr>`)
    .join('')
  return `<details class="chart-data"><summary>View data</summary><table><thead>${head}</thead><tbody>${rows}</tbody></table></details>`
}

function yAxis({ max, step }, tfmt) {
  const ticks = []
  for (let t = 0; t <= max + 1e-9; t += step) ticks.push(Number(t.toFixed(10)))
  const lines = ticks
    .map((t) => `<div class="chart-gridline" style="bottom:${(t / max) * 100}%"><span>${esc(tfmt(t))}</span></div>`)
    .join('')
  return lines
}

function renderColumns(cfg, fmt) {
  const all = cfg.series.flatMap((s) => s.values).filter((v) => v !== null)
  const scale = niceScale(Math.max(...all))
  const max = scale.max
  const tfmt = tickFormatter(cfg)
  const showValues = cfg.labels.length * cfg.series.length <= 12
  const groups = cfg.labels
    .map((label, i) => {
      const bars = cfg.series
        .map((s, si) => {
          const v = s.values[i]
          if (v === null) return `<div class="chart-col chart-col-empty"></div>`
          const h = (v / max) * 100
          const val = showValues ? `<span class="chart-col-value">${esc(fmt(v))}</span>` : ''
          return `<div class="chart-col" style="height:${h}%;background:${COLORS[si]}" title="${esc(`${s.name}, ${label}: ${fmt(v)}`)}">${val}</div>`
        })
        .join('')
      return `<div class="chart-group"><div class="chart-group-bars">${bars}</div></div>`
    })
    .join('')
  const xLabels = cfg.labels.map((l) => `<div class="chart-xlabel">${esc(l)}</div>`).join('')
  return `<div class="chart-plot chart-plot-columns">${yAxis(scale, tfmt)}<div class="chart-groups">${groups}</div></div><div class="chart-xlabels">${xLabels}</div>`
}

function renderHBars(cfg, fmt) {
  const all = cfg.series.flatMap((s) => s.values).filter((v) => v !== null)
  const max = Math.max(...all)
  const rows = cfg.labels
    .map((label, i) => {
      const bars = cfg.series
        .map((s, si) => {
          const v = s.values[i]
          if (v === null) return ''
          const w = (v / max) * 100
          return `<div class="chart-hbar-line"><div class="chart-hbar" style="width:${w}%;background:${COLORS[si]}" title="${esc(`${s.name}, ${label}: ${fmt(v)}`)}"></div><span class="chart-hbar-value">${esc(fmt(v))}</span></div>`
        })
        .join('')
      return `<div class="chart-hbar-row"><div class="chart-hbar-label">${esc(label)}</div><div class="chart-hbar-bars">${bars}</div></div>`
    })
    .join('')
  return `<div class="chart-hbars">${rows}</div>`
}

function renderLine(cfg, fmt) {
  const all = cfg.series.flatMap((s) => s.values).filter((v) => v !== null)
  const scale = niceScale(Math.max(...all))
  const max = scale.max
  const tfmt = tickFormatter(cfg)
  const n = cfg.labels.length
  const x = (i) => (n === 1 ? 50 : (i / (n - 1)) * 100)
  const y = (v) => 100 - (v / max) * 100

  const paths = cfg.series
    .map((s, si) => {
      let d = ''
      let pen = false
      s.values.forEach((v, i) => {
        if (v === null) { pen = false; return }
        d += `${pen ? 'L' : 'M'}${x(i).toFixed(2)},${y(v).toFixed(2)} `
        pen = true
      })
      return `<path d="${d.trim()}" fill="none" stroke="${COLORS[si]}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`
    })
    .join('')

  // Label each series' last point, but skip labels that would collide
  // (the legend and "View data" table still carry those values).
  const ends = cfg.series
    .map((s, si) => {
      const i = s.values.map((v) => v !== null).lastIndexOf(true)
      return { si, i, y: i < 0 ? null : y(s.values[i]) }
    })
    .filter((e) => e.i >= 0)
    .sort((a, b) => a.y - b.y)
  const labelled = new Set()
  let lastY = -Infinity
  ends.forEach((e) => {
    if (e.y - lastY >= 9) { labelled.add(e.si); lastY = e.y }
  })

  const dots = cfg.series
    .map((s, si) =>
      s.values
        .map((v, i) => {
          if (v === null) return ''
          const isLast = s.values.slice(i + 1).every((u) => u === null)
          const label = isLast && labelled.has(si) ? `<span class="chart-dot-value">${esc(fmt(v))}</span>` : ''
          return `<span class="chart-dot" style="left:${x(i)}%;top:${y(v)}%;background:${COLORS[si]}" title="${esc(`${s.name}, ${cfg.labels[i]}: ${fmt(v)}`)}">${label}</span>`
        })
        .join('')
    )
    .join('')

  const xLabels = cfg.labels
    .map((l, i) => {
      const edge = i === 0 ? ' chart-xlabel-first' : i === n - 1 ? ' chart-xlabel-last' : ''
      const minor = n > 6 && i % 2 === 1 && i !== n - 1 ? ' chart-xlabel-minor' : ''
      return `<div class="chart-xlabel-abs${edge}${minor}" style="left:${x(i)}%">${esc(l)}</div>`
    })
    .join('')

  return `<div class="chart-plot chart-plot-line">${yAxis(scale, tfmt)}<div class="chart-line-area"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${paths}</svg>${dots}</div></div><div class="chart-xlabels-abs">${xLabels}</div>`
}

export function renderChart(source) {
  let cfg
  try {
    cfg = JSON.parse(source)
  } catch (e) {
    throw new Error(`Chart block is not valid JSON: ${e.message}`)
  }
  validate(cfg)
  const fmt = makeFormatter(cfg)
  const body = cfg.type === 'bar' ? renderColumns(cfg, fmt) : cfg.type === 'hbar' ? renderHBars(cfg, fmt) : renderLine(cfg, fmt)
  const title = cfg.title ? `<div class="chart-title">${esc(cfg.title)}</div>` : ''
  const subtitle = cfg.subtitle ? `<div class="chart-subtitle">${esc(cfg.subtitle)}</div>` : ''
  const src = cfg.source ? `<figcaption class="chart-source">Source: ${esc(cfg.source)}</figcaption>` : ''
  return `<figure class="chart chart--${cfg.type}">${title}${subtitle}${legend(cfg)}${body}${src}${dataTable(cfg, fmt)}</figure>`
}

// remark plugin: replaces ```chart code blocks with rendered chart HTML.
export function remarkCharts() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return
      node.children = node.children.map((child) => {
        if (child.type === 'code' && child.lang === 'chart') {
          return { type: 'html', value: renderChart(child.value) }
        }
        walk(child)
        return child
      })
    }
    walk(tree)
  }
}
