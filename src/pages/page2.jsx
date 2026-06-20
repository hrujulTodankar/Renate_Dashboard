/**
 * RenateFeatures.jsx
 * ─────────────────────────────────────────────────────────────
 * Fully responsive features/job-upload screen with Framer Motion.
 * Breakpoints: 375px (mobile) · 768px (tablet) · 1440px+ (desktop)
 *
 * Dependencies:
 *   - framer-motion          →  npm install framer-motion
 *   - @fortawesome/react-fontawesome + free-solid-svg-icons
 *   - Tailwind CSS
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCodeBranch, faTableColumns, faClipboard, faFileArrowUp,
    faChevronDown, faXmark, faCircleCheck, faArrowRight, faStar,
    faFileLines, faWrench, faBriefcase, faGraduationCap, faListCheck,
    faPen, faLocationDot, faArrowUpFromBracket, faWindowMaximize,
    faCrown, faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

/* ─── Constants ──────────────────────────────────────────────── */
const TABS = [
    { label: "Job Upload",   icon: faArrowUpFromBracket },
    { label: "AI Screening", icon: faWindowMaximize },
    { label: "Ranking",      icon: faCrown },
    { label: "Insights",     icon: faArrowTrendUp },
    { label: "Pipeline",     icon: faCodeBranch },
    { label: "Analytics",    icon: faTableColumns },
];

const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];

const SKILLS = [
    "React.js","TypeScript","Next.js","JavaScript",
    "HTML","CSS","Tailwind CSS","REST APIs","+6 more",
];

const RESPONSIBILITIES = [
    "Build reusable components and front-end libraries",
    "Optimize applications for maximum speed and scalability",
    "Collaborate with designers and backend developers",
];

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
    hidden:  { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const fadeIn = {
    hidden:  { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.45, ease: "easeOut", delay },
    }),
};

const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardHover = {
    rest:  { scale: 1,    boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
    hover: { scale: 1.01, boxShadow: "0 8px 24px rgba(109,40,217,0.12)",
             transition: { duration: 0.25, ease: "easeOut" } },
};

/* ─── Sub-components ─────────────────────────────────────────── */

/** Tab pill button */
function TabButton({ tab, isActive, onClick, index }) {
    return (
        <motion.button
            custom={index * 0.05}
            variants={fadeUp}
            onClick={onClick}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-medium
                        rounded-full transition-colors whitespace-nowrap
                        ${isActive
                            ? "border border-purple-500 text-purple-600 bg-white shadow-sm"
                            : "border border-transparent text-gray-400 hover:text-gray-600"
                        }`}
        >
            <FontAwesomeIcon icon={tab.icon} className="text-xs" />
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
        </motion.button>
    );
}

/** Upload option card (Paste JD / Upload File) */
function UploadOption({ icon, title, desc, isActive, onClick }) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.99 }}
            variants={cardHover}
            onClick={onClick}
            className={`flex items-start gap-4 rounded-xl p-4 cursor-pointer transition-colors
                        ${isActive
                            ? "border-2 border-purple-300 bg-[#FBF9FF]"
                            : "border border-gray-100 hover:border-purple-200"
                        }`}
        >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                            ${isActive ? "bg-purple-100/50" : "bg-gray-50"}`}>
                <FontAwesomeIcon icon={icon} className={`text-sm ${isActive ? "text-purple-500" : "text-purple-400"}`} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-gray-900">{title}</p>
                <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">{desc}</p>
            </div>
            {/* Radio indicator */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5
                            ${isActive ? "border-purple-500" : "border-gray-200"}`}>
                {isActive && <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />}
            </div>
        </motion.div>
    );
}

/** Form column inside main panel */
function FormColumn({ selectedTypes, onToggleType, uploadMode, onSetUploadMode }) {
    return (
        <div className="flex-1 p-5 sm:p-7 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col min-w-0">
            <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">Job Upload</p>
            <p className="text-[13px] text-gray-400 mb-5 leading-relaxed">
                Upload a job description or share the details and let Renate AI understand your hiring needs.
            </p>

            <div className="flex flex-col gap-3 mb-6">
                <UploadOption
                    icon={faClipboard}
                    title="Paste Job Description"
                    desc="Paste your job description and Renate AI will extract key details automatically."
                    isActive={uploadMode === "paste"}
                    onClick={() => onSetUploadMode("paste")}
                />
                <UploadOption
                    icon={faFileArrowUp}
                    title="Upload JD File"
                    desc="Upload your job description in PDF, DOCX or TXT format."
                    isActive={uploadMode === "upload"}
                    onClick={() => onSetUploadMode("upload")}
                />
            </div>

            {/* Job Title */}
            <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Job Title</label>
            <input
                type="text"
                placeholder="e.g. Senior Frontend Developer"
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-[13px] text-gray-500
                           w-full mb-4 outline-none focus:border-purple-400 focus:ring-2
                           focus:ring-purple-100 transition-all"
            />

            {/* Location + Experience */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Location</label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-700
                                    flex items-center gap-2 focus-within:border-purple-400 transition-colors">
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 text-[12px] shrink-0" />
                        <span className="flex-1 truncate">Bangalore, India</span>
                        <FontAwesomeIcon icon={faXmark} className="text-gray-300 text-[11px] shrink-0 cursor-pointer
                                                                    hover:text-gray-500 transition-colors" />
                    </div>
                </div>
                <div>
                    <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Experience Level</label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-700
                                    flex items-center gap-2 cursor-pointer hover:border-purple-300 transition-colors">
                        <FontAwesomeIcon icon={faBriefcase} className="text-gray-400 text-[12px] shrink-0" />
                        <span className="flex-1">3 – 5 Years</span>
                        <FontAwesomeIcon icon={faChevronDown} className="text-gray-300 text-[11px] shrink-0" />
                    </div>
                </div>
            </div>

            {/* Employment Type */}
            <label className="text-[13px] font-semibold text-gray-700 mb-2 block">Employment Type</label>
            <div className="flex flex-wrap gap-2 mb-6">
                {EMPLOYMENT_TYPES.map((type) => (
                    <motion.button
                        key={type}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => onToggleType(type)}
                        className={`text-[13px] px-4 py-1.5 rounded-lg border transition-colors
                                    ${selectedTypes.includes(type)
                                        ? "border-purple-300 text-purple-600 bg-[#FBF9FF] font-medium"
                                        : "border-gray-100 text-gray-500 bg-gray-50/50 hover:border-gray-300"
                                    }`}
                    >
                        {type}
                    </motion.button>
                ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-5 mt-auto pt-2">
                <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(109,40,217,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#6D28D9] text-white text-[14px] font-medium
                               px-7 py-2.5 rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
                >
                    Continue
                </motion.button>
                <motion.button
                    whileHover={{ x: 2 }}
                    className="text-[#6D28D9] text-[14px] font-medium hover:underline transition-all"
                >
                    Save as Draft
                </motion.button>
            </div>
        </div>
    );
}

/** Single extracted section row */
function ExtractedSection({ section, isLast }) {
    return (
        <motion.div
            variants={fadeUp}
            className={`py-4 ${!isLast ? "border-b border-gray-100" : ""}`}
        >
            <div className="flex items-center justify-between mb-1.5">
                <p className="text-[13px] font-semibold text-purple-600 flex items-center gap-2">
                    <FontAwesomeIcon icon={section.icon} className="text-[12px] opacity-80" />
                    {section.label}
                </p>
                <motion.button
                    whileHover={{ scale: 1.2, color: "#7C3AED" }}
                    className="text-gray-300 text-[12px] cursor-pointer transition-colors p-1"
                >
                    <FontAwesomeIcon icon={faPen} />
                </motion.button>
            </div>
            {section.content}
        </motion.div>
    );
}

/** AI extracted right column */
function ExtractedColumn() {
    const sections = [
        {
            icon: faFileLines,
            label: "Role Summary",
            content: (
                <p className="text-[12px] text-gray-600 leading-relaxed mt-2">
                    We are looking for a Senior Frontend Developer with strong experience in building
                    scalable web applications using modern JavaScript frameworks. You will collaborate
                    with cross-functional teams to deliver exceptional user experiences.
                </p>
            ),
        },
        {
            icon: faWrench,
            label: "Key Skills",
            content: (
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {SKILLS.map((s) => (
                        <span key={s} className="border border-gray-300 text-gray-600 text-[11px]
                                                  px-2.5 py-0.5 rounded-full bg-white">
                            {s}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            icon: faBriefcase,
            label: "Experience",
            content: <p className="text-[12px] text-gray-600 mt-2">3 – 5 Years</p>,
        },
        {
            icon: faGraduationCap,
            label: "Education",
            content: <p className="text-[12px] text-gray-600 mt-2">Bachelor's degree in Computer Science or related field</p>,
        },
        {
            icon: faListCheck,
            label: "Responsibilities",
            content: (
                <ul className="mt-2 space-y-1">
                    {RESPONSIBILITIES.map((r) => (
                        <li key={r} className="text-[12px] text-gray-600 flex items-start gap-1.5">
                            <span className="shrink-0 mt-1">•</span>{r}
                        </li>
                    ))}
                </ul>
            ),
        },
    ];

    return (
        <div className="flex-1 p-5 sm:p-7 flex flex-col min-w-0 bg-[#FAFAFF]/50">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center
                                shrink-0 shadow-sm border border-gray-100">
                    <FontAwesomeIcon icon={faStar} className="text-purple-600 text-[13px]" />
                </div>
                <div>
                    <p className="text-[14px] font-bold text-gray-900 leading-none">Extracted by Renate AI</p>
                    <p className="text-[12px] text-gray-400 mt-0.5">We've identified the key details from your job description.</p>
                </div>
            </div>

            {/* Sections */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                {sections.map((section, i) => (
                    <ExtractedSection key={section.label} section={section} isLast={i === sections.length - 1} />
                ))}
            </motion.div>

            {/* Success bar */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex items-center gap-3 bg-[#ECFDF5] border border-[#A7F3D0]/60
                           rounded-xl px-4 py-3 mt-5"
            >
                <FontAwesomeIcon icon={faCircleCheck} className="text-[#10B981] text-sm shrink-0" />
                <span className="text-[12px] font-medium text-[#065F46]">
                    Looks good! You can edit any section before continuing.
                </span>
            </motion.div>
        </div>
    );
}

/** Right sidebar: AI card + descriptive text */
function Sidebar() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="w-full lg:w-[300px] xl:w-[320px] shrink-0 flex flex-col gap-7"
        >
            {/* AI card */}
            <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(109,40,217,0.25)" }}
                className="rounded-3xl p-7 text-white text-center shadow-lg relative overflow-hidden cursor-pointer"
                style={{ background: "linear-gradient(145deg, #A855F7 0%, #7C3AED 50%, #6D28D9 100%)" }}
            >
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-900/20 rounded-full blur-2xl pointer-events-none" />

                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-[14px] bg-white/20 backdrop-blur-sm border border-white/10
                               flex items-center justify-center mx-auto mb-5"
                >
                    <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
                </motion.div>

                <p className="text-[20px] font-bold leading-tight mb-2">AI-Powered Hiring</p>
                <p className="text-[13px] text-purple-100 leading-relaxed mb-6 px-1">
                    Save time. Hire better. Let AI find the right candidates for you.
                </p>

                <motion.button
                    whileHover={{ scale: 1.04, backgroundColor: "#f5f0ff" }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-[#6D28D9] text-[13px] font-bold px-6 py-3
                               rounded-xl flex items-center justify-center gap-2 mx-auto
                               w-full shadow-sm transition-colors"
                >
                    See How It Works
                    <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
                    </motion.span>
                </motion.button>
            </motion.div>

            {/* Descriptive text */}
            <motion.div variants={fadeUp} className="px-1">
                <p className="text-[26px] sm:text-[28px] font-bold text-gray-900 leading-[1.2] mb-4 tracking-tight">
                    Start with a job. We'll handle the rest.
                </p>
                <ul className="space-y-3">
                    {[
                        "Extracts skills, experience, and role expectations automatically",
                        "Structures your job for better candidate matching",
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[14px] text-gray-700 leading-relaxed">
                            <span className="text-gray-900 shrink-0 mt-0.5 font-bold">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}

/* ─── Page Root ──────────────────────────────────────────────── */
export default function RenateFeatures() {
    const [activeTab, setActiveTab]     = useState(0);
    const [selectedTypes, setSelectedTypes] = useState(["Full-time"]);
    const [uploadMode, setUploadMode]   = useState("paste");

    const toggleType = (type) =>
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );

    return (
        <div className="w-full bg-white font-sans px-4 sm:px-8 xl:px-16 2xl:px-24 py-14 sm:py-16">

            {/* ── Section header ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={stagger}
                className="mb-8 sm:mb-10"
            >
                <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="text-sm text-gray-400">speed</span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    custom={0.05}
                    className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                >
                    Everything A Recruiter Needs.
                    <span className="block font-normal">In One Platform.</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    custom={0.1}
                    className="mt-4 text-sm text-gray-400 max-w-sm leading-relaxed"
                >
                    From first course to a full-scale academy—create unlimited products,
                    reach wider audience, and build multiple income streams.
                </motion.p>
            </motion.div>

            {/* ── Tabs ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={stagger}
                className="flex flex-wrap items-center gap-1 sm:gap-2 mb-6 sm:mb-8
                           overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none"
            >
                {TABS.map((tab, i) => (
                    <TabButton
                        key={tab.label}
                        tab={tab}
                        index={i}
                        isActive={activeTab === i}
                        onClick={() => setActiveTab(i)}
                    />
                ))}
            </motion.div>

            {/* ── Main content row ── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch"
            >
                {/* Main lavender panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 bg-[#F4F0FF] rounded-[20px] sm:rounded-[24px]
                                   p-3 sm:p-4 min-w-0"
                    >
                        <div className="flex flex-col md:flex-row bg-white rounded-2xl
                                        overflow-hidden shadow-sm border border-white/80 h-full">
                            <FormColumn
                                selectedTypes={selectedTypes}
                                onToggleType={toggleType}
                                uploadMode={uploadMode}
                                onSetUploadMode={setUploadMode}
                            />
                            <ExtractedColumn />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Right sidebar */}
                <Sidebar />
            </motion.div>
        </div>
    );
}