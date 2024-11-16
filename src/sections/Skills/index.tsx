import { NavButton } from "@/components/Navigation/NavButton";
import { AnimatedList } from "@/components/UI/AnimatedList";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SkillCard } from "@/components/UI/SkillCard";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { MoveRight } from "lucide-react";

const skills = [
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
  { name: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", icon: <ArrowUpIcon /> },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <header className="w-full flex justify-center">
        <SectionTitle label="Habilidades" title="Minhas Habilidades" center />
      </header>

      <div className="flex flex-col items-center gap-10" >
        <AnimatedList
          items={skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
          className="flex flex-wrap gap-x-4 gap-y-8"
          withListStyle={false}
          withDelay={false}
          animationOrientation="vertical"
        />

        <NavButton text="Ver mais" href="/skills" icon={MoveRight} />
      </div>
    </section>
  )
}
