"use client";

import React, { useEffect, useRef } from "react";

interface BubbleCursorProps {
  zIndex?: number;
}

class Particle {
  lifeSpan: number;
  initialLifeSpan: number;
  velocity: { x: number; y: number };
  position: { x: number; y: number };
  baseDimension: number;

  constructor(x: number, y: number) {
    this.initialLifeSpan = Math.floor(Math.random() * 60 + 60);
    this.lifeSpan = this.initialLifeSpan;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 + Math.random() * -1,
    };
    this.position = { x, y };
    this.baseDimension = 4;
  }

  update(context: CanvasRenderingContext2D) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;
    this.lifeSpan--;

    const scale =
      0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

    context.fillStyle = "#e6f1f7";
    context.strokeStyle = "#3a92c5";
    context.beginPath();
    context.arc(
      this.position.x - (this.baseDimension / 2) * scale,
      this.position.y - this.baseDimension / 2,
      this.baseDimension * scale,
      0,
      2 * Math.PI
    );
    context.stroke();
    context.fill();
    context.closePath();
  }
}

const BubbleCursor: React.FC<BubbleCursorProps> = ({ zIndex = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const addParticle = (x: number, y: number) => {
      particlesRef.current.push(new Particle(x, y));
    };

    const onMouseMove = (e: MouseEvent) => {
      addParticle(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(e.touches[i].clientX, e.touches[i].clientY);
        }
      }
    };

    const updateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(context);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        if (particlesRef.current[i].lifeSpan < 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateParticles);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", setCanvasSize);

    updateParticles();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", setCanvasSize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0"
      style={{ zIndex }}
    />
  );
};

export default BubbleCursor;