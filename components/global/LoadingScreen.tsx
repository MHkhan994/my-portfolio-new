"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 350);

    const loadingTimer = setTimeout(() => {
      setPhase("exit");
    }, 3000);

    const removeTimer = setTimeout(() => {
      setPhase("done");
    }, 3900);

    return () => {
      clearInterval(dotTimer);
      clearTimeout(loadingTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{
            transformOrigin: "50% 50%",
          }}
          initial={{
            y: -600,
            rotate: 0,
            scale: 1,
          }}
          animate={
            phase === "loading"
              ? {
                  y: 0,
                  rotate: [1.2, -1.2, 1, -1, 0.8, -0.8, 0.5, -0.5, 0],
                }
              : {
                  y: -1200,
                  rotate: -15,
                  transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }
          }
          transition={
            phase === "loading"
              ? {
                  y: {
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  },
                  rotate: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : undefined
          }
          className="relative"
        >
          <img
            src="/images/wood-board.webp"
            alt="Loading Board"
            className="block mx-auto select-none pointer-events-none w-[85vw] max-w-137.5"
            draggable={false}
          />

          <div
            className="
              absolute
              left-1/2
              top-[calc(57%+70px)]
              -translate-x-1/2
              -translate-y-1/2
              text-5xl
              text-[#3a2412]
              font-bold
              tracking-wider
              whitespace-nowrap
              font-permanent-marker
              fontbold
            "
          >
            Loading{dots}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
