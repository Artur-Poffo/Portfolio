import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { IProject } from "@/interfaces/IProject";
import { hygraph } from "@/lib/graphql-request";

export const revalidate = 60 * 60 * 1 // One hour

interface queryResponse {
  projects: IProject[]
}

async function getProjects() {
  const { projects } = await hygraph.request<queryResponse>(
    `query {
      projects(last: 100) {
        id,
        projectImage {
          url
        },
        name,
        resume,
        description
      }
    }`
  )

  return projects
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-center" >
        <PageHeader title="Projetos" />

        <div className="px-4" >
          <DefaultListItems>
            {projects.map((project: IProject) => {
              return (
                <li key={project.id} >
                  <ProjectCard
                    id={project.id}
                    imageUrl={project.projectImage.url}
                    name={project.name}
                    resume={project.resume}
                    description={project.description}
                  />
                </li>
              )
            })}
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}
