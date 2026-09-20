import React from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ease = [0.16, 1, 0.3, 1];
const selectedProjects = projects.slice(0, 3);

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const titleVariants = {
  hidden: { opacity: 0, y: "110%", rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.95, ease },
  },
};

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="relative h-dvh scroll-mt-0 overflow-hidden bg-first text-second"
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      <motion.span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-10 hidden font-display text-[22rem] font-black italic leading-none tracking-[-0.12em] text-second/[0.025] lg:block" variants={fadeUp}>
        04
      </motion.span>

      <div className="relative z-10 mx-auto flex h-full min-h-0 max-w-[1450px] flex-col px-5 pb-4 pt-[5.75rem] sm:px-8 sm:pb-5 sm:pt-28 lg:px-12 lg:pb-6 lg:pt-26 xl:px-18">
        <header className="shrink-0 pb-[clamp(0.8rem,2vh,1.5rem)]">
          <motion.div className="flex items-center justify-between gap-5" variants={fadeUp}>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-display text-lg font-black italic text-maincolor sm:text-xl">04</span>
              <motion.span className="h-0.5 w-10 origin-left bg-accent sm:w-14" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2, ease } } }} />
              <p className="font-ui text-[0.58rem] font-bold uppercase tracking-[0.2em] text-second/75 sm:text-xs sm:tracking-[0.24em]">Projects / Selected work</p>
            </div>
            <p className="hidden font-ui text-[0.58rem] font-bold uppercase tracking-[0.2em] text-second/75 sm:block">Selected archive / 03</p>
          </motion.div>

          <div className="mt-[clamp(0.45rem,1.3vh,0.9rem)] overflow-hidden">
            <motion.h2
              className="whitespace-nowrap font-display font-black italic leading-none tracking-[-0.075em]"
              style={{ fontSize: "clamp(1.65rem, min(6.5vw, 7.5vh), 6rem)" }}
              variants={titleVariants}
            >
              Interfaces with <span className="text-maincolor">a pulse.</span>
            </motion.h2>
          </div>
        </header>

        <div tabIndex={0} role="region" aria-label="Selected projects — swipe or use arrow keys to explore" className="projects-mobile-track min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-full min-h-0 gap-5 pr-5">
            {selectedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>

        <div
          className="projects-desktop-grid min-h-0 flex-1 gap-[clamp(1rem,2vw,2rem)] pb-2 pt-1"
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>

        <motion.footer className="flex shrink-0 items-center justify-between gap-4 border-t border-second/10 pt-3" variants={fadeUp}>
          <p className="hidden font-display text-base font-black italic tracking-[-0.04em] sm:block">
            Three selected signals. <span className="text-maincolor">The full archive continues.</span>
          </p>

          <motion.div whileHover={reduceMotion ? undefined : { x: 5 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
            <Link to="/projects" className="group flex items-center gap-4 rounded-full bg-maincolor px-5 py-2.5 font-ui text-[0.58rem] font-bold uppercase tracking-[0.17em] text-first outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-first">
              View all projects
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent"><Arrow /></span>
            </Link>
          </motion.div>
        </motion.footer>
      </div>
    </motion.section>
  );
};

export default Projects;
