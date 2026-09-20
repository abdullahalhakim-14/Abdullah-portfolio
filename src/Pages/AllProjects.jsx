import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import projects from "../data/projects";
import ProjectVisual from "../Components/ProjectVisual";
import "./AllProjects.css";

const ease = [0.16, 1, 0.3, 1];

const Arrow = ({ back = false }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${back ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const AllProjects = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Projects — Abdullah Alhakim Alhendi";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="bg-first text-second">
      <header className="fixed left-1/2 top-3 z-50 flex h-16 w-[min(88vw,520px)] -translate-x-1/2 items-center justify-between rounded-[30px] border-2 border-accent bg-maincolor px-5 text-first shadow-[0_18px_50px_rgba(48,60,24,0.18)] sm:px-6">
        <Link
          to="/"
          className="shrink-0 font-display text-xl font-black italic tracking-[-0.04em] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-2xl"
        >
          Abdullah
        </Link>
        <Link
          to="/#projects"
          className="ml-3 flex min-h-11 items-center gap-2 font-ui text-[0.58rem] font-bold uppercase tracking-[0.1em] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:gap-3 sm:tracking-[0.17em]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-first/20">
            <Arrow back />
          </span>
          Back to portfolio
        </Link>
      </header>

      <section className="relative flex min-h-dvh items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-12 xl:px-18">
        <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 -right-10 font-display text-[clamp(16rem,42vw,42rem)] font-black italic leading-none tracking-[-0.13em] text-second/[0.025]"
        >
          04
        </span>
        <div className="relative z-10 mx-auto w-full max-w-[1450px]">
          <motion.div
            className="flex items-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="font-display text-xl font-black italic text-maincolor">
              04
            </span>
            <span className="h-0.5 w-14 bg-accent" />
            <p className="font-ui text-xs font-bold uppercase tracking-[0.24em] text-second/75">
              Projects / Complete archive
            </p>
          </motion.div>
          <div className="mt-9 overflow-hidden pb-4">
            <motion.h1
              className="font-display text-[clamp(3rem,11vw,11rem)] font-black italic leading-[0.85] tracking-[-0.09em]"
              initial={
                reduceMotion ? false : { opacity: 0, y: "110%", rotate: 2 }
              }
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.05, delay: 0.12, ease }}
            >
              Project <span className="block text-maincolor">Observatory.</span>
            </motion.h1>
          </div>
          <motion.p
            className="mt-7 max-w-xl border-l-2 border-accent pl-5 font-ui text-base font-medium leading-relaxed text-second/75 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease }}
          >
            Interfaces built through deliberate systems, expressive visuals, and
            code that keeps every interaction in motion.
          </motion.p>
        </div>
      </section>

      {projects.map((project, index) => {
        const reversed = index % 2 === 1;
        const dark = project.dark;

        return (
          <motion.article
            id={project.id}
            key={project.id}
            className={`archive-project relative h-dvh overflow-hidden ${dark ? "bg-maincolor text-first" : "bg-first text-second"}`}
            initial={reduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
          >
            <div
              className={`pointer-events-none absolute inset-0 ${dark ? "opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#F4F2E8_1px,transparent_0)]" : "opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)]"} [background-size:22px_22px]`}
            />
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-14 font-display text-[clamp(14rem,32vw,34rem)] font-black italic leading-none tracking-[-0.13em] ${reversed ? "-left-8" : "-right-8"} ${dark ? "text-first/[0.035]" : "text-second/[0.03]"}`}
            >
              {project.number}
            </span>

            <div className={`archive-project-layout relative z-10 mx-auto grid max-w-[1450px] px-5 sm:px-8 lg:grid-cols-2 lg:px-12 xl:px-18 ${reversed ? "archive-project-reversed" : ""}`}>
              <motion.div
                className={`archive-project-copy min-w-0 [container-type:inline-size] ${reversed ? "lg:order-2 lg:text-right" : "lg:order-1"}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: reduceMotion ? 0 : reversed ? 65 : -65,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.95, ease },
                  },
                }}
              >
                <div
                  className={`flex items-center gap-3 ${reversed ? "lg:justify-end" : ""}`}
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <p
                    className={`font-ui text-[0.62rem] font-bold uppercase tracking-[0.22em] ${dark ? "text-first/75" : "text-second/75"}`}
                  >
                    Project {project.number}{project.year ? ` / ${project.year}` : ""}
                  </p>
                </div>
                <p className="archive-project-category font-ui text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  {project.category}
                </p>
                <div className="archive-project-heading">
                  <motion.h2
                    className="px-[0.12em] -mx-[0.12em] font-display font-black italic leading-[0.9] tracking-[-0.085em]"
                    variants={{
                      hidden: { opacity: 0, y: "110%", rotate: 2 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: { duration: 1, delay: 0.1, ease },
                      },
                    }}
                  >
                    {project.title}
                  </motion.h2>
                </div>
                <p
                  className={`archive-project-description max-w-xl font-ui font-medium ${reversed ? "lg:ml-auto" : ""} ${dark ? "text-first/65" : "text-second/65"}`}
                >
                  {project.description}
                </p>
                <div
                  className={`archive-project-technologies flex flex-wrap gap-2 ${reversed ? "lg:justify-end" : ""}`}
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full border px-4 py-2 font-ui text-[0.58rem] font-bold uppercase tracking-[0.14em] ${dark ? "border-first/15 text-first/75" : "border-second/15 text-second/75"}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className={`archive-project-links flex flex-wrap gap-4 ${reversed ? "lg:justify-end" : ""}`}>
                    {[
                      { href: project.demo, label: "Live preview" },
                      { href: project.github, label: "GitHub" },
                    ].filter((link) => link.href).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — ${link.label} (opens in a new tab)`}
                        className={`inline-flex min-h-11 items-center gap-3 rounded-full border px-5 py-2 font-ui text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-4 ${dark ? "border-first/30 text-first focus-visible:outline-first" : "border-second/30 text-second focus-visible:outline-second"}`}
                      >
                        {link.label}<Arrow />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div
                className={`archive-project-media relative mx-auto w-full max-w-[680px] ${reversed ? "lg:order-1" : "lg:order-2"}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: reduceMotion ? 0 : reversed ? -75 : 75,
                    scale: reduceMotion ? 1 : 0.88,
                    rotate: reduceMotion ? 0 : reversed ? -3 : 3,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 1.05, delay: 0.12, ease },
                  },
                }}
              >
                <ProjectVisual
                  type={project.visual}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  reduceMotion={reduceMotion}
                  className={`archive-project-visual relative aspect-[4/3] shadow-[0_35px_90px_rgba(30,35,22,0.28)] ${reversed ? "rounded-[2rem_5rem_2rem_5rem]" : "rounded-[5rem_2rem_5rem_2rem]"}`}
                />
              </motion.div>
            </div>
          </motion.article>
        );
      })}

      <footer className="relative overflow-hidden bg-maincolor px-5 py-20 text-first sm:px-8 lg:px-12 xl:px-18">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#F4F2E8_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="relative z-10 mx-auto flex max-w-[1450px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-ui text-[0.6rem] font-bold uppercase tracking-[0.22em] text-first/75">
              End of archive
            </p>
            <p className="mt-3 font-display text-[clamp(2.5rem,5vw,5rem)] font-black italic leading-[0.9] tracking-[-0.065em]">
              More ideas{" "}
              <span className="block text-accent">are in motion.</span>
            </p>
          </div>
          <Link
            to="/"
            className="flex w-fit items-center gap-5 rounded-full bg-first px-6 py-3 font-ui text-[0.6rem] font-bold uppercase tracking-[0.18em] text-second outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Return home{" "}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-first">
              <Arrow />
            </span>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default AllProjects;
