"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Star, ShieldCheck, ExternalLink, Trophy } from "lucide-react";
import React from "react";

const certifications = [
  {
    title: "Frontend Developer Certification",
    issuer: "FreeCodeCamp",
    date: "2023",
    icon: ShieldCheck,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Frontend Developer Certification",
    issuer: "Scrimba",
    date: "2023",
    icon: Star,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Employee of the Month",
    issuer: "ArgonTeq",
    date: "Dec 2024",
    icon: Trophy,
    color: "from-fuchsia-500 to-pink-500"
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    school: "Virtual University of Pakistan",
    // period: "2021 – 2025",
    grade: "3.2 CGPA",
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-500"
  },
  {
    degree: "F.Sc Pre-Engineering",
    school: "Fauji Foundation College",
    period: "2019 – 2021",
    grade: "80%",
    icon: Award,
    color: "from-cyan-500 to-emerald-500"
  }
];

export function Certifications() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      <div className="container mx-auto px-6 py-12 relative z-10">
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Certifications Side */}
            <div>
              <div className="mb-10 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="h-px w-12 bg-purple-500" />
                  <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">Verification</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Badges of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Honor.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group glass-card p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex items-center gap-6"
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                      <cert.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{cert.title}</h3>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider">{cert.issuer} • {cert.date}</p>
                    </div>
                    <div className="p-2 rounded-full bg-white/5 text-white/20 group-hover:text-white transition-colors">
                        <ExternalLink size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Side */}
            <div>
              <div className="mb-10 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="h-px w-12 bg-blue-500" />
                  <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Academic</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Foundation.</span>
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-10"
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5" />
                    <div className={`absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-gradient-to-br ${edu.color} shadow-lg`} />

                    <div className="glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} text-white`}>
                          <edu.icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                          <p className="text-blue-400/60 text-xs font-bold uppercase tracking-widest">{edu?.period}</p>
                        </div>
                      </div>
                      <div className="h-px w-full bg-white/5 my-4" />
                      <div className="flex items-center justify-between">
                        <p className="text-white/50 text-sm font-medium">{edu.school}</p>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-wider">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
