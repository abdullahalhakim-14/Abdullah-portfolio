import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const BlinkVisual = () => (
  <div className="relative h-full overflow-hidden bg-[#eadbff] p-[5%]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(171,41,255,0.3),transparent_30%),linear-gradient(145deg,#f8f1ff_0%,#e3c9ff_48%,#b630ff_100%)]" />
    <span className="pointer-events-none absolute -bottom-[0.18em] -right-[0.06em] font-display text-[clamp(5rem,12vw,12rem)] font-black italic leading-none tracking-[-0.12em] text-[#30106e]/[0.07]">
      B
    </span>

    <div className="absolute inset-x-[5%] top-[15%] z-10 overflow-hidden rounded-[0.8rem_2rem_0.8rem_2rem] border border-white/70 bg-white shadow-[0_22px_55px_rgba(66,15,117,0.28)]">
      <div className="flex h-[clamp(1rem,2vw,1.7rem)] items-center justify-between border-b border-[#6f20aa]/10 bg-white px-[3%]"></div>

      <img
        src="/assets/projects/blink-dashboard.png"
        alt="Blink business management analytics dashboard"
        className="block h-auto w-full"
      />
    </div>
  </div>
);

const DigitalArtVisual = () => (
  <div className="relative h-full overflow-hidden bg-[#07122f] p-[5%]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_8%,rgba(42,83,151,0.7),transparent_34%),linear-gradient(145deg,#050d25_0%,#0a183d_58%,#152d5a_100%)]" />
    <span className="pointer-events-none absolute -bottom-[0.2em] -right-[0.05em] font-display text-[clamp(5rem,12vw,12rem)] font-black italic leading-none tracking-[-0.12em] text-white/[0.045]">
      02
    </span>

    <div className="relative z-10 flex items-center justify-between font-ui text-[clamp(0.32rem,0.55vw,0.52rem)] font-bold uppercase tracking-[0.18em] text-white/55"></div>

    <div className="absolute inset-x-[5%] top-[15%] z-10 overflow-hidden rounded-[0.8rem_2rem_0.8rem_2rem] border border-white/20 bg-[#f6f4ed] shadow-[0_22px_55px_rgba(1,6,22,0.45)]">
      <div className="flex h-[clamp(1rem,2vw,1.7rem)] items-center justify-between border-b border-[#07122f]/10 bg-[#f6f4ed] px-[3%]"></div>

      <img
        src="/assets/projects/digital-art-exhibition.png"
        alt="Arabic Digital Art Exhibition website home page"
        className="block h-auto w-full"
      />
    </div>
  </div>
);

const StoreVisual = () => (
  <div className="grid h-full grid-cols-[0.72fr_1.28fr] bg-[#d8d0bd]">
    <div className="relative overflow-hidden bg-[#232d19] p-[7%] text-first">
      <p className="font-ui text-[clamp(0.35rem,0.7vw,0.65rem)] font-bold uppercase tracking-[0.2em] text-first/45">
        New drop / 25
      </p>
      <p className="mt-[12%] font-display text-[clamp(1rem,2.6vw,2.8rem)] font-black italic leading-[0.84] tracking-[-0.07em]">
        Move
        <span className="block text-accent">different.</span>
      </p>
      <div className="absolute bottom-[9%] left-[10%] h-[7%] w-[42%] rounded-full bg-first/90" />
      <span className="absolute -bottom-[24%] -right-[26%] aspect-square w-[75%] rounded-full border-[clamp(1rem,3vw,3rem)] border-first/5" />
    </div>

    <div className="relative overflow-hidden p-[6%]">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-[22%] rounded-full bg-second/80" />
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full border border-second/40" />
          <span className="h-2 w-2 rounded-full bg-accent" />
        </div>
      </div>
      <div className="mt-[8%] grid h-[73%] grid-cols-2 gap-[5%]">
        {["01", "02"].map((number, index) => (
          <div
            key={number}
            className={`relative overflow-hidden rounded-[18%_5%_18%_5%] ${
              index === 0 ? "bg-[#eee8da]" : "bg-[#b8653b]"
            }`}
          >
            <span className="absolute left-[9%] top-[7%] font-ui text-[clamp(0.3rem,0.55vw,0.55rem)] font-bold text-second/50">
              {number}
            </span>
            <div className="absolute left-1/2 top-[46%] h-[28%] w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-[50%_45%_35%_45%] bg-maincolor shadow-[0_12px_22px_rgba(30,40,20,0.24)]">
              <span className="absolute -bottom-[28%] left-[6%] h-[36%] w-[88%] rounded-full bg-second/20" />
            </div>
            <span className="absolute bottom-[8%] left-[9%] h-1 w-[50%] rounded-full bg-second/25" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DashboardVisual = () => (
  <div className="grid h-full grid-cols-[0.32fr_1fr] bg-[#eee8da] p-[4%]">
    <div className="rounded-[18%_5%_5%_18%] bg-maincolor p-[14%]">
      <span className="block h-2 w-[55%] rounded-full bg-first/85" />
      <div className="mt-[38%] space-y-[15%]">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-[10%]">
            <span
              className={`h-2 w-2 rounded-full ${item === 1 ? "bg-accent" : "bg-first/25"}`}
            />
            <span
              className={`h-1 rounded-full ${item === 1 ? "w-[56%] bg-first/70" : "w-[42%] bg-first/20"}`}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="p-[6%]">
      <div className="flex items-center justify-between">
        <div>
          <span className="block h-1.5 w-12 rounded-full bg-second/30" />
          <span className="mt-2 block h-3 w-20 rounded-full bg-second/80" />
        </div>
        <span className="h-7 w-7 rounded-full bg-accent" />
      </div>
      <div className="mt-[7%] grid grid-cols-3 gap-[3%]">
        {["24", "08", "16"].map((value, index) => (
          <div
            key={value}
            className="rounded-xl border border-second/10 bg-first p-[9%]"
          >
            <span className="font-display text-[clamp(0.7rem,1.5vw,1.5rem)] font-black italic text-second">
              {value}
            </span>
            <span
              className={`mt-[20%] block h-1 rounded-full ${index === 1 ? "w-[75%] bg-accent" : "w-[55%] bg-maincolor/35"}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-[5%] h-[43%] overflow-hidden rounded-xl border border-second/10 bg-first p-[4%]">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-[5%] border-b border-second/8 py-[3%]"
          >
            <span className="h-3 w-3 rounded-full bg-maincolor/20" />
            <span className="h-1 w-[65%] rounded-full bg-second/20" />
            <span className="h-3 w-8 rounded-full bg-accent/30" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TravelVisual = () => (
  <div className="relative h-full overflow-hidden bg-[#8c9b7a]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_35%,#e6d8bd_0,transparent_32%),linear-gradient(145deg,#526447_0%,#92a384_55%,#d6c3a1_100%)]" />
    <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(172deg,transparent_0_16%,#34432d_17%_42%,#202d1e_43%)]" />
    <div className="absolute inset-x-[6%] top-[7%] flex items-center justify-between text-first">
      <span className="font-display text-[clamp(0.6rem,1.3vw,1.2rem)] font-black italic">
        Wander.
      </span>
      <div className="flex gap-3 font-ui text-[clamp(0.28rem,0.5vw,0.48rem)] font-bold uppercase tracking-[0.15em] text-first/70">
        <span>Places</span>
        <span>Stories</span>
        <span>Explore</span>
      </div>
    </div>
    <div className="absolute left-[8%] top-[28%] text-first">
      <p className="font-ui text-[clamp(0.3rem,0.6vw,0.55rem)] font-bold uppercase tracking-[0.22em] text-first/60">
        Find your next horizon
      </p>
      <p className="mt-[4%] font-display text-[clamp(1.2rem,3.3vw,3.5rem)] font-black italic leading-[0.78] tracking-[-0.08em]">
        Beyond the
        <br />
        <span className="text-[#e9c8a8]">ordinary.</span>
      </p>
    </div>
    <div className="absolute bottom-[8%] right-[7%] flex gap-2">
      {["01", "02", "03"].map((item) => (
        <span
          key={item}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-first/30 font-ui text-[0.4rem] font-bold text-first"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const screenshotBackgrounds = {
  dashboard: "linear-gradient(145deg, #edf6f4, #bad8d6 55%, #719e96)",
  landing: "linear-gradient(145deg, #f5f1e8, #ded4ec 55%, #b3a0c5)",
  travel: "linear-gradient(145deg, #e0ede0, #aacac0 55%, #458b85)",
};

const ProjectScreenshot = ({ type, image, imageAlt }) => (
  <div
    className="relative flex h-full items-center overflow-hidden p-[5%]"
    style={{ background: screenshotBackgrounds[type] }}
  >
    <div className="w-full overflow-hidden rounded-[0.8rem_2rem_0.8rem_2rem] border border-white/60 bg-white shadow-[0_22px_55px_rgba(30,40,30,0.22)]">
      <div aria-hidden="true" className="flex h-[clamp(1rem,2vw,1.7rem)] items-center gap-1 border-b border-second/10 bg-first px-[3%]">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="h-1 w-1 rounded-full bg-second/25" />
        ))}
      </div>
      <img src={image} alt={imageAlt} loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
  </div>
);

const ProjectVisual = ({ type, image, imageAlt, reduceMotion, className = "" }) => {
  const Visual =
    type === "blink"
      ? BlinkVisual
      : type === "digital-art"
        ? DigitalArtVisual
        : type === "dashboard"
          ? DashboardVisual
          : type === "travel"
            ? TravelVisual
            : StoreVisual;

  return (
    <motion.div
      className={`relative overflow-hidden bg-[#e8ddc9] ${className}`}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.025, rotate: type === "dashboard" ? -0.5 : 0.5 }
      }
      transition={{ duration: 0.45, ease }}
    >
      {image ? <ProjectScreenshot type={type} image={image} imageAlt={imageAlt} /> : <Visual />}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 border-l border-first/75"
          initial={{ x: "-5%", opacity: 0 }}
          whileInView={{ x: "105%", opacity: [0, 1, 0] }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 1.05, delay: 0.45, ease }}
        />
      )}
    </motion.div>
  );
};

export default ProjectVisual;
