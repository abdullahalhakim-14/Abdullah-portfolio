import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const navItems = [
  { label: "About", id: "about", number: "01" },
  { label: "Education", id: "education", number: "02" },
  { label: "Experience", id: "experience", number: "03" },
  { label: "Projects", id: "projects", number: "04" },
  { label: "Contact", id: "contact", number: "05" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -14,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease,
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: {
      duration: 0.28,
      ease,
    },
  },
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
};

const overlayVariants = {
  hidden: {
    y: "100%",
  },
  cover: {
    y: "0%",
    transition: {
      duration: 0.82,
      ease,
    },
  },
  reveal: {
    y: "-100%",
    transition: {
      duration: 0.9,
      delay: 0.28,
      ease,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },
  cover: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.18,
      ease,
    },
  },
  reveal: {
    opacity: 0,
    y: -50,
    scale: 1.06,
    transition: {
      duration: 0.4,
      ease,
    },
  },
};

const numberVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    rotate: 8,
  },
  cover: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      delay: 0.12,
      ease,
    },
  },
  reveal: {
    opacity: 0,
    x: -70,
    rotate: -5,
    transition: {
      duration: 0.45,
      ease,
    },
  },
};

const WarpTransition = ({ transition, onPhaseComplete }) => {
  const { label, number, phase } = transition;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-maincolor text-first"
      variants={overlayVariants}
      initial="hidden"
      animate={phase}
      onAnimationComplete={onPhaseComplete}
      aria-hidden="true"
    >
      {/* Dotted atmosphere */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#F3EEE2_1px,transparent_0)] [background-size:22px_22px]" />

      {/* Copper entry layer */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[28%] origin-bottom bg-accent"
        initial={{ scaleY: 0 }}
        animate={phase === "cover" ? { scaleY: [0, 1, 0.06] } : { scaleY: 0 }}
        transition={{
          duration: 0.82,
          times: [0, 0.72, 1],
          ease,
        }}
      />

      {/* Outer orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[68vw] max-h-190 w-[68vw] max-w-190 rounded-full border border-first/10"
        initial={{
          x: "-50%",
          y: "-50%",
          opacity: 0,
          scale: 0.55,
          rotate: -35,
        }}
        animate={
          phase === "cover"
            ? {
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
                rotate: 0,
              }
            : {
                x: "-50%",
                y: "-50%",
                opacity: 0,
                scale: 1.3,
                rotate: 35,
              }
        }
        transition={{
          duration: phase === "cover" ? 1 : 0.7,
          ease,
        }}
      >
        <motion.span
          className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
          animate={phase === "cover" ? { scale: [0, 1.5, 1] } : { scale: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease,
          }}
        />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[48vw] max-h-135 w-[48vw] max-w-135 rounded-full border border-first/10"
        initial={{
          x: "-50%",
          y: "-50%",
          opacity: 0,
          scale: 0.6,
          rotate: 30,
        }}
        animate={
          phase === "cover"
            ? {
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
                rotate: -12,
              }
            : {
                x: "-50%",
                y: "-50%",
                opacity: 0,
                scale: 1.4,
                rotate: -50,
              }
        }
        transition={{
          duration: 0.95,
          delay: phase === "cover" ? 0.08 : 0,
          ease,
        }}
      />

      {/* Scanning beam */}
      <motion.div
        className="absolute left-[8%] right-[8%] top-1/2 h-px bg-first/35"
        initial={{
          opacity: 0,
          y: "-38vh",
          scaleX: 0.2,
        }}
        animate={
          phase === "cover"
            ? {
                opacity: [0, 1, 0],
                y: ["-38vh", "38vh"],
                scaleX: [0.2, 1, 0.45],
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1.05,
          ease,
        }}
      >
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent" />
      </motion.div>

      {/* Horizontal energy line */}
      <motion.div
        className="absolute left-0 top-1/2 h-0.5 w-full origin-left bg-accent"
        initial={{ scaleX: 0 }}
        animate={phase === "cover" ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.14,
          ease,
        }}
      />

      {/* Transition content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-18 lg:py-14">
        <motion.div
          className="flex items-center justify-between font-ui text-[0.6rem] font-bold uppercase tracking-[0.24em] text-first/45 sm:text-xs"
          initial={{ opacity: 0, y: -18 }}
          animate={
            phase === "cover" ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }
          }
          transition={{
            duration: 0.55,
            delay: phase === "cover" ? 0.24 : 0,
            ease,
          }}
        >
          <span>Abdullah / Portfolio</span>
          <span>Section transfer</span>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <motion.span
            className="pointer-events-none absolute font-display text-[clamp(12rem,38vw,40rem)] font-black italic leading-none tracking-[-0.12em] text-first/[0.045]"
            variants={numberVariants}
            initial="hidden"
            animate={phase}
          >
            {number}
          </motion.span>

          <div className="relative z-10 text-center">
            <motion.div
              className="mb-5 flex items-center justify-center gap-3 font-ui text-[0.65rem] font-bold uppercase tracking-[0.27em] text-accent sm:text-xs"
              initial={{ opacity: 0, y: 18 }}
              animate={
                phase === "cover"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -14 }
              }
              transition={{
                duration: 0.55,
                delay: phase === "cover" ? 0.28 : 0,
                ease,
              }}
            >
              <span className="h-px w-10 bg-accent" />
              <span>Loading section {number}</span>
              <span className="h-px w-10 bg-accent" />
            </motion.div>

            <motion.h2
              className="font-display text-[clamp(4rem,13vw,12rem)] font-black italic leading-[0.78] tracking-[-0.085em]"
              variants={titleVariants}
              initial="hidden"
              animate={phase}
            >
              {label}
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="flex items-end justify-between font-ui text-[0.58rem] font-bold uppercase tracking-[0.22em] text-first/45 sm:text-[0.7rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={
            phase === "cover" ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
          }
          transition={{
            duration: 0.5,
            delay: phase === "cover" ? 0.3 : 0,
            ease,
          }}
        >
          <div>
            <p>Coordinates locked</p>
            <p className="mt-1 text-first/25">DAM / 33.5138° N</p>
          </div>

          <div className="text-right">
            <p>Interface system</p>
            <p className="mt-1 text-accent">Transfer active</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(null);

  const menuButtonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        if (isOpen) menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (!target) return;

    /*
     * الانتقال الآن يتوقف عند بداية القسم تماماً.
     * لا يتم طرح ارتفاع الناف بار من موضع القسم.
     */
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "auto",
    });

    window.history.pushState(null, "", `#${id}`);
    root.style.scrollBehavior = previousScrollBehavior;
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };

  const handleNavigation = (event, item) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    if (transition) return;

    setIsOpen(false);

    if (reduceMotion) {
      scrollToSection(item.id);
      return;
    }

    setTransition({
      ...item,
      phase: "cover",
    });
  };

  const handleTransitionComplete = (definition) => {
    if (!transition) return;

    if (definition === "cover" && transition.phase === "cover") {
      scrollToSection(transition.id);

      setTransition((current) => ({
        ...current,
        phase: "reveal",
      }));

      return;
    }

    if (definition === "reveal" && transition.phase === "reveal") {
      setTransition(null);
      document.getElementById(transition.id)?.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <header className="fixed left-1/2 top-3 z-50 w-[min(88vw,440px)] -translate-x-1/2 font-ui">
        <div className="relative">
          {/* Main navbar */}
          <motion.div
            className="flex h-16 items-center justify-between rounded-[30px] border-2 border-accent bg-maincolor px-6 text-first shadow-[0_18px_50px_rgba(48,60,24,0.18)]"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
          >
            <a
              href="#hero"
              onClick={(event) =>
                handleNavigation(event, {
                  label: "Home",
                  id: "hero",
                  number: "00",
                })
              }
              className="rounded-sm font-display text-[25px] font-black italic leading-none tracking-[-0.03em] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-maincolor"
            >
              Abdullah
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full outline-none hover:bg-first/10 focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
            >
              <motion.span
                className="h-[1.5px] w-5 rounded-full bg-first"
                animate={isOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.3, ease }}
              />

              <motion.span
                className="h-[1.5px] w-5 rounded-full bg-first"
                animate={
                  isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.22, ease }}
              />

              <motion.span
                className="h-[1.5px] w-5 rounded-full bg-first"
                animate={isOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.3, ease }}
              />
            </button>
          </motion.div>

          {/* Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                id="primary-navigation"
                className="absolute left-0 top-[4.625rem] w-full overflow-hidden rounded-[28px] border border-first/10 bg-maincolor/95 p-3 text-first shadow-[0_20px_60px_rgba(48,60,24,0.2)]"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <motion.li key={item.id} variants={menuItemVariants}>
                      <motion.a
                        href={`#${item.id}`}
                        onClick={(event) => handleNavigation(event, item)}
                        className="group flex h-11 items-center justify-between rounded-full px-4 text-sm font-semibold tracking-[-0.03em] outline-none hover:bg-first hover:text-maincolor focus-visible:bg-first focus-visible:text-maincolor focus-visible:ring-2 focus-visible:ring-accent"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.985 }}
                        transition={{
                          duration: 0.28,
                          ease,
                        }}
                      >
                        <span>{item.label}</span>

                        <span className="flex items-center gap-3">
                          <span className="text-[11px] opacity-45 group-hover:opacity-100 group-focus-visible:opacity-100">
                            {item.number}
                          </span>

                          <span className="h-2 w-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                        </span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="sr-only" role="status" aria-live="polite">
        {transition ? `Navigating to ${transition.label} section` : ""}
      </div>

      <AnimatePresence>
        {transition && (
          <WarpTransition
            key={`${transition.id}-${transition.number}`}
            transition={transition}
            onPhaseComplete={handleTransitionComplete}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
