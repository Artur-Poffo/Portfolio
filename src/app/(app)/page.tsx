import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { HomeSection } from "@/sections/Home";
import { SelectedWorkSection } from "@/sections/SelectedWork";
import { SkillsSection } from "@/sections/Skills";

export default function Main() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <SelectedWorkSection />
      <ContactSection />
    </>
  );
}
