"use client";

import { AnimatedList } from "@/components/UI/AnimatedList";
import { MediaLinkCard } from "@/components/UI/MediaLinkCard";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { useOwnerInfo } from "@/contexts/OwnerInfo";
import { socialLinksIconsMapper } from "@/utils/socialLinksIconsMapper";

export function ContactSection() {
  const { ownerInfo } = useOwnerInfo();

  if (!ownerInfo) return null;

  return (
    <section
      id="contact"
      className="section-container min-h-screen flex flex-col xl:flex-row items-center gap-10 xl:gap-0 justify-center"
    >
      <div className="w-full xl:w-1/2 h-full flex items-center justify-center xl:justify-start relative">
        <SectionTitle label="Contato" title="Entre em contato" />

        <div className="hidden xl:block w-px h-[800px] absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-b from-transparent via-neutrals-500 to-transparent" />
      </div>

      <div className="w-full xl:w-1/2 h-full flex items-center justify-end">
        <AnimatedList
          items={ownerInfo.socialLinks.map((link, index) => {
            const Icon = socialLinksIconsMapper[link.platform.toLowerCase()];

            if (!Icon) return null;

            return (
              <MediaLinkCard
                icon={Icon}
                label={link.platform}
                link={link.url}
                key={index}
              />
            );
          })}
          withDelay
          className="w-full flex flex-col items-center justify-center gap-4"
        />
      </div>
    </section>
  );
}
