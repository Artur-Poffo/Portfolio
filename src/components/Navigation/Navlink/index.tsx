import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  children: string | ReactNode;
  path: string;
  onClick?: () => void;
  className?: string;
}

export function Navlink({ children, path, onClick, className }: NavLinkProps) {
  return (
    <Link
      className={`w-full relative nav-link ${className}`}
      href={path}
      onClick={onClick}
    >
      {children}
      <div className="transition-all absolute w-0 h-px -bottom-1 left-0 bg-gradient-to-r from-transparent via-neutrals-50 to-transparent nav-link-underline" />
    </Link>
  );
}
