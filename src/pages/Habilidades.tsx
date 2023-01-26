import { GetStaticProps } from "next"
import Head from "next/head"
import { Container } from "../styles/pages/habilidades"
import { InferGetStaticPropsType } from 'next'

import Layout from '@/components/Layout'
import DefaultTitle from "@/components/DefaultTitle"
import GridSkills from '@/components/SkillCard/Grid'

const Skills: React.FC = ({ AllSkills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <DefaultTitle text='Habilidades:' key={"Skills Page"} />

        <Head>
          <title>Habilidades | Meu Portfolio</title>
        </Head>

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