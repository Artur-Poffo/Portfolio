import { client } from "../lib/client";
import { Project } from "./fetchPinnedProjects";

export interface ProjectsByGroup {
  groupName: string;
  projects: Project[];
}

export async function fetchProjectsByGroup(): Promise<ProjectsByGroup[]> {
  const result = await client.fetch<ProjectsByGroup[]>(
    `*[_type == "resourceGroup" && resourceType == "project"]{
      "groupName": name,
      "projects": *[_type == "project" && references(^._id)]{
        name,
        description,
        image,
        links,
        isPinned
      }
    }`
  );

  return result;
}
