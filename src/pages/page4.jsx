/**
 * RenateScaleSection.jsx
 * ─────────────────────────────────────────────────────────────
 * White "Scale" section with Framer Motion micro-interactions.
 * Breakpoints: 375px (mobile) · 768px (tablet) · 1440px+ (desktop)
 *
 * Dependencies:
 *   - framer-motion          →  npm install framer-motion
 *   - @fortawesome/react-fontawesome + free-solid-svg-icons
 *   - Tailwind CSS
 */

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import frame from "../assets/frame.png";

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
    hidden:  { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const imageVariant = {
    hidden:  { opacity: 0, y: 36, scale: 0.98 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
    },
};

/* ─── Sub-components ─────────────────────────────────────────── */

/** Scale badge */
function ScaleBadge() {
    return (
        <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mb-6"
        >
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faExpand} className="text-blue-600 text-xs" />
            </div>
            <span className="text-[13px] font-medium text-gray-700 tracking-wide">Scale</span>
        </motion.div>
    );
}

/** Headline block */
function Headline() {
    return (
        <motion.h2
            variants={fadeUp}
            custom={0.05}
            className="text-[32px] sm:text-[42px] lg:text-[54px] xl:text-[58px]
                       font-semibold text-black leading-[1.1] tracking-tight mb-5"
        >
            Grow your Team that{" "}
            <br className="hidden sm:block" />
            <span className="font-light text-black">Builds, Sells &amp; Scales</span>
        </motion.h2>
    );
}

/** Sub-paragraph */
function SubText() {
    return (
        <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-[14px] sm:text-[15px] text-gray-400 font-normal
                       leading-relaxed max-w-[580px] mb-10"
        >
            Other platforms give you tools. Renate gives you intelligence.
            Every part of your business learns, improves, and works harder
            over time—so you can succeed faster with less effort.
        </motion.p>
    );
}

/** CTA button row */
function CTAButtons() {
    return (
        <motion.div
            variants={fadeUp}
            custom={0.15}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
        >
            {/* Primary */}
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(139,92,246,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#8B5CF6] text-white text-[13px] font-medium px-6 py-3
                           rounded-full flex items-center gap-3 hover:bg-[#7C3AED]
                           transition-colors shadow-sm"
            >
                Get Started
                <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="w-5 h-5 rounded-full border border-white/40
                               flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </motion.span>
            </motion.button>

            {/* Secondary */}
            <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#f5f0ff", borderColor: "#a78bfa" }}
                whileTap={{ scale: 0.97 }}
                className="border border-purple-200 text-gray-600 text-[13px] font-medium
                           px-6 py-3 rounded-full transition-colors"
            >
                Start Free Trial
            </motion.button>
        </motion.div>
    );
}

/** Frame image with reveal animation */
function FrameImage() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariant}
            className="w-full mt-2"
        >
            <motion.img
                src={frame}
                alt="Renate Scaling Metrics"
                whileHover={{ scale: 1.01, boxShadow: "0 24px 64px rgba(139,92,246,0.12)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-4xl h-auto object-contain rounded-2xl"
            />
        </motion.div>
    );
}

/* ─── Page Root ──────────────────────────────────────────────── */
export default function RenateScaleSection() {
    return (
        <section
            className="w-full bg-white py-16 sm:py-20
                       px-4 sm:px-10 lg:px-20 xl:px-28
                       font-sans overflow-hidden"
        >
            <div className="max-w-5xl mx-auto w-full">

                {/* Text block — stagger on scroll */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={stagger}
                    className="flex flex-col items-start text-left w-full"
                >
                    <ScaleBadge />
                    <Headline />
                    <SubText />
                    <CTAButtons />
                </motion.div>

                {/* Frame image — separate whileInView trigger */}
                <FrameImage />
            </div>
        </section>
    );
}