export function HomeSection() {
  return (
    <section id="home" className="mb-4">
      <div className="w-full h-screen flex items-center justify-center bg-center bg-gradient-to-t to-brand-blue-400 from-brand-gray-900 " >
        <div className="max-w-lg pb-32 flex flex-col items-center gap-3 text-center" >
          <h1 className="text-6xl font-mono font-bold text-brand-gray-100 uppercase tracking-widest" >Artur Poffo</h1>
          <span className="text-sm font-semibold text-brand-gray-300" >Veja mais sobre mim e conheça os meus projetos ;)</span>
        </div>
      </div>
    </section>
  )
}