'use client'

import { motion } from "framer-motion";

interface AnimatedListProps {
  items: React.ReactNode[]
  className?: string
  withDelay?: boolean
  withListStyle?: boolean
  animationOrientation?: 'horizontal' | 'vertical'
  duration?: number
}

export function AnimatedList({ items, className, withDelay = true, withListStyle = true, animationOrientation = 'horizontal', duration = 0.6 }: AnimatedListProps) {
  const variants = {
    horizontal: {
      initial: { opacity: 0, x: 10 },
      inView: { opacity: 1, x: 0 },
    },
    vertical: {
      initial: { opacity: 0, y: 10 },
      inView: { opacity: 1, y: 0 },
    },
  }

  return (
    <ul className={`${className ? className : 'flex flex-col gap-2'}`} >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={variants[animationOrientation].initial}
          whileInView={variants[animationOrientation].inView}
          transition={{ duration, delay: withDelay ? index * 0.2 : 0 }}
        >
          {withListStyle && <span className="text-emerald-400 mr-2" >-</span>}
          {item}
        </motion.li>
      ))}
    </ul>
  )
}
