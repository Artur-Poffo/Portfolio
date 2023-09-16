import { FlashyLink } from "@/components/Navigation/FlashyLink";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { SectionTitle } from "@/components/UI/SectionTitle";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4" >
      <header className="my-4 text-center" >
        <SectionTitle title="Projetos Selecionados" description="Chegamos na melhor parte, veja os meus projetos selecionados :)" />
      </header>

      <div className="flex flex-col items-center gap-20 mt-12" >
        <div className="flex flex-col items-center gap-10" >
          <ProjectCard resumed />
          <ProjectCard resumed />
          <ProjectCard resumed />
        </div>

        <FlashyLink text="Ver mais projetos" to="/projects" />
      </div>
    </section>
  )
}