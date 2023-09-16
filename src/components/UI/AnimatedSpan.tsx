"use client"

import { motion } from "framer-motion";

interface AnimatedSpanProps {
  text: string;
  delay?: number;
}

export function AnimatedSpan({ text, delay = 0 }: AnimatedSpanProps) {
  return (
    <motion.span
      className="font-bold"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {text}
    </motion.span>
  )
}