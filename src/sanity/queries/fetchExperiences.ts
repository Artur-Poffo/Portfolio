import { Image } from "sanity";
import { sanityFetch } from "../lib/client";

export interface Experience {
  role: string;
  description: string;
  logo: Image;
  startDate: string;
  endDate?: string;
}

export async function fetchExperiences() {
  return sanityFetch<Experience[]>({
    query: `*[_type == "experience"] | order(coalesce(endDate, "9999-12-31") desc, startDate desc)`,
    tags: ["experience"],
  });
}
