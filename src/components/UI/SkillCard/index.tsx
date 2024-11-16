interface SkillCardProps {
  name: string
  description: string
  icon: React.ReactNode
}

export function SkillCard({ name, description, icon }: SkillCardProps) {
  return (
    <article
      className="w-[300px] min-h-[250px] bg-neutrals-800/60 backdrop-blur-xl border border-neutrals-700 rounded-md flex flex-col items-center gap-2 border-transparent transition-all hover:-translate-y-1 hover:border-primary/60"
    >
      <header className="flex flex-col items-center text-center -mt-4" >
        {icon}
        <h3 className="text-2xl text-primary font-bold font-mono" >{name}</h3>
      </header>

      <main className="text-sm px-4 pb-4" >
        <p>{description}</p>
      </main>
    </article>
  )
}
