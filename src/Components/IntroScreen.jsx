import React from "react";
import { motion } from "framer-motion";

const IntroScreen = ({ onFinish }) => {
  return (
    <motion.section
      className="fixed inset-0 z-[9999] overflow-hidden bg-first text-second"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Dotted background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.p
          className="mb-4 font-ui text-xs font-bold uppercase tracking-[0.25em] text-second/75"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Portfolio / 2026
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(4.5rem,12vw,11rem)] font-black italic leading-[0.8] tracking-[-0.08em] text-second"
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.15,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Abdullah
        </motion.h1>

        <motion.p
          className="mt-5 max-w-sm font-display text-sm font-black italic leading-relaxed text-second/75"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Front-End Developer crafting expressive digital interfaces.
        </motion.p>

        {/* Progress line */}
        <div className="mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-second/10">
          <motion.div
            className="h-full origin-left rounded-full bg-[#403019]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 3.4,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            onAnimationComplete={onFinish}
          />
        </div>
        <button type="button" onClick={onFinish} className="mt-6 rounded-full border border-second/25 px-5 py-3 font-ui text-xs font-bold text-second/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maincolor">
          Skip intro ↗
        </button>
      </div>
    </motion.section>
  );
};

export default IntroScreen;
