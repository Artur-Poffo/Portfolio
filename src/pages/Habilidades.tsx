import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from "next"
import { } from "../styles/pages/habilidades"

import DefaultTitle from "@/components/DefaultTitle"

const About: React.FC = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DefaultTitle text="Habilidades:" />


    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("https://mywebexperience.vercel.app/api/Skills/getAll")

  return {
    props: {}
  }
}

export default About