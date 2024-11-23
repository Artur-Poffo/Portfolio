interface DefaultCardProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  translateEffect?: boolean;
  borderEffect?: boolean;
}

export function DefaultCard({
  children,
  className,
  translateEffect = false,
  borderEffect = false,
}: DefaultCardProps) {
  return (
    <article
      className={`bg-neutrals-800/60 backdrop-blur-xl border border-neutrals-700 rounded-md transition-all ${translateEffect ? "hover:-translate-y-1" : ""} ${borderEffect ? "hover:border-primary/60" : ""} ${className}`}
    >
      {children}
    </article>
  );
}
