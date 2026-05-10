import { Button } from "@/components/UI/shadcn/button";
import Link from "next/link";

export function HomeSection() {
  return (
    <section id="home">
      <div className="w-full min-h-screen bg-primary flex items-center justify-center">
        <div className="max-w-screen-xl flex flex-col items-center justify-center gap-8 pb-20 text-neutrals-50">
          <div className="text-center flex flex-col items-center gap-2">
            <h1 className="text-5xl lg:text-6xl xl:text-8xl font-bold">
              Hi, my name is Artur
            </h1>
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold font-mono">
              Software Engineer
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
