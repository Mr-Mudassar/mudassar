"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Layers,
  MapPin,
  Sparkles,
  Zap,
  Globe,
  Cpu,
  Star,
  FolderOpen,
  Users,
} from "lucide-react";
import React from "react";

const BentoCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`relative group overflow-hidden glass-card rounded-3xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 h-full">{children}</div>
  </motion.div>
);

export function About() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      <div className="container mx-auto px-6 py-12 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="mb-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-purple-500" />
              <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">
                The Architect
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Beyond the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Code.
              </span>
            </motion.h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[480px]">
            {/* Biography Card - Large */}
            <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <div className="mb-3 inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                  <Sparkles size={32} />
                </div>
                <div className="w-4 h-4 rounded-full bg-cyan-500 animate-ping" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                The Story So Far
              </h3>

              <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6">
                I am{" "}
                <span className="text-white font-semibold">
                  Muhammad Mudassar
                </span>
                , a{" "}
                <span className="text-white font-semibold">
                  Full Stack Engineer{" "}
                </span>
                driven by the challenge of turning complex problems into elegant
                digital solutions. With{" "}
                <span className="text-white font-semibold">3+ years</span> in
                the industry, I&apos;ve honed my skills in crafting
                high-performance applications that don&apos;t just work—they
                inspire.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Innovation",
                  "Performance",
                  "UX First",
                  "Clean Architecture",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* Experience Card */}
            <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-purple-500/10 to-transparent">
              <div className="flex items-center gap-4 mb-2">
                <Briefcase className="text-purple-400" size={32} />
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Experience
                </span>
              </div>
              <div className="text-3xl font-black text-white">
                3&nbsp; YEARS
              </div>
              <div className="text-xs text-white/60 mt-1">
                Professional Development
              </div>
            </BentoCard>

            {/* Projects Delivered Card */}
            <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-500/10 to-transparent">
              <div className="flex items-center gap-4 mb-2">
                <FolderOpen className="text-blue-400" size={32} />
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Projects
                </span>
              </div>
              <div>
                <div className="text-3xl font-black text-white">15+</div>
                <div className="text-xs text-white/60 mt-1">
                  Projects Delivered
                </div>
              </div>
            </BentoCard>

            {/* Location Card */}
            <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between border-cyan-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 mb-2">
                  <MapPin className="text-cyan-400" size={32} />
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                    Location
                  </span>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Lahore, PK</div>
                <div className="text-xs text-white/40 mt-1">
                  Working Globally
                </div>
              </div>
            </BentoCard>

            {/* Client Satisfaction Card */}
            <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-emerald-500/10 to-transparent">
              <div className="flex items-center gap-4 mb-2">
                <Star className="text-emerald-400" size={32} />
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Satisfaction
                </span>
              </div>
              <div>
                <div className="text-3xl font-black text-white flex items-center gap-1">
                  4.9<span className="text-xl text-emerald-400">/5</span>
                </div>
                <div className="text-xs text-white/60 mt-1">Client Rating</div>
              </div>
            </BentoCard>
            {/* Team Collaboration Card - Wide */}
            <BentoCard className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-pink-500/10 to-transparent flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Users className="text-pink-400" size={32} />
                </div>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Collaboration
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="font-semibold text-white">
                    Seamless Team Player
                  </span>{" "}
                  - Expert in cross-functional collaboration with designers,
                  backend engineers, and product teams. Strong communicator with
                  proven ability.
                </p>
              </div>
            </BentoCard>

            {/* Tech Stack Card - Wide */}
            <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center border-indigo-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10">
                  <Cpu className="text-indigo-400" size={32} />
                </div>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Preferred Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Globe, name: "Next.js 15", color: "text-white" },
                  { icon: Zap, name: "TypeScript", color: "text-blue-400" },
                  { icon: Layers, name: "Tailwind", color: "text-cyan-400" },
                  { icon: Code, name: "PostgreSQL", color: "text-indigo-400" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2">
                    <tech.icon className={tech.color} size={16} />
                    <span className="text-sm font-bold text-white/80">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </div>
  );
}
