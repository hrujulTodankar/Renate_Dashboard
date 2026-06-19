import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faArrowRight,
    faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";
import RenateLogo from "../assets/renate_ai.png";
import Footer from "../assets/footer.jpeg";
import hero from "../assets/hero_background.png";

function RenateHero() {
    return (
        <div className="min-h-screen w-full bg-[#FAF9FF] font-sans relative overflow-x-hidden flex flex-col justify-between">

            {/* NAVBAR */}
            <nav className="w-full h-20 px-4 sm:px-8 xl:px-16 flex items-center justify-between bg-transparent z-20 relative">
                <div className="flex items-center shrink-0">
                    <img
                        src={RenateLogo}
                        alt="Renate AI Logo"
                        className="h-7 sm:h-8 w-auto object-contain"
                    />
                </div>

                <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-600 font-light text-sm">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors">
                        Products <FontAwesomeIcon icon={faAngleDown} className="text-xs text-gray-400" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors">
                        Customers <FontAwesomeIcon icon={faAngleDown} className="text-xs text-gray-400" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors">
                        Pricing <FontAwesomeIcon icon={faAngleDown} className="text-xs text-gray-400" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors">
                        About <FontAwesomeIcon icon={faAngleDown} className="text-xs text-gray-400" />
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="bg-[#8B5CF6] text-white text-[11px] sm:text-xs font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
                        Get Free trial
                    </button>
                    <button className="border border-gray-300 text-gray-700 text-[11px] sm:text-xs font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
                        Login / Signup
                    </button>
                    <button className="border border-gray-300 text-gray-700 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-full flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faEarthAsia} className="text-xs text-gray-500" />
                        <span className="hidden sm:inline">EN</span>
                        <span className="flex flex-col leading-none ml-0.5">
                            <FontAwesomeIcon icon={faAngleUp} className="text-[8px] sm:text-[10px] text-slate-400" />
                            <FontAwesomeIcon icon={faAngleDown} className="text-[8px] sm:text-[10px] text-slate-400 -mt-0.5" />
                        </span>
                    </button>
                </div>
            </nav>

            {/* PURPLE GLOW UNDER NAVBAR */}
            <div className="absolute top-20 left-0 w-full h-52 overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(168,85,247,.12), rgba(168,85,247,.04), transparent)",
                    }}
                />
            </div>

            {/* HERO WORM IMAGE 
                Updated to Tailwind classes for responsiveness. 
                On mobile: Centers behind text. 
                On desktop (lg:): Snaps exactly to your 35% left / 75% width spec.
            */}
            <img
                src={hero}
                alt=""
                className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[160%] max-w-none sm:w-[120%] lg:translate-x-0 lg:top-[85px] lg:left-[35%] lg:w-[75%] lg:max-w-full h-auto opacity-[0.74] pointer-events-none select-none z-[1]"
            />

            {/* HERO SECTION */}
            <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-10 lg:pt-12 pb-16 relative z-10">

                {/* LEFT CONTENT COLUMN - Changed to order-1 for mobile so it stays on top */}
                <div className="order-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start mt-4 lg:mt-0">
                    <h1 className="text-[40px] sm:text-5xl md:text-6xl xl:text-[70px] leading-[1.1] text-gray-900 font-[510] tracking-tight">
                        Autopilot your hiring <br />
                        <span className="text-[28px] sm:text-4xl md:text-5xl xl:text-[55px] font-light font-sans block mt-1 sm:mt-2">
                            speed, accuracy and scale.
                        </span>
                    </h1>

                    <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-lg lg:text-[20px] font-normal leading-relaxed lg:leading-[1.4] max-w-xl w-full sm:w-5/6 lg:w-full drop-shadow-sm">
                        Renate is an AI hiring infrastructure to grow your value,
                        culture & efficiency. Flexible hiring solutions for every
                        business model with AI.
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                        <button className="bg-[#8B5CF6] text-white text-[13px] font-medium px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#7C3AED] transition-colors shadow-md">
                            Get Started
                            <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                                <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                            </div>
                        </button>
                        <button className="border border-purple-400 text-purple-600 bg-white/80 backdrop-blur-sm font-medium px-6 py-3 rounded-full hover:bg-purple-50 transition w-full sm:w-auto shadow-sm">
                            Start Free Trial
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN — spacer + Ask AI widget */}
                {/* Changed to order-2 for mobile. Shrunk mobile height so there's no huge gap */}
                <div className="order-2 lg:col-span-5 relative w-full h-[100px] sm:h-[150px] lg:h-[500px]">
                    {/* Floating Widget: Ask AI */}
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-10 lg:right-10 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform z-10">
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
                        <span className="text-xs font-bold text-gray-800">Ask AI</span>
                    </div>
                </div>
            </main>

            {/* TRUSTED BY LOGO FOOTER */}
            <section className="w-full bg-[#EFE9FF]/60 border-t border-purple-100 py-6 px-4 sm:px-8 xl:px-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 text-center md:text-left z-10">
                <div className="text-[#8B5CF6] font-semibold text-sm max-w-[160px] leading-tight shrink-0">
                    Trusted by 100+ organizations
                </div>
                <div className="hidden md:block h-8 w-[1px] bg-purple-300 self-center shrink-0"></div>
                <div className="w-full md:flex-grow flex items-center justify-center md:justify-start mt-2 md:mt-0">
                    <img
                        src={Footer}
                        alt="footer image"
                        className="h-6 sm:h-7 md:h-8 w-auto max-w-full object-contain opacity-70"
                    />
                </div>
            </section>
        </div>
    );
}

export default RenateHero;