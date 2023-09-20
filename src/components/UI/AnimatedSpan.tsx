"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSpanProps {
  children: ReactNode
  delay?: number;
}

export function AnimatedSpan({ children, delay = 0 }: AnimatedSpanProps) {
  return (
    <motion.span
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.span>
  )
}