'use client'

import { motion } from "framer-motion";

interface AnimatedListProps {
  items: string[]
}

export function AnimatedList({ items }: AnimatedListProps) {
  return (
    <ul className="flex flex-col gap-2" >
      {items.map((item, index) => (
        <motion.li
          key={item}
          className="font-bold"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <span className="text-emerald-400 mr-2" >-</span>
          {item}
        </motion.li>
      ))}
    </ul>
  )
}
