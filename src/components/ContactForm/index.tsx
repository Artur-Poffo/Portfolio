import { Form } from "./styles"

import DefaultButton from "../DefaultButton"
import InputForm from "../InputForm"

const ContactForm: React.FC = () => {
  return (
    <>
      <Form>
        <h1>Entrar em Contato:</h1>
        <InputForm id="Name" label="Nome:" placeholder="Nome" type="text" />
        <InputForm id="email" label="Email:" placeholder="Seu Email" type="email" />
        <textarea cols={30} rows={10} placeholder="Sua Mensagem" />
        <DefaultButton text="Enviar" />
      </Form>
    </>
  )
}

export default ContactForm