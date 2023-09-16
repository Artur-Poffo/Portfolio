import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { ProjectCard } from "@/components/UI/ProjectCard";

export default function Projects() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-center" >
        <PageHeader title="Projetos" />

        <div className="px-4" >
          <DefaultListItems>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}