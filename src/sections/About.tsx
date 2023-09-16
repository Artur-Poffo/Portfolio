import { AnimatedSpan } from "@/components/UI/AnimatedSpan";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SocialMediaIcons } from "@/components/UI/SocialMediaIcons";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="px-4 mb-24" >
      <header className="my-4 text-center" >
        <SectionTitle title="Sobre" description="Algumas informações sobre mim" />
      </header>

      <div className="lg:max-w-screen-lg mt-10 lg:mt-16 mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between" >
        <div className="border-4 border-brand-blue-200 p-1 rounded-full" >
          <Image className="w-[300px] h-[300px] rounded-full" src={"https://github.com/Artur-Poffo.png"} width={400} height={400} alt="Foto do desenvolvedor" />
        </div>

        <div className="max-w-lg flex flex-col items-center lg:items-start gap-5" >
          <div className="flex flex-col text-center lg:text-left gap-4 px-2" >
            <AnimatedSpan text="🏃 Sempre me dedico para aprender coisas novas;" delay={0.1} />
            <AnimatedSpan text="👶 Tenho 16 anos mas já muito interessado na área;" delay={0.2} />
            <AnimatedSpan text="📚 Estudei por um bom tempo sendo 100% autodidata;" delay={0.3} />
            <AnimatedSpan text="🏫 Estou no segundo ano do ensino médio no período noturno;" delay={0.4} />
            <AnimatedSpan text="💻 Já concluí o curso do programadorBr e estou fazendo o Ignite da Rocketseat e o Entra21 simultaneamente." delay={0.5} />
          </div>

          <SocialMediaIcons />
        </div>
      </div>
    </section>
  )
}