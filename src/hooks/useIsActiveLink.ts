import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useIsActiveLink(path: string) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkIsActive = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';

      if (path.includes('#')) {
        const [pathWithoutHash, pathHash] = path.split('#');
        return (pathname === pathWithoutHash || pathname === '/') && hash === `#${pathHash}`;
      } else {
        return pathname === path || pathname.startsWith(`${path}/`);
      }
    };

    setIsActive(checkIsActive());
  }, [pathname, searchParams, path]);

  return isActive;
}
