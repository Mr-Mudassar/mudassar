"use client";

import dynamic from "next/dynamic";
import { HorizontalScroll } from "@/components/global/HorizontalScroll";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";

const About = dynamic(
  () => import("@/components/sections/About/About").then((mod) => mod.About),
  { loading: () => <SectionFallback label="About" /> },
);

const Skills = dynamic(
  () => import("@/components/sections/Skills/Skills").then((mod) => mod.Skills),
  { loading: () => <SectionFallback label="Skills" /> },
);

const Experience = dynamic(
  () =>
    import("@/components/sections/Experience/Experience").then(
      (mod) => mod.Experience,
    ),
  { loading: () => <SectionFallback label="Experience" /> },
);

const Projects = dynamic(
  () => import("@/components/sections/Projects/Projects").then((mod) => mod.Projects),
  { loading: () => <SectionFallback label="Projects" /> },
);

const Certifications = dynamic(
  () =>
    import("@/components/sections/Certifications/Certifications").then(
      (mod) => mod.Certifications,
    ),
  { loading: () => <SectionFallback label="Certifications" /> },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact/Contact").then((mod) => mod.Contact),
  { loading: () => <SectionFallback label="Contact" /> },
);

const Footer = dynamic(
  () => import("@/components/sections/Footer/Footer").then((mod) => mod.Footer),
  { loading: () => <SectionFallback label="Footer" /> },
);

function SectionFallback({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center text-white/40 text-xs font-bold uppercase tracking-widest">
      {label}
    </div>
  );
}

export function HomeClient() {
  return (
    <main className="bg-[#0a0d17] fixed inset-0 w-screen h-screen">
      <Navbar />
      <HorizontalScroll>
        <section id="home" className="shrink-0 w-full min-h-full lg:h-full">
          <Hero />
        </section>
        <section id="about" className="shrink-0 w-full min-h-full lg:h-full">
          <About />
        </section>
        <section id="skills" className="shrink-0 w-full min-h-full lg:h-full">
          <Skills />
        </section>
        <section id="experience" className="shrink-0 w-full min-h-full lg:h-full">
          <Experience />
        </section>
        <section id="projects" className="shrink-0 w-full min-h-full lg:h-full">
          <Projects />
        </section>
        <section id="certifications" className="shrink-0 w-full min-h-full lg:h-full">
          <Certifications />
        </section>
        <section id="contact" className="shrink-0 w-full min-h-full lg:h-full">
          <Contact />
        </section>
        <section id="footer" className="shrink-0 w-full min-h-full lg:h-full">
          <Footer />
        </section>
      </HorizontalScroll>
    </main>
  );
}
