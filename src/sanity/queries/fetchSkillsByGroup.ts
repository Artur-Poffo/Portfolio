import { client } from "../lib/client";
import { Skill } from "./fetchPinnedSkills";

export interface SkillsByGroup {
  groupName: string;
  skills: Skill[];
}

export async function fetchSkillsByGroup(): Promise<SkillsByGroup[]> {
  const result = await client.fetch<SkillsByGroup[]>(
    `*[_type == "resourceGroup" && resourceType == "skill"]{
      "groupName": name,
      "skills": *[_type == "skill" && references(^._id)]{
        name,
        description,
        "icon": icon.asset->url,
        isPinned
      }
    }`
  );

  return result;
}
