import { Skill } from "@/interfaces/Skill";
import { ProjectCard } from "../ProjectCard";
import { SkillCard } from "../SkillCard";
import { Project } from "@/interfaces/Project";

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

      <ul className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {skills.map((skill) => (
          <li key={skill.name}>
            <SkillCard
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          </li>
        ))}

        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard
              title={project.name}
              description={project.description}
              image={project.icon}
              links={project.links}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
