"use client";

import { urlFor } from "@/sanity/lib/image";
import { ExperienceArticle } from "../ExperienceArticle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/carousel";
import { Experience } from "@/sanity/queries/fetchExperiences";

export function ExperiencesCarousel({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <Carousel>
      <CarouselContent>
        {experiences.map((experience) => (
          <CarouselItem key={experience.role}>
            <ExperienceArticle
              role={experience.role}
              logo={urlFor(experience.logo).url()}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  );
}
