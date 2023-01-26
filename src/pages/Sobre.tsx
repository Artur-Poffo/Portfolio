import { GetStaticProps } from "next"
import Head from "next/head"
import { Container, Info } from "../styles/pages/sobre"

import Link from "next/link"
import Layout from "@/components/Layout"
import DefaultTitle from "@/components/DefaultTitle"
import AvatarImage from "@/components/AvatarImage"

const About: React.FC = () => {
  return (
    <>
      <Layout>
        <DefaultTitle text="Sobre:" key={"About Page"} />

        <Head>
          <title>Sobre | Meu Portfolio</title>
        </Head>

        <Container>
          <AvatarImage />

          <Info>
            <h1>Olá,</h1>
            <p>Meu nome é Artur Poffo tenho 16 anos e estudo programação desde os meus 13, desejo no futuro me tornar um Desenvolvedor Full-Stack, para conseguir isso estou procurando um emprego como pequeno aprendiz na área de programação. Estou no 2°ano do ensino médio noturno, por tanto tenho disponibilidade de horário. Para saber mais entre em <Link href={"/Contato"} >Contato</Link> e veja meus <Link href={"/Projetos"} >Projetos</Link>.</p>
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

export default About