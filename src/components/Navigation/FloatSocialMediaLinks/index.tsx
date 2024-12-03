"use client";

import Link from "next/link";
import { useOwnerInfo } from "@/contexts/OwnerInfo";
import { socialLinksIconsMapper } from "@/utils/socialLinksIconsMapper";

export function FloatSocialMediaLinks() {
  const { ownerInfo } = useOwnerInfo();

  if (!ownerInfo) return null;

  return (
    <div className="fixed top-4 right-4 p-1 rounded-full flex items-center justify-center gap-px border-neutrals-600 bg-neutrals-900/90 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm supports-[backdrop-filter]:bg-neutrals-900/60 z-[999]">
      {ownerInfo.socialLinks.map((socialLink) => {
        const Icon = socialLinksIconsMapper[socialLink.platform.toLowerCase()];

        if (!Icon) return null;

        return (
          <button
            key={socialLink.url}
            className="px-5 py-2 cursor-pointer rounded-full hover:bg-neutrals-100/10 transition-colors"
          >
            <Link href={socialLink.url} target="_blank">
              <Icon size={16} />
            </Link>
          </button>
        );
      })}
    </div>
  );
}
