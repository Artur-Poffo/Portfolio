interface SkillCardProps {
  name: string
  description: string
  icon: React.ReactNode
}

export function SkillCard({ name, description, icon }: SkillCardProps) {
  return (
    <article
      className="w-[300px] min-h-[250px] bg-slate-800 rounded-md flex flex-col items-center gap-2 cursor-pointer border-b-2 border-transparent transition-all hover:-translate-y-1 hover:border-b-2 hover:border-emerald-400"
    >
      <header className="flex flex-col items-center text-center -mt-4" >
        {icon}
        <h3 className="text-xl text-emerald-400 font-bold font-mono" >{name}</h3>
      </header>

      <main className="text-sm px-4 pb-4" >
        <p>{description}</p>
      </main>
    </article>
  )
}
