# Writing news articles

Articles live in `content/news/`. Each article is one `.md` file. The file name becomes the web address, so `q3-2026-review-q4-outlook.md` appears at `mzmafrica.com/news/q3-2026-review-q4-outlook`.

## Article header

Every article starts with this block. Keep the date in quotes.

```
---
title: "Article title"
date: "2026-09-30"
category: "MZM Market Brief"
excerpt: "One or two sentences shown on the News page and in link previews."
image: "/images/policy-banner.jpg"
---
```

## Formatting

| Result | Type this |
|---|---|
| Section heading | `## Heading` |
| Sub-heading | `### Sub-heading` |
| Bold | `**bold**` |
| Italic | `*italic*` |
| Link | `[text](https://address)` |
| Bullet list | start each line with `- ` |
| Numbered list | start each line with `1. `, `2. ` |
| Quotation | start the line with `> ` |
| Footnote | `text[^1]`, then at the end `[^1]: Source details` |
| Divider line | `---` on its own line |

## Tables

```
| Date | Development | Relevance |
|---|---|---|
| 1 January 2027 | Lithium concentrate export ban | Lithium sector |
```

Wide tables scroll sideways on phones automatically.

## Charts

Write a `chart` block. Three types are available: `bar` (vertical columns), `hbar` (horizontal bars) and `line`. Up to three series per chart. Every chart shows its source and a "View data" table automatically.

```chart
{
  "type": "bar",
  "title": "Zimbabwe mineral export earnings",
  "subtitle": "January to June, US$ billion",
  "labels": ["H1 2025", "H1 2026"],
  "series": [{ "name": "Export earnings", "values": [1.376, 2.532] }],
  "prefix": "US$", "suffix": "bn", "decimals": 2,
  "source": "MMCZ, via NewsDay, 17 July 2026"
}
```

Rules:

- Each series needs one value per label, in the same order.
- Use `null` for a missing value in a line chart.
- `prefix`, `suffix` and `decimals` control how numbers display. All three are optional.
- Always include a `source`.

If a chart has a mistake, the website update will fail and the live site stays unchanged. Netlify's deploy log will name the chart and the problem.
