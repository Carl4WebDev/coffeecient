"use client";

import React, { useEffect, useRef } from "react";

const ParticleEffect = ({ children, options, className }) => {
  const containerRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);

  const colorPalette = ["#C69C6D", "#A47149", "#2C1B18", "#02332D", "#fff"];
  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const defaultParticle = "circle";
    const particleType = options?.particle || defaultParticle;
    const sizes = [15, 20, 25, 35, 45];
    const limit = options?.particleCount || 45;

    let autoAddParticle = false;
    let mouseX = 0;
    let mouseY = 0;

    const container = document.createElement("div");
    container.style.cssText =
      "overflow:hidden; position:fixed; height:100%; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:2147483647";
    document.body.appendChild(container);

    const generateParticle = () => {
      const size =
        options?.size || sizes[Math.floor(Math.random() * sizes.length)];
      const speedHorz = options?.speedHorz || Math.random() * 10;
      const speedUp = options?.speedUp || Math.random() * 25;
      const spinVal = Math.random() * 360;
      const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
      const top = mouseY - size / 2;
      const left = mouseX - size / 2;
      const direction = Math.random() <= 0.5 ? -1 : 1;

      const particle = document.createElement("div");

      const randomColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];

      if (particleType === "circle") {
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: ${randomColor};
          opacity: 0.8;
        `;
      } else {
        particle.innerHTML = `<img src="${particleType}" width="${size}" height="${size}" style="border-radius: 50%; filter: sepia(30%) saturate(120%)">`;
      }

      particle.style.transform = `translate3d(${left}px, ${top}px, 0px) rotate(${spinVal}deg)`;
      container.appendChild(particle);

      particlesRef.current.push({
        direction,
        element: particle,
        left,
        size,
        speedHorz,
        speedUp,
        spinSpeed,
        spinVal,
        top,
      });
    };

    const refreshParticles = () => {
      particlesRef.current = particlesRef.current.filter((p) => {
        p.left = p.left - p.speedHorz * p.direction;
        p.top = p.top - p.speedUp;
        p.speedUp = Math.min(p.size, p.speedUp - 1);
        p.spinVal = p.spinVal + p.spinSpeed;

        if (
          p.top >=
          Math.max(window.innerHeight, document.body.clientHeight) + p.size
        ) {
          p.element.remove();
          return false;
        }

        p.element.style.transform = `translate3d(${p.left}px, ${p.top}px, 0px) rotate(${p.spinVal}deg)`;
        return true;
      });
    };

    const loop = () => {
      if (autoAddParticle && particlesRef.current.length < limit) {
        generateParticle();
      }
      refreshParticles();
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    const updateMousePosition = (e) => {
      if ("touches" in e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    };

    const enableParticleGeneration = (e) => {
      updateMousePosition(e);
      autoAddParticle = true;
    };

    const disableParticleGeneration = () => {
      autoAddParticle = false;
    };

    element.addEventListener("mousemove", updateMousePosition);
    element.addEventListener("mousedown", enableParticleGeneration);
    element.addEventListener("mouseup", disableParticleGeneration);
    element.addEventListener("mouseleave", disableParticleGeneration);
    element.addEventListener("touchmove", updateMousePosition);
    element.addEventListener("touchstart", enableParticleGeneration);
    element.addEventListener("touchend", disableParticleGeneration);

    return () => {
      element.removeEventListener("mousemove", updateMousePosition);
      element.removeEventListener("mousedown", enableParticleGeneration);
      element.removeEventListener("mouseup", disableParticleGeneration);
      element.removeEventListener("mouseleave", disableParticleGeneration);
      element.removeEventListener("touchmove", updateMousePosition);
      element.removeEventListener("touchstart", enableParticleGeneration);
      element.removeEventListener("touchend", disableParticleGeneration);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      particlesRef.current.forEach((p) => p.element.remove());
      particlesRef.current = [];
      container.remove();
    };
  }, [options]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ParticleEffect;
