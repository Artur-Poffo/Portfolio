import { MarkdownContainer } from "@/components/UI/MarkdownContainer"
import { PageHeader } from "@/components/UI/PageHeader"
import { PageWrapper } from "@/components/UI/PageWrapper"
import { IProject } from "@/interfaces/IProject"
import { hygraph } from "@/lib/graphql-request"
import Image from "next/image"

export const revalidate = 60 * 60 * 1 // One hour

interface queryResponse {
  project: IProject
}

async function getProject(params: { id: string }) {
  const { project } = await hygraph.request<queryResponse>(
    `query GetProject($id: ID!) {
      project(where: { id: $id }) {
        projectImage {
          url
        },
        name,
        resume,
        content
      }
    }`,
    {
      id: params.id
    }
  )

  return project
}

interface ProjectProps {
  params: {
    id: string
  }
}

export default async function Project({ params: { id } }: ProjectProps) {
  const project = await getProject({ id })

  return (
    <PageWrapper>
      <div className="flex flex-col items-center pb-20" >
        <PageHeader title={project.name} />

        <article className="max-w-screen-md flex flex-col items-center gap-24 px-4" >
          <header className="flex flex-col gap-4" >
            <Image className="max-h-[500px] rounded-xl border border-brand-gray-300" src={project.projectImage.url} width={800} height={800} alt="Imagem do projeto" />
            <span className="text-sm text-brand-gray-400 font-bold" >{project.resume}</span>
          </header>

          <main className="self-start">
            <MarkdownContainer>
              {project.content}
            </MarkdownContainer>
          </main>
        </article>
      </div>
    </PageWrapper>
  )
}