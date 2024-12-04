import { Image } from "sanity";
import { client } from "../lib/client";

export interface Experience {
  role: string;
  description: string;
  logo: Image;
  startDate: string;
  endDate?: string;
}

export async function fetchExperiences() {
  return client.fetch<Experience[]>(
    `*[_type == "experience"] | order(coalesce(endDate, "9999-12-31") desc, startDate desc)`
  );
}
