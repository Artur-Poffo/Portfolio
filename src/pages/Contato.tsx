import { Container } from "../styles/pages/contato"

import Layout from "@/components/Layout"
import DefaultTitle from "@/components/DefaultTitle"
import ContactForm from "@/components/ContactForm"

const Contato: React.FC = () => {
  return (
    <Layout>
      <Container>
        <DefaultTitle text="Contato:" key={"Contact Title"} />

        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contato