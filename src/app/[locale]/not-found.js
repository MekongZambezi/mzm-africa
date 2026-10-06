import { Link } from '../../i18n/navigation'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-[#080C14] pt-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="font-serif text-7xl font-bold text-[#C4A04A]/40 mb-6">404</div>
        <h1 className="font-serif text-4xl font-bold mb-3">Page not found</h1>
        <p className="text-gray-400 font-light mb-1">The page you are looking for does not exist or has moved.</p>
        <p lang="vi" className="text-gray-500 font-light mb-10">Không tìm thấy trang quý vị yêu cầu.</p>
        <Link href="/" className="inline-block bg-[#C4A04A] text-[#080C14] text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-[#E0CA8E] transition-colors">MZM Africa</Link>
      </div>
    </section>
  )
}
