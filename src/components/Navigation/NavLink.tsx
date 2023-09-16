import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  useNextLink?: boolean;
  name: string;
  to: string;
}

export function NavLink({ name, to, useNextLink = false, ...rest }: NavLinkProps) {
  const NavLinkStyles = "opacity-80 transition-opacity hover:opacity-100"

  return (
    <>
      {useNextLink ? <Link {...rest} className={NavLinkStyles} href={to} >{name}</Link> : <a {...rest} className={NavLinkStyles} href={to} >{name}</a>}
    </>
  )
}