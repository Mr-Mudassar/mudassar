"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Zap, Briefcase, FolderOpen, Award, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", index: 0, icon: Home },
  { name: "About", href: "#about", index: 1, icon: User },
  { name: "Skills", href: "#skills", index: 2, icon: Zap },
  { name: "Experience", href: "#experience", index: 3, icon: Briefcase },
  { name: "Projects", href: "#projects", index: 4, icon: FolderOpen },
  { name: "Certifications", href: "#certifications", index: 5, icon: Award },
  { name: "Contact", href: "#contact", index: 6, icon: Mail },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSectionChange = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setActiveSection(customEvent.detail);
    };
    window.addEventListener("sectionChange", handleSectionChange);
    return () => window.removeEventListener("sectionChange", handleSectionChange);
  }, []);

  const navigateToSection = (index: number) => {
    window.dispatchEvent(new CustomEvent("navigateToSection", { detail: index }));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-[200] hidden lg:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative py-6 px-3 rounded-[3rem] glass-card border border-white/5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'w-56 shadow-[0_0_50px_rgba(168,85,247,0.1)]' : 'w-20'}`}
        >
          <div className="flex flex-col items-center gap-4">
            
            {/* Avatar Button */}
            <motion.button
              onClick={() => navigateToSection(0)}
              className="mb-6 relative group"
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-cover scale-150">
                  <source src="/mudassar-hello-video.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.button>

            {/* Links */}
            <div className="w-full flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.index;
                
                return (
                  <button
                    key={link.name}
                    onClick={() => navigateToSection(link.index)}
                    className={`relative flex items-center p-3 rounded-2xl transition-all duration-300 group ${isActive ? 'text-white' : 'text-white/30 hover:text-white'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30"
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-center w-8 h-8">
                        <Icon size={20} className={isActive ? "text-purple-400" : ""} />
                    </div>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="relative z-10 ml-4 text-xs font-black uppercase tracking-widest whitespace-nowrap"
                            >
                                {link.name}
                            </motion.span>
                        )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Bottom Accent */}
            <div className="mt-4 pt-4 border-t border-white/5 w-full flex justify-center">
                <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,1)]"
                />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[200] p-6 lg:hidden"
      >
        <div className="glass-card rounded-[2.5rem] px-6 py-4 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-cover scale-150">
                    <source src="/mudassar-hello-video.mp4" type="video/mp4" />
                </video>
            </div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Mudassar.dev</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 glass-card rounded-[2rem] p-6 border border-white/5"
            >
              <div className="grid grid-cols-2 gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => navigateToSection(link.index)}
                    className={`flex items-center gap-3 p-4 rounded-2xl ${activeSection === link.index ? 'bg-purple-500 text-white' : 'bg-white/5 text-white/50'}`}
                  >
                    <link.icon size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
