"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Sparkles,
  Code2,
  Coffee,
} from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Mr-Mudassar",
    label: "GitHub",
    color: "#a855f7",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-mudassar776/",
    label: "LinkedIn",
    color: "#c084fc",
  },
  {
    icon: Mail,
    href: "mailto:mudassarmuhammad776@gmail.com",
    label: "Email",
    color: "#e879f9",
  },
];

const funFacts = [
  { icon: Code2, text: "10,000+ lines of code written", color: "#a855f7" },
  { icon: Coffee, text: "500+ cups of coffee consumed", color: "#c084fc" },
  { icon: Sparkles, text: "Infinite passion for coding", color: "#e879f9" },
];

export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent("navigateToSection", { detail: 0 }));
  };

  return (
    <footer className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-4"
            >
              <motion.div
                className="inline-block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-6xl md:text-7xl font-bold gradient-text">MM</span>
              </motion.div>
            </motion.div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-28 h-28 md:w-40 md:h-40 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-2 rounded-full border border-dashed border-cyan-500/20"
              />
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                >
                  <source src="/thanks.mp4" type="video/mp4" />
                </video>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 -right-10 w-12 h-8 rounded-full bg-purple-500 border-4 border-[#0a0d17] flex items-center justify-center"
              >
                <span className="text-[10px] font-semibold text-white">BYE!</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-3"
          >
            Thanks for <span className="gradient-text">Scrolling!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto"
          >
            Let&apos;s build something amazing together. I&apos;m always open to
            discussing new projects and opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: `0 20px 40px ${social.color}40`,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center transition-all duration-300 group"
                style={{
                  borderColor: `${social.color}30`,
                }}
                aria-label={social.label}
              >
                <social.icon
                  size={22}
                  className="transition-colors duration-300"
                  style={{ color: social.color }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-3 mb-8"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-lg p-3 flex items-center gap-2"
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${fact.color}15` }}
                >
                  <fact.icon size={16} style={{ color: fact.color }} />
                </div>
                <span className="text-muted-foreground text-xs">
                  {fact.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a855f7] to-[#c084fc] text-white font-semibold text-base mb-8"
          >
            <ArrowUp size={20} />
            Back to Start
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="border-t border-white/10 pt-4"
          >
            <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-[#e879f9] fill-[#e879f9]" />
              </motion.span>
              by{" "}
              <span className="text-primary font-medium">
                Muhammad Mudassar
              </span>
            </p>
            <p className="text-muted-foreground/60 text-sm mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #a855f7, #c084fc, #e879f9, transparent)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </footer>
  );
}
