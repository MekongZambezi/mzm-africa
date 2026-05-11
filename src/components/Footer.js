import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/images/mzm-logo.jpg"
              alt="MZM Africa"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Zimbabwe&apos;s youth-owned mining facilitation and beneficiation advisory firm bridging African mineral wealth with Southeast Asian capital.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-[#C4A04A] hover:text-[#C4A04A] text-gray-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-[#C4A04A] hover:text-[#C4A04A] text-gray-400 transition-colors" aria-label="Twitter/X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[['About MZM', '/about'], ['Our Team', '/team'], ['Vision & Mission', '/about#vision'], ['Our Role', '/about#role']].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {[['Investment Facilitation', '/services#facilitation'], ['Beneficiation Advisory', '/services#advisory'], ['Commodity Trading', '/services#trading'], ['Due Diligence', '/services#dd']].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:info@mzmafrica.com" className="hover:text-[#C4A04A] transition-colors">info@mzmafrica.com</a>
              </li>
              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Offices</div>
                <div>Harare, Zimbabwe</div>
                <div>Hanoi, Vietnam</div>
              </li>
              <li>
                <Link href="/contact" className="inline-block mt-2 text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-4 py-2 hover:bg-[#C4A04A] hover:text-[#080C14] transition-colors">
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Mekong Zambezi Meridian Consultants. All rights reserved.</p>
          <p className="text-xs text-gray-600">Registered in Zimbabwe · Commercial Office: Hanoi, Vietnam</p>
        </div>
      </div>
    </footer>
  )
}
