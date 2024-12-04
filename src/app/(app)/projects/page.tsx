import { SectionTitle } from "@/components/UI/SectionTitle";
import { ResourceGroup } from "@/components/UI/ResourceGroup";
import { ContactSection } from "@/sections/Contact";
import { fetchProjectsByGroup } from "@/sanity/queries/fetchProjectsByGroup";

export default async function Projects() {
  const projectsByGroup = await fetchProjectsByGroup();

  return (
    <>
      <section
        id="all-projects"
        className="max-w-screen-xl mx-auto pt-24 flex flex-col gap-10 px-4"
      >
        <header className="flex flex-col items-center gap-4">
          <SectionTitle label="Projetos" title="Meus Projetos" center />
        </header>

        {projectsByGroup.map(({ groupName, projects }) => (
          <ResourceGroup
            key={groupName}
            groupName={groupName}
            projects={projects}
          />
        ))}
      </section>

      <ContactSection />
    </>
  );
}
