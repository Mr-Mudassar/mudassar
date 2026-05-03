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
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">MM</span>
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
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,1)] animate-bounce" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar — Floating Circle + Full-Width Panel */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-[201] w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] lg:hidden"
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0a0d17]" />
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[199] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-20 left-3 right-3 z-[200] glass-card rounded-2xl p-3 border border-white/10 shadow-2xl lg:hidden"
            >
              <div className="grid grid-cols-4 gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.index;
                  return (
                    <button
                      key={link.name}
                      onClick={() => navigateToSection(link.index)}
                      className={`flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          : "text-white/50 active:bg-white/5 border border-transparent"
                      }`}
                    >
                      <link.icon size={18} />
                      <span className="text-[9px] font-bold uppercase tracking-wider">{link.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
