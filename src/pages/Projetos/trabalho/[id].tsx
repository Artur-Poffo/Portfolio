import { Container, ImageBackground, Header, Content, ProjectText } from "../../../styles/pages/trabalho"
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import Head from "next/head"

import Layout from '@/components/Layout'
import ListItem from "@/components/ListItem"

const Work: React.FC = ({ info }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${info.name} | Meu Portfolio`}</title>
          <meta
            name="description"
            content={info.desc}
          />
          <meta
            property="og:description"
            content={info.desc}
          />
        </Head>

        <Container>
          <ImageBackground image={info.image}>
            <div>
              {info.RepoLink ? <a href={info.RepoLink}>Repositório</a> : <></>}
              {info.VisitLink ? <a href={info.VisitLink}>Visitar Projeto</a> : <></>}
            </div>
          </ImageBackground>

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
            <ProjectText>
              <div dangerouslySetInnerHTML={{ __html: info.content }} >

              </div>
            </ProjectText>
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
    revalidate: 120
  }
}

export default Work