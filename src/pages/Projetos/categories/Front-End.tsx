import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const FronEnd: React.FC = ({ AllProjects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ProjectsHeader />

      <ProjectsGrid />
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

export default FronEnd