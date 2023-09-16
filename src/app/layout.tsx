import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { MobileMenu } from '@/components/Navigation/MobileMenu'
import { Footer } from '@/components/UI/Footer'
import { ContactSection } from '@/sections/Contact'
import { NavLink, Navbar } from "../components/Navigation/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artur Poffo | Portfólio',
  description: 'Nesse portfólio eu falo um pouco sobre mim e mostro meus projetos :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks: NavLink = [
    { name: "Home", to: "/#home" },
    { name: "Sobre", to: "/#about" },
    { name: "Habilidades", to: "/skills", useNextLink: true },
    { name: "Projetos", to: "/projects", useNextLink: true },
    { name: "Contato", to: "#contact" },
  ]

  const navSpecialLinks = [
    { name: "Blog", to: "/blog", useNextLink: true },
  ]

  return (
    <html lang="pt" className='scroll-smooth'>
      <body className={`${inter.className} bg-brand-gray-900 text-brand-gray-200 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-brand-gray-900`}>
        <Navbar
          links={navLinks}
          specialLinks={navSpecialLinks}
        />
        <MobileMenu
          links={navLinks}
          specialLinks={navSpecialLinks}
        />
        <main className='min-h-screen pb-16' >
          {children}
        </main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  )
}
