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
  metadataBase: new URL('https://bruneiredcrescent.com'),
  title: 'Brunei Red Crescent Society (BRC) — Serving Humanity, Saving Lives',
  description: 'Brunei Red Crescent Society (BRC) provides first aid training, event medical coverage, psychosocial support, wellness programs, and emergency response across Brunei. Volunteer or partner with us.',
  keywords: 'Brunei Red Crescent, BRC, humanitarian, first aid, volunteer, emergency response, Brunei, psychosocial support, medical coverage',
  openGraph: {
    title: 'Brunei Red Crescent Society (BRC) — Serving Humanity, Saving Lives',
    description: 'Official website of BRC: first aid, medical coverage, psychosocial support, wellness, and emergency response in Brunei.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bruneiredcrescent.com/',
    images: ['/assets/BRCLOGO.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bruneiredcrescent.com/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
