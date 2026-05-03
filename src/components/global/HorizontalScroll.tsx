"use client";

import { useEffect, useRef, useState, ReactNode, Children, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [activeSection, setActiveSection] = useState(0);
  const childArray = Children.toArray(children);
  const totalSections = childArray.length;

  // Use refs so event handlers always read the latest value without re-registering
  const activeSectionRef = useRef(activeSection);
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  activeSectionRef.current = activeSection;

  const lockScroll = useCallback(() => {
    isLockedRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      isLockedRef.current = false;
    }, 800);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isLockedRef.current) return;
      if (index < 0 || index >= totalSections) return;
      lockScroll();
      setActiveSection(index);
    },
    [totalSections, lockScroll],
  );

  const goNext = useCallback(() => {
    goTo(activeSectionRef.current + 1);
  }, [goTo]);

  const goPrev = useCallback(() => {
    goTo(activeSectionRef.current - 1);
  }, [goTo]);

  // Lock body scroll — once
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Broadcast active section
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("sectionChange", { detail: activeSection }),
    );
  }, [activeSection]);

  // All input listeners — registered ONCE (stable callbacks via refs)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isLockedRef.current || Math.abs(e.deltaY) < 10) return;
      if (e.deltaY > 0) goNext();
      else goPrev();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLockedRef.current) return;
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goNext();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goPrev();
      }
    };

    let touchStartY = 0;
    let touchStartX = 0;
    let touchDirection: "horizontal" | "vertical" | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchDirection = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchDirection) {
        const diffX = Math.abs(e.touches[0].clientX - touchStartX);
        const diffY = Math.abs(e.touches[0].clientY - touchStartY);
        if (diffX > 10 || diffY > 10) {
          touchDirection = diffX > diffY ? "horizontal" : "vertical";
        }
      }
      // Only prevent default for horizontal swipes; let vertical scroll through
      if (touchDirection === "horizontal") {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isLockedRef.current) return;
      if (touchDirection === "horizontal") {
        const diffX = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diffX) > 50) {
          if (diffX > 0) goNext();
          else goPrev();
        }
      }
      touchDirection = null;
    };

    const handleNavigate = (e: Event) => {
      goTo((e as CustomEvent<number>).detail);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    // Must NOT be passive so we can conditionally preventDefault on horizontal swipes
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("navigateToSection", handleNavigate);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("navigateToSection", handleNavigate);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [goNext, goPrev, goTo]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full overflow-y-auto lg:overflow-hidden"
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
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeSection === index
                ? "w-8 bg-gradient-to-r from-[#a855f7] to-[#e879f9]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
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
