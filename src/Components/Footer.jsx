import { useEffect, useRef } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";

const Footer = () => {
  const reduceMotion = useReducedMotion();
  const scrollAnimation = useRef(null);

  useEffect(() => {
    const stopScroll = () => scrollAnimation.current?.stop();
    const onKeyDown = (event) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Escape", "Tab"].includes(event.key)) stopScroll();
    };

    window.addEventListener("wheel", stopScroll, { passive: true });
    window.addEventListener("touchstart", stopScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      stopScroll();
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const backToTop = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hero = document.getElementById("hero");
    if (!hero) return;
    event.preventDefault();
    scrollAnimation.current?.stop();

    const destination = hero.getBoundingClientRect().top + window.scrollY;
    const finish = () => {
      window.history.replaceState(null, "", "#hero");
      hero.focus({ preventScroll: true });
      scrollAnimation.current = null;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: destination, behavior: "instant" });
      finish();
      return;
    }

    scrollAnimation.current = animate(window.scrollY, destination, {
      duration: 1.8,
      ease: [0.65, 0, 0.2, 1],
      onUpdate: (top) => window.scrollTo({ top, behavior: "instant" }),
      onComplete: finish,
    });
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-maincolor px-5 py-7 text-first sm:px-8 sm:py-9 lg:px-12 xl:px-18">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f4f2e8_1px,transparent_0)] opacity-[0.045] [background-size:22px_22px]" />

      <motion.div
        className="relative mx-auto max-w-[1450px]"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <div>
            <p className="pr-[0.12em] font-display text-[clamp(3rem,6vw,5rem)] font-black italic leading-none tracking-[-0.07em]">
              Abdullah<span className="text-accent">.</span>
            </p>
            <p className="mt-2 font-ui text-xs tracking-wide text-first/75 sm:text-sm">
              Clean code. Human touch.
            </p>
          </div>

          <motion.a
            href="#hero"
            onClick={backToTop}
            className="inline-flex min-h-11 items-center gap-3 rounded-full border border-first/30 py-1.5 pl-5 pr-1.5 font-ui text-xs font-bold text-first outline-none hover:bg-first/10 focus-visible:ring-2 focus-visible:ring-first focus-visible:ring-offset-4 focus-visible:ring-offset-maincolor"
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-first text-maincolor">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 19V5m-6 6 6-6 6 6" />
              </svg>
            </span>
          </motion.a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-first/20 pt-4 font-ui text-[0.6875rem] text-first/75 sm:mt-7 sm:text-xs">
          <p>© {new Date().getFullYear()} Abdullah Alhakim</p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Damascus, Syria
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
