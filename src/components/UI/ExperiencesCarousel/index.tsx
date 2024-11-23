"use client";

import { ExperienceArticle } from "../ExperienceArticle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/carousel";

export function ExperiencesCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <ExperienceArticle
            company={{
              name: "Adstart",
              logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F103527703%3Fs%3D280%26v%3D4&f=1&nofb=1&ipt=895d6655e87e2998695f262b3be90c7e6100d698d8e55470c101ef74ca527793&ipo=images",
            }}
            role="Desenvolvedor Back-End - Adstart"
            period={{
              start: "20/02/2024",
              end: "Atualmente",
            }}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cumque doloribus veritatis assumenda quaerat pariatur architecto sit, quas dolor corrupti repudiandae odit, molestias doloremque atque? Accusantium ad ipsam optio ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae quasi veniam officia maxime, architecto iusto atque voluptatibus facilis sapiente deserunt saepe laudantium placeat dolores blanditiis, minima ex neque nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia obcaecati corrupti asperiores nemo doloribus, tempore aliquid. Excepturi, soluta provident, eveniet voluptatem dolore laboriosam, blanditiis rem nesciunt sapiente temporibus repellendus."
          />
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
