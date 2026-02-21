"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Eye,
  Sparkles,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function MagneticButton({
  children,
  className,
  href,
  download,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean | string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigateToSection", { detail: 4 }));
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <motion.path
              d="M -100 100 Q 150 300 500 100 T 1100 300"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white/80 tracking-wide flex items-center gap-2">
                <Sparkles size={14} className="text-yellow-400" />
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
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
                    <source src="/mudassar-hello-video.mp4" type="video/mp4" />
                  </video>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 w-20 h-8 rounded-full bg-purple-500 border-4 border-[#0a0d17] flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-white">WELCOME!</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500">
                  DIGITAL
                </span>{" "}
                <br />
                EXPERIENCES
              </h1>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -right-12 hidden md:block"
              >
                <div className="p-4 rounded-2xl glass-card rotate-12 border-purple-500/30">
                  <div className="text-xs font-bold text-purple-400">
                    NEXT.JS 15
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-16 hidden md:block"
              >
                <div className="p-4 rounded-2xl glass-card -rotate-12 border-blue-500/30">
                  <div className="text-xs font-bold text-blue-400">
                    REACT EXPERT
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-8 leading-relaxed text-center mt-8"
          >
            <span className="text-3xl"> Hi, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-4xl font-bold">
              Muhammad Mudassar
            </span>
            <br />
            <span className="text-2xl"> A </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-3xl font-bold">
              {" "}
              Full Stack Developer
            </span>{" "}
            specializing in high-performance web applications that merge
            exceptional design with robust engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <MagneticButton
              href="#projects"
              onClick={handleViewWorkClick}
              className="group relative px-8 py-4 rounded-2xl bg-white text-black font-bold flex items-center gap-3 transition-transform hover:scale-105"
            >
              <Eye size={20} />
              <span>VIEW MY WORK</span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </MagneticButton>

            <MagneticButton
              href="/Muhammad%20Mudassar%20Resume.pdf"
              download="Muhammad Mudassar Resume - Full Stack Developer.pdf"
              className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-3 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <Download size={20} className="text-purple-400" />
              <span>DOWNLOAD CV</span>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-8"
          >
            {[
              { icon: Github, href: "https://github.com/Mr-Mudassar" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/muhammad-mudassar776/",
              },
              { icon: Mail, href: "mailto:mudassarmuhammad776@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all shadow-xl"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </motion.div>
    </div>
  );
}
