import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navigation/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

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
    <html lang="pt-BR" className={poppins.className}>
      <body>
        <Navbar />

        <main className="w-full min-h-screen antialiased px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
