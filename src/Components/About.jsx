import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const technologies = [
  { number: "01", name: "React" },
  { number: "02", name: "JavaScript" },
  { number: "03", name: "Tailwind" },
  { number: "04", name: "REST APIs" },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.05,
    },
  },
};

const layoutVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.16,
    },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

const titleLine = {
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

const captionVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.55,
      ease,
    },
  },
};

const technologyVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.07,
      ease,
    },
  }),
};

const cardRadius =
  "rounded-tl-[4.5rem] rounded-tr-[1.75rem] rounded-br-[4.5rem] rounded-bl-[1.75rem] sm:rounded-tl-[6rem] sm:rounded-tr-[2.25rem] sm:rounded-br-[6rem] sm:rounded-bl-[2.25rem]";

const innerCardRadius =
  "rounded-tl-[3.8rem] rounded-tr-[1.25rem] rounded-br-[3.8rem] rounded-bl-[1.25rem] sm:rounded-tl-[5rem] sm:rounded-tr-[1.75rem] sm:rounded-br-[5rem] sm:rounded-bl-[1.75rem]";

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="relative min-h-dvh scroll-mt-0 overflow-hidden bg-first text-second lg:h-dvh"
      variants={sectionVariants}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      {/* Same background as Hero */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      {/* Olive field */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[47%] origin-right bg-[#2F3A24] lg:block"
        style={{
          clipPath: "polygon(16% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        variants={{
          hidden: {
            opacity: 0,
            scaleX: reduceMotion ? 1 : 0.82,
          },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: {
              duration: 0.95,
              ease,
            },
          },
        }}
      />

      {/* Main layout */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-dvh max-w-[1450px] flex-col gap-10 px-5 pb-14 pt-24 sm:gap-12 sm:px-8 sm:pt-28 lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center lg:gap-16 lg:px-12 lg:pb-10 lg:pt-24 xl:gap-20 xl:px-20"
        variants={layoutVariants}
      >
        {/* Portrait side */}
        <motion.div
          className="relative order-1 flex h-[min(42svh,360px)] w-full shrink-0 items-center justify-center lg:order-2 lg:h-full lg:min-h-0 lg:justify-end"
          variants={{
            hidden: {
              opacity: 0,
              x: reduceMotion ? 0 : 70,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.95,
                ease,
              },
            },
          }}
        >
          <div className="relative aspect-[4/5] h-full max-h-[660px] max-w-full lg:h-[78%]">
            {/* Copper card */}
            <div className="absolute inset-0">
              <motion.div
                aria-hidden="true"
                className={`h-full w-full bg-accent ${cardRadius}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: reduceMotion ? 0 : -24,
                    y: reduceMotion ? 0 : 24,
                    rotate: reduceMotion ? 0 : -4,
                  },
                  visible: {
                    opacity: 0.92,
                    x: 12,
                    y: 10,
                    rotate: 2,
                    transition: {
                      duration: 1,
                      delay: 0.12,
                      ease,
                    },
                  },
                }}
              />
            </div>

            {/* Portrait card */}
            <motion.figure
              className={`relative z-10 h-full w-full overflow-hidden bg-maincolor shadow-[0_26px_70px_rgba(23,21,16,0.24)] ${cardRadius}`}
              variants={{
                hidden: {
                  opacity: 0,
                  x: reduceMotion ? 0 : 45,
                  scale: reduceMotion ? 1 : 0.9,
                  rotate: reduceMotion ? 0 : 2,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 1,
                    ease,
                  },
                },
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      rotate: -0.6,
                    }
              }
            >
              <motion.img
                src="/assets/profile-1200.webp"
                srcSet="/assets/profile-600.webp 600w, /assets/profile-1200.webp 1200w"
                sizes="(min-width: 1600px) 40vw, (min-width: 1024px) 45vw, 90vw"
                alt="Abdullah Alhakim Alhendi"
                className="h-full w-full object-cover object-[center_38%]"
                draggable="false"
                loading="lazy"
                variants={{
                  hidden: {
                    scale: reduceMotion ? 1 : 1.14,
                  },
                  visible: {
                    scale: 1,
                    transition: {
                      duration: 1.25,
                      ease,
                    },
                  },
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.045,
                      }
                }
                transition={{
                  duration: 0.7,
                  ease,
                }}
              />

              {/* Static image treatment */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maincolor via-transparent to-first/5" />

              {/* Inner border */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-3 border border-first/20 ${innerCardRadius}`}
              />

              {/* Caption */}
              <motion.figcaption
                className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-first sm:bottom-6 sm:left-6 sm:right-6"
                variants={captionVariants}
              >
                <div>
                  <p className="font-ui text-[8px] font-bold uppercase tracking-[0.2em] text-first/75 sm:text-[9px]">
                    Selected portrait
                  </p>

                  <p className="mt-1 font-display text-base font-black italic tracking-[-0.04em] sm:text-lg">
                    Abdullah Alhakim
                  </p>
                </div>
              </motion.figcaption>
            </motion.figure>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          className="relative z-20 order-2 flex w-full max-w-[790px] flex-col justify-center lg:order-1 lg:min-h-0"
          variants={contentVariants}
        >
          {/* Section label */}
          <motion.div
            className="mb-3 flex items-center gap-3 sm:mb-5 sm:gap-4"
            variants={fadeUp}
          >
            <span className="font-display text-lg font-black italic text-maincolor sm:text-xl">
              01
            </span>

            <motion.span
              className="h-[2px] w-10 origin-left bg-accent sm:w-14"
              variants={{
                hidden: {
                  scaleX: 0,
                },
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 0.75,
                    delay: 0.15,
                    ease,
                  },
                },
              }}
            />

            <p className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-second/75 sm:text-xs sm:tracking-[0.24em]">
              About / Profile
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="w-full max-w-[780px] font-display font-black italic leading-[0.88] tracking-[-0.07em] sm:leading-[0.85] sm:tracking-[-0.075em]"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            style={{
              fontSize: "clamp(2.55rem, min(4.8vw, 8.2vh), 5.8rem)",
            }}
          >
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span className="block" variants={titleLine}>
                I bring structure to code
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className="relative inline-block text-maincolor"
                variants={titleLine}
              >
                and character to screens.
              </motion.span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            className="relative mt-5 w-full pl-5 sm:pl-6 lg:mt-[clamp(1rem,2.4vh,1.9rem)]"
            variants={fadeUp}
          >
            <motion.span
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-accent"
              variants={{
                hidden: {
                  scaleY: 0,
                },
                visible: {
                  scaleY: 1,
                  transition: {
                    duration: 0.75,
                    delay: 0.18,
                    ease,
                  },
                },
              }}
            />

            <p className="w-full font-ui text-[0.98rem] font-semibold leading-[1.65] text-second/90 sm:text-[1.05rem] lg:text-[clamp(1rem,1.15vw,1.16rem)]">
              I create responsive React interfaces with clean architecture,
              deliberate visual decisions, and motion that makes every
              interaction feel natural.
            </p>
          </motion.div>

          {/* Technology index */}
          <motion.div
            className="mt-6 grid grid-cols-2 border-y border-second/25 sm:grid-cols-4 lg:mt-[clamp(1rem,2.6vh,2.1rem)]"
            variants={fadeUp}
          >
            {technologies.map((technology, index) => (
              <motion.div
                key={technology.number}
                custom={index}
                className={`px-3 py-3.5 sm:px-4 sm:py-4 ${
                  index % 2 === 0 ? "border-r border-second/20" : ""
                } ${
                  index < 2 ? "border-b border-second/20 sm:border-b-0" : ""
                } ${
                  index !== technologies.length - 1
                    ? "sm:border-r sm:border-second/20"
                    : "sm:border-r-0"
                }`}
                variants={technologyVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        color: "#556B3E",
                      }
                }
              >
                <span className="font-ui text-[9px] font-bold tracking-[0.18em] text-accent">
                  {technology.number}
                </span>

                <p className="mt-1 font-display text-base font-black italic tracking-[-0.04em] sm:text-lg">
                  {technology.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom signature */}
          <motion.div
            className="mt-6 hidden items-end justify-between md:flex lg:mt-[clamp(1rem,2.5vh,2rem)]"
            variants={fadeUp}
          >
            <div>
              <p className="font-ui text-[9px] font-bold uppercase tracking-[0.22em] text-second/75">
                Working principle
              </p>

              <p className="mt-1 font-display text-lg font-black italic tracking-[-0.045em] lg:text-xl">
                Calm interface.{" "}
                <span className="text-maincolor">Confident engineering.</span>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2.5 pb-1 pl-5 font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-maincolor">
              <span className="relative flex h-2.5 w-2.5">
                {!reduceMotion && (
                  <motion.span
                    className="absolute inset-0 bg-maincolor"
                    whileInView={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    viewport={{
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: 3,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <span className="relative h-2.5 w-2.5 bg-maincolor" />
              </span>
              Available
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
