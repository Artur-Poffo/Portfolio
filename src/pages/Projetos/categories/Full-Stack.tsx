import { Container } from "../../../styles/pages/projetos"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const FullStack: React.FC = ({ Projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Container>
        <ProjectsHeader Title="Full-Stack" />

        <ProjectsGrid Projects={Projects} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mywebexperience.vercel.app/api/Projects/categories/Full-Stack")
  const data = await res.json()

  return {
    props: {
      Projects: data.Projects
    },
    revalidate: 120
  }
}

export default FullStack