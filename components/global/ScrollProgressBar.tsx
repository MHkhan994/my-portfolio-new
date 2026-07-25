"use client";

import { useLenis } from "lenis/react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  useLenis((lenis) => {
    progress.set(lenis.progress);
  });

  return (
    <div className="fixed top-0 inset-x-0 h-1 z-[9990] bg-white/10">
      <motion.div
        className="h-full origin-left bg-[#e8dcc0]"
        style={{ scaleX }}
      />
    </div>
  );
}
