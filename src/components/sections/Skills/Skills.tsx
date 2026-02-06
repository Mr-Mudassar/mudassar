"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Wrench,
  GraduationCap,
  Sparkles,
  Hexagon,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages and Frameworks",
    icon: Code2,
    color: "#a855f7",
    gradient: "from-[#a855f7] to-[#7c3aed]",
    skills: [
      { name: "React JS", level: 95 },
      { name: "Next JS", level: 90 },
      { name: "Node JS", level: 70 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
    ],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    color: "#06b6d4",
    gradient: "from-[#06b6d4] to-[#0891b2]",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Shadcn/UI", level: 90 },
      { name: "Radix UI", level: 85 },
      { name: "Material UI", level: 88 },
      { name: "Ant Design", level: 82 },
      { name: "Bootstrap", level: 90 },
      { name: "SCSS", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "#f97316",
    gradient: "from-[#f97316] to-[#ea580c]",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 95 },
      { name: "GitLab", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Swagger", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 80 },
      { name: "Deployment", level: 88 },
    ],
  },
  {
    title: "Currently Learning",
    icon: GraduationCap,
    color: "#10b981",
    gradient: "from-[#10b981] to-[#059669]",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "PostgreSQL", level: 60 },
      { name: "Webflow", level: 65 },
    ],
  },
];

export function Skills() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <polygon
                points="24.8,22 37.3,29.2 37.3,43.4 24.8,50.6 12.3,43.4 12.3,29.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#hexagons)"
            className="text-[#a855f7]"
          />
        </svg>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Hexagon className="w-12 h-12 text-[#a855f7]/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#a855f7]/20 to-[#06b6d4]/20 border border-[#a855f7]/30 mb-2"
          >
            <Sparkles className="w-4 h-4 text-[#a855f7]" />
            <span className="text-sm font-medium text-white/80">
              My Arsenal
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#06b6d4] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${category.color}40, transparent, ${category.color}40)`,
                }}
              />

              <div className="relative bg-[#0f1629]/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, ${category.color} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                        boxShadow: `0 0 20px ${category.color}20`,
                      }}
                    >
                      <category.icon
                        className="w-5 h-5"
                        style={{ color: category.color }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-xs text-white/50">
                          {category.skills.length} skills
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`grid ${category.skills.length > 6 ? "grid-cols-2 gap-x-4 gap-y-1" : "space-y-1.5"}`}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="group/skill py-1"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-bold text-md text-white/80 group-hover/skill:text-white transition-colors truncate">
                            {skill.name}
                          </span>
                          <span
                            className="text-[10px] font-medium"
                            style={{ color: category.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full rounded-full relative"
                            style={{
                              background: `linear-gradient(90deg, ${category.color}80, ${category.color})`,
                            }}
                          >
                            <motion.div
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: skillIndex * 0.2,
                              }}
                              className="absolute inset-0 w-1/3"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${category.color}80, transparent)`,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
