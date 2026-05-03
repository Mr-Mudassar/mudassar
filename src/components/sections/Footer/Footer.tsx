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
import { useEffect, useRef, useMemo } from "react";

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
  const bgRef = useRef<HTMLDivElement>(null);

  // Use ref + direct DOM update instead of setState to avoid re-renders
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(168, 85, 247, 0.15), transparent 40%)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Deterministic particle positions
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        left: `${(i * 41 + 11) % 100}%`,
        top: `${(i * 59 + 3) % 100}%`,
        delay: `${(i * 0.4) % 3}s`,
        dur: `${2.5 + (i % 3)}s`,
      })),
    [],
  );

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent("navigateToSection", { detail: 0 }));
  };

  return (
    <footer className="relative w-full min-h-full lg:h-full flex items-center justify-center overflow-x-hidden lg:overflow-hidden bg-[#0a0d17]">
      <div ref={bgRef} className="absolute inset-0 opacity-30" />

      {/* CSS-only particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20 animate-pulse-glow"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-28 h-28 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-dashed border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />
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
              <div className="absolute bottom-6 -right-10 w-12 h-8 rounded-full bg-purple-500 border-4 border-[#0a0d17] flex items-center justify-center animate-pulse-glow">
                <span className="text-[10px] font-semibold text-white">BYE!</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl xl:text-4xl font-bold text-foreground mb-3"
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
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: `0 20px 40px ${social.color}40`,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-card flex items-center justify-center transition-all duration-300 group"
                style={{ borderColor: `${social.color}30` }}
                aria-label={social.label}
              >
                <social.icon
                  size={18}
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            {funFacts.map((fact) => (
              <div
                key={fact.text}
                className="glass-card rounded-lg p-3 flex items-center gap-2 hover:scale-105 transition-transform"
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
              </div>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#a855f7] to-[#c084fc] text-white font-semibold text-sm sm:text-base mb-6 sm:mb-8"
          >
            <ArrowUp size={20} />
            Back to Start
          </motion.button>

          <div className="border-t border-white/10 pt-4">
            <p className="flex items-center justify-center gap-2 text-muted-foreground text-xs sm:text-sm">
              Crafted with
              <Heart size={16} className="text-[#e879f9] fill-[#e879f9] animate-pulse" />
              by{" "}
              <span className="text-primary font-medium">
                Muhammad Mudassar
              </span>
            </p>
            <p className="text-muted-foreground/60 text-xs sm:text-sm mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px animate-pulse"
        style={{
          background:
            "linear-gradient(90deg, transparent, #a855f7, #c084fc, #e879f9, transparent)",
        }}
      />
    </footer>
  );
}
