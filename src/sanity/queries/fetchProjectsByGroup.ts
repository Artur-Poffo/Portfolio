import { sanityFetch } from "../lib/client";
import { Project } from "./fetchPinnedProjects";

export interface ProjectsByGroup {
  groupName: string;
  projects: Project[];
}

export async function fetchProjectsByGroup(): Promise<ProjectsByGroup[]> {
  return sanityFetch<ProjectsByGroup[]>({
    query: `*[_type == "resourceGroup" && resourceType == "project"]{
      "groupName": name,
      "projects": *[_type == "project" && references(^._id)]{
        name,
        description,
        image,
        links,
        isPinned
      }
    }`,
    tags: ["project", "resourceGroup"],
  });
}
