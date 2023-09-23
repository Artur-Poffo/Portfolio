"use client"

import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

interface DefaultCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function DefaultCard({ children, className }: DefaultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1 } }}
      whileHover={{ y: -8, borderBottomColor: "#0369a1", transition: { type: "spring", duration: 0.3 } }}
      className={"border-b-4 border-transparent bg-brand-gray-600 " + className}
    >
      {children}
    </motion.div>
  )
}