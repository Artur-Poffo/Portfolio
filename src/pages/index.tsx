import { GetStaticProps } from "next"
import { Container, Info } from "../styles/pages/home"

import MediaIcons from "@/components/MediaIcons"
import AvatarJoy from "@/components/AvatarJoy"
import DefaultButton from "@/components/DefaultButton"
import Link from "next/link"
import { motion } from "framer-motion"

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Info as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .6 }} >
          <h1>Artur Poffo</h1>
          <h3>Desenvolvedor Full-Stack</h3>
          <p>Tenho 16 anos e estou estudando para me tornar um desenvolvedor Full-Stack</p>
          <MediaIcons />
          <AvatarJoy />
          <Link href={"/Sobre"} ><DefaultButton text={"Sobre Mim"} /></Link>
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

export default Home