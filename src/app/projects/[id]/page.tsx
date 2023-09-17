import { PageHeader } from "@/components/UI/PageHeader"
import { PageWrapper } from "@/components/UI/PageWrapper"
import { IProject } from "@/interfaces/IProject"
import { getClient } from "@/lib/apollo"
import { gql } from "@apollo/client"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface ProjectProps {
  params: {
    id: string
  }
}

export const dynamic = "force-dynamic"

interface queryResponse {
  project: IProject
}

export default async function Project({ params: { id }, }: ProjectProps) {
  const query = gql`
  query GetPRoject($id: ID!) {
    project(where: { id: $id }) {
      projectImage {
        url
      },
      name,
      resume,
      content
    }
  }
`

  const { data: { project } } = await getClient().query<queryResponse>({
    query,
    variables: {
      id
    }
  });

  return (
    <PageWrapper>
      <div className="flex flex-col items-center pb-20" >
        <PageHeader title={project.name} />

        <article className="flex flex-col gap-24 px-4" >
          <header className="flex flex-col gap-4" >
            <Image className="rounded-xl border border-brand-gray-300" src={project.projectImage.url} width={800} height={800} alt="Imagem do projeto" />
            <span className="text-sm text-brand-gray-400 font-bold" >{project.resume}</span>
          </header>

          <main className="w-full md:max-w-screen-lg mx-auto">
            <ReactMarkdown className="prose prose-invert max-w-none break-words prose-h2:text-brand-gray-100 prose-h2:text-3xl prose-img:rounded-md prose-a:underline prose-a:underline-offset-4 prose-a:decoration-brand-blue-200 prose-a:transition-colors prose-a:font-normal hover:prose-a:text-brand-blue-200">
              {project.content}
            </ReactMarkdown>
          </main>
        </article>
      </div>
    </PageWrapper>
  )
}