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
    <Link href={path} passHref legacyBehavior>
      <NavigationMenuLink
        className={`${isActive ? 'bg-blue-100 bg-opacity-10 text-white' : 'bg-transparent text-blue-100'
          } px-4 py-1 rounded-full transition-all hover:bg-blue-100 hover:bg-opacity-10`}
        active={isActive}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  );
}
