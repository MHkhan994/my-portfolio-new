"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const BIRDS = [
  // flipWhenFromLeft: this asset's native art faces right, so it only needs a
  // horizontal flip when travelling right-to-left (fromLeft === false)
  { src: "/Toucan.lottie", size: 96, duration: 4.5, flipWhenFromLeft: false },
  // native art faces left (opposite convention) and reads better slower
  { src: "/Parrot.lottie", size: 100, duration: 6.5, flipWhenFromLeft: true },
  {
    src: "/Bird Flying 2.lottie",
    size: 88,
    duration: 4.5,
    flipWhenFromLeft: false,
  },
  {
    src: "/Bird's flying.lottie",
    size: 80,
    duration: 4,
    flipWhenFromLeft: true,
  },
];

const FLIGHT_INTERVAL_MS = 25_000;

interface Flight {
  id: number;
  bird: (typeof BIRDS)[number];
  fromLeft: boolean;
  topVh: number;
  delay: number;
}

/** Ambient recurring flyby: roughly once a minute, a random bird crosses the
 * screen once from a random side and height, then disappears until the next tick. */
export default function ToucanFly() {
  const [flight, setFlight] = useState<Flight | null>(null);
  const nextId = useRef(0);

  useEffect(() => {
    function launch() {
      setFlight({
        id: nextId.current++,
        bird: BIRDS[Math.floor(Math.random() * BIRDS.length)],
        fromLeft: Math.random() < 0.5,
        topVh: 10 + Math.random() * 70,
        delay: Math.random() * 2.5,
      });
    }
    launch();
    const interval = setInterval(launch, FLIGHT_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  if (!flight) return null;

  const { bird, fromLeft, topVh, delay } = flight;
  const startX = fromLeft ? "-20vw" : "120vw";
  const endX = fromLeft ? "120vw" : "-20vw";
  const shouldFlip = fromLeft === bird.flipWhenFromLeft;
  const duration = bird.duration;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      <motion.div
        key={flight.id}
        className="absolute overflow-hidden"
        style={{
          top: `${topVh}vh`,
          width: bird.size,
          height: bird.size,
          marginLeft: -bird.size / 2,
          marginTop: -bird.size / 2,
        }}
        initial={{ x: startX, y: "0vh", opacity: 0 }}
        animate={{
          x: [startX, endX],
          // gentle climb across the crossing, not a flat horizontal line
          y: ["0vh", "-6vh", "-11vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          delay,
          duration,
          x: { duration, ease: "linear" },
          y: { duration, ease: "easeOut", times: [0, 0.5, 1] },
          opacity: { duration, times: [0, 0.1, 0.9, 1] },
        }}
      >
        <DotLottieReact
          src={bird.src}
          autoplay
          loop
          style={{
            width: bird.size,
            height: bird.size,
            transform: shouldFlip ? "scaleX(-1)" : undefined,
          }}
        />
      </motion.div>
    </div>
  );
}
