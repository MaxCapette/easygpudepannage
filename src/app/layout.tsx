import "./globals.css"
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocalBusinessJsonLd, ServiceJsonLd, FAQJsonLd } from './structured-data'
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Easy-gpu | Expert en dépannage informatique à Derval',
  description: 'Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile à Derval et ses alentours ou à distance.',
  keywords: ['dépannage informatique', 'maintenance informatique', 'Derval', 'PC Gamer', 'réparation ordinateur', 'assistance informatique', 'dépannage PC', 'Loire-Atlantique'],
  authors: [{ name: 'Easy-gpu' }],
  creator: 'Easy-gpu',
  publisher: 'Easy-gpu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://easygpu.fr'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Easy-gpu | Expert en dépannage informatique à Derval',
    description: 'Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile à Derval et ses alentours ou à distance.',
    url: 'https://easygpu.fr',
    siteName: 'Easy-gpu',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Easy-gpu - Dépannage Informatique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy-gpu | Expert en dépannage informatique à Derval',
    description: 'Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile à Derval et ses alentours.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessJsonLd) }}
        />
        <Script
          id="service-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceJsonLd) }}
        />
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-zinc-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

