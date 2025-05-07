"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export function MagicCard({
  children,
  className,
  gradientSize = 250, // Slightly reduced for elegance
  gradientColor = "rgba(198, 156, 109, 0.6)", // A47149 with opacity
  gradientOpacity = 5,
  gradientFrom = "#F8F1E5", // Creamy ivory (new light base)
  gradientTo = "#90EE90", // Warm beige (new light accent)
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(
    (e) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-[inherit] p-[3px]", // Added padding for border effect
        className
      )}
      style={{
        background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`, // Colorful border
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-border duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom}, 
            ${gradientTo}, 
            transparent 100%
          )`,
        }}
      />
      <div className="absolute inset-[2px] rounded-[inherit] bg-background" />{" "}
      {/* Adjusted inset for border */}
      <motion.div
        className="pointer-events-none absolute inset-[2px] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, 
            ${gradientColor}, 
            transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z-50">{children}</div>{" "}
      {/* Added z-index for content */}
    </div>
  );
}
