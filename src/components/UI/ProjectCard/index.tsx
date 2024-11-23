import Image from "next/image";
import { DefaultCard } from "../DefaultCard";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  links: {
    label: string;
    url: string;
  }[];
  reverse?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  links,
  reverse,
}: ProjectCardProps) {
  return (
    <DefaultCard
      className={`w-full h-[400px] flex ${reverse ? "flex-row-reverse" : ""} gap-4 p-4`}
      borderEffect
    >
      <main className="w-1/2 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold font-mono text-primary">{title}</h2>
          <p className="text-sm text-neutrals-300">{description}</p>
        </div>

        <div className="w-full rounded-md bg-primary/10 px-4 py-1">
          <ul className="flex">
            {links.map((link, index) => (
              <li
                key={link.label}
                className="text-primary rounded-md font-semibold"
              >
                <a href={link.url} target="_blank">
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="text-primary mx-2">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <div className="w-1/2 h-full relative">
        <Image
          src={image}
          alt={`Imagem do projeto: ${title}`}
          width={300}
          height={300}
          className="w-full h-full absolute top-0 left-0 object-cover rounded-md"
        />
      </div>
    </DefaultCard>
  );
}
