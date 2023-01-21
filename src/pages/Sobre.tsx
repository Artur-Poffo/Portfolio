import { GetStaticProps } from "next"
import { Container, Info } from "../styles/pages/sobre"

import Layout from "@/components/Layout"
import DefaultTitle from "@/components/DefaultTitle"
import AvatarImage from "@/components/AvatarImage"

const About: React.FC = () => {
  return (
    <>
      <Layout>
        <DefaultTitle text="Sobre:" key={"About Page"} />

        <Container>
          <AvatarImage />

          <Info>
            <h1>Olá,</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem iure qui nesciunt odio error pariatur laudantium corrupti, saepe, dolorum quo deserunt nemo, repudiandae nobis amet fuga autem ? Nihil, nostrum quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro harum obcaecati laudantium dolore amet a sint quae consequuntur ipsum ? At dolore deserunt maiores earum obcaecati aut, ullam laborum eaque nesciunt!</p>
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