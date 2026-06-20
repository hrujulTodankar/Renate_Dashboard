/**
 * RenateStatsSection.jsx
 * ─────────────────────────────────────────────────────────────
 * Dark stats + feature-cards section with Framer Motion.
 * Breakpoints: 375px (mobile) · 768px (tablet) · 1440px+ (desktop)
 *
 * Dependencies:
 *   - framer-motion          →  npm install framer-motion
 *   - @fortawesome/react-fontawesome + free-solid-svg-icons
 *   - Tailwind CSS
 */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBullseye, faUsers, faClock, faCrown,
    faChartSimple, faShieldHalved, faBrain,
    faGift, faMoneyBill1, faRotate, faBars,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const fadeIn = {
    hidden:  { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut", delay },
    }),
};

const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const statVariant = {
    hidden:  { opacity: 0, y: 20, scale: 0.96 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const cardVariant = {
    hidden:  { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

/* ─── Data ───────────────────────────────────────────────────── */
const STATS = [
    { value: "92%",       label: "AI Match Accuracy" },
    { value: "1000+",     label: "Candidates Screened Daily" },
    { value: "24 Hours",  label: "To Deliver Top 5 Candidates" },
    { value: "80% Faster",label: "Hiring Process" },
];

const PRICING_ITEMS = [
    { icon: faGift,       text: "Free" },
    { icon: faMoneyBill1, text: "One-time payment" },
    { icon: faRotate,     text: "Subscription" },
    { icon: faBars,       text: "Part payments" },
];

const SCREENING_STATS = [
    { icon: faUsers,       stat: "10K+",  label: "Profiles Screened" },
    { icon: faClock,       stat: "24h",   label: "Time to Shortlist" },
    { icon: faBullseye,    stat: "92%",   label: "Match Accuracy" },
    { icon: faCrown,       stat: "Top 5", label: "Candidates Delivered" },
    { icon: faChartSimple, stat: "1M+",   label: "Data Points Analyzed" },
    { icon: faShieldHalved,stat: "0",     label: "Manual Screening" },
];

/* ─── Card Illustrations ─────────────────────────────────────── */

/** Card 1 illustration: pricing list */
function PricingIllustration() {
    return (
        <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 flex flex-col gap-3">
            {PRICING_ITEMS.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                >
                    <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon icon={item.icon} className="text-white/70 text-[10px]" />
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] text-white/90 font-medium mb-1">{item.text}</div>
                        <div className="h-1 bg-white/20 rounded-full w-2/3" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

/** Card 2 illustration: screening stats grid */
function ScreeningIllustration() {
    return (
        <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3">
            <div className="flex items-center gap-2 mb-3 px-1">
                <span className="text-[10px] font-bold text-white">Screening Live</span>
                <motion.span
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                    className="w-1.5 h-1.5 bg-green-400 rounded-full"
                />
            </div>
            <div className="grid grid-cols-3 gap-2">
                {SCREENING_STATS.map((box, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.07, duration: 0.35 }}
                        className="bg-white/10 rounded-lg p-2 text-center flex flex-col
                                   items-center justify-center border border-white/5"
                    >
                        <FontAwesomeIcon icon={box.icon} className="text-white/70 text-[10px] mb-1.5" />
                        <div className="text-[11px] font-bold text-white leading-none mb-0.5">{box.stat}</div>
                        <div className="text-[6px] text-white/70 leading-none">{box.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/** Card 3 illustration: AI brain orbital */
function BrainIllustration() {
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Outer dashed ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/20 border-dashed"
            />
            {/* Inner static ring */}
            <div className="absolute inset-4 rounded-full border border-white/10" />

            {/* Central brain */}
            <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full
                           flex items-center justify-center border border-white/30
                           z-10 shadow-lg"
            >
                <FontAwesomeIcon icon={faBrain} className="text-white text-xl" />
            </motion.div>

            {/* Orbiting dot — top */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-4 h-4 bg-white/80 rounded-full shadow-[0_0_10px_white]" />
            </motion.div>

            {/* Orbiting dot — bottom (counter) */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
            >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                                w-3 h-3 bg-white/60 rounded-full" />
            </motion.div>
        </div>
    );
}

/* ─── Feature Card ───────────────────────────────────────────── */
const GRADIENT = "linear-gradient(135deg, #A07BFE 0%, #784DF1 100%)";

function FeatureCard({ title, desc, illustration, delay }) {
    return (
        <motion.div
            custom={delay}
            variants={cardVariant}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white rounded-[28px] sm:rounded-[32px] p-2 pb-7
                       flex flex-col shadow-2xl cursor-pointer"
        >
            {/* Illustration area */}
            <div
                className="rounded-[20px] sm:rounded-[24px] h-52 sm:h-56 mb-5
                           relative overflow-hidden flex items-center justify-center p-4 sm:p-6"
                style={{ background: GRADIENT }}
            >
                {/* Decorative glow */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10
                                rounded-full blur-2xl pointer-events-none" />
                {illustration}
            </div>

            {/* Text */}
            <div className="px-4 sm:px-5">
                <h4 className="text-[18px] sm:text-[20px] font-semibold text-gray-900
                               mb-2 tracking-tight leading-snug">
                    {title}
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
}

/* ─── Stat Item ──────────────────────────────────────────────── */
function StatItem({ value, label, delay }) {
    return (
        <motion.div
            custom={delay}
            variants={statVariant}
            className="flex flex-col items-center gap-1 text-center"
        >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {value}
            </h3>
            <p className="text-[11px] sm:text-[12px] text-gray-400 font-medium tracking-wide max-w-[120px]">
                {label}
            </p>
        </motion.div>
    );
}

/* ─── Page Root ──────────────────────────────────────────────── */
export default function RenateStatsSection() {
    return (
        <section className="w-full bg-[#241240] text-white py-16 sm:py-20 px-4 sm:px-10 xl:px-20
                            flex flex-col items-center font-sans overflow-hidden">

            {/* ── Top badge ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeIn}
                className="flex items-center gap-2 border border-white/20 rounded-full
                           px-3 py-1.5 mb-8 bg-white/5"
            >
                <FontAwesomeIcon icon={faBullseye} className="text-red-400 text-[10px]" />
                <span className="text-[11px] font-medium tracking-wide text-gray-200">Accuracy</span>
            </motion.div>

            {/* ── Main headline ── */}
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold
                           mb-5 max-w-4xl text-center leading-[1.1] tracking-tight"
            >
                Emerging institutions and fintech{" "}
                <br className="hidden md:block" />
                are recruiting with renate.
            </motion.h2>

            {/* ── Subheadline ── */}
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                custom={0.1}
                className="text-[14px] sm:text-[15px] text-gray-400 mb-10
                           max-w-xl sm:max-w-2xl text-center leading-relaxed"
            >
                Renate is an AI hiring infrastructure to grow your value, culture &amp; efficiency.
                Flexible hiring solutions for every business model with AI.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                custom={0.15}
                className="flex flex-wrap items-center justify-center gap-3 mb-20 sm:mb-24"
            >
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-white/30 text-white text-[13px] font-medium
                               px-6 py-2.5 rounded-full transition-colors"
                >
                    Start Free Trial
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(157,113,253,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#9D71FD] text-white text-[13px] font-medium px-6 py-2.5
                               rounded-full hover:bg-[#8B5CF6] transition-colors
                               shadow-lg shadow-purple-500/20 flex items-center gap-2"
                >
                    Book a demo
                    <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
                    </motion.span>
                </motion.button>
            </motion.div>

            {/* ── Stats row ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={stagger}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-8
                           w-full max-w-5xl mb-20 sm:mb-24"
            >
                {STATS.map((s, i) => (
                    <StatItem key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
                ))}
            </motion.div>

            {/* ── Divider ── */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-6xl h-px bg-white/10 mb-16 origin-left"
            />

            {/* ── Feature cards ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                           gap-5 sm:gap-6 w-full max-w-6xl"
            >
                <FeatureCard
                    delay={0}
                    title="Data-Driven Hiring Analytics"
                    desc="Measure performance, identify bottlenecks, and improve outcomes. Turn hiring into a predictable, optimized process."
                    illustration={<PricingIllustration />}
                />
                <FeatureCard
                    delay={0.1}
                    title="Smart Ranking System"
                    desc="Every candidate is scored based on real job fit and potential. Focus only on the best matches, instantly."
                    illustration={<ScreeningIllustration />}
                />
                <FeatureCard
                    delay={0.2}
                    title="AI That Learns With You"
                    desc="Continuously improves based on your hiring decisions. Gets smarter with every role you fill."
                    illustration={<BrainIllustration />}
                />
            </motion.div>
        </section>
    );
}