import { ContactOption } from "@/components/UI/ContactOption";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 mb-24" >
      <header className="my-4 text-center" >
        <SectionTitle title="Contato" description="Se interessou por algo? Entre em contato" />
      </header>

      <div className="max-w-lg mx-auto flex flex-col gap-4 text-center mt-12" >
        <h2 className="text-brand-gray-100 text-3xl font-mono font-bold mb-4" >Entre em contato pelo:</h2>

        <ContactOption optionName="E-mail" Icon={AiOutlineMail} iconSize={32} link="mailto:arturpoffop@gmail.com" />
        <ContactOption optionName="LinkedIn" Icon={AiFillLinkedin} iconSize={32} link="https://www.linkedin.com/in/arturpoffo/" />
        <ContactOption optionName="Instagram" Icon={AiFillInstagram} iconSize={32} link="https://www.instagram.com/artur_poffo/" />
        <ContactOption optionName="GitHub" Icon={AiFillGithub} iconSize={32} link="https://github.com/Artur-Poffo" />
      </div>

    </section>
  )
}