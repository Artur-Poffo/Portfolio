"use client";

import { AnimatedList } from "@/components/UI/AnimatedList";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { useOwnerInfo } from "@/contexts/OwnerInfo";
import Image from "next/image";

export function AboutSection() {
  const { ownerInfo } = useOwnerInfo();

  if (!ownerInfo) return null;

  return (
    <section id="about" className="w-full h-screen">
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-0">
        <div className="w-full xl:w-1/2 h-full">
          <Image
            src={"/about-image.jpg"}
            width={800}
            height={800}
            alt="about image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full xl:w-1/2 h-full flex flex-col items-center xl:items-start justify-center gap-4 xl:pl-20">
          <div className="max-w-2xl flex flex-col items-center xl:items-start gap-4">
            <SectionTitle label="Sobre" title={ownerInfo.fullName} />

            <AnimatedList
              items={
                ownerInfo?.descriptionTopics.map((topic) => (
                  <span key={topic} className="text-neutrals-300 font-mono">
                    {topic}
                  </span>
                )) || []
              }
              withDelay
              withListStyle
              className="max-w-lg text-center xl:text-left xl:w-full flex flex-col gap-2 px-2 xl:px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
