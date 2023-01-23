import { Container } from "../../styles/pages/projetos"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const Projects: React.FC = ({ AllProjects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Container>
        <ProjectsHeader />

        <ProjectsGrid Projects={AllProjects} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mywebexperience.vercel.app/api/Projects/getAll")
  const data = await res.json()

  return {
    props: {
      AllProjects: data.Projects
    },
    revalidate: 120
  }
}

export default Projects