"use client";

import { useMemo } from "react";

const glowCircles = [
  { x: "10%", y: "15%", color: "#a855f7", size: 400, delay: "0s", dur: "8s" },
  { x: "85%", y: "20%", color: "#06b6d4", size: 350, delay: "2s", dur: "10s" },
  { x: "80%", y: "75%", color: "#a855f7", size: 380, delay: "1s", dur: "9s" },
  { x: "20%", y: "80%", color: "#06b6d4", size: 320, delay: "3s", dur: "11s" },
];

export function BackgroundGlow() {
  // Deterministic star positions computed once (no Math.random on each render)
  const stars = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        left: `${(i * 37 + 13) % 100}%`,
        top: `${(i * 53 + 7) % 100}%`,
        delay: `${(i * 0.7) % 5}s`,
        duration: `${2.5 + (i % 4)}s`,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.1) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center,black,transparent 80%)",
        }}
      />

      {/* Stars — CSS-only animations (no framer-motion) */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute w-[1px] h-[1px] bg-white rounded-full animate-pulse-glow"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      {/* Glow circles — CSS animations */}
      {glowCircles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-glow"
          style={{
            left: c.x,
            top: c.y,
            width: c.size,
            height: c.size,
            background: `radial-gradient(circle,${c.color}20 0%,${c.color}08 40%,transparent 70%)`,
            transform: "translate(-50%,-50%)",
            filter: "blur(60px)",
            animationDelay: c.delay,
            animationDuration: c.dur,
            willChange: "opacity, transform",
          }}
        />
      ))}
    </div>
  );
}
