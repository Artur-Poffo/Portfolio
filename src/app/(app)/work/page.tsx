import { ContactSection } from "@/sections/Contact";
import { SelectedWorkSection } from "@/sections/SelectedWork";

export default function Work() {
  return (
    <>
      <div className="pt-16">
        <SelectedWorkSection withViewAllButton={false} />
      </div>

      <ContactSection />
    </>
  );
}
