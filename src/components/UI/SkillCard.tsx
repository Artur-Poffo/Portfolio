import { FaNodeJs } from "react-icons/fa";
import { DefaultCard } from "./DefaultCard";

interface SkillCardProps {
  imageUrl?: string;
  name: string;
  content: string;
  delay?: number
}

export function SkillCard({ content, name, imageUrl, delay = 0 }: SkillCardProps) {
  return (
    <DefaultCard className="w-full md:w-[330px] min-h-[200px] lg:min-h-[330px] flex flex-col items-center gap-4 pt-0" delay={delay} >
      <header className="flex flex-col items-center gap-2 -mt-6" >
        <FaNodeJs size={60} color={"green"} />
        <h2 className="text-lg font-bold font-mono text-brand-gray-100" >{name}</h2>
      </header>

      <main>
        <p>{content}</p>
      </main>
    </DefaultCard>
  )
}