import { Image } from "sanity";
import { sanityFetch } from "../lib/client";

export interface SelectedWork {
  title: string;
  context?: string;
  summary: string;
  highlights?: string[];
  technicalFocus?: string[];
  outcome?: string;
  order?: number;
}

export interface SelectedWorkExperience {
  company?: string;
  role: string;
  description: string;
  logo: Image;
  startDate: string;
  endDate?: string;
  works: SelectedWork[];
}

export async function fetchSelectedWorkByExperience() {
  return sanityFetch<SelectedWorkExperience[]>({
    query: `*[_type == "experience"] | order(coalesce(endDate, "9999-12-31") desc, startDate desc) {
      company,
      role,
      description,
      logo,
      startDate,
      endDate,
      "works": *[
        _type == "selectedWork" &&
        references(^._id) &&
        coalesce(isFeatured, true) == true
      ] | order(order asc) {
        title,
        context,
        summary,
        highlights,
        technicalFocus,
        outcome,
        order
      }
    }`,
    tags: ["experience", "selectedWork"],
  });
}
