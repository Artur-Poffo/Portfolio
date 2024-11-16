import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navigation/Navbar";
import { Inter } from 'next/font/google';
import { FloatSocialMediaLinks } from "@/components/Navigation/FloatSocialMediaLinks";

const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Artur Poffo | Portfólio",
  description: "Portfólio do desenvolvedor Artur Poffo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Navbar />
        <FloatSocialMediaLinks />

        <main className="w-full min-h-screen antialiased">
          {children}
        </main>
      </body>
    </html>
  );
}
