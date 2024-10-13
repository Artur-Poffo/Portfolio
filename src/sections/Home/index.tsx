export function HomeSection() {
  return (
    <section id="home">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-xl flex flex-col gap-2 pb-20">
          <h1 className="text-4xl font-bold"><span className="text-emerald-400">Olá</span>, meu nome é <span className="font-mono">Artur</span></h1>
          <p className="text-lg text-emerald-400">Desenvolvedor <span className="font-mono">Full-Stack</span></p>
        </div>
      </div>
    </section>
  );
}
