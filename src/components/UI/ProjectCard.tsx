'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tv } from 'tailwind-variants';

const projectCard = tv({
  slots: {
    base: "max-w-xl flex flex-col bg-brand-gray-600 rounded-md border-2 border-transparent",
    imageContainer: "w-full h-1/2",
    contentContainer: "flex flex-col gap-6 p-6"
  },
  variants: {
    resumed: {
      true: {
        base: "max-w-screen-xl h-[400px] flex-row",
        imageContainer: "w-1/2 h-full",
        contentContainer: "p-10 justify-between"
      },
    },
  },
}, {
  responsiveVariants: ["xl"]
})

interface ProjectCardProps {
  id: string
  resumed?: boolean
  imageUrl: string
  name: string
  resume: string
  description: string
}

export function ProjectCard({ resumed = false, imageUrl, name, resume, description, id }: ProjectCardProps) {
  const { base, imageContainer, contentContainer } = projectCard({ resumed: { initial: false, xl: resumed } })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{ borderColor: "#0369a1" }}
      className={base()}
    >
      <div className={imageContainer()} >
        <Image className="w-full h-full object-cover" src={imageUrl} width={1080} height={540} alt="Imagem do projeto" />
      </div>

      <div className={contentContainer()} >
        <div className="flex flex-col gap-4 max-w-lg" >
          <header className="flex flex-col gap-1" >
            <h1 className="text-brand-gray-100 text-2xl font-mono font-bold" >{name}</h1>
            <span className="text-sm text-brand-gray-400" >{resume}</span>
          </header>

          <div className="flex flex-col gap-1" >
            <strong>Descrição:</strong>
            <p>{description}</p>
          </div>
        </div>

        <Link href={`/projects/${id}`} >
          <button className="w-full py-3 bg-brand-blue-100 text-brand-gray-100 font-bold rounded-md transition-all hover:opacity-80" >Saiba Mais</button>
        </Link>
      </div>
    </motion.div>
  )
}