import { Image } from "sanity";
import { sanityFetch } from "../lib/client";

export interface Skill {
  name: string;
  description: string;
  icon: Image;
}

export async function fetchPinnedSkills() {
  return sanityFetch<Skill[]>({
    query: `*[_type == "skill" && isPinned == true] | order(_updatedAt desc)`,
    tags: ["skill"],
  });
}
