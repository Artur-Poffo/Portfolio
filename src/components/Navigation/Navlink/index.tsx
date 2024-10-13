'use client';

import { NavigationMenuLink } from '@/components/UI/shadcn/navigation-menu';
import { useIsActiveLink } from '@/hooks/useIsActiveLink';
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
  const isActive = useIsActiveLink(path);

  return (
    <Link href={path} legacyBehavior passHref>
      <NavigationMenuLink className={`${isActive ? 'bg-slate-100 bg-opacity-10' : 'bg-transparent'} text-slate-100 text-sm px-4 py-1 rounded-full transition-all hover:bg-slate-100 hover:bg-opacity-10`}>
        {children}
      </NavigationMenuLink>
    </Link>
  );
}