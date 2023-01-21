import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from "next"
import { Container } from "../styles/pages/habilidades"

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
  const data = await fetch("https://mywebexperience.vercel.app/api/Skills/getAll")
  const res = await data.json()

  return {
    props: {
      AllSkills: res.Skills
    },
    revalidate: 120
  }
}

export default Skills