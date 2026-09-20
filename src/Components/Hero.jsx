import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="relative h-dvh overflow-hidden bg-first px-5 pb-5 pt-24 text-second"
    >
      {/* Dotted background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto flex h-full max-w-350 flex-col">
        {/* Center content */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center">
          <h1
            className="font-display font-black italic leading-[0.8] tracking-[-0.08em]"
            style={{
              fontSize: "clamp(4rem, min(11vw, 16vh), 12rem)",
            }}
          >
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Front-End
            </motion.span>

            <motion.span
              className="block font-semibold tracking-[-0.07em]"
              initial={reduceMotion ? false : { opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Developer
            </motion.span>
          </h1>

          <motion.p
            className="mt-[clamp(0.7rem,1.7vh,1.3rem)] max-w-140 font-display font-black italic text-[clamp(0.78rem,1.1vw,1rem)] leading-relaxed text-second/65"
            initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            I craft thoughtful digital interfaces where clean code meets
            expressive motion.
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[-0.03em] text-second/75 md:flex"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 0.7,
            delay: 0.9,
            ease: "easeOut",
          }}
        >
          <span>Scroll</span>

          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-second/40"
            whileInView={reduceMotion ? undefined : { y: [0, 6, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 1.4,
              repeat: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Bottom info */}
        <motion.div
          className="flex shrink-0 items-end justify-between font-ui text-second"
          initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="text-[clamp(2.2rem,4vw,4rem)] font-black leading-none tracking-[-0.08em]">
            ©2026
          </p>

          <div className="hidden text-right md:block">
            <p className="text-sm font-bold uppercase tracking-[-0.04em]">
              React / JavaScript / UI Motion
            </p>

            <p className="mt-1 text-xs text-second/75">
              Available for selected projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
