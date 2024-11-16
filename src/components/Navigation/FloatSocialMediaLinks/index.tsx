import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function FloatSocialMediaLinks() {
  return (
    <div className="fixed top-4 right-4 p-1 rounded-full flex items-center justify-center gap-px border-neutrals-600 bg-neutrals-900/90 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm supports-[backdrop-filter]:bg-neutrals-900/60">
      <button className="px-5 py-2 cursor-pointer rounded-full hover:bg-neutrals-100/10 transition-colors" >
        <Link href="https://github.com/Artur-Poffo" target="_blank">
          <GitHubLogoIcon />
        </Link>
      </button>

      <button className="px-5 py-2 cursor-pointer rounded-full hover:bg-neutrals-100/10 transition-colors" >
        <Link href="https://www.linkedin.com/in/artur-poffo/" target="_blank">
          <LinkedInLogoIcon />
        </Link>
      </button>

      <button className="px-5 py-2 cursor-pointer rounded-full hover:bg-neutrals-100/10 transition-colors" >
        <Link href="mailto:arturpoffop@gmail.com" target="_blank">
          <MessageSquare size={16} />
        </Link>
      </button>
    </div>
  )
}
