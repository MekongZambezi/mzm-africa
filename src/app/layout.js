import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LanguageProvider } from '../context/LanguageContext'

export const metadata = {
  metadataBase: new URL('https://mzmafrica.com'),
  title: 'MZM Africa | Mekong Zambezi Meridian Consultants',
  description: "MZM Africa is a Zimbabwean investment facilitation firm headquartered in Bulawayo, with an Asia desk in Hanoi. We verify and structure compliant investment across mining and beneficiation, agriculture, energy, manufacturing, and tourism and mobility.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Mulish:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
