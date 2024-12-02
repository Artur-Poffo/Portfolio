"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title?: string;
  center?: boolean;
}

export function SectionTitle({
  label,
  title,
  center = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`items-center text-center flex flex-col gap-4 ${
        center ? "items-center text-center" : "xl:text-left xl:items-start"
      }`}
    >
      <div className="w-fit py-1 px-4 font-bold text-sm text-primary uppercase bg-primary/10 backdrop-blur-xl rounded-full border border-primary/60">
        <span>{label}</span>
      </div>

      {title && <h2 className="text-4xl xl:text-5xl font-bold">{title}</h2>}
    </motion.div>
  );
}
