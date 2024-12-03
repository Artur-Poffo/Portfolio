import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MessageSquare } from "lucide-react";

export const socialLinksIconsMapper: Record<string, React.ElementType> = {
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  "e-mail": MessageSquare,
};
