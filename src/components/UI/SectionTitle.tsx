'use client'

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
      className="max-w-md m-auto flex text-center flex-col items-center justify-center gap-5"
    >
      <h2 className="text-4xl text-brand-gray-300 font-bold" >{title}</h2>
      {description && <p className="text-sm text-brand-gray-400" >{description}</p>}
    </motion.div>
  )
}