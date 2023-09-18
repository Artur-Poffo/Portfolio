import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { IProject } from "@/interfaces/IProject";
import { getClient } from "@/lib/apollo";
import { gql } from "@apollo/client";

export const dynamic = "force-dynamic"

const query = gql`
  query {
    projects(first: 100) {
      id,
      projectImage {
        url
      },
      name,
      resume,
      description
    }
  }
`

interface queryResponse {
  projects: IProject[]
}

export default async function Projects() {
  const { data } = await getClient().query<queryResponse>({
    query,
  });

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-center" >
        <PageHeader title="Projetos" />

        <div className="px-4" >
          <DefaultListItems>
            {data.projects.map((project: IProject) => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  imageUrl={project.projectImage.url}
                  name={project.name}
                  resume={project.resume}
                  description={project.description}
                />
              )
            })}
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}