import { AnimatedList } from "@/components/UI/AnimatedList";
import { SectionTitle } from "@/components/UI/SectionTitle";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full h-screen">
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-0">
        <div className="w-full xl:w-1/2 h-full">
          <Image
            src={"/about-image.jpg"}
            width={800}
            height={800}
            alt="about image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full xl:w-1/2 h-full flex flex-col items-center xl:items-start justify-center gap-4 xl:pl-20">
          <div className="max-w-2xl flex flex-col items-center xl:items-start gap-4">
            <SectionTitle label="Sobre" title="Artur Poffo" />

            <AnimatedList
              items={[
                <span key={1} className="text-neutrals-300 font-mono">
                  Sempre me dedico para aprender coisas novas
                </span>,
                <span key={2} className="text-neutrals-300 font-mono">
                  Tenho 17 anos mas já muito interessado na área
                </span>,
                <span key={3} className="text-neutrals-300 font-mono">
                  Estudei por um bom tempo sendo 100% autodidata
                </span>,
                <span key={4} className="text-neutrals-300 font-mono">
                  Estou no terceiro ano do ensino médio no período noturno
                </span>,
                <span key={5} className="text-neutrals-300 font-mono">
                  Já concluí o curso do ProgramadorBr, Ignite da Rocketseat e o
                  programa de formação do Entra21
                </span>,
              ]}
              withDelay
              withListStyle
              className="max-w-lg text-center xl:text-left xl:w-full flex flex-col gap-2 px-2 xl:px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
