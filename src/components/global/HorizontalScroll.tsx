"use client";

import { useEffect, useState, ReactNode, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const childArray = Children.toArray(children);
  const totalSections = childArray.length;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("sectionChange", { detail: activeSection }),
    );
  }, [activeSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isLocked) return;

      const delta = e.deltaY;

      if (Math.abs(delta) < 10) return;

      setIsLocked(true);

      if (delta > 0 && activeSection < totalSections - 1) {
        setActiveSection((prev) => prev + 1);
      } else if (delta < 0 && activeSection > 0) {
        setActiveSection((prev) => prev - 1);
      }

      setTimeout(() => setIsLocked(false), 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLocked) return;

      if (["ArrowRight", "ArrowDown", "PageDown", "Space"].includes(e.key)) {
        e.preventDefault();
        if (activeSection < totalSections - 1) {
          setIsLocked(true);
          setActiveSection((prev) => prev + 1);
          setTimeout(() => setIsLocked(false), 1000);
        }
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        if (activeSection > 0) {
          setIsLocked(true);
          setActiveSection((prev) => prev - 1);
          setTimeout(() => setIsLocked(false), 1000);
        }
      }
    };

    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isLocked) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      const diff = Math.abs(diffX) > Math.abs(diffY) ? diffX : diffY;

      if (Math.abs(diff) > 50) {
        setIsLocked(true);
        if (diff > 0 && activeSection < totalSections - 1) {
          setActiveSection((prev) => prev + 1);
        } else if (diff < 0 && activeSection > 0) {
          setActiveSection((prev) => prev - 1);
        }
        setTimeout(() => setIsLocked(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection, totalSections, isLocked]);

  useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      if (e.detail >= 0 && e.detail < totalSections && !isLocked) {
        setIsLocked(true);
        setActiveSection(e.detail);
        setTimeout(() => setIsLocked(false), 1000);
      }
    };
    window.addEventListener(
      "navigateToSection" as keyof WindowEventMap,
      handleSectionChange as EventListener,
    );
    return () =>
      window.removeEventListener(
        "navigateToSection" as keyof WindowEventMap,
        handleSectionChange as EventListener,
      );
  }, [totalSections, isLocked]);

  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen max-w-400! max-h-177! overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 150, filter: "blur(20px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -150, filter: "blur(20px)" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full"
        >
          {childArray[activeSection]}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {childArray.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (!isLocked) {
                setIsLocked(true);
                setActiveSection(index);
                setTimeout(() => setIsLocked(false), 1000);
              }
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeSection === index
                ? "w-8 bg-gradient-to-r from-[#a855f7] to-[#e879f9]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      <motion.div
        className="fixed bottom-8 right-8 z-[100] text-muted-foreground text-sm hidden lg:flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary"
        >
          →
        </motion.div>
      </motion.div>
    </div>
  );
}
