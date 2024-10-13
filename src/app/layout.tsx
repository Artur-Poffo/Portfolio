import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

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
    <html lang="pt-BR">
      <body>
        <Navbar />

        <main className="w-full min-h-screen bg-slate-900 text-slate-300 antialiased">
          {children}
        </main>
      </body>
    </html>
  );
}
