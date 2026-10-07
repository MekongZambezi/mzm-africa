import { useTranslations } from 'next-intl'
import { Link } from '../i18n/navigation'

const COMPANY_HREFS = ['/what-we-do', '/opportunity', '/how-we-work', '/about', '/team', '/governance']
const BUSINESS_HREFS = ['/business/mining', '/business/agriculture', '/business/energy', '/business/manufacturing', '/business/tourism', '/corridor']

export default function Footer() {
  const t = useTranslations('Footer')
  const companyLinks = t.raw('companyLinks')
  const serviceLinks = t.raw('serviceLinks')

  return (
    <footer className="bg-[#050810] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div>
            <img src="/images/mzm-logo.jpg" alt="MZM Africa" className="h-16 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed font-light">{t('desc')}</p>
          </div>
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">{t('company')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((label, i) => (
                <li key={COMPANY_HREFS[i]}><Link href={COMPANY_HREFS[i]} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">{t('services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((label, i) => (
                <li key={BUSINESS_HREFS[i]}><Link href={BUSINESS_HREFS[i]} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#C4A04A] text-xs font-bold tracking-widest uppercase mb-5">{t('contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t('email')}</div>
                <a href="mailto:projects@mzmafrica.com" className="hover:text-[#C4A04A] transition-colors">projects@mzmafrica.com</a>
              </li>
              <li>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t('offices')}</div>
                <div>{t('hq')}</div>
                <div>{t('asia')}</div>
              </li>
              <li>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t('whatsapp')}</div>
                <a href="https://wa.me/84814944804" className="hover:text-[#C4A04A] transition-colors">+84 814 944 804</a>
              </li>
              <li>
                <Link href="/contact?type=brief" className="inline-block mt-2 text-xs font-bold tracking-widest uppercase text-[#C4A04A] border border-[#7A6230] px-4 py-2 hover:bg-[#C4A04A] hover:text-[#080C14] transition-colors">{t('enquire')}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Mekong Zambezi Meridian Consultants (Private) Limited. {t('rights')}</p>
          <p className="text-xs text-gray-400 text-center">
            {t('registered')} · <Link href="/fraud-notice" className="text-gray-400 hover:text-[#C4A04A] transition-colors">{t('fraud')}</Link> · <Link href="/governance" className="hover:text-gray-400 transition-colors">{t('governance')}</Link> · <Link href="/privacy" className="hover:text-gray-400 transition-colors">{t('privacy')}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
