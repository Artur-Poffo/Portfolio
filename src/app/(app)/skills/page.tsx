import { SectionTitle } from "@/components/UI/SectionTitle";
import { ResourceGroup } from "@/components/UI/ResourceGroup";
import { ContactSection } from "@/sections/Contact";
import { Skill } from "@/interfaces/Skill";

interface SkillsGroupedByResourceGroup {
  [resourceGroupName: string]: Skill[];
}

const skills: SkillsGroupedByResourceGroup = {
  "Front End": [
    {
      name: "React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: "react",
    },
    {
      name: "Next.js",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: "nextjs",
    },
    {
      name: "Next.js",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: "nextjs",
    },
    {
      name: "Next.js",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: "nextjs",
    },
    {
      name: "Next.js",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: "nextjs",
    },
  ],
  "Back End": [
    {
      name: "Node.js",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: "nodejs",
    },
  ],
};

export default function Skills() {
  return (
    <>
      <section
        id="all-skills"
        className="max-w-screen-xl mx-auto pt-24 flex flex-col gap-10 px-4"
      >
        <header className="flex flex-col items-center gap-4">
          <SectionTitle label="Habilidades" title="Minhas Habilidades" center />
        </header>

        {Object.entries(skills).map(([resourceGroup, skills]) => (
          <ResourceGroup
            key={resourceGroup}
            groupName={resourceGroup}
            skills={skills}
          />
        ))}
      </section>

      <ContactSection />
    </>
  );
}
