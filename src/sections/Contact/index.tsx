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
      className="section-container min-h-screen flex items-center justify-center"
    >
      <div className="w-1/2 h-full flex items-center justify-start relative">
        <SectionTitle label="Contato" title="Entre em contato" />

        <div className="w-px h-[800px] absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-b from-transparent via-neutrals-500 to-transparent" />
      </div>

      <div className="w-1/2 h-full flex items-center justify-end">
        <AnimatedList
          items={mediaLinks.map((link, index) => (
            <MediaLinkCard
              key={index}
              icon={link.icon}
              label={link.label}
              link={link.url}
            />
          ))}
          withDelay
          className="w-full flex flex-col items-center justify-center gap-4"
        />
      </div>
    </section>
  );
}
