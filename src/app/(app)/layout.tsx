import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navigation/Navbar";
import { Inter } from "next/font/google";
import { FloatSocialMediaLinks } from "@/components/Navigation/FloatSocialMediaLinks";
import { Footer } from "@/components/Navigation/Footer";
import { MobileMenu } from "@/components/Navigation/MobileMenu";
import { OwnerInfoContextProvider } from "@/contexts/OwnerInfo";
import { getOwnerInfo } from "@/sanity/queries/getOwnerInfo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Artur Poffo | Portfolio",
  description: "Portfolio of developer Artur Poffo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ownerInfo = await getOwnerInfo();

  return (
    <html lang="en" className={inter.className}>
      <body>
        <OwnerInfoContextProvider serverSideOwnerInfo={ownerInfo}>
          <Navbar />
          <MobileMenu />

          <div className="fixed top-4 right-4 z-[1000] flex items-center gap-2">
            <FloatSocialMediaLinks />
          </div>

          <main className="w-full min-h-screen antialiased">{children}</main>

          <Footer />
        </OwnerInfoContextProvider>
      </body>
    </html>
  );
}
