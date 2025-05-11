"use client";

import React, { useEffect, useRef } from "react";

const ParticleBorderEffect = ({ children, className }) => {
  const containerRef = useRef(null);
  const borderRef = useRef(null);
  const animationRef = useRef();
  const angleRef = useRef(0);

  // Your color scheme
  const colorPalette = ["#C69C6D", "#A47149", "#2C1B18"];
  const particleCount = 36; // Number of particles in the border

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Create border container
    const borderContainer = document.createElement("div");
    borderContainer.style.position = "absolute";
    borderContainer.style.inset = "0";
    borderContainer.style.pointerEvents = "none";
    borderContainer.style.overflow = "hidden";
    borderContainer.style.borderRadius = "inherit";
    container.style.position = "relative";
    container.appendChild(borderContainer);
    borderRef.current = borderContainer;

    // Create particles for the border
    const particles = [];
    const size = Math.max(container.offsetWidth, container.offsetHeight) * 0.05;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const color = colorPalette[i % colorPalette.length];

      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = "50%";
      particle.style.opacity = "0.8";
      particle.style.transform = "translate(-50%, -50%)";
      particle.style.transition = "all 0.3s ease-out";

      borderContainer.appendChild(particle);
      particles.push(particle);
    }

    const updateBorder = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.max(width, height) * 0.6;

      angleRef.current += 0.005;

      particles.forEach((particle, i) => {
        const angle = angleRef.current + i * ((2 * Math.PI) / particles.length);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Pulsing effect
        const pulse = 0.8 + Math.sin(angleRef.current * 3 + i) * 0.2;
        particle.style.transform = `translate(-50%, -50%) scale(${pulse})`;
      });

      animationRef.current = requestAnimationFrame(updateBorder);
    };

    updateBorder();

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (borderRef.current) {
        borderRef.current.remove();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default ParticleBorderEffect;
