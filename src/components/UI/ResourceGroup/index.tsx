import { Skill } from "@/sanity/queries/fetchPinnedSkills";
import { ProjectCard } from "../ProjectCard";
import { SkillCard } from "../SkillCard";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/sanity/queries/fetchPinnedProjects";

interface ResourceGroupProps {
  groupName: string;
  skills?: Skill[];
  projects?: Project[];
}

export function ResourceGroup({
  groupName,
  skills = [],
  projects = [],
}: ResourceGroupProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-bold font-mono">{groupName}</h3>

      {skills.length > 0 && (
        <ul className="w-full sm:w-fit grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:mx-0 xl:grid-cols-4 gap-x-4 gap-y-8">
          {skills.map((skill) => (
            <li className="w-full" key={skill.name}>
              <SkillCard
                name={skill.name}
                description={skill.description}
                icon={urlFor(skill.icon).url()}
              />
            </li>
          ))}
        </ul>
      )}

      {projects.length > 0 && (
        <ul className="w-full sm:w-fit grid grid-cols-1 mx-auto lg:grid-cols-2 lg:mx-0 xl:grid-cols-3 gap-x-4 gap-y-8">
          {projects.map((project) => (
            <li className="w-full" key={project.name}>
              <ProjectCard
                title={project.name}
                description={project.description}
                image={urlFor(project.image).url()}
                links={project.links}
                minimal
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
