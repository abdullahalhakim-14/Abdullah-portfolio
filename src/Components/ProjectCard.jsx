import React from "react";
import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

const ease = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 70,
    rotate: index === 1 ? 2 : -2,
    scale: 0.92,
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.9, delay: index * 0.1, ease },
  }),
};

const cardRadii = [
  "3.8rem 1.35rem 3.8rem 1.35rem",
  "1.35rem 3.8rem 1.35rem 3.8rem",
  "3.8rem 1.35rem 3.8rem 1.35rem",
];

const ProjectCard = ({ project, index = 0, reduceMotion = false }) => {
  const radius = cardRadii[index % cardRadii.length];

  return (
    <motion.article
      className="relative h-full min-h-0 w-[82vw] max-w-[390px] shrink-0 snap-center sm:w-[58vw] lg:w-auto lg:max-w-none"
      custom={index}
      variants={cardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -9,
              rotate: index === 1 ? 0.6 : -0.6,
              transition: { duration: 0.4, ease },
            }
      }
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#98a890] sm:translate-x-3 sm:translate-y-3"
        style={{ borderRadius: radius }}
        variants={{
          hidden: { opacity: 0, scale: 0.92 },
          visible: {
            opacity: 0.9,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.25 + index * 0.08,
              ease,
            },
          },
        }}
      />

      <div
        className="relative z-10 flex h-full min-h-0 flex-col overflow-hidden border border-second/10 bg-[#e8ddc9] shadow-[0_24px_65px_rgba(35,42,25,0.2)]"
        style={{ borderRadius: radius }}
      >
        <div className="project-card-image relative min-h-0 flex-1 overflow-hidden bg-maincolor">
          <ProjectVisual
            type={project.visual}
            image={project.image}
            imageAlt={project.imageAlt}
            reduceMotion={reduceMotion}
            className="h-full w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#192015]/40 via-transparent to-transparent" />
        </div>

        <div className="project-card-copy relative flex shrink-0 flex-col justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-[clamp(1rem,1.6vw,1.5rem)] lg:py-[clamp(0.8rem,1.7vh,1.35rem)]">
          <div>
            <p className="font-ui text-[0.625rem] font-bold uppercase tracking-[0.12em] text-[#894321]">
              {project.category}
            </p>
            <h3 className="mt-1.5 font-display text-[clamp(1.6rem,2.5vw,2.65rem)] font-black italic leading-[0.9] tracking-[-0.06em]">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 font-ui text-[0.72rem] font-medium leading-[1.55] text-second/75 sm:text-[0.78rem] lg:text-[clamp(0.68rem,0.8vw,0.82rem)]">
              {project.description}
            </p>
          </div>

          <div className="mt-3 flex min-h-10 items-center justify-center border-t border-second/12 pt-3">
            <div className="flex w-full flex-wrap items-center justify-center gap-1.5 text-center">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-second/20 px-2.5 py-1 font-ui text-[0.625rem] font-bold uppercase tracking-[0.04em] text-second/80"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
