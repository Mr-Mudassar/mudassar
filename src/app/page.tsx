"use client";

import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Skills } from "@/components/sections/Skills/Skills";
import { Footer } from "@/components/sections/Footer/Footer";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Contact } from "@/components/sections/Contact/Contact";
import { Projects } from "@/components/sections/Projects/Projects";
import { Experience } from "@/components/sections/Experience/Experience";
import { BackgroundGlow } from "@/components/global/BackgroundGlow";
import { Certifications } from "@/components/sections/Certifications/Certifications";
import { HorizontalScroll } from "@/components/global/HorizontalScroll";

export default function Home() {
  return (
    <main className="bg-[#0a0d17] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen max-w-400! max-h-177!">
      <BackgroundGlow />
      <Navbar />
      <HorizontalScroll>
        <section id="home" className="shrink-0 w-full h-full">
          <Hero />
        </section>
        <section id="about" className="shrink-0 w-full h-full">
          <About />
        </section>
        <section id="skills" className="shrink-0 w-full h-full">
          <Skills />
        </section>
        <section id="experience" className="shrink-0 w-full h-full">
          <Experience />
        </section>
        <section id="projects" className="shrink-0 w-full h-full">
          <Projects />
        </section>
        <section id="certifications" className="shrink-0 w-full h-full">
          <Certifications />
        </section>
        <section id="contact" className="shrink-0 w-full h-full">
          <Contact />
        </section>
        <section id="footer" className="shrink-0 w-full h-full">
          <Footer />
        </section>
      </HorizontalScroll>
    </main>
  );
}
