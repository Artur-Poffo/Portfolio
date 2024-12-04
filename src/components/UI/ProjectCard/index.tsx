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
  minimal?: boolean;
}

/*
  PARA CASOS MAIS COMPLEXOS, RECOMENDO O USO DE UMA LIB EXTERNA COMO O "TAILWIND VARIANTS"
*/

export function ProjectCard({
  title,
  description,
  image,
  links,
  reverse,
  minimal = false,
}: ProjectCardProps) {
  return (
    <DefaultCard
      className={`w-full flex flex-col-reverse gap-4 p-4
        ${minimal ? "sm:w-[400px]" : "sm:flex-row sm:h-[400px]"} 
        ${reverse && !minimal ? "sm:flex-row-reverse" : ""}
      `}
      borderEffect
    >
      <div
        className={`w-full ${minimal ? "" : "sm:w-1/2"} flex flex-col gap-4`}
      >
        <header>
          <h3 className="font-bold font-mono text-primary text-2xl sm:text-3xl">
            {title}
          </h3>
        </header>

        <main className="flex flex-col justify-between h-full gap-4">
          <p className="text-neutrals-300 text-sm">{description}</p>

          {links && links.length > 0 && (
            <div className="w-full rounded-md bg-primary/10 px-4 py-1">
              <ul className="flex flex-wrap">
                {links.map((link) => (
                  <li key={link.label}>{link.label}</li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>

      <div
        className={`w-full h-[200px] ${minimal ? "" : "sm:w-1/2 sm:h-full"} relative`}
      >
        <Image
          src={image}
          alt={`Imagem do projeto: ${title}`}
          fill
          className="object-cover rounded-md"
        />
      </div>
    </DefaultCard>
  );
}
