import { ExperiencesCarousel } from "@/components/UI/ExperiencesCarousel";
import { SectionTitle } from "@/components/UI/SectionTitle";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <header className="w-full flex justify-center">
        <SectionTitle label="Experiência" title="Minha Experiência" center />
      </header>

      <div className="w-full">
        <ExperiencesCarousel />
      </div>
    </section>
  );
}
