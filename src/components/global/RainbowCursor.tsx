"use client";

import { useEffect, useRef } from "react";

export function RainbowCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const animationRef = useRef<number>(0);
  const hueRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x, y } = mouseRef.current;
      
      hueRef.current = (hueRef.current + 2) % 360;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 24);
      gradient.addColorStop(0, `hsla(${hueRef.current}, 100%, 60%, 0.9)`);
      gradient.addColorStop(0.3, `hsla(${(hueRef.current + 60) % 360}, 100%, 55%, 0.7)`);
      gradient.addColorStop(0.6, `hsla(${(hueRef.current + 120) % 360}, 100%, 50%, 0.4)`);
      gradient.addColorStop(1, `hsla(${(hueRef.current + 180) % 360}, 100%, 50%, 0)`);

      ctx.beginPath();
      ctx.arc(x, y, 24, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${hueRef.current}, 100%, 70%, 1)`;
      ctx.shadowBlur = 15;
      ctx.shadowColor = `hsla(${hueRef.current}, 100%, 60%, 0.8)`;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
