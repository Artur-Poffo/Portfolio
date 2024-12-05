import { Image } from "sanity";
import { sanityFetch } from "../lib/client";

export interface Project {
  name: string;
  description: string;
  image: Image;
  links: {
    label: string;
    url: string;
  }[];
}

export async function fetchPinnedProjects() {
  return sanityFetch<Project[]>({
    query: `*[_type == "project" && isPinned == true] | order(_updatedAt desc)`,
    tags: ["project"],
  });
}
