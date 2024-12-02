import { SectionTitle } from "@/components/UI/SectionTitle";
import { ResourceGroup } from "@/components/UI/ResourceGroup";
import { ContactSection } from "@/sections/Contact";
import { Project } from "@/interfaces/Project";

interface ProjectsGroupedByResourceGroup {
  [resourceGroupName: string]: Project[];
}

const projects: ProjectsGroupedByResourceGroup = {
  "Front End": [
    {
      name: "Project One",
      description: "This is the description for Project One.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-one" },
        { label: "Live Demo", url: "https://project-one.com" },
      ],
    },
    {
      name: "Project Two",
      description: "This is the description for Project Two.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-two" },
        { label: "Live Demo", url: "https://project-two.com" },
      ],
    },
    {
      name: "Project Three",
      description: "This is the description for Project Three.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-three" },
        { label: "Live Demo", url: "https://project-three.com" },
      ],
    },
    {
      name: "Project Four",
      description: "This is the description for Project Four.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-four" },
        { label: "Live Demo", url: "https://project-four.com" },
      ],
    },
    {
      name: "Project Five",
      description: "This is the description for Project Five.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-five" },
        { label: "Live Demo", url: "https://project-five.com" },
      ],
    },
  ],
  "Back End": [
    {
      name: "Project One",
      description: "This is the description for Project One.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-one" },
        { label: "Live Demo", url: "https://project-one.com" },
      ],
    },
    {
      name: "Project Two",
      description: "This is the description for Project Two.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-two" },
        { label: "Live Demo", url: "https://project-two.com" },
      ],
    },
    {
      name: "Project Three",
      description: "This is the description for Project Three.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-three" },
        { label: "Live Demo", url: "https://project-three.com" },
      ],
    },
    {
      name: "Project Four",
      description: "This is the description for Project Four.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-four" },
        { label: "Live Demo", url: "https://project-four.com" },
      ],
    },
    {
      name: "Project Five",
      description: "This is the description for Project Five.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHByb2plY3R8ZW58MHx8fHwxNjY5MjY0NzY2&ixlib=rb-1.2.1&q=80&w=400",
      links: [
        { label: "GitHub", url: "https://github.com/project-five" },
        { label: "Live Demo", url: "https://project-five.com" },
      ],
    },
  ],
};

export default function Projects() {
  return (
    <>
      <section
        id="all-projects"
        className="max-w-screen-xl mx-auto pt-24 flex flex-col gap-10 px-4"
      >
        <header className="flex flex-col items-center gap-4">
          <SectionTitle label="Projetos" title="Meus Projetos" center />
        </header>

        {Object.entries(projects).map(([resourceGroup, projects]) => (
          <ResourceGroup
            key={resourceGroup}
            groupName={resourceGroup}
            projects={projects}
          />
        ))}
      </section>

      <ContactSection />
    </>
  );
}
