import { SectionTitle } from "@/components/UI/SectionTitle";
import { ResourceGroup } from "@/components/UI/ResourceGroup";
import { ContactSection } from "@/sections/Contact";
import { fetchSkillsByGroup } from "@/sanity/queries/fetchSkillsByGroup";

export default async function Skills() {
  const skillsByGroup = await fetchSkillsByGroup();

  return (
    <>
      <section
        id="all-skills"
        className="max-w-screen-xl mx-auto pt-24 flex flex-col gap-10 px-4"
      >
        <header className="flex flex-col items-center gap-4">
          <SectionTitle label="Habilidades" title="Minhas Habilidades" center />
        </header>

        {skillsByGroup.map(({ groupName, skills }) => (
          <ResourceGroup
            key={groupName}
            groupName={groupName}
            skills={skills}
          />
        ))}
      </section>

      <ContactSection />
    </>
  );
}
