import { NavButton } from "@/components/Navigation/NavButton";
import { AnimatedList } from "@/components/UI/AnimatedList";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { MoveRight } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "This is the description for Project One.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
    links: [
      { label: "GitHub", url: "https://github.com/project-one" },
      { label: "Live Demo", url: "https://project-one.com" },
    ],
  },
  {
    title: "Project Two",
    description: "This is the description for Project Two.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
    links: [
      { label: "GitHub", url: "https://github.com/project-two" },
      { label: "Live Demo", url: "https://project-two.com" },
    ],
  },
  {
    title: "Project Three",
    description: "This is the description for Project Three.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
    links: [
      { label: "GitHub", url: "https://github.com/project-three" },
      { label: "Live Demo", url: "https://project-three.com" },
    ],
  },
  {
    title: "Project Four",
    description: "This is the description for Project Four.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
    links: [
      { label: "GitHub", url: "https://github.com/project-four" },
      { label: "Live Demo", url: "https://project-four.com" },
    ],
  },
  {
    title: "Project Five",
    description: "This is the description for Project Five.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
    links: [
      { label: "GitHub", url: "https://github.com/project-five" },
      { label: "Live Demo", url: "https://project-five.com" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <header className="w-full flex justify-center">
        <SectionTitle label="Projetos" title="Meus Projetos" center />
      </header>

      <div className="w-full flex flex-col items-center gap-10">
        <AnimatedList
          items={projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              links={project.links}
              reverse={index % 2 === 0}
            />
          ))}
          animationOrientation="horizontal"
          withDelay={false}
          withListStyle={false}
          duration={0.8}
          className="w-full flex flex-col gap-8"
        />

        <NavButton text="Ver mais" href="/projects" icon={MoveRight} />
      </div>
    </section>
  );
}
