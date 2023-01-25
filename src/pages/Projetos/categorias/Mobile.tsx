import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'
import Head from "next/head"

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const Mobile: React.FC = ({ Projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Projetos Mobile | Meu Portfolio</title>
      </Head>

      <ProjectsHeader Title="Mobile" />

      <ProjectsGrid Projects={Projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mywebexperience.vercel.app/api/Projects/categories/Mobile")
  const data = await res.json()

  return {
    props: {
      Projects: data.Projects
    },
    revalidate: 120
  }
}

export default Mobile