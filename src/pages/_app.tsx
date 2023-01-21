import GlobalStyles from '@/styles/globals'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import Head from "next/head"
import MenuMobile from '@/components/MenuMobile'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <MenuMobile items={["Sobre", "Habilidades", "Projetos", "Contato"]} />
      <NavBar items={["Sobre", "Habilidades", "Projetos", "Contato"]} />

      <AnimatePresence mode='wait' initial={true} >
        <Component {...pageProps} />
      </AnimatePresence>
      <GlobalStyles />
    </>
  )
}
