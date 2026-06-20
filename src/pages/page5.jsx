/**
 * RenateLastScreen.jsx
 * ─────────────────────────────────────────────────────────────
 * Hero CTA + Footer section with Framer Motion micro-interactions.
 * Breakpoints: 375px (mobile) · 768px (tablet) · 1440px+ (desktop)
 *
 * Dependencies:
 *   - framer-motion          →  npm install framer-motion
 *   - @fortawesome/react-fontawesome + free-brands-svg-icons + free-solid-svg-icons
 *   - Tailwind CSS
 */

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram, faFacebookF, faXTwitter,
    faLinkedinIn, faYoutube, faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import team       from "../assets/team.png";
import renatelogo from "../assets/renate_ai.png";

/* ─── Data ───────────────────────────────────────────────────── */
const FOOTER_LINKS = [
    { name: "Download",  url: "#" },
    { name: "Product",   url: "#" },
    { name: "Docs",      url: "#" },
    { name: "Changelog", url: "#" },
    { name: "Press",     url: "#" },
    { name: "Releases",  url: "#" },
    { name: "Blog",      url: "#" },
    { name: "Pricing",   url: "#" },
    { name: "Use Cases", url: "#" },
];

const SOCIAL_ICONS = [
    { icon: faInstagram,  label: "Instagram" },
    { icon: faFacebookF,  label: "Facebook" },
    { icon: faXTwitter,   label: "X / Twitter" },
    { icon: faLinkedinIn, label: "LinkedIn" },
    { icon: faYoutube,    label: "YouTube" },
    { icon: faDiscord,    label: "Discord" },
    { icon: faEnvelope,   label: "Email" },
];

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
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const linkVariant = {
    hidden:  { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0,
               transition: { duration: 0.4, ease: "easeOut" } },
};

const socialVariant = {
    hidden:  { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1,
               transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Sub-components ─────────────────────────────────────────── */

/** Full-bleed hero CTA panel */
function HeroCTA() {
    return (
        <div className="relative w-full h-[440px] sm:h-[520px] md:h-[580px] overflow-hidden">

            {/* Background image */}
            <motion.img
                src={team}
                alt="Team collaborating"
                initial={{ scale: 1.06, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1B3A] via-[#1C1B3A]/70 to-transparent" />

            {/* Content — bottom-left */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={stagger}
                className="absolute bottom-0 left-0 right-0 z-10
                           max-w-7xl mx-auto px-4 sm:px-10 lg:px-16
                           pb-12 sm:pb-16 md:pb-20"
            >
                {/* Book a demo pill */}
                <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.06, boxShadow: "0 8px 28px rgba(168,85,247,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#A855F7] text-white text-[13px] font-medium
                               px-6 py-2.5 rounded-full mb-6 shadow-md
                               hover:bg-purple-500 transition-colors
                               flex items-center gap-2 w-fit"
                >
                    Book a demo
                    <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
                    </motion.span>
                </motion.button>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    custom={0.08}
                    className="text-[36px] sm:text-[46px] lg:text-[56px]
                               font-semibold text-white leading-[1.05]
                               tracking-tight max-w-2xl"
                >
                    Grow your Team that{" "}
                    <br className="hidden sm:block" />
                    <span className="font-light">Builds, Sells &amp; Scales</span>
                </motion.h1>
            </motion.div>
        </div>
    );
}

/** Footer link item */
function FooterLink({ name, url }) {
    return (
        <motion.a
            variants={linkVariant}
            href={url}
            whileHover={{ x: 3, color: "#A855F7" }}
            className="text-[14px] sm:text-[15px] text-gray-900 font-medium
                       tracking-wide transition-colors"
        >
            {name}
        </motion.a>
    );
}

/** Social icon button */
function SocialIcon({ icon, label }) {
    return (
        <motion.a
            variants={socialVariant}
            href="#"
            aria-label={label}
            whileHover={{ scale: 1.25, color: "#A855F7", y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 transition-colors text-[20px] sm:text-[22px]"
        >
            <FontAwesomeIcon icon={icon} />
        </motion.a>
    );
}

/** Left footer column: heading + social icons */
function FooterLeft() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="w-full lg:w-1/2 flex flex-col justify-between
                       min-h-[220px] mb-14 lg:mb-0"
        >
            {/* Heading */}
            <motion.h2
                variants={fadeUp}
                className="text-[36px] sm:text-[50px] lg:text-[62px]
                           font-light text-black leading-[1.1] tracking-tight"
            >
                Experience{" "}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-[#A855F7] font-normal"
                >
                    comfort.
                </motion.span>
            </motion.h2>

            {/* Social icons */}
            <motion.div
                variants={stagger}
                className="flex items-center gap-4 sm:gap-5 mt-12 lg:mt-auto flex-wrap"
            >
                {SOCIAL_ICONS.map((s) => (
                    <SocialIcon key={s.label} icon={s.icon} label={s.label} />
                ))}
            </motion.div>
        </motion.div>
    );
}

/** Right footer column: links + logo + copyright */
function FooterRight() {
    const col1 = FOOTER_LINKS.slice(0, 5);
    const col2 = FOOTER_LINKS.slice(5);

    return (
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            <div className="w-full max-w-[440px] flex flex-col justify-between min-h-[220px]">

                {/* Link columns */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                    className="grid grid-cols-2 gap-8 w-full"
                >
                    <div className="flex flex-col gap-3.5">
                        {col1.map((link) => <FooterLink key={link.name} {...link} />)}
                    </div>
                    <div className="flex flex-col gap-3.5">
                        {col2.map((link) => <FooterLink key={link.name} {...link} />)}
                    </div>
                </motion.div>

                {/* Logo + copyright row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={stagger}
                    className="grid grid-cols-2 gap-8 w-full mt-14 lg:mt-auto items-center"
                >
                    <motion.div variants={fadeUp} className="flex justify-start">
                        <motion.img
                            src={renatelogo}
                            alt="Renate AI"
                            whileHover={{ scale: 1.05 }}
                            className="h-6 sm:h-7 w-auto object-contain"
                        />
                    </motion.div>
                    <motion.p
                        variants={fadeUp}
                        custom={0.05}
                        className="text-[12px] sm:text-[13px] text-gray-400
                                   font-medium tracking-wide"
                    >
                        © 2026 renate.ai Inc.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

/* ─── Page Root ──────────────────────────────────────────────── */
export default function RenateLastScreen() {
    return (
        <section className="w-full bg-white font-sans overflow-hidden">

            {/* ── Hero CTA ── */}
            <HeroCTA />

            {/* ── Footer ── */}
            <div className="max-w-[1400px] mx-auto w-full
                            px-4 sm:px-10 lg:px-20 xl:px-24
                            py-14 sm:py-20 md:py-24">
                <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
                    <FooterLeft />
                    <FooterRight />
                </div>
            </div>
        </section>
    );
}