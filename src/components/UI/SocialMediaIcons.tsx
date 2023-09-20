import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-2" >
      <Link href={"https://github.com/Artur-Poffo"} className="transition-colors hover:text-brand-blue-200" >
        <AiFillGithub size={34} />
      </Link>
      <Link href={"https://www.linkedin.com/in/arturpoffo/"} className="transition-colors hover:text-brand-blue-200" >
        <AiFillLinkedin size={34} />
      </Link>
      <Link href={"https://www.instagram.com/artur_poffo/"} className="transition-colors hover:text-brand-blue-200" >
        <AiFillInstagram size={34} />
      </Link>
    </div>
  )
}