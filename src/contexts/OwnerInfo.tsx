"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getOwnerInfo, OwnerInfo } from "@/sanity/queries/getOwnerInfo";

interface OwnerInfoContextData {
  ownerInfo: OwnerInfo | null;
}

interface OwnerInfoContextProviderProps {
  children: ReactNode;
  serverSideOwnerInfo: OwnerInfo | null;
}

export const OwnerInfoContext = createContext({} as OwnerInfoContextData);

export function OwnerInfoContextProvider({
  children,
  serverSideOwnerInfo,
}: OwnerInfoContextProviderProps) {
  const [ownerInfo, setOwnerInfo] = useState<OwnerInfo | null>(
    serverSideOwnerInfo
  );

  useEffect(() => {
    async function fetchOwnerInfo() {
      const ownerInfo = await getOwnerInfo();
      setOwnerInfo(ownerInfo);
    }

    if (ownerInfo) return;

    fetchOwnerInfo();
  }, [ownerInfo]);

  return (
    <OwnerInfoContext.Provider value={{ ownerInfo }}>
      {children}
    </OwnerInfoContext.Provider>
  );
}

export const useOwnerInfo = () => useContext(OwnerInfoContext);
