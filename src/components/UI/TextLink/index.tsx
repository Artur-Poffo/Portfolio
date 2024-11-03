import Link from "next/link";

interface TextLinkProps {
  text: string;
  href: string;
  target?: boolean;
}

export function TextLink({ text, href, target = false }: TextLinkProps) {
  return (
    <Link href={href} target={target ? "_blank" : "_self"} className="text-cyan-500 underline underline-offset-4 transition-opacity hover:opacity-70">{text}</Link>
  )
}