"use client";

/* eslint-disable @next/next/no-img-element */
import { useLenis } from "lenis/react";
import React, { useEffect, useRef } from "react";

const lerp = (start: number, end: number, faction: number) =>
  start + (end - start) * faction;

const ParalaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const refId = useRef<number | null>(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();

    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1,
        );

        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.1
        ) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
        }
      }
    };

    refId.current = requestAnimationFrame(animate);

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (refId.current) {
        cancelAnimationFrame(refId.current);
      }
    };
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current) return;

    const relativeScroll = scroll - bounds.current.top;

    targetTranslateY.current = relativeScroll * 0.2; // Adjust the multiplier for desired parallax effect
  });

  return (
    <img
      ref={imageRef}
      className={"absolute w-full h-full object-cover will-change-transform"}
      src={src}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
      }}
      alt={alt}
    ></img>
  );
};

export default ParalaxImage;
