import { GetStaticProps } from "next"
import Head from "next/head"
import { Container } from "../styles/pages/NotFound"

import Layout from "../components/Layout"
import Link from "next/link"

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Not Found | Meu Portfolio</title>
      </Head>

      <Container>
        <h1>Opss, Se perdeu?</h1>
        <Link href={"/"} >Voltar</Link>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default NotFound