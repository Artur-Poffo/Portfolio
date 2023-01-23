import { GetStaticPaths, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

const Work: React.FC = ({ }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Rota Dinâmica!</h1>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    },
    revalidate: 400
  }
}

export default Work