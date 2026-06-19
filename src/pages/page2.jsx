import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faTableColumns,
  faClipboard,
  faFileArrowUp,
  faChevronDown,
  faXmark,
  faCircleCheck,
  faArrowRight,
  faStar,
  faFileLines,
  faWrench,
  faBriefcase,
  faGraduationCap,
  faListCheck,
  faPen,
  faLocationDot,
  faArrowUpFromBracket,
  faWindowMaximize,
  faCrown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { label: "Job Upload", icon: faArrowUpFromBracket },
  { label: "AI Screening", icon: faWindowMaximize },
  { label: "Ranking", icon: faCrown },
  { label: "Insights", icon: faArrowTrendUp },
  { label: "Pipeline", icon: faCodeBranch },
  { label: "Analytics", icon: faTableColumns },
];

const employmentTypes = ["Full-time", "Part-time", "Contract", "Internship"];

const extractedSections = [
  {
    icon: faFileLines,
    label: "Role Summary",
    content: (
      <p className="text-[12px] text-gray-600 leading-relaxed mt-2">
        We are looking for a Senior Frontend Developer with strong experience in
        building scalable web applications using modern JavaScript frameworks.
        You will collaborate with cross-functional teams to deliver exceptional
        user experiences.
      </p>
    ),
  },
  {
    icon: faWrench,
    label: "Key Skills",
    content: (
      <div className="flex flex-wrap gap-1.5 mt-2">
        {[
          "React.js",
          "TypeScript",
          "Next.js",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "REST APIs",
          "+6 more",
        ].map((s) => (
          <span
            key={s}
            className="border border-gray-300 text-gray-600 text-[11px] px-2.5 py-0.5 rounded-full bg-white"
          >
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
    content: (
      <p className="text-[12px] text-gray-600 mt-2">
        Bachelor's degree in Computer Science or related field
      </p>
    ),
  },
  {
    icon: faListCheck,
    label: "Responsibilities",
    content: (
      <ul className="mt-2 space-y-1">
        {[
          "Build reusable components and front-end libraries",
          "Optimize applications for maximum speed and scalability",
          "Collaborate with designers and backend developers",
        ].map((r) => (
          <li
            key={r}
            className="text-[12px] text-gray-600 flex items-start gap-1.5"
          >
            <span className="shrink-0 mt-1">•</span>
            {r}
          </li>
        ))}
      </ul>
    ),
  },
];

function RenateFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState(["Full-time"]);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  return (
    <div className="w-full bg-white font-sans px-4 sm:px-8 xl:px-16 py-16">
      {/* TOP LABEL */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
        <span className="text-sm text-gray-400">speed</span>
      </div>

      {/* HEADING */}
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
        Everything A Recruiter Needs.
        <span className="block font-normal">In One Platform.</span>
      </h2>
      <p className="mt-4 text-sm text-gray-400 max-w-sm leading-relaxed">
        From first course to a full-scale academy—create unlimited products,
        reach wider audience, and build multiple income streams.
      </p>

      {/* TABS */}
      <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-colors
                            ${
                              activeTab === i
                                ? "border border-purple-500 text-purple-600 bg-white"
                                : "border border-transparent text-gray-400 bg-transparent hover:text-gray-600"
                            }`}
          >
            <FontAwesomeIcon icon={tab.icon} className="text-xs" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* ========================================================= */}
      {/* OUTER ROW: UPDATED TO MATCH IMAGE EXACTLY                 */}
      {/* ========================================================= */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
        {/* BIG PANEL — lavender bg wrapping two white columns */}
        <div className="flex-1 bg-[#F4F0FF] rounded-[24px] p-4 sm:p-5 min-w-0">
          <div className="flex flex-col md:flex-row gap-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-white h-full">
            {/* LEFT COLUMN: FORM */}
            <div className="flex-1 p-6 lg:p-8 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col min-w-0">
              <p className="text-lg font-bold text-gray-900 mb-1">Job Upload</p>
              <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
                Upload a job description or share the details and let Renate AI
                understand your hiring needs.
              </p>

              {/* Paste JD - Active State */}
              <div className="flex items-start gap-4 border-2 border-purple-300 bg-[#FBF9FF] rounded-xl p-4 mb-4 cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-purple-100/50 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    className="text-purple-500 text-sm"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold text-gray-900">
                    Paste Job Description
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">
                    Paste your job description and Renate AI will extract key
                    details automatically.
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                </div>
              </div>

              {/* Upload JD - Inactive State */}
              <div className="flex items-start gap-4 border border-gray-100 rounded-xl p-4 mb-8 cursor-pointer hover:border-purple-200 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faFileArrowUp}
                    className="text-purple-400 text-sm"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold text-gray-800">
                    Upload JD File
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">
                    Upload your job description in PDF, DOCX or TXT format.
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-200 shrink-0 mt-0.5"></div>
              </div>

              {/* Job Title */}
              <label className="text-[13px] font-semibold text-gray-700 mb-2 block">
                Job Title
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Frontend Developer"
                className="border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-500 w-full mb-5 outline-none focus:border-purple-400 transition-colors"
              />

              {/* Location + Experience */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="text-[13px] font-semibold text-gray-700 mb-2 block">
                    Location
                  </label>
                  <div className="border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-gray-400 text-[12px] shrink-0"
                    />
                    <span className="flex-1">Bangalore, India</span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-gray-300 text-[11px] shrink-0 cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-gray-700 mb-2 block">
                    Experience Level
                  </label>
                  <div className="border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 flex items-center gap-2 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-gray-400 text-[12px] shrink-0"
                    />
                    <span className="flex-1">3 – 5 Years</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-gray-300 text-[11px] shrink-0"
                    />
                  </div>
                </div>
              </div>

              {/* Employment Type */}
              <label className="text-[13px] font-semibold text-gray-700 mb-2 block">
                Employment Type
              </label>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {employmentTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className={`text-[13px] px-5 py-2 rounded-lg border transition-colors
                                            ${
                                              selectedTypes.includes(type)
                                                ? "border-purple-300 text-purple-600 bg-[#FBF9FF] font-medium"
                                                : "border-gray-100 text-gray-500 bg-gray-50/50 hover:border-gray-300"
                                            }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-5 mt-auto">
                <button className="bg-[#6D28D9] text-white text-[14px] font-medium px-8 py-3 rounded-lg hover:bg-purple-700 transition">
                  Continue
                </button>
                <button className="text-[#6D28D9] text-[14px] font-medium hover:underline transition">
                  Save as Draft
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: AI EXTRACTED */}
            <div className="flex-1 p-6 lg:p-8 flex flex-col min-w-0 bg-[#FAFAFF]/50 border-l border-gray-50">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-purple-600 text-[13px]"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-gray-900 leading-none">
                    Extracted by Renate AI
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1">
                    We've identified the key details from your job description.
                  </p>
                </div>
              </div>

              {/* Sections (Using the untouched array mapped natively) */}
              <div className="space-y-0">
                {extractedSections.map((section, i) => (
                  <div
                    key={section.label}
                    className={`py-4 ${i < extractedSections.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[13px] font-semibold text-purple-600 flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={section.icon}
                          className="text-[12px] opacity-80"
                        />
                        {section.label}
                      </p>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-gray-300 text-[12px] cursor-pointer hover:text-purple-400 transition-colors"
                      />
                    </div>
                    {section.content}
                  </div>
                ))}
              </div>

              {/* Success bar */}
              <div className="flex items-center gap-3 bg-[#ECFDF5] border border-[#A7F3D0]/60 rounded-xl px-4 py-3.5 mt-6">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#10B981] text-sm shrink-0"
                />
                <span className="text-[12px] font-medium text-[#065F46]">
                  Looks good! You can edit any section before continuing.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR: AI card + text */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-8 lg:pt-2">
          {/* AI card */}
          <div
            className="rounded-3xl p-8 text-white text-center shadow-lg relative overflow-hidden "
            style={{
              background:
                "linear-gradient(145deg, #A855F7 0%, #7C3AED 50%, #6D28D9 100%)",
            }}
          >
            {/* Soft visual blur matching reference */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="w-14 h-14 rounded-[14px] bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
            </div>
            <p className="text-[20px] font-bold leading-tight mb-3">
              AI-Powered Hiring
            </p>
            <p className="text-[14px] text-purple-100 leading-relaxed mb-8 px-2">
              Save time. Hire better. Let AI find the right candidates for you.
            </p>
            <button className="bg-white text-[#6D28D9] text-[14px] font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 mx-auto hover:bg-purple-50 transition w-full shadow-sm">
              See How It Works
              <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
            </button>
          </div>

          {/* Text block matching larger image typography */}
          <div className="px-1">
            <p className="text-[30px] font-bold text-gray-900 leading-[1.2] mb-5 tracking-tight">
              Start with a job. We'll handle the rest.
            </p>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-[15px] text-gray-800 leading-relaxed">
                <span className="text-gray-900 shrink-0 mt-0.5">•</span>
                Extracts skills, experience, and role expectations automatically
              </li>
              <li className="flex items-start gap-3 text-[15px] text-gray-800 leading-relaxed">
                <span className="text-gray-900 shrink-0 mt-0.5">•</span>
                Structures your job for better candidate matching
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenateFeatures;
