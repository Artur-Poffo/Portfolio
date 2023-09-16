interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="w-full py-52 flex items-center justify-center bg-center bg-gradient-to-t to-brand-blue-400 from-brand-gray-900 text-center" >
      <h1 className="text-4xl md:text-6xl font-mono font-bold uppercase tracking-widest text-brand-gray-100" >{title}</h1>
    </div>
  )
}