import { GetStaticProps } from "next"
import Head from "next/head"
import { Container, Info } from "../styles/pages/home"

import Layout from "@/components/Layout"
import MediaIcons from "@/components/MediaIcons"
import AvatarJoy from "@/components/AvatarJoy"
import DefaultButton from "@/components/DefaultButton"
import Link from "next/link"

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Meu Portfolio</title>
          <meta
            name="description"
            content="Tenho 16 anos e tenho interesse em me tornar um Desenvolvedor Full-Stack, neste Portfolio apresento minhas informações e meus projetos mais recentes!"
          />
          <meta
            property="og:description"
            content="Tenho 16 anos e tenho interesse em me tornar um Desenvolvedor Full-Stack, neste Portfolio apresento minhas informações e meus projetos mais recentes!"
          />
        </Head>

        <Container>
          <Info>
            <h1>Artur Poffo</h1>
            <h3>Desenvolvedor Full-Stack</h3>
            <p>Tenho 16 anos e estou estudando para me tornar um desenvolvedor Full-Stack</p>
            <MediaIcons />
            <AvatarJoy />
            <Link href={"/Sobre"} ><DefaultButton text={"Sobre Mim"} /></Link>
          </Info>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Home