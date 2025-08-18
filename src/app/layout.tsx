import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brunei Red Crescent (BRC) — Serving Humanity, Saving Lives',
  description: 'Brunei Red Crescent (BRC) provides first aid, medical coverage, psychological support, wellness programs, and emergency response across Brunei. Join us as a volunteer or supporter.',
  keywords: 'Brunei Red Crescent, BRC, humanitarian, first aid, volunteer, emergency response, Brunei',
  openGraph: {
    title: 'Brunei Red Crescent (BRC) — Serving Humanity, Saving Lives',
    description: 'Brunei Red Crescent (BRC) provides first aid, medical coverage, psychological support, wellness programs, and emergency response across Brunei. Join us as a volunteer or supporter.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/BRCLOGO.jpg',
    shortcut: '/assets/BRCLOGO.jpg',
    apple: '/assets/BRCLOGO.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
