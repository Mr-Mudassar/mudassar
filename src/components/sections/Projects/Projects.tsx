"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import projectsData from "@/components/sections/Projects/data.json";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const projects = projectsData as Array<{
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
}>;

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onImageClick: (project: (typeof projects)[0]) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-100 shrink-0"
    >
      <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full glass-card rounded-4xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
        {/* Image Section */}
        <div className="relative h-1/2 overflow-hidden">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onImageClick(project);
            }}
            className="absolute inset-0 z-10 cursor-zoom-in"
            aria-label={`Open ${project.title} image`}
          />
          <Image
            src={project?.image}
            alt={project?.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0d17] to-transparent" />

          <div className="absolute top-6 left-6">
            <span
              className={`px-4 py-1.5 rounded-full bg-linear-to-r ${project.color} text-white text-[10px] font-bold uppercase tracking-widest shadow-lg`}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between h-1/2">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold text-white/40 uppercase tracking-tighter"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="p-2 rounded-full bg-white text-black hover:scale-110 transition-all shadow-xl"
                >
                  <ExternalLink size={14  } />
                </a>
              ) : (
                <div className="p-2 rounded-full text-red-600 cursor-not-allowed text-xs!">
                  Confidential
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleImageOpen = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getVisibleProjects = () => {
    const visible = [] as Array<{
      project: (typeof projects)[number];
      position: "left" | "center" | "right";
      index: number;
    }>;
    if (currentIndex > 0)
      visible.push({
        project: projects[currentIndex - 1],
        position: "left",
        index: currentIndex - 1,
      });
    visible.push({
      project: projects[currentIndex],
      position: "center",
      index: currentIndex,
    });
    if (currentIndex < projects.length - 1)
      visible.push({
        project: projects[currentIndex + 1],
        position: "right",
        index: currentIndex + 1,
      });
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-6 3xl:mb-10 gap-6">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-12 bg-purple-500" />
                <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">
                  Recent Artifacts
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Creations.
                </span>
              </h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/40 text-sm max-w-xs md:text-right"
            >
              A selection of high-impact projects where design meets
              engineering.
            </motion.p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <motion.button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-20 p-3 rounded-2xl bg-[#1b1530]/80 border border-purple-500/40 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-purple-400/70 hover:bg-[#241a3d]/90 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]"
              }`}
            >
              <ChevronLeft
                className="text-purple-400"
                size={28}
                strokeWidth={3}
              />
            </motion.button>

            {/* Carousel */}
            <div className="relative h-[450px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                {getVisibleProjects().map(({ project, position, index }) => {
                  const isCenter = position === "center";
                  const offsetX =
                    position === "left" ? -360 : position === "right" ? 360 : 0;

                  return (
                    <motion.div
                      key={project.title}
                      custom={direction}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={slideVariants}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute left-1/2 -translate-x-1/2"
                      style={{
                        zIndex: isCenter ? 10 : 5,
                        width: isCenter ? "400px" : "300px",
                      }}
                    >
                      <motion.div
                        animate={{
                          x: offsetX,
                          scale: isCenter ? 1 : 0.78,
                          opacity: isCenter ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.35 }}
                        className={"cursor-pointer"}
                        onClick={() => {
                          if (!isCenter) {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                          }
                        }}
                      >
                        <ProjectCard
                          project={project}
                          index={0}
                          onImageClick={handleImageOpen}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-20 p-3 rounded-2xl bg-[#1b1530]/80 border border-purple-500/40 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] ${
                currentIndex === projects.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-purple-400/70 hover:bg-[#241a3d]/90 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]"
              }`}
            >
              <ChevronRight
                className="text-purple-400"
                size={28}
                strokeWidth={3}
              />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 flex justify-center gap-3"
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </motion.div>

          {/* Bottom Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="https://github.com/Mr-Mudassar"
              target="_blank"
              className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all"
            >
              <Github
                className="text-white/40 group-hover:text-white transition-colors"
                size={20}
              />
              <span className="text-white/40 group-hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                View All Repositories
              </span>
              <div className="p-1 rounded-full bg-white/5 text-white/20 group-hover:text-white transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[70vw]! max-w-[70vw]! h-[80vh]! max-h-[80vh]! border border-white/10 bg-[#0a0d17] p-4 sm:p-6">
          <div className="flex h-full flex-col gap-4">
            <DialogTitle className="text-white text-lg font-bold flex gap-2">
              {selectedProject?.title}

              <a
                href={selectedProject?.liveUrl}
                target="_blank"
                className="p-2 rounded-full bg-white text-black hover:scale-110 transition-all shadow-xl"
              >
                <ExternalLink size={14} />
              </a>
            </DialogTitle>
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-black/30">
              {selectedProject && (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
