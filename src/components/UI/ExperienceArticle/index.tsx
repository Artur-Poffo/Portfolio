import Image from "next/image";

interface ExperienceArticleProps {
  role: string;
  description: string;
  logo: string;
  startDate: string;
  endDate?: string;
}

export function ExperienceArticle({
  role,
  description,
  logo,
  startDate,
  endDate,
}: ExperienceArticleProps) {
  function parseDate(date: string) {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <article className="w-full flex flex-col gap-4">
      <header className="w-full flex flex-col gap-4">
        <Image
          className="w-14 h-14 rounded-md"
          src={logo}
          alt={role}
          width={80}
          height={80}
        />

        <div>
          <h3 className="text-primary text-4xl font-bold font-mono">{role}</h3>

          <span className="text-sm text-neutrals-400">
            {parseDate(startDate)} -{" "}
            {endDate ? parseDate(endDate) : "Atualmente"}
          </span>
        </div>
      </header>

      <main className="max-w-2xl">
        <p className="text-neutrals-300">{description}</p>
      </main>
    </article>
  );
}
