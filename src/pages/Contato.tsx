import { GetStaticProps } from "next"
import Head from "next/head"
import { Container } from "../styles/pages/contato"

import Layout from "@/components/Layout"
import DefaultTitle from "@/components/DefaultTitle"
import ContactForm from "@/components/ContactForm"

const Contato: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Contato | Meu Portfolio</title>
      </Head>

      <Container>
        <DefaultTitle text="Contato:" key={"Contact Title"} />

        <ContactForm />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Contato