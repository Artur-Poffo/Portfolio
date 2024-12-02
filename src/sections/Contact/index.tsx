import { AnimatedList } from "@/components/UI/AnimatedList";
import { MediaLinkCard } from "@/components/UI/MediaLinkCard";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MessageSquare } from "lucide-react";

const mediaLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Artur-Poffo",
    icon: GitHubLogoIcon,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/arturpoffo/",
    icon: LinkedInLogoIcon,
  },
  {
    label: "E-mail",
    url: "mailto:arturpoffop@gmail.com",
    icon: MessageSquare,
  },
];

export function ContactSection() {
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
          items={mediaLinks.map((link, index) => (
            <MediaLinkCard
              icon={link.icon}
              label={link.label}
              link={link.url}
              key={index}
            />
          ))}
          withDelay
          className="w-full flex flex-col items-center justify-center gap-4"
        />
      </div>
    </section>
  );
}
