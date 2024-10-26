import { AnimatedList } from "@/components/UI/AnimatedList";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Image } from "next-sanity/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <SectionTitle text="Sobre" />

      <div className="flex justify-center gap-4">
        <div className="rounded-md border-4 border-emerald-400 p-1">
          <Image
            src="https://github.com/Artur-Poffo.png"
            alt="Foto de perfil"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-4" >
          <AnimatedList
            items={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."]}
          />

          <div className="flex gap-2">
            <Link className="flex items-center gap-1 px-4 py-1 text-center rounded-md bg-slate-800 text-slate-200 transition-colors hover:bg-slate-700" href="/" >
              <LinkedInLogoIcon className="w-5 h-6" />
              LinkedIn
            </Link>

            <Link className="flex items-center gap-1 px-4 py-1 text-center rounded-md bg-slate-800 text-slate-200 transition-colors hover:bg-slate-700" href="/" >
              <InstagramLogoIcon className="w-5 h-6" />
              Instagram
            </Link>

            <Link className="flex items-center gap-1 px-4 py-1 text-center rounded-md bg-slate-800 text-slate-200 transition-colors hover:bg-slate-700" href="/" >
              <GitHubLogoIcon className="w-5 h-6" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}