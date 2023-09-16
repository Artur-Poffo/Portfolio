import { FlashyLink } from "@/components/Navigation/FlashyLink";
import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SkillCard } from "@/components/UI/SkillCard";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 mb-24">
      <header className="my-4 text-center" >
        <SectionTitle title="Habilidades" description="Nessa seção veja meus principais conhecimentos e habilidades" />
      </header>

      <div className="flex flex-col items-center gap-20 mt-12" >
        <DefaultListItems>
          <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" delay={0.1} />
          <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" delay={0.2} />
          <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" delay={0.3} />
          <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" delay={0.4} />
          <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" delay={0.5} />
        </DefaultListItems>

        <FlashyLink text="Ver mais habilidades" to="/skills" />
      </div>
    </section>
  )
}