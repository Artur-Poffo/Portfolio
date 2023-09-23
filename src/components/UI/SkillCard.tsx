import Image from "next/image";
import { DefaultCard } from "./DefaultCard";

interface SkillCardProps {
  imageUrl: string;
  name: string;
  content: string;
}

export function SkillCard({ content, name, imageUrl }: SkillCardProps) {
  return (
    <DefaultCard className="w-full md:w-[330px] min-h-[200px] md:min-h-[330px] flex flex-col items-center gap-4 px-5 pb-5" >
      <header className="flex flex-col items-center gap-2 -mt-7" >
        <Image src={imageUrl} width={80} height={80} alt="Imagem da habilidade" />
        <h2 className="text-lg font-bold font-mono text-brand-gray-100" >{name}</h2>
      </header>

      <main>
        <p>{content}</p>
      </main>
    </DefaultCard>
  )
}