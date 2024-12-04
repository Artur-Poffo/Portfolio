import { NavButton } from "@/components/Navigation/NavButton";
import { AnimatedList } from "@/components/UI/AnimatedList";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SkillCard } from "@/components/UI/SkillCard";
import { urlFor } from "@/sanity/lib/image";
import { fetchPinnedSkills } from "@/sanity/queries/fetchPinnedSkills";
import { MoveRight } from "lucide-react";

export async function SkillsSection() {
  const pinnedSkills = await fetchPinnedSkills();

  return (
    <section id="skills" className="section-container flex flex-col gap-10">
      <header className="w-full flex justify-center">
        <SectionTitle label="Habilidades" title="Minhas Habilidades" center />
      </header>

      <div className="flex flex-col items-center gap-10">
        <AnimatedList
          items={pinnedSkills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              description={skill.description}
              icon={urlFor(skill.icon).url()}
            />
          ))}
          animationOrientation="vertical"
        />

        <NavButton text="Ver mais" href="/skills" icon={MoveRight} />
      </div>
    </section>
  );
}
