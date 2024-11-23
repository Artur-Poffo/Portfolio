interface ExperienceArticleProps {
  company: {
    name: string;
    logo: string;
  };
  role: string;
  period: {
    start: string;
    end: string;
  };
  description: string;
}

export function ExperienceArticle({
  company,
  role,
  period,
  description,
}: ExperienceArticleProps) {
  return (
    <article className="w-full flex flex-col gap-4">
      <header className="w-full flex flex-col gap-4">
        <img className="w-14 h-14 rounded-md" src={company.logo} />

        <div>
          <h3 className="text-primary text-4xl font-bold font-mono">{role}</h3>

          <span className="text-sm text-neutrals-400">
            {period.start} - {period.end}
          </span>
        </div>
      </header>

      <main className="max-w-2xl">
        <p className="text-neutrals-300">{description}</p>
      </main>
    </article>
  );
}
