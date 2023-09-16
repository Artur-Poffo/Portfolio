'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tv } from 'tailwind-variants';

const projectCard = tv({
  slots: {
    base: "flex flex-col items-start bg-brand-gray-600 rounded-md border-2 border-transparent",
    imageContainer: "w-full h-1/2",
    contentContainer: "w-full flex flex-col gap-6 p-6"
  },
  variants: {
    resumed: {
      true: {
        base: "flex-row",
        imageContainer: "w-1/2 h-full",
        contentContainer: "w-auto p-10"
      },
    },
  },
}, {
  responsiveVariants: ["xl"]
})

interface ProjectCardProps {
  resumed?: boolean
}

export function ProjectCard({ resumed = false }: ProjectCardProps) {
  const { base, imageContainer, contentContainer } = projectCard({ resumed: { initial: false, xl: resumed } })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{ borderColor: "#0369a1" }}
      className={base()}
    >
      <div className={imageContainer()} >
        <Image className="w-full h-full object-cover" src={"https://github.com/Artur-Poffo/Loyal-Sports/raw/main/public/README/Home.png?raw=true"} width={500} height={500} alt="Imagem do projeto" />
      </div>

      <div className={contentContainer()} >
        <header className="flex flex-col gap-1" >
          <h1 className="text-brand-gray-100 text-2xl font-mono font-bold" >Loyal Sports</h1>
          <span className="text-sm text-brand-gray-400" >Um site para uma pequena empresa de calçados</span>
        </header>

        <div className="max-w-lg flex flex-col gap-1" >
          <strong>Descrição:</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis exercitationem molestias, nam porro quas sint dolorum pariatur facilis illum ipsam, sequi, dolores labore atque unde vitae esse mollitia ea.</p>
        </div>

        <Link href={"/"} >
          <button className="w-full py-3 bg-brand-blue-100 text-brand-gray-100 font-bold rounded-md transition-all hover:opacity-80" >Saiba Mais</button>
        </Link>
      </div>
    </motion.div>
  )
}