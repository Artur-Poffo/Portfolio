import { DefaultCard } from "../DefaultCard";

interface SkillCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function SkillCard({ name, description, icon }: SkillCardProps) {
  return (
    <DefaultCard
      className="w-full sm:w-[300px] min-h-[250px] flex flex-col items-center gap-2"
      translateEffect
      borderEffect
    >
      <header className="flex flex-col items-center text-center -mt-4">
        {icon}
        <h3 className="text-2xl sm:text-3xl text-primary font-bold font-mono">
          {name}
        </h3>
      </header>

      <main className="text-sm text-neutrals-300 px-4 pb-4">
        <p>{description}</p>
      </main>
    </DefaultCard>
  );
}
