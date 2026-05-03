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
import React from "react";

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
  const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigateToSection", { detail: 4 }));
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex items-center justify-center overflow-x-hidden lg:overflow-hidden bg-[#0a0d17]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-20 hidden sm:block">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide flex items-center gap-1.5 sm:gap-2">
                <Sparkles size={14} className="text-yellow-400" />
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64">
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
                    <source src="/mudassar-hello-video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute -bottom-2 -left-2 w-16 sm:w-20 h-7 sm:h-8 rounded-full bg-purple-500 border-4 border-[#0a0d17] flex items-center justify-center animate-pulse-glow">
                  <span className="text-[8px] sm:text-[10px] font-bold text-white">WELCOME!</span>
                </div>
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] text-white">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500">
                  DIGITAL
                </span>{" "}
                <br />
                EXPERIENCES
              </h1>

              {/* Floating Decorative Elements — CSS float animation */}
              <div className="absolute -top-12 -right-12 hidden md:block animate-float">
                <div className="p-4 rounded-2xl glass-card rotate-12 border-purple-500/30">
                  <div className="text-xs font-bold text-purple-400">
                    NEXT.JS 15
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-16 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="p-4 rounded-2xl glass-card -rotate-12 border-blue-500/30">
                  <div className="text-xs font-bold text-blue-400">
                    REACT EXPERT
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl xl:text-2xl text-white/60 max-w-3xl mb-6 sm:mb-8 leading-relaxed text-center mt-6 sm:mt-8"
          >
            <span className="text-xl sm:text-3xl"> Hi, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-2xl sm:text-4xl font-bold">
              Muhammad Mudassar
            </span>
            <br />
            <span className="text-lg sm:text-2xl"> A </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-xl sm:text-3xl font-bold">
              {" "}
              Full Stack Developer
            </span>{" "}
            <span className="hidden sm:inline">specializing in high-performance web applications that merge
            exceptional design with robust engineering.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-10"
          >
            <MagneticButton
              href="#projects"
              onClick={handleViewWorkClick}
              className="group relative px-5 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white text-black font-bold flex items-center gap-2 sm:gap-3 text-sm sm:text-base transition-transform hover:scale-105"
            >
              <Eye size={18} />
              <span>VIEW MY WORK</span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </MagneticButton>

            <MagneticButton
              href="/Muhammad%20Mudassar%20Resume.pdf"
              download="Muhammad Mudassar Resume - Full Stack Developer.pdf"
              className="group px-5 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 sm:gap-3 text-sm sm:text-base backdrop-blur-md transition-all hover:bg-white/10"
            >
              <Download size={18} className="text-purple-400" />
              <span>DOWNLOAD CV</span>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 sm:gap-8"
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
                className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all shadow-xl"
              >
                <social.icon size={18} className="sm:w-5.5 sm:h-5.5" />
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
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </motion.div>
    </div>
  );
}
