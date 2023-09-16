import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

interface FlashyLinkProps {
  text: string;
  to: string;
}

export function FlashyLink({ text, to }: FlashyLinkProps) {
  return (
    <>
      <Link href={to} className="text-sm uppercase text-brand-blue-100 transition-colors hover:text-brand-blue-200" >
        <div className="flex items-center gap-1" >{text} <AiOutlineRight /></div>
      </Link>
    </>
  )
}