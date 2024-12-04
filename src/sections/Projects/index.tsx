import { NavButton } from "@/components/Navigation/NavButton";
import { AnimatedList } from "@/components/UI/AnimatedList";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { urlFor } from "@/sanity/lib/image";
import { fetchPinnedProjects } from "@/sanity/queries/fetchPinnedProjects";
import { MoveRight } from "lucide-react";

export async function ProjectsSection() {
  const pinnedProjects = await fetchPinnedProjects();

  return (
    <section id="projects" className="section-container flex flex-col gap-10">
      <header className="w-full flex justify-center">
        <SectionTitle label="Projetos" title="Meus Projetos" center />
      </header>

      <div className="w-full flex flex-col items-center gap-10">
        <AnimatedList
          items={pinnedProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              title={project.name}
              description={project.description}
              image={urlFor(project.image).url()}
              links={project.links}
              reverse={index % 2 === 0}
            />
          ))}
          duration={0.8}
          className="w-full flex flex-col gap-8"
        />

        <NavButton text="Ver mais" href="/projects" icon={MoveRight} />
      </div>
    </section>
  );
}
