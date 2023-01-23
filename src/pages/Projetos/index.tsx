import { Container } from "../../styles/pages/projetos"
import { GetStaticProps } from "next"

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const Projects: React.FC = () => {
  return (
    <>
      <Container>
        <ProjectsHeader />

        <ProjectsGrid />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Projects