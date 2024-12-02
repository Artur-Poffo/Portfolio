"use client";

import { motion } from "framer-motion";

interface AnimatedListProps {
  items: React.ReactNode[];
  className?: string;
  withDelay?: boolean;
  withListStyle?: boolean;
  animationOrientation?: "horizontal" | "vertical";
  duration?: number;
}

export function AnimatedList({
  items,
  className,
  withDelay = false,
  withListStyle = false,
  animationOrientation = "horizontal",
  duration = 0.6,
}: AnimatedListProps) {
  const variants = {
    horizontal: {
      initial: { opacity: 0, x: 10 },
      inView: { opacity: 1, x: 0 },
    },
    vertical: {
      initial: { opacity: 0, y: 10 },
      inView: { opacity: 1, y: 0 },
    },
  };

  return (
    <ul
      className={`${
        className
          ? className
          : "w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 mx-auto"
      } ${withListStyle ? "list-disc list-inside" : ""}`}
    >
      {items.map((item, index) => (
        <motion.li
          className="w-full sm:w-auto"
          key={index}
          initial={variants[animationOrientation].initial}
          whileInView={variants[animationOrientation].inView}
          transition={{ duration, delay: withDelay ? index * 0.1 : 0 }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
