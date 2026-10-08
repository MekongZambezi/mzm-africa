// Standard inner-page header in the MZM style: eyebrow, serif title with a gold italic line, lead text.
// With `video`, a short muted loop plays behind the text; the poster image shows
// while it loads and for visitors who have reduced motion turned on.
export default function PageHero({ eyebrow, title, accent, lead, image, video }) {
  const bg = video ? video.poster : image
  return (
    <section
      className="pt-36 pb-16 border-b border-white/10 relative overflow-hidden bg-[#0A0E18]"
      style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {video && (
        <video className="hero-video absolute inset-0 w-full h-full object-cover" poster={video.poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src={video.src} type="video/mp4" />
          {video.webm && <source src={video.webm} type="video/webm" />}
        </video>
      )}
      {video && <div className="absolute inset-0 bg-[#080C14]/80 md:bg-transparent md:bg-gradient-to-r md:from-[#080C14]/90 md:via-[#080C14]/75 md:to-[#080C14]/50" />}
      {!video && image && <div className="absolute inset-0 bg-[#080C14]/85" />}
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
