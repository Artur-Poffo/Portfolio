import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from "next"
import { Container, Content, Info, ContainerSkills } from "../styles/pages/habilidades"

import ISkill from '@/interfaces/ISkills'
import { motion } from 'framer-motion'
import DefaultTitle from "@/components/DefaultTitle"

const About: React.FC = ({ AllSkills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DefaultTitle text='Habilidades:' />

      <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}>
        <Content>
          <Info>
            <h1>Minhas Habilidades:</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure qui nesciunt odio error pariatur laudantium corrupti, saepe, dolorum quo deserunt nemo, repudiandae nobis amet fuga autem? Nihil, nostrum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum obcaecati laudantium dolore amet a sint quae consequuntur ipsum? At dolore deserunt maiores earum obcaecati aut, ullam laborum eaque nesciunt!
            </p>
          </Info>
          <ContainerSkills>
            <ul>
              {AllSkills.map((skill: ISkill, index: number) => {
                return (
                  <>
                    <li key={index}>{skill.name}</li>
                  </>
                )
              })}
            </ul>
          </ContainerSkills>
        </Content>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("https://mywebexperience.vercel.app/api/Skills/getAll")
  const res = await data.json()

  return {
    props: {
      AllSkills: res.Skills
    }
  }
}

export default About