import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

import Layout from '@/components/Layout'

const Work: React.FC = ({ info }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <h1>dawdawd</h1>
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