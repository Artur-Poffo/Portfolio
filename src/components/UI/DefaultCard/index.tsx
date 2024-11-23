export function DefaultCard({children, className, hoverEffect = false}: {children: React.ReactNode | React.ReactNode[], className?: string, hoverEffect?: boolean}) {
  return (
    <article className={`bg-neutrals-800/60 backdrop-blur-xl border border-neutrals-700 rounded-md ${hoverEffect ? 'transition-all hover:-translate-y-1 hover:border-primary/60' : ''} ${className}`}>
      {children}
    </article>
  )
}
