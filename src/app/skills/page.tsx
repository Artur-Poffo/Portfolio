import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { SkillCard } from "@/components/UI/SkillCard";

export default function Skills() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-center" >
        <PageHeader title="Habilidades" />

        <div className="px-4" >
          <DefaultListItems>
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
            <SkillCard name="Node.js" content="Experiência em desenvolver sistemas modernos com Node.js" />
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}