/**
 * RenateHero.jsx
 * ─────────────────────────────────────────────────────────────
 * Fully responsive hero screen with Framer Motion animations.
 * Breakpoints: 375px (mobile) · 768px (tablet) · 1440px+ (desktop)
 *
 * Dependencies (already in project):
 * - framer-motion        →  npm install framer-motion
 * - @fortawesome/react-fontawesome + free-solid-svg-icons
 * - Tailwind CSS
 */

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faArrowRight,
    faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

// Assets
import RenateLogo from "../assets/renate_ai.png";
import hero       from "../assets/hero_background.png";
import google     from "../assets/google.png";
import github     from "../assets/github.png";
import linkedin   from "../assets/linkedin.png";
import notion     from "../assets/notion.png";
import oracle     from "../assets/oracle.png";
import salesforce from "../assets/salesforce.png";

/* ─── Custom Styles for Left-to-Right Marquee ────────────────── */
const marqueeStyle = `
  @keyframes marquee-ltr {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee-ltr {
    animation: marquee-ltr 35s linear infinite;
  }
`;

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
    hidden:  { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const fadeIn = {
    hidden:  { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay },
    }),
};

const staggerContainer = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const navItemVariant = {
    hidden:  { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─── Logo Data mapped to imports ────────────────────────────── */
const LOGOS = [
  { name: "Google",     src: google },
  { name: "GitHub",     src: github },
  { name: "LinkedIn",   src: linkedin },
  { name: "Notion",     src: notion },
  { name: "Oracle",     src: oracle },
  { name: "Salesforce", src: salesforce },
];

function LogoItem({ name, color, src }) {
  return (
    <div className="flex items-center justify-center px-10 shrink-0 cursor-default">
      {src ? (
        <img 
            src={src} 
            alt={name} 
            className="h-9 sm:h-11 w-auto object-contain" 
        />
      ) : (
        <span className="flex items-center gap-2 text-[16px] font-bold tracking-tight text-gray-700 whitespace-nowrap">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color || "#ccc" }} />
          {name}
        </span>
      )}
    </div>
  );
}

function TrustedBar() {
  /* Duplicate the array so the seamless loop works continuously */
  const items = [...LOGOS, ...LOGOS];
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeIn}
      custom={0}
      className="w-full bg-[#EFE9FF]/60 border-t border-purple-100 z-10 relative h-[90px] flex justify-center"
    >
      {/* Container matching standard page x-axis padding */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 xl:px-20 flex items-stretch">
        
        {/* Static left label */}
        <div className="relative z-20 flex items-center pr-6 sm:pr-8 border-r border-purple-200 shrink-0">
          <p className="text-[#8B5CF6] font-semibold text-[13px] sm:text-sm leading-tight whitespace-nowrap">
            Trusted by<br />100+ organizations
          </p>
        </div>

        {/* Marquee track wrapper (overflow hidden keeps logos from bleeding under the text) */}
        <div className="relative flex-1 overflow-hidden flex items-center ml-2 sm:ml-4">
          {/* Fade edges inside the scrolling track */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-[#EFE9FF] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-[#EFE9FF] to-transparent" />

          {/* Scrolling container (Left to Right) */}
          <div
            className="flex items-center w-max animate-marquee-ltr"
            onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
          >
            {items.map((logo, i) => (
              <LogoItem key={i} {...logo} />
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}


/* ─── Sub-components ─────────────────────────────────────────── */

/** Single animated nav link */
function NavLink({ label }) {
    return (
        <motion.div
            variants={navItemVariant}
            className="flex items-center gap-1 cursor-pointer text-gray-600 font-light text-sm hover:text-purple-600 transition-colors"
            whileHover={{ y: -1 }}
        >
            {label}
            <FontAwesomeIcon icon={faAngleDown} className="text-xs text-gray-400" />
        </motion.div>
    );
}

/** Navbar */
function Navbar() {
    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full h-16 sm:h-20 px-4 sm:px-8 xl:px-20 flex items-center justify-between bg-transparent z-20 relative"
        >
            {/* Logo */}
            <motion.div variants={navItemVariant} className="flex items-center shrink-0 cursor-pointer">
                <img
                    src={RenateLogo}
                    alt="Renate AI"
                    className="h-7 sm:h-8 w-auto object-contain"
                />
            </motion.div>

            {/* Center links — desktop only */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                {["Products", "Customers", "Pricing", "About"].map((label) => (
                    <NavLink key={label} label={label} />
                ))}
            </div>

            {/* Right actions */}
            <motion.div variants={navItemVariant} className="flex items-center gap-2 sm:gap-3">
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#8B5CF6] text-white text-[11px] sm:text-xs font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap shadow-sm"
                >
                    Get Free trial
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="hidden sm:flex border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                    Login / Signup
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-gray-300 text-gray-700 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-full flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors"
                >
                    <FontAwesomeIcon icon={faEarthAsia} className="text-xs text-gray-500" />
                    <span className="hidden sm:inline text-xs">EN</span>
                    <span className="flex flex-col leading-none ml-0.5">
                        <FontAwesomeIcon icon={faAngleUp}   className="text-[8px] text-slate-400" />
                        <FontAwesomeIcon icon={faAngleDown} className="text-[8px] text-slate-400 -mt-0.5" />
                    </span>
                </motion.button>
            </motion.div>
        </motion.nav>
    );
}

/** Hero headline + sub-text + CTA buttons */
function HeroContent() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-1 lg:col-span-7 flex flex-col justify-center
                       text-center lg:text-left items-center lg:items-start
                       mt-4 lg:mt-0 relative z-10"
        >
            {/* Headline */}
            <motion.h1
                custom={0}
                variants={fadeUp}
                className="text-[36px] sm:text-5xl md:text-6xl xl:text-[70px]
                           leading-[1.1] text-gray-900 font-[510] tracking-tight"
            >
                Autopilot your hiring
                <span className="text-[24px] sm:text-4xl md:text-5xl xl:text-[55px]
                                 font-light block mt-1 sm:mt-2">
                    speed, accuracy and scale.
                </span>
            </motion.h1>

            {/* Sub-text */}
            <motion.p
                custom={0.1}
                variants={fadeUp}
                className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base lg:text-[18px]
                           font-normal leading-relaxed max-w-lg w-full"
            >
                Renate is an AI hiring infrastructure to grow your value, culture &amp;
                efficiency. Flexible hiring solutions for every business model with AI.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
                className="mt-8 sm:mt-10 flex flex-wrap items-center
                           justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
                <motion.button
                    className="bg-[#9156EC] text-white text-[13px] font-medium
                               px-6 py-3 rounded-full flex items-center gap-3
                               shadow-md transition-colors hover:bg-[#AF7AFF]"
                >
                    Get Started
                    <motion.span
                        className="w-8 h-8 rounded-full 
                                   flex items-center justify-center bg-[#AF7AFF]"
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" style={{color:"white"}} />
                    </motion.span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#f5f0ff" }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-purple-400 text-purple-600 bg-white
                               font-medium px-6 py-3 rounded-full transition-colors
                               w-full sm:w-auto shadow-sm"
                >
                    Start Free Trial
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

/** Right column: floating Ask AI pill */
function HeroGraphic() {
    return (
        <div className="order-2 lg:col-span-5 relative w-full h-[80px] sm:h-[120px] lg:h-[480px]">
            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.06 }}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4
                           lg:bottom-10 lg:right-10 bg-white border border-gray-200
                           px-4 py-2.5 rounded-full shadow-lg flex items-center
                           gap-2 cursor-pointer z-10"
            >
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                <span className="text-xs font-bold text-gray-800">Ask AI</span>
            </motion.div>
        </div>
    );
}


/* ─── Page Root ──────────────────────────────────────────────── */
export default function RenateHero() {
    return (
        <div className="min-h-screen w-full bg-[#FAF9FF] font-sans relative overflow-x-hidden flex flex-col justify-between">
            {/* Inject Left-to-Right Marquee Styles */}
            <style>{marqueeStyle}</style>

            {/* ── Navbar ── */}
            <Navbar />

            {/* ── Purple glow under navbar ── */}
            <div className="absolute top-16 sm:top-20 left-0 w-full h-48 pointer-events-none z-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(168,85,247,.12), rgba(168,85,247,.04), transparent)",
                }}
            />

            {/* ── Worm / ribbon hero image ── */}
            <motion.img
                src={hero}
                alt=""
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.74, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute pointer-events-none select-none z-[1]
                           /* mobile: centred, fills width */
                           top-[90px] left-1/2 -translate-x-1/2 w-[170%] max-w-none
                           /* tablet */
                           sm:top-[80px] sm:w-[130%]
                           /* desktop: Figma exact — left 35%, width 75% */
                           lg:translate-x-0 lg:top-[85px] lg:left-[35%] lg:w-[75%] lg:max-w-full
                           h-auto"
            />

            {/* ── Hero section ── */}
            <main className="grow max-w-[1440px] mx-auto w-full
                             px-4 sm:px-8 xl:px-20
                             grid grid-cols-1 lg:grid-cols-12
                             gap-8 lg:gap-8 items-center
                             pt-10 lg:pt-16 pb-16 relative z-10">
                <HeroContent />
                <HeroGraphic />
            </main>

            {/* ── Trusted by Marquee ── */}
            <TrustedBar />
        </div>
    );
}