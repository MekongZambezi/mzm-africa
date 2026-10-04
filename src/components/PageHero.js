// Standard inner-page header in the MZM style: eyebrow, serif title with a gold italic line, lead text.
export default function PageHero({ eyebrow, title, accent, lead, image }) {
  return (
    <section
      className="pt-36 pb-16 border-b border-white/8 relative overflow-hidden bg-[#0A0E18]"
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {image && <div className="absolute inset-0 bg-[#080C14]/85" />}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-[#C4A04A]" />
          <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{eyebrow}</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 max-w-4xl leading-[1.05]">
          {title}
          {accent && (
            <>
              <br />
              <span className="text-[#C4A04A] italic">{accent}</span>
            </>
          )}
        </h1>
        {lead && <p className="text-gray-300 font-light text-lg max-w-2xl leading-relaxed">{lead}</p>}
      </div>
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-7 h-px bg-[#C4A04A]" />
      <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">{children}</span>
    </div>
  )
}
