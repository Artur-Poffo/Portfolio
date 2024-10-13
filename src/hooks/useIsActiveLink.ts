import { usePathname, useSearchParams } from 'next/navigation';

export function useIsActiveLink(path: string, params?: Record<string, string>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = typeof window !== 'undefined' ? window.location.hash : '';

  if (path.includes('#')) {
    const [pathWithoutHash, pathHash] = path.split('#');
    return (pathname === pathWithoutHash || pathname === '/') && hash === `#${pathHash}`;
  }

  if (pathname !== path) {
    return false;
  }

  if (!params) {
    return true;
  }

  for (const [key, value] of Object.entries(params)) {
    if (searchParams.get(key) !== value) {
      return false;
    }
  }

  return true;
}