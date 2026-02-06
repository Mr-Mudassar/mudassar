"use client";

import { motion } from "framer-motion";

const glowCircles = [
  { x: "5%", y: "10%", color: "#a855f7", size: 400, delay: 0 },
  { x: "90%", y: "15%", color: "#06b6d4", size: 350, delay: 1 },
  { x: "85%", y: "80%", color: "#a855f7", size: 380, delay: 2 },
  { x: "10%", y: "85%", color: "#06b6d4", size: 320, delay: 1.5 },
  { x: "50%", y: "50%", color: "#c084fc", size: 500, delay: 0.5 },
  { x: "30%", y: "20%", color: "#f97316", size: 280, delay: 2.5 },
  { x: "70%", y: "70%", color: "#10b981", size: 300, delay: 3 },
];

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
      }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {glowCircles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
            background: `radial-gradient(circle, ${circle.color}20 0%, ${circle.color}08 40%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay,
          }}
        />
      ))}
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(ellipse at 80% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
