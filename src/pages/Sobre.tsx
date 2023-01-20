import { GetStaticProps } from "next"
import { Container, Info } from "../styles/pages/sobre"

import { motion } from "framer-motion"
import DefaultTitle from "@/components/DefaultTitle"
import AvatarJoy from "@/components/AvatarJoy"

const About: React.FC = () => {
  return (
    <>
      <DefaultTitle text="Sobre:" key={"title about"} />

      <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}  >
        <AvatarJoy />

        <Info>
          <h1>Olá,</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut explicabo officia ducimus quasi doloremque quis hic, vero tempora! Recusandae, sapiente eum porro impedit explicabo necessitatibus aut. Quo tenetur veritatis facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis aliquid cum fugit saepe unde, optio, molestiae quasi itaque, expedita facilis recusandae laudantium veniam sequi neque ipsam harum ipsum? Corporis.</p>
        </Info>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default About