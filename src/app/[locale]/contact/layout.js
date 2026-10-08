import { pageMetadata } from '../../../i18n/meta'

export function generateMetadata({ params: { locale } }) {
  return pageMetadata(locale, 'Contact', '/contact')
}

export default function ContactLayout({ children }) {
  return children
}
