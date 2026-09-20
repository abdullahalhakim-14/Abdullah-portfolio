import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const contactLinks = [
  {
    number: "01",
    label: "Email",
    value: "abdullah.alhakim04@gmail.com",
    href: "mailto:abdullah.alhakim04@gmail.com",
  },
  {
    number: "02",
    label: "GitHub",
    value: "abdullahalhakim-14",
    href: "https://github.com/abdullahalhakim-14",
    external: true,
  },
  {
    number: "03",
    label: "Phone",
    value: "+963 992 208 559",
    href: "tel:+963992208559",
  },
];

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
);

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const duration = reduceMotion ? 0 : 0.85;

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
  };

  const titleLine = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 72 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.95, ease },
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio project inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nReply email: ${form.email}\n\nProject details:\n${form.message}`,
    );

    window.location.href = `mailto:abdullah.alhakim04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      id="contact"
      className="relative min-h-dvh scroll-mt-0 overflow-hidden bg-first px-5 pb-7 pt-[5.75rem] text-second sm:px-8 sm:pb-10 sm:pt-28 lg:px-12 lg:pb-8 lg:pt-26 xl:px-18"
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:22px_22px]" />

      <motion.span
        className="pointer-events-none absolute -bottom-[0.18em] -left-[0.08em] hidden font-display text-[clamp(18rem,37vw,42rem)] font-black italic leading-none tracking-[-0.14em] text-second/[0.025] lg:block"
        initial={{ opacity: 0, x: reduceMotion ? 0 : -120, rotate: reduceMotion ? 0 : -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 1.2, ease }}
        aria-hidden="true"
      >
        05
      </motion.span>

      <div className="relative z-10 mx-auto flex min-w-0 min-h-[calc(100dvh-7.75rem)] w-full max-w-[1450px] flex-col sm:min-h-[calc(100dvh-9.5rem)] lg:min-h-[calc(100dvh-8.5rem)]">
        <motion.header
          className="flex shrink-0 items-center justify-between gap-5 pb-[clamp(1.2rem,3vh,2.4rem)]"
          variants={reveal}
        >
          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <span className="font-display text-lg font-black italic text-maincolor sm:text-xl">05</span>
            <motion.span
              className="h-0.5 w-8 shrink-0 origin-left bg-accent sm:w-14"
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.18, ease },
                },
              }}
            />
            <p className="truncate font-ui text-[0.5rem] font-bold uppercase tracking-[0.14em] text-second/75 sm:text-xs sm:tracking-[0.24em]">
              Contact / Start a conversation
            </p>
          </div>

          <div className="hidden items-center gap-2 font-ui text-[0.58rem] font-bold uppercase tracking-[0.18em] text-maincolor sm:flex">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for selected projects
          </div>
        </motion.header>

        <div className="grid min-w-0 flex-1 items-center gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-14 lg:py-4 xl:gap-20">
          <div className="relative z-10 min-w-0 py-2">
            <h2 className="font-display font-black italic leading-[0.78] tracking-[-0.085em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block text-[clamp(3.25rem,15vw,4.25rem)] sm:text-[clamp(3.8rem,8vw,9.5rem)]"
                  variants={titleLine}
                >
                  Let&apos;s build
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block text-[clamp(3.25rem,15vw,4.25rem)] text-accent sm:text-[clamp(3.8rem,8vw,9.5rem)]"
                  variants={titleLine}
                >
                  something
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-[0.1em]">
                <motion.span
                  className="block text-[clamp(3.25rem,15vw,4.25rem)] text-maincolor sm:text-[clamp(3.8rem,8vw,9.5rem)]"
                  variants={titleLine}
                >
                  people feel.
                </motion.span>
              </span>
            </h2>

            <motion.div
              className="mt-5 max-w-2xl border-l-2 border-accent pl-5 sm:mt-7 sm:pl-6 lg:mt-[clamp(1rem,2.5vh,2rem)]"
              variants={reveal}
            >
              <p className="font-ui text-sm font-medium leading-[1.7] text-second/65 sm:text-base lg:text-[clamp(0.9rem,1vw,1.08rem)]">
                Tell me what you&apos;re building, where it feels stuck, and what you want people to experience. I&apos;ll reply with a clear next step.
              </p>
            </motion.div>

            <motion.a
              href="mailto:abdullah.alhakim04@gmail.com"
              className="group mt-7 flex w-full min-w-0 items-center gap-3 border-b border-second/25 pb-2 outline-none focus-visible:ring-2 focus-visible:ring-accent sm:mt-9 sm:w-fit sm:max-w-full sm:gap-4"
              variants={reveal}
              whileHover={reduceMotion ? undefined : { x: 6 }}
              transition={{ duration: 0.35, ease }}
            >
              <span className="min-w-0 break-words font-display text-[clamp(1.1rem,1.7vw,1.55rem)] font-black italic tracking-[-0.045em] [overflow-wrap:anywhere]">
                abdullah.alhakim04@<wbr />gmail.com
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maincolor text-first transition-colors group-hover:bg-accent">
                <Arrow />
              </span>
            </motion.a>
          </div>

          <motion.div
            className="relative mb-3 min-w-0 lg:mb-0"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 90, rotate: reduceMotion ? 0 : 2.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.12, ease }}
          >
            <motion.div
              className="absolute inset-0 rounded-[1.35rem_3rem_1.35rem_3rem] bg-accent sm:rounded-[1.5rem_4rem_1.5rem_4rem] lg:rounded-[2rem_5rem_2rem_5rem]"
              initial={{ x: reduceMotion ? 14 : 70, y: 14, rotate: reduceMotion ? 0 : 4 }}
              whileInView={{ x: 14, y: 14, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.95, delay: reduceMotion ? 0 : 0.2, ease }}
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.35rem_3rem_1.35rem_3rem] border border-second/10 bg-[#e8ddc9] p-5 shadow-[0_28px_70px_rgba(48,48,31,0.18)] sm:rounded-[1.5rem_4rem_1.5rem_4rem] sm:p-7 lg:rounded-[2rem_5rem_2rem_5rem] lg:p-[clamp(1.5rem,2.2vw,2.5rem)]">
              <div className="pointer-events-none absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_1px_1px,#403019_1px,transparent_0)] [background-size:20px_20px]" />

              <span
                className="pointer-events-none absolute -right-5 -top-9 font-display text-[9rem] font-black italic leading-none tracking-[-0.1em] text-second/[0.045] sm:text-[12rem]"
                aria-hidden="true"
              >
                @
              </span>

              <div className="relative z-10">
                <div className="contact-form-heading flex items-start justify-between gap-5 border-b border-second/15 pb-5">
                  <div>
                    <p className="font-ui text-[0.55rem] font-bold uppercase tracking-[0.2em] text-accent">
                      New project inquiry
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.8rem,3vw,3rem)] font-black italic leading-none tracking-[-0.06em]">
                      Tell me about it.
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-second/20 font-ui text-[0.58rem] font-bold text-maincolor">
                    05
                  </span>
                </div>

                <form className="mt-2" onSubmit={handleSubmit}>
                  <motion.label className="block border-b border-second/15 py-4" variants={reveal}>
                    <span className="font-ui text-[0.52rem] font-bold uppercase tracking-[0.18em] text-second/75">
                      01 / Your name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What should I call you?"
                      className="mt-2 w-full bg-transparent font-display text-lg font-black italic tracking-[-0.035em] text-second outline-none placeholder:text-second/25 sm:text-xl"
                      autoComplete="name"
                      required
                    />
                  </motion.label>

                  <motion.label className="block border-b border-second/15 py-4" variants={reveal}>
                    <span className="font-ui text-[0.52rem] font-bold uppercase tracking-[0.18em] text-second/75">
                      02 / Your email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full bg-transparent font-display text-lg font-black italic tracking-[-0.035em] text-second outline-none placeholder:text-second/25 sm:text-xl"
                      autoComplete="email"
                      required
                    />
                  </motion.label>

                  <motion.label className="block py-4" variants={reveal}>
                    <span className="font-ui text-[0.52rem] font-bold uppercase tracking-[0.18em] text-second/75">
                      03 / Project details
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="A short brief, goal, or challenge..."
                      className="mt-2 min-h-20 w-full resize-none bg-transparent font-ui text-sm font-medium leading-[1.6] text-second outline-none placeholder:text-second/25 sm:min-h-24 sm:text-base"
                      required
                    />
                  </motion.label>

                  <motion.button
                    type="submit"
                    className="group flex w-full items-center justify-between rounded-full bg-maincolor py-2 pl-5 pr-2 font-ui text-[0.6rem] font-bold uppercase tracking-[0.17em] text-first outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-3 focus-visible:ring-offset-[#e8ddc9]"
                    whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    Open email draft
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                      <Arrow />
                    </span>
                  </motion.button>

                  <p className="mt-3 text-center font-ui text-[0.55rem] font-medium text-second/75">
                    Opens your email app with the message ready to send.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-links mt-8 shrink-0 border-t border-second/15 lg:mt-[clamp(1rem,2.4vh,2rem)]"
          variants={reveal}
        >
          <div className="grid sm:grid-cols-3">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={`group flex min-w-0 items-center justify-between gap-3 border-second/15 py-4 outline-none focus-visible:bg-second/5 sm:px-5 ${
                  index < contactLinks.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
                }`}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.32, ease }}
              >
                <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-2">
                  <span className="font-ui text-[0.5rem] font-bold tracking-[0.18em] text-accent">
                    {link.number}
                  </span>
                  <p className="font-ui text-[0.6rem] font-bold uppercase tracking-[0.17em] text-second/65">
                    {link.label}
                  </p>
                  <p className="col-span-2 mt-1 font-display text-base font-black italic leading-snug tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-lg">
                    {link.label === "Email" ? (
                      <>{link.value.split("@")[0]}@<wbr />{link.value.split("@")[1]}</>
                    ) : link.value}
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-second/20 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-first">
                  <Arrow />
                </span>
              </motion.a>
            ))}
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
