import { sanityFetch } from "../lib/client";
import { Skill } from "./fetchPinnedSkills";

export interface SkillsByGroup {
  groupName: string;
  skills: Skill[];
}

export async function fetchSkillsByGroup(): Promise<SkillsByGroup[]> {
  return sanityFetch<SkillsByGroup[]>({
    query: `*[_type == "resourceGroup" && resourceType == "skill"]{
      "groupName": name,
      "skills": *[_type == "skill" && references(^._id)]{
        name,
        description,
        icon,
        isPinned
      }
    }`,
    tags: ["skill", "resourceGroup"],
  });
}
