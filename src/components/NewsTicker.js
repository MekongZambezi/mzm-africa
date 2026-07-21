const headlines = [
  'MZM Africa: chrome, lithium and gold mandates active. SPV structured, title verified, CAPEX confirmed',
  'MZM attends Mine Entra 2026, Zimbabwe\'s premier mining, engineering and transport expo. Bulawayo, 29 to 31 July',
  'Zimbabwe declares 14 Critical Minerals, May 2026. State SPV co-investment now required for all foreign participation',
  'Lithium mandates structured under Zimbabwe\'s Critical Minerals framework. Investor presentations available on request',
  'Copper in pipeline: opportunities under commercial evaluation, aligned with Asian refined-metal demand',
  'Quartz added to MZM\'s mandate: high-purity quartz under commercial and market assessment',
  'Gold: large-scale foreign investment open. MZM structures large-scale entry only, compliant with the 2026 reservation policy',
  'MZM operates across Zimbabwe and Asia, within MMCZ, FGR and Ministry of Mines frameworks',
]

export default function NewsTicker() {
  const doubled = [...headlines, ...headlines]
  return (
    <div className="bg-[#0F1520] border-b border-white/8 py-2.5 overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 bg-[#C4A04A] text-[#080C14] text-[10px] font-black tracking-widest uppercase px-4 py-1.5 mr-4 z-10">
          LATEST
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-track flex gap-0">
            {doubled.map((item, i) => (
              <span key={i} className="text-gray-300 text-xs font-medium whitespace-nowrap px-8">
                <span className="text-[#C4A04A] mr-2">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
