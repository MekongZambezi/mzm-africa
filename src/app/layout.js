import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'MZM Africa | Mekong Zambezi Meridian Consultants',
  description: "Zimbabwe's youth-owned mining facilitation and beneficiation advisory firm connecting Africa's mineral wealth with Southeast Asian capital.",
  keywords: 'Zimbabwe mining, chrome investment, gold investment, beneficiation, Great Dyke, mining facilitation',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
