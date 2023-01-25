import { Container } from "../styles/pages/NotFound"

import Layout from "../components/Layout"
import Link from "next/link"

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1>Opss, Se perdeu?</h1>
        <Link href={"/"} >Voltar</Link>
      </Container>
    </Layout>
  )
}

export default NotFound