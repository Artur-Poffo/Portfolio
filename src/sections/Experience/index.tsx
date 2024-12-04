import { ExperiencesCarousel } from "@/components/UI/ExperiencesCarousel";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { fetchExperiences } from "@/sanity/queries/fetchExperiences";

export async function ExperienceSection() {
  const experiences = await fetchExperiences();

  return (
    <section id="experience" className="section-container flex flex-col gap-10">
      <header className="w-full flex justify-center">
        <SectionTitle label="Experiência" title="Minha Experiência" center />
      </header>

      <div className="max-w-screen-xl">
        <ExperiencesCarousel experiences={experiences} />
      </div>
    </section>
  );
}
