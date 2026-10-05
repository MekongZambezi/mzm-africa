export const metadata = { title: 'Our Team | MZM Africa', description: 'The MZM Consultants leadership team in Hanoi and Zimbabwe.' }

const team = [
  {
    initials: 'AM',
    name: 'Andy Moyo',
    role: 'Managing Director',
    location: 'Hanoi, Vietnam',
    bio: 'Andy Moyo is the founder and Managing Director of MZM Consultants. Based in Hanoi, he leads the firm’s Asia desk and its work with Vietnamese and Asian investors, buyers and trade bodies. He directs every engagement across MZM’s five sectors, from the first meeting with an investor or buyer to the introduction of a checked opportunity in Zimbabwe.',
  },
  {
    initials: 'EM',
    name: 'Ebern Moyo',
    role: 'Commercial Director',
    location: 'Zimbabwe',
    bio: 'Ebern Moyo is Commercial Director of MZM Consultants and runs the firm’s operations in Zimbabwe. He is responsible for checking opportunities and suppliers on the ground, working with Zimbabwean institutions, and managing delivery for clients across all five sectors. He works with the Managing Director in Hanoi so that clients deal with one team in both countries.',
  },
  {
    initials: 'CM',
    name: 'Chido A. Mumvuri',
    role: 'Deputy Managing Director & Head of Business Development',
    location: 'Zimbabwe',
    bio: 'Chido A. Mumvuri is Deputy Managing Director and Head of Business Development at MZM Consultants, which she co-founded. She develops the firm’s commercial partnerships and shapes how MZM’s opportunities are presented to international investors and buyers.',
  },
]

export default function Team() {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#0A0E18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#C4A04A]" />
            <span className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase">Our Team</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">One team,<br /><span className="text-[#C4A04A] italic">in two countries.</span></h1>
        </div>
      </section>

      <section className="py-20 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="border border-white/10 p-8 hover:border-[#C4A04A]/30 transition-colors">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full border border-[#C4A04A]/40 bg-[#0F1520] flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-xl text-[#C4A04A]">{member.initials}</span>
                  </div>
                  <div>
                    <h2 className="font-sans font-bold text-xl">{member.name}</h2>
                    <div className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mt-0.5">{member.role}</div>
                    <div className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {member.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
