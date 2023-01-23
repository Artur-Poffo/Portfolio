import { Container } from "../styles/pages/habilidades"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'

import Layout from '@/components/Layout'
import DefaultTitle from "@/components/DefaultTitle"
import GridSkills from '@/components/SkillCard/Grid'

const Skills: React.FC = ({ AllSkills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <DefaultTitle text='Habilidades:' key={"Skills Page"} />

        <Container>
          <GridSkills Skills={AllSkills} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mywebexperience.vercel.app/api/Skills/getAll")
  const data = await res.json()

  return {
    props: {
      AllSkills: data.Skills
    },
    revalidate: 120
  }
}

export default Skills