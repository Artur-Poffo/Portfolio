import type { Metadata } from "next";
import "./globals.css";

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
        <main className="w-full min-h-screen bg-slate-900 text-slate-300 antialiased">
          {children}
        </main>
      </body>
    </html>
  );
}
