'use client';

import { motion } from "framer-motion";

export function SectionTitle({ text }: { text: string }) {
  return (
    <header>
      <h2
        className="block w-fit py-2 text-4xl font-bold font-mono relative overflow-hidden transition-colors text-emerald-400"
      >
        <motion.span
          className="absolute w-full h-full top-0 left-0 px-4 z-10 bg-emerald-400"
          initial={{ width: '100%', left: 0 }}
          whileInView={{ width: "0%", left: "100%" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
        ></motion.span>

        {text}
      </h2>
    </header>
  );
}
