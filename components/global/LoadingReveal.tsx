"use client";

import { motion } from "motion/react";

export default function LoadingReveal() {
  return (
    <motion.div
      className="loader"
      initial={{
        "--r": "0vmax",
        opacity: 1,
      }}
      animate={{
        "--r": "170vmax",
        opacity: 0,
      }}
      transition={{
        duration: 4,
        ease: "easeOut",
        delay: 4,
      }}
    />
  );
}
