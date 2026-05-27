const headlines = [
  'MZM Africa: Chrome and lithium projects live — SPV structured, title verified, CAPEX confirmed',
  'Zimbabwe Ministry of Mines declares 14 Critical Minerals — State SPV co-investment now mandatory for all foreign participation',
  'Great Dyke chrome corridor: 50 TPH wash plant model achieves 2.6 month estimated payback at full utilisation',
  'Lithium projects structured under Zimbabwe Critical Minerals SPV framework — investor presentations available on request',
  'MZM attends Mining and Construction Vietnam Expo 2026 — active mandate introductions underway',
  'Copper: Antech-verified grades 3.73% and 2.45% Cu confirmed across Magondi Belt samples',
  'Zimbabwe May 2026: Small and medium scale gold reserved for Zimbabwean citizens — large-scale foreign investment remains open',
  'MZM operates within MMCZ, FGR, and Ministry of Mines regulatory frameworks — Zimbabwe and Asia',
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
