import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full h-10 px-4 py-6 flex items-center justify-center relative">
      <div className="w-full h-px absolute top-0 bg-gradient-to-r from-transparent via-neutrals-500 to-transparent" />

      <div className="text-sm text-neutrals-300 grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-3xl gap-4">
        <span className="text-right">Desenvolvido por Artur Poffo</span>
        <span>|</span>
        <Link
          className="underline underline-offset-4"
          href={"https://github.com/Artur-Poffo/portfolio"}
          target="_blank"
        >
          Código fonte no GitHub
        </Link>
      </div>
    </footer>
  );
}
