import { NavigationMenuLink } from '@/components/UI/shadcn/navigation-menu';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  children: string | ReactNode;
  path: string;
}

export function Navlink({
  children,
  path
}: NavLinkProps) {
  return (
    <Link href={path} passHref legacyBehavior>
      <NavigationMenuLink className="relative nav-link">
        {children}
        <div className="transition-all absolute w-0 h-px -bottom-1 left-0 bg-gradient-to-r from-transparent via-neutrals-50 to-transparent nav-link-underline" />
      </NavigationMenuLink>
    </Link>
  );
}
