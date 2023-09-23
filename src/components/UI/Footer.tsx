import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-brand-gray-600 opacity-80 p-5 flex items-center justify-center gap-4" >
      <span className="font-mono font-bold" >Desenvolvido por: Artur Poffo</span>
      <strong>|</strong>
      <Link className="font-mono font-bold underline underline-offset-4" href={"https://github.com/Artur-Poffo/Portfolio"} >Código fonte no GitHub</Link>
    </footer>
  )
}