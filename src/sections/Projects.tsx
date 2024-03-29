import { FlashyLink } from "@/components/Navigation/FlashyLink";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { IProject } from "@/interfaces/IProject";
import { hygraph } from "@/lib/graphql-request";

interface queryResponse {
  projects: IProject[]
}

async function getProjects() {
  const { projects } = await hygraph.request<queryResponse>(
    `query {
      projects(where: {highlighted: true}, first: 5) {
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

export async function ProjectsSection() {
  const projects = await getProjects()

  return (
    <section id="projects" className="px-4" >
      <header className="my-4 text-center" >
        <SectionTitle title="Projetos Selecionados" description="Chegamos na melhor parte, veja os meus projetos selecionados :)" />
      </header>

      <div className="flex flex-col items-center gap-20 mt-12" >
        <ul className="flex flex-col items-center gap-10" >
          {projects.map((project: IProject) => {
            return (
              <li key={project.id} className="w-full md:w-auto" >
                <ProjectCard
                  id={project.id}
                  imageUrl={project.projectImage.url}
                  name={project.name}
                  resume={project.resume}
                  description={project.description}
                  resumed
                />
              </li>
            )
          })}
        </ul>

        <FlashyLink text="Ver mais projetos" to="/projects" />
      </div>
    </section>
  )
}