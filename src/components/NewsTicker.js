const headlines = [
  'MZM Africa opens Vietnam commercial office to bridge SEA investor networks with Zimbabwe minerals',
  'Zimbabwe Feb 2026 raw mineral export ban creates urgent demand for beneficiation infrastructure',
  'Great Dyke chrome corridor: 50 TPH wash plant model achieves ~2.6 month payback at full utilisation',
  'MZM attends Mining & Construction Vietnam Expo 2026 under strategic Two-Hat engagement model',
  'Gold cluster model targets ASM producers across Zimbabwe greenstone belts',
  'Copper opportunity: Magondi Belt stratabound deposits under active evaluation',
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
