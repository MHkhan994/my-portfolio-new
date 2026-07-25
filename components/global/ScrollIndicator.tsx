"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { ArrowUp } from "lucide-react";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  const progress = useMotionValue(0);
  const dashOffset = useTransform(progress, (p) => CIRCUMFERENCE * (1 - p));

  const lenis = useLenis((instance) => {
    progress.set(instance.progress);

    const shouldShow = instance.scroll > window.innerHeight * 2;
    setVisible((prev) => (prev === shouldShow ? prev : shouldShow));
  });

  const handleClick = () => {
    lenis?.scrollTo(0, {
      duration: 2.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[9990] flex size-12 items-center justify-center rounded-full bg-[#000e04]/80 text-[#e8dcc0] backdrop-blur-sm cursor-pointer"
        >
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.2}
              strokeWidth={2}
            />
            <motion.circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{ strokeDashoffset: dashOffset }}
            />
          </svg>
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
