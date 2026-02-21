"use client";

import { motion } from "framer-motion";
import { Building2, ChevronRight, Briefcase } from "lucide-react";
import React from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Setubo Private Limited (GolfGuiders)",
    period: "May 2025 – Present",
    description: [
      "Designed scalable module flows and system architecture for the platform.",
      "Led frontend development for the full-scale GolfGuiders admin panel.",
      "Built complex UI systems using Next.js, GraphQL, Redux, and ShadCN.",
      "Delivered secure, maintainable interfaces with RBAC and device management.",
    ],
    current: true,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Associate Frontend Developer",
    company: "ArgonTeq / OZI Group (ARFA Tower)",
    period: "Nov 2023 – Apr 2025",
    description: [
      "Developed responsive applications using React.js, Next.js, and WordPress.",
      "Collaborated with design and backend teams on UX improvements.",
      "Led frontend projects from planning through production delivery.",
      "Mentored junior developers and enforced clean code practices.",
    ],
    current: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend Developer Intern",
    company: "ArgonTeq / OZI Group",
    period: "Aug 2023 – Oct 2023",
    description: [
      "Practiced frontend development using React.js, Next.js, and WordPress.",
      "Built responsive layouts under senior developer guidance.",
      "Followed structured code organization and best practices.",
      "Learned real-world workflows and professional development processes.",
    ],
    current: false,
    color: "from-fuchsia-500 to-pink-500",
  },
];

export function Experience() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-purple-500" />
              <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">
                Career Trajectory
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Evolution.
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-[23px] left-0 right-0 h-[2px] bg-white/5 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Visual Indicator */}
                <div className="relative flex items-center justify-center mb-10">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.color} p-[1px] shadow-2xl z-20 ${exp.current ? "bg-purple-500/20 animate-pulse" : ""}`}
                  >
                    <div className="w-full h-full rounded-[15px] bg-[#0a0d17] flex items-center justify-center">
                      <Briefcase className="text-white" size={20} />
                    </div>
                  </div>
                  {exp.current && (
                    <div className="absolute -inset-4 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`glass-card rounded-[2.5rem] p-8 transition-all duration-500 group ${exp.current ? "!border-1 !border-purple-500/30 hover:border-purple-500/50" : "border-white/10 hover:border-white/20"}`}
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1 block">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/40 mt-1">
                        <Building2 size={14} />
                        <span className="text-sm font-bold">{exp.company}</span>
                      </div>
                    </div>

                    <div className="h-px w-full bg-white/5" />

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition-colors"
                        >
                          <ChevronRight
                            size={14}
                            className="text-purple-500 mt-0.5 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
