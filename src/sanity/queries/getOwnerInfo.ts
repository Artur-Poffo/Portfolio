import { Image } from "sanity";
import { client } from "../lib/client";

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
  return client.fetch<OwnerInfo>(`*[_type == "ownerInfo"][0]`);
}
