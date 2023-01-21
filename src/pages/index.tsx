import { GetStaticProps } from "next"
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