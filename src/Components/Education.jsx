import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const education = [
  {
    number: "01",
    field: "Information Technology",
    degree: "Bachelor's in Information Technology Engineering",
    university: "Syrian Virtual University",
    location: "Damascus, Syria",
    start: "2022",
    end: "2028",
    status: "In progress",
    theme: "olive",
  },
  {
    number: "02",
    field: "Business Administration",
    degree: "Bachelor's in Business Administration",
    university: "Damascus University",
    location: "Damascus, Syria",
    start: "2022",
    end: "2026",
    status: "Academic track",
    theme: "paper",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "110%",
    rotate: 2,
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
};

const EducationCard = ({ item, index, reduceMotion }) => {
  const isOlive = item.theme === "olive";

  return (
    <motion.article
      className={`group relative flex min-h-105 flex-col overflow-hidden border p-6 sm:p-8 lg:min-h-0 lg:p-9 xl:p-11 ${
        index === 0
          ? "rounded-[2rem_2rem_0.75rem_2rem] lg:rounded-[3rem_1rem_1rem_3rem]"
          : "rounded-[2rem_2rem_2rem_0.75rem] lg:rounded-[1rem_3rem_3rem_1rem]"
      } ${
        isOlive
          ? "border-maincolor bg-maincolor text-first"
          : "border-second/15 bg-[#E9DFC9] text-second"
      }`}
      variants={{
        hidden: {
          opacity: 0,
          x: reduceMotion ? 0 : index === 0 ? 70 : -70,
          rotateY: reduceMotion ? 0 : index === 0 ? -12 : 12,
          scale: reduceMotion ? 1 : 0.96,
        },
        visible: {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            duration: 1.05,
            delay: 0.2 + index * 0.12,
            ease,
          },
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              transition: {
                duration: 0.4,
                ease,
              },
            }
      }
    >
      {/* Oversized card number */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-5 right-4 font-display text-[10rem] font-black italic leading-none tracking-[-0.1em] sm:right-7 sm:text-[13rem] lg:right-10 lg:text-[clamp(9rem,12vw,13rem)] ${
          isOlive ? "text-first/10" : "text-second/10"
        }`}
      >
        {item.number}
      </span>

      {/* Card header */}
      <div className="relative z-10 flex items-start justify-between gap-5">
        <div>
          <p
            className={`font-ui text-[0.65rem] font-bold uppercase tracking-[0.24em] ${
              isOlive ? "text-first/75" : "text-second/75"
            }`}
          >
            Academic record
          </p>

          <p className="mt-2 font-display text-lg font-black italic">
            No. {item.number}
          </p>
        </div>

        <div
          className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 font-ui text-[0.6rem] font-bold uppercase tracking-[0.17em] ${
            isOlive
              ? "border-first/15 text-first/70"
              : "border-second/15 text-second/65"
          }`}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.45, 1],
                    opacity: [0.7, 1, 0.7],
                  }
            }
            transition={{
              duration: 2.4,
              repeat: 3,
              ease: "easeInOut",
            }}
          />

          {item.status}
        </div>
      </div>

      {/* Main information */}
      <div className="relative z-10 my-auto py-12 lg:py-8">
        <p
          className={`mb-5 font-ui text-xs font-bold uppercase tracking-[0.2em] ${
            isOlive ? "text-accent" : "text-[#B66338]"
          }`}
        >
          {item.field}
        </p>

        <h3 className="max-w-xl font-display text-[clamp(2rem,3.3vw,4rem)] font-black italic leading-[0.92] tracking-[-0.065em]">
          {item.degree}
        </h3>

        <div
          className={`mt-7 h-px w-full ${
            isOlive ? "bg-first/15" : "bg-second/15"
          }`}
        />

        <div className="mt-6 flex flex-col gap-1">
          <p className="font-ui text-lg font-bold tracking-[-0.035em] sm:text-xl">
            {item.university}
          </p>

          <p
            className={`font-ui text-sm ${
              isOlive ? "text-first/75" : "text-second/75"
            }`}
          >
            {item.location}
          </p>
        </div>
      </div>

      {/* Study period */}
      <div className="relative z-10 flex items-end justify-between gap-5">
        <div>
          <p
            className={`font-ui text-[0.6rem] font-bold uppercase tracking-[0.2em] ${
              isOlive ? "text-first/75" : "text-second/75"
            }`}
          >
            Study period
          </p>

          <p className="mt-1 font-display text-2xl font-black italic tracking-[-0.05em]">
            {item.start} — {item.end}
          </p>
        </div>

        <motion.div
          aria-hidden="true"
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
            isOlive
              ? "border-first/20 text-first"
              : "border-second/20 text-second"
          }`}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  rotate: 45,
                  scale: 1.08,
                }
          }
          transition={{
            duration: 0.4,
            ease,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom hover accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-accent"
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

const Education = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative min-h-dvh scroll-mt-0 overflow-hidden bg-first px-5 pb-8 pt-28 text-second sm:px-8 lg:h-dvh lg:px-12 lg:pb-10 lg:pt-30"
    >
      {/* Hero background atmosphere */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      {/* Background typography */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-8 hidden font-display text-[20rem] font-black italic leading-none tracking-[-0.12em] text-second/[0.025] lg:block"
        initial={reduceMotion ? false : { opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease }}
      >
        EDU
      </motion.span>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100dvh-9.5rem)] max-w-350 flex-col lg:h-full lg:min-h-0"
        variants={containerVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        {/* Section heading */}
        <header className="mb-7">
          <motion.div variants={revealVariants}>
            <div className="flex items-center gap-4">
              <span className="font-display text-lg font-black italic text-maincolor">
                02
              </span>

              <span className="h-px w-12 bg-accent" />

              <p className="font-ui text-[0.65rem] font-bold uppercase tracking-[0.22em] text-second/75 sm:text-xs sm:tracking-[0.25em]">
                Education / Academic folio
              </p>
            </div>
          </motion.div>

          <div className="mt-5 overflow-hidden">
            <motion.h2
              className="whitespace-nowrap font-display text-[clamp(1.75rem,7.4vw,6.1rem)] font-black italic leading-none tracking-[-0.075em]"
              variants={titleVariants}
            >
              Built from <span className="text-maincolor">two worlds.</span>
            </motion.h2>
          </div>
        </header>

        {/* Open academic folio */}
        <div
          className="relative grid flex-1 gap-3 lg:min-h-0 lg:grid-cols-2 lg:gap-1"
          style={{ perspective: "1400px" }}
        >
          {education.map((item, index) => (
            <EducationCard
              key={item.degree}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}

          {/* Central book spine */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-5 hidden h-[calc(100%-2.5rem)] w-px origin-top -translate-x-1/2 bg-accent lg:block"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease,
            }}
          >
            <motion.span
              className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-first bg-accent"
              initial={reduceMotion ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 1.15,
                ease,
              }}
            />
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.footer
          className="mt-7 flex flex-col gap-3 border-t border-second/10 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-5 lg:pt-4"
          variants={revealVariants}
        >
          <p className="font-display text-lg font-black italic tracking-[-0.04em] sm:text-xl">
            Engineering the system.
            <span className="text-maincolor"> Understanding the product.</span>
          </p>

          <div className="flex items-center gap-3 font-ui text-[0.65rem] font-bold uppercase tracking-[0.2em] text-second/75">
            <span>Damascus</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Syria</span>
          </div>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Education;
