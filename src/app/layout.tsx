import "./globals.css"
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Easy-gpu | Expert en dépannage informatique à Derval',
  description: 'Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile à Derval et ses alentours ou à distance.',
  keywords: ['dépannage informatique', 'maintenance informatique', 'Derval', 'PC Gamer', 'réparation ordinateur'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-zinc-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

