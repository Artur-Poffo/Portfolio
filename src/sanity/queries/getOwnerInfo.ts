import { Image } from "sanity";
import { sanityFetch } from "../lib/client";

export interface OwnerInfo {
  fullName: string;
  descriptionTopics: string[];
  birthDate: Date;
  profilePicture: Image;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export async function getOwnerInfo(): Promise<OwnerInfo> {
  return sanityFetch<OwnerInfo>({
    query: `*[_type == "ownerInfo"][0]`,
    tags: ["ownerInfo"],
  });
}
