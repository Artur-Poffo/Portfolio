import { Container, ImageBackground, Header, Content } from "../../../styles/pages/trabalho"
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

import Layout from '@/components/Layout'
import ListItem from "@/components/ListItem"

const Work: React.FC = ({ info }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <Container>
          <ImageBackground image={info.image} />

          <Header>
            <h1>{info.name}</h1>
            <ul>
              {info.techs.map((tech: string, index: any) => {
                return (
                  <ListItem key={index} text={tech} />
                )
              })}
            </ul>
          </Header>

          <Content>

          </Content>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams
  const res = await fetch(`https://mywebexperience.vercel.app/api/Projects/work/${id}`)
  const data = await res.json()

  return {
    props: {
      info: data.info
    },
    revalidate: 500
  }
}

export default Work