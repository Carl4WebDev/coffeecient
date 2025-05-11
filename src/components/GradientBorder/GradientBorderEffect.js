"use client";
import React, { useEffect, useRef } from "react";

const GradientBorderEffect = ({ children, className }) => {
  const containerRef = useRef(null);
  const animationRef = useRef();
  const progressRef = useRef(0);

  // Enhanced vibrant gradients that pop while staying on-theme
  const gradients = [
    // 1. Rich copper flow
    "linear-gradient(90deg, #3A2321 0%, #C78E5D 50%, #E8B887 100%)",

    // 2. Deep espresso to caramel
    "linear-gradient(90deg, #4C2C24 0%, #D4A373 50%, #F5D0A9 100%)",

    // 3. Golden coffee shimmer
    "linear-gradient(90deg, #5C3C2D 0%, #E2B17E 50%, #FFE4C4 100%)",

    // 4. Mocha contrast
    "linear-gradient(90deg, #2C1B18 0%, #B07D52 50%, #F0C9A1 100%)",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.style.position = "relative";
    container.style.overflow = "hidden";

    // Create border elements for each side
    const sides = {
      top: document.createElement("div"),
      right: document.createElement("div"),
      bottom: document.createElement("div"),
      left: document.createElement("div"),
    };

    // Style the border elements
    Object.entries(sides).forEach(([side, element]) => {
      Object.assign(element.style, {
        position: "absolute",
        background: gradients[0],
        zIndex: "0",
        opacity: "1",
      });

      // Position each side
      if (side === "top" || side === "bottom") {
        element.style.height = "5px";
        element.style.left = "0";
        element.style.right = "0";
        element.style[side] = "0";
      } else {
        element.style.width = "5px";
        element.style.top = "0";
        element.style.bottom = "0";
        element.style[side] = "0";
      }

      container.appendChild(element);
    });

    const animateBorder = () => {
      progressRef.current += 0.005;
      if (progressRef.current > 1) progressRef.current = 0;

      // Cycle through gradients
      const gradientIndex =
        Math.floor(progressRef.current * gradients.length) % gradients.length;
      const nextGradientIndex = (gradientIndex + 1) % gradients.length;
      const blendFactor = (progressRef.current * gradients.length) % 1;

      // Apply gradient transition
      Object.values(sides).forEach((element) => {
        element.style.background = `linear-gradient(
          90deg,
          ${blendColors(
            gradients[gradientIndex].match(/#[0-9A-Fa-f]{6}/g)[1],
            gradients[nextGradientIndex].match(/#[0-9A-Fa-f]{6}/g)[1],
            blendFactor
          )},
          ${blendColors(
            gradients[gradientIndex].match(/#[0-9A-Fa-f]{6}/g)[2],
            gradients[nextGradientIndex].match(/#[0-9A-Fa-f]{6}/g)[2],
            blendFactor
          )}
        )`;
      });

      animationRef.current = requestAnimationFrame(animateBorder);
    };

    // Helper function to blend colors
    const blendColors = (color1, color2, factor) => {
      const hex = (color) => parseInt(color.replace("#", ""), 16);
      const r1 = hex(color1) >> 16;
      const g1 = (hex(color1) >> 8) & 0xff;
      const b1 = hex(color1) & 0xff;
      const r2 = hex(color2) >> 16;
      const g2 = (hex(color2) >> 8) & 0xff;
      const b2 = hex(color2) & 0xff;

      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);

      return `rgb(${r}, ${g}, ${b})`;
    };

    animateBorder();

    return () => {
      cancelAnimationFrame(animationRef.current);
      Object.values(sides).forEach((element) => element.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className={`${className}`}>
      {children}
    </div>
  );
};

export default GradientBorderEffect;
