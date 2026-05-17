import { Button } from "@/components/UI/shadcn/button";
import Link from "next/link";

export function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-neutrals-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutrals-700 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(105,25,255,0.18),transparent_34%),linear-gradient(180deg,rgba(22,26,44,0.55)_0%,rgba(6,9,24,0.96)_62%)]" />
      <div className="absolute left-1/2 top-[58%] h-24 w-[min(720px,80vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative w-full min-h-[100svh] flex items-center justify-center">
        <div className="max-w-screen-xl flex flex-col items-center justify-center gap-7 px-4 pb-20 text-neutrals-50">
          <div className="text-center flex flex-col items-center gap-4">
            <span className="w-fit py-1 px-4 font-bold text-sm text-primary uppercase bg-primary/10 backdrop-blur-xl rounded-full border border-primary/50">
              Software Engineer
            </span>

            <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, my name is Artur
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-neutrals-300 font-mono leading-relaxed">
              Scalable systems. Event-driven architecture. AI-assisted
              development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href={"/#about"}>
              <Button variant={"secondary"} size={"lg"}>
                Learn more
              </Button>
            </Link>

            <Link href={"/#work"}>
              <Button variant={"outline"} size={"lg"}>
                Selected work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
