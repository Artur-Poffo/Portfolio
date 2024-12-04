import { Image } from "sanity";
import { client } from "../lib/client";

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
  return client.fetch<Project[]>(
    `*[_type == "project" && isPinned == true] | order(_updatedAt desc)`
  );
}
