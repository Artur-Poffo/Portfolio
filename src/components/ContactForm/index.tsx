import { useState } from "react"
import { Form } from "./styles"

import emailjs from "@emailjs/browser"
import DefaultButton from "../DefaultButton"
import InputForm from "../InputForm"

const ContactForm: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function sendEmail(e: React.SyntheticEvent) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_x5xrds3", "template_1n9td6o", templateParams, "I8BHospp99pX-RKXG")
      .then((res) => {
        alert("Email enviado, obrigado por entrar em contato :)")
        console.log(res.status + " | " + res.text)

        setName("")
        setEmail("")
        setMessage("")
      }, (err) => {
        alert("Algo deu errado :(, tente novamente mais tarde")
        console.log(err)
      })
  }

  return (
    <>
      <Form onSubmit={sendEmail} >
        <h1>Entrar em Contato:</h1>
        <InputForm id="Name" label="Nome:" placeholder="Nome" type="text" state={name} setState={setName} />
        <InputForm id="email" label="Email:" placeholder="Seu Email" type="email" state={email} setState={setEmail} />
        <textarea cols={30} rows={10} placeholder="Sua Mensagem" value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
        <DefaultButton text="Enviar" />
      </Form>
    </>
  )
}

export default ContactForm