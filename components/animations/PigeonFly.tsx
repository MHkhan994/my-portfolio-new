"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PIGEON_SIZE = 88; // px

interface Pigeon {
  id: number;
  startX: number;
  startY: number;
}

export interface PigeonFlyHandle {
  /** spawn a pigeon at a viewport-px coordinate (e.g. from a form's getBoundingClientRect center) */
  launchFrom: (x: number, y: number) => void;
}

const PigeonFly = forwardRef<PigeonFlyHandle>((_props, ref) => {
  const [pigeons, setPigeons] = useState<Pigeon[]>([]);
  const nextId = useRef(0);

  useImperativeHandle(ref, () => ({
    launchFrom(x: number, y: number) {
      const id = nextId.current++;
      setPigeons((prev) => [...prev, { id, startX: x, startY: y }]);
    },
  }));

  function removePigeon(id: number) {
    setPigeons((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {pigeons.map((p) => (
        <motion.div
          key={p.id}
          className="absolute overflow-hidden"
          style={{
            left: p.startX,
            top: p.startY,
            width: PIGEON_SIZE,
            height: PIGEON_SIZE,
            marginLeft: -PIGEON_SIZE / 2,
            marginTop: -PIGEON_SIZE / 2,
          }}
          initial={{ x: "0vw", y: "0vh", rotate: 0, scale: 1, opacity: 1 }}
          animate={{
            // up first (still behind the form), then curves outward and up-left off screen.
            // waypoint spacing + "times" are tuned so each leg covers distance at
            // the same rate — linear easing avoids the accelerate/decelerate
            // pulse that a per-keyframe ease produces at every waypoint.
            x: ["0vw", "-3vw", "-35vw", "-85vw", "-150vw"],
            y: ["0vh", "-16vh", "-35vh", "-55vh", "-70vh"],
            rotate: [0, 6, 14, 12, 8],
            scale: [1, 0.95, 0.8, 0.6, 0.42],
            opacity: [1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 4.3,
            times: [0, 0.094, 0.307, 0.617, 1],
            ease: "linear",
          }}
          onAnimationComplete={() => removePigeon(p.id)}
        >
          <DotLottieReact
            src="/pigeon.lottie"
            autoplay
            loop
            style={{
              width: PIGEON_SIZE,
              height: PIGEON_SIZE,
              transform: "scaleX(-1)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
});

PigeonFly.displayName = "PigeonFly";

export default PigeonFly;
