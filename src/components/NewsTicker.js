const headlines = [
  'MZM works across five sectors: mining and beneficiation, agriculture, energy, manufacturing, and tourism and hospitality',
  'The Zimbabwe-Vietnam Corridor: investment into Zimbabwe, and Zimbabwean products to Vietnamese buyers',
  'Vietnam launches its GoGlobal Programme, April 2026, naming Africa as a market for Vietnamese firms investing abroad',
  'Zimbabwe declares 14 critical minerals, May 2026. Regulations on the State shareholding are pending',
  'New energy rules, July 2026: no licence fee for renewable plants under 10 MW',
  'Zimbabwe launches ZNIDP II, its industrial policy for 2026 to 2030',
  'Vietnam imported 1.71 million tonnes of cotton in 2025, with no significant African supplier',
  'MZM attends Mine Entra 2026 in Bulawayo, 29 to 31 July',
  'Zimbabwe co-hosts the ICC Men\'s Cricket World Cup in 2027',
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
