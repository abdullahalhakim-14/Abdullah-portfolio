import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const roles = [
  {
    number: "01",
    signal: "Current role",
    period: "Now",
    role: "Project Assistant",
    organization: "Sanad Foundation",
    department: "Development Project Management",
    location: "Damascus, Syria",
    description:
      "Supporting project coordination, documentation, and follow-up across development initiatives.",
    skills: ["Coordination", "Documentation", "Project follow-up"],
    dark: true,
  },
  {
    number: "02",
    signal: "Technical experience",
    period: "2025",
    fullPeriod: "Mar 2025 - Oct 2025",
    role: "Front-End Development Trainee",
    organization: "VICA Web Company",
    department: "Front-End Development",
    location: "Damascus, Syria",
    description:
      "Developed responsive interfaces and gained practical experience with React, JavaScript, Tailwind, Git, and GitHub.",
    skills: ["React", "JavaScript", "Responsive UI"],
    dark: false,
  },
];

const additionalExperience = [
  {
    number: "01",
    role: "Science Educator",
    organization: "Al-Noor Institute",
  },
  {
    number: "02",
    role: "Student Supervisor",
    organization: "Al-Awael Institute",
  },
  {
    number: "03",
    role: "Content Preparation",
    organization: "Al-Nokhba Team",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.28,
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "115%",
    rotate: 2,
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

const bandBackgroundVariants = {
  hidden: (index) => ({
    scaleX: 0,
    originX: index === 0 ? 0 : 1,
  }),
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease,
    },
  },
};

const bandContentVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index === 0 ? -65 : 65,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.35 + index * 0.12,
      ease,
    },
  }),
};

const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
    },
  },
};

const footerItemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

const ExperienceBand = ({ item, index, reduceMotion }) => {
  const primaryText = item.dark ? "text-first" : "text-second";
  const secondaryText = item.dark ? "text-first/80" : "text-second/80";
  const subtleText = item.dark ? "text-first/75" : "text-second/75";
  const borderColor = item.dark ? "border-first/12" : "border-second/15";

  return (
    <motion.article
      className={`group relative min-h-0 flex-1 overflow-hidden border-t ${borderColor}`}
    >
      {/* Full-width band background */}
      <motion.div
        aria-hidden="true"
        className={`absolute inset-0 ${
          index === 0 ? "origin-left" : "origin-right"
        } ${item.dark ? "bg-maincolor" : "bg-[#E8DDC9]"}`}
        custom={index}
        variants={bandBackgroundVariants}
      />

      {/* Dotted atmosphere */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          item.dark
            ? "opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#F3EEE2_1px,transparent_0)]"
            : "opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)]"
        } [background-size:22px_22px]`}
      />

      {/* Oversized record number */}
      <motion.span
        aria-hidden="true"
        className={`pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 font-display text-[clamp(9rem,19vw,20rem)] font-black italic leading-none tracking-[-0.12em] ${
          item.dark ? "text-first/5" : "text-second/5"
        }`}
        initial={reduceMotion ? false : { opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.95,
          delay: 0.45 + index * 0.1,
          ease,
        }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                x: -16,
                rotate: -2,
              }
        }
      >
        {item.number}
      </motion.span>

      {/* Copper scanning signal */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-30 w-px bg-accent shadow-[0_0_18px_rgba(182,99,56,0.55)]"
          initial={{
            x: index === 0 ? "-5vw" : "105vw",
            opacity: 0,
          }}
          whileInView={{
            x: index === 0 ? "105vw" : "-5vw",
            opacity: [0, 1, 0],
          }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{
            duration: 1.15,
            delay: 0.3 + index * 0.12,
            ease,
          }}
        />
      )}

      {/* Role content */}
      <motion.div
        className={`relative z-10 mx-auto grid h-full max-w-[1450px] grid-cols-[4.2rem_minmax(0,1fr)] items-center gap-x-4 px-5 py-[clamp(0.75rem,2vh,1.8rem)] sm:grid-cols-[6rem_minmax(0,1fr)] sm:px-8 lg:grid-cols-[9rem_minmax(0,1.25fr)_minmax(17rem,0.75fr)] lg:gap-x-8 lg:px-12 xl:px-18 ${primaryText}`}
        custom={index}
        variants={bandContentVariants}
      >
        {/* Period */}
        <div className="row-span-2 self-center lg:row-span-1">
          <p
            className={`font-ui text-[0.625rem] font-bold uppercase tracking-[0.2em] ${subtleText}`}
          >
            Period
          </p>

          <p
            className="mt-1 font-display font-black italic leading-none tracking-[-0.07em]"
            style={{
              fontSize: "clamp(1.8rem, min(3.8vw, 5vh), 4rem)",
            }}
          >
            {item.period}
          </p>

          {item.fullPeriod && (
            <p
              className={`mt-1 hidden font-ui text-[0.625rem] font-semibold uppercase tracking-[0.1em] sm:block ${secondaryText}`}
            >
              {item.fullPeriod}
            </p>
          )}
        </div>

        {/* Role identity */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <motion.span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              animate={
                reduceMotion || index !== 0
                  ? undefined
                  : {
                      scale: [1, 1.55, 1],
                      opacity: [0.55, 1, 0.55],
                    }
              }
              transition={{
                duration: 2,
                repeat: 3,
                ease: "easeInOut",
              }}
            />

            <p
              className={`font-ui text-[0.625rem] font-bold uppercase tracking-[0.2em] ${secondaryText}`}
            >
              {item.signal}
            </p>
          </div>

          <h3
            className="mt-2 max-w-3xl font-display font-black italic leading-[0.88] tracking-[-0.065em]"
            style={{
              fontSize: "clamp(1.55rem, min(4vw, 5vh), 4.2rem)",
            }}
          >
            {item.role}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-ui text-sm font-bold tracking-[-0.03em] sm:text-base">
              {item.organization}
            </p>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-accent sm:block"
            />

            <p
              className={`font-ui text-[0.65rem] font-semibold uppercase tracking-[0.12em] sm:text-xs ${secondaryText}`}
            >
              {item.department}
            </p>
          </div>
        </div>

        {/* Experience details */}
        <div className="col-start-2 mt-2 min-w-0 lg:col-start-3 lg:mt-0">
          <p
            className={`hidden font-ui text-sm font-medium leading-[1.6] sm:block ${secondaryText}`}
          >
            {item.description}
          </p>

          <div className="mt-2 hidden flex-wrap gap-2 md:flex">
            {item.skills.map((skill) => (
              <motion.span
                key={skill}
                className={`rounded-full border px-3 py-1.5 font-ui text-[0.625rem] font-bold uppercase tracking-[0.12em] ${borderColor} ${secondaryText}`}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                        borderColor: "rgba(182, 99, 56, 0.8)",
                      }
                }
                transition={{
                  duration: 0.25,
                  ease,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <p
            className={`mt-2 hidden font-ui text-[0.625rem] font-bold uppercase tracking-[0.17em] lg:block ${subtleText}`}
          >
            {item.location}
          </p>
        </div>
      </motion.div>

      {/* Hover accent */}
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{
          duration: 0.55,
          ease,
        }}
      />
    </motion.article>
  );
};

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="relative h-dvh scroll-mt-0 overflow-hidden bg-first text-second"
      variants={sectionVariants}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {/* Same background as Hero */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      {/* Background index */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-8 hidden font-display text-[21rem] font-black italic leading-none tracking-[-0.12em] text-second/[0.025] lg:block"
        variants={fadeUp}
      >
        03
      </motion.span>

      <div className="relative z-10 flex h-full min-h-0 flex-col pb-4 pt-[5.75rem] sm:pb-5 sm:pt-28 lg:pt-26">
        {/* Heading */}
        <header className="mx-auto w-full max-w-[1450px] shrink-0 px-5 pb-[clamp(0.8rem,2vh,1.5rem)] sm:px-8 lg:px-12 xl:px-18">
          <motion.div
            className="flex items-center justify-between gap-5"
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-display text-lg font-black italic text-maincolor sm:text-xl">
                03
              </span>

              <motion.span
                className="h-[2px] w-10 origin-left bg-accent sm:w-14"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.32,
                  ease,
                }}
              />

              <p className="font-ui text-[0.58rem] font-bold uppercase tracking-[0.2em] text-second/75 sm:text-xs sm:tracking-[0.24em]">
                Experience / Career index
              </p>
            </div>

            <div className="hidden items-center gap-2 font-ui text-[0.58rem] font-bold uppercase tracking-[0.19em] text-maincolor sm:flex">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Professional signal active
            </div>
          </motion.div>

          <div className="mt-[clamp(0.55rem,1.5vh,1.2rem)] overflow-hidden">
            <motion.h2
              className="whitespace-nowrap font-display font-black italic leading-none tracking-[-0.075em]"
              style={{
                fontSize: "clamp(2.25rem, min(7vw, 8.5vh), 6.5rem)",
              }}
              variants={titleVariants}
            >
              Experience in <span className="text-maincolor">motion.</span>
            </motion.h2>
          </div>
        </header>

        {/* Full-width experience bands */}
        <div className="flex min-h-0 flex-1 flex-col">
          {roles.map((role, index) => (
            <ExperienceBand
              key={role.role}
              item={role}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Additional experience */}
        <motion.footer
          className="mx-auto w-full max-w-[1450px] shrink-0 px-5 sm:px-8 lg:px-12 xl:px-18"
          variants={footerVariants}
        >
          <div className="grid grid-cols-[auto_1fr] items-center border-b border-second/10 lg:grid-cols-[0.65fr_2.35fr]">
            <motion.div
              className="py-3 pr-4 lg:border-r lg:border-second/15 lg:py-4 lg:pr-6"
              variants={footerItemVariants}
            >
              <p className="font-ui text-[0.625rem] font-bold uppercase tracking-[0.2em] text-second/75">
                Beyond the role
              </p>

              <p className="mt-0.5 whitespace-nowrap font-display text-sm font-black italic tracking-[-0.04em] sm:text-base lg:text-lg">
                Knowledge shared.
              </p>
            </motion.div>

            <div className="grid grid-cols-3">
              {additionalExperience.map((item, index) => (
                <motion.div
                  key={item.number}
                  className={`min-w-0 px-2 py-3 sm:px-4 lg:py-4 ${
                    index !== additionalExperience.length - 1
                      ? "border-r border-second/15"
                      : ""
                  }`}
                  variants={footerItemVariants}
                >
                  <span className="font-ui text-[0.48rem] font-bold tracking-[0.17em] text-accent">
                    {item.number}
                  </span>

                  <p className="font-display text-[0.75rem] font-black italic leading-tight tracking-[-0.035em] sm:text-sm lg:text-base">
                    {item.role}
                  </p>

                  <p className="mt-0.5 font-ui text-[0.625rem] leading-snug text-second/75">
                    {item.organization}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.section>
  );
};

export default Experience;
