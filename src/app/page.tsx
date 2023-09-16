import { PageWrapper } from "@/components/UI/PageWrapper";
import { AboutSection } from "@/sections/About";
import { HomeSection } from "@/sections/Home";
import { ProjectsSection } from "@/sections/Projects";
import { SkillsSection } from "@/sections/Skills";

export default function Home() {
  return (
    <PageWrapper>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </PageWrapper>
  )
}
