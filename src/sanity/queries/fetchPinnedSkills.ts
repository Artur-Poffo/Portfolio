import { Image } from "sanity";
import { client } from "../lib/client";

export interface Skill {
  name: string;
  description: string;
  icon: Image;
}

export async function fetchPinnedSkills() {
  return client.fetch<Skill[]>(
    `*[_type == "skill" && isPinned == true] | order(_updatedAt desc)`
  );
}
