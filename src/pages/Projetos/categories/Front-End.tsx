import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectsGrid from "@/components/ProjectsGrid"

const FronEnd: React.FC = () => {
  return (
    <>
      <ProjectsHeader />

      <ProjectsGrid />
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://mywebexperience.vercel.app/api/Projects/categories/Front-End")
//   const data = await res.json()

//   return {
//     props: {
//       Projects: data.Projects
//     },
//     revalidate: 120
//   }
// }

export default FronEnd