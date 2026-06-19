import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBullseye, faUsers, faClock, faCrown, 
    faChartSimple, faShieldHalved, faBrain, 
    faGift, faMoneyBill1, faRotate, faBars 
} from "@fortawesome/free-solid-svg-icons";

function RenateStatsSection() {
    return (
        // Deep dark purple/slate background
        <section className="w-full bg-[#241240] text-white py-20 px-6 sm:px-12 flex flex-col items-center font-sans">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1.5 mb-8 bg-white/5">
                <FontAwesomeIcon icon={faBullseye} className="text-red-500 text-[10px]" />
                <span className="text-[11px] font-medium tracking-wide text-gray-200">Accuracy</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl text-center leading-[1.1] tracking-tight">
                Emerging institutions and fintech <br className="hidden md:block" />
                are recruiting with renate.
            </h2>

            {/* Subheadline */}
            <p className="text-[15px] text-gray-400 mb-10 max-w-2xl text-center leading-relaxed">
                Renate is an AI hiring infrastructure to grow your value, culture & efficiency.
                Flexible hiring solutions for every business model with AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 mb-24 w-full">
                <button className="border border-white/30 text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                    Start Free Trial
                </button>
                <button className="bg-[#9D71FD] text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-[#8B5CF6] transition-colors shadow-lg shadow-purple-500/20">
                    Book a demo
                </button>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 w-full max-w-5xl mb-24 text-center">
                <div className="flex flex-col gap-1">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">92%</h3>
                    <p className="text-[12px] text-gray-400 font-medium tracking-wide">AI Match Accuracy</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">1000+</h3>
                    <p className="text-[12px] text-gray-400 font-medium tracking-wide">Candidates Screened Daily</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">24 Hours</h3>
                    <p className="text-[12px] text-gray-400 font-medium tracking-wide">To Deliver Top 5 Candidates</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">80% Faster</h3>
                    <p className="text-[12px] text-gray-400 font-medium tracking-wide">Hiring Process</p>
                </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

                {/* CARD 1: Data-Driven Hiring Analytics */}
                <div className="bg-white rounded-[32px] p-2 pb-8 flex flex-col shadow-2xl">
                    {/* CSS Mockup of the Purple Graphic */}
                    <div className="bg-linear-to-br from-[#A07BFE] to-[#784DF1] rounded-3xl h-56 mb-5 relative overflow-hidden flex items-center justify-center p-6">
                        <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 flex flex-col gap-3">
                            {/* Fake List Items */}
                            {[
                                { icon: faGift, text: "Free" },
                                { icon: faMoneyBill1, text: "One-time payment" },
                                { icon: faRotate, text: "Subscription" },
                                { icon: faBars, text: "Part payments" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={item.icon} className="text-white/70 text-[10px]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] text-white/90 font-medium mb-1">{item.text}</div>
                                        <div className="h-1 bg-white/20 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Card Text */}
                    <div className="px-5">
                        <h4 className="text-xl text-gray-900 mb-2 tracking-tight font-sans">Data-Driven Hiring Analytics</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                            Measure performance, identify bottlenecks, and improve outcomes. Turn hiring into a predictable, optimized process.
                        </p>
                    </div>
                </div>

                {/* CARD 2: Smart Ranking System */}
                <div className="bg-white rounded-[32px] p-2 pb-8 flex flex-col shadow-2xl">
                    {/* CSS Mockup of the Purple Graphic */}
                    <div className="bg-gradient-to-br from-[#A07BFE] to-[#784DF1] rounded-[24px] h-56 mb-5 relative overflow-hidden flex items-center justify-center p-4">
                        <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3">
                            <div className="flex items-center gap-2 mb-3 px-1">
                                <span className="text-[10px] font-bold text-white">Screening Live</span>
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {/* Fake Stat Cubes */}
                                {[
                                    { icon: faUsers, stat: "10K+", label: "Profiles Screened" },
                                    { icon: faClock, stat: "24h", label: "Time to Shortlist" },
                                    { icon: faBullseye, stat: "92%", label: "Match Accuracy" },
                                    { icon: faCrown, stat: "Top 5", label: "Candidates Delivered" },
                                    { icon: faChartSimple, stat: "1M+", label: "Data Points Analyzed" },
                                    { icon: faShieldHalved, stat: "0", label: "Manual Screening" },
                                ].map((box, i) => (
                                    <div key={i} className="bg-white/10 rounded-lg p-2 text-center flex flex-col items-center justify-center border border-white/5">
                                        <FontAwesomeIcon icon={box.icon} className="text-white/70 text-[10px] mb-1.5" />
                                        <div className="text-[11px] font-bold text-white leading-none mb-0.5">{box.stat}</div>
                                        <div className="text-[6px] text-white/70 leading-none">{box.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Card Text */}
                    <div className="px-5">
                        <h4 className="text-xl font-sans text-gray-900 mb-2 tracking-tight ">Smart Ranking System</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                            Every candidate is scored based on real job fit and potential. Focus only on the best matches, instantly.
                        </p>
                    </div>
                </div>

                {/* CARD 3: AI That Learns With You */}
                <div className="bg-white rounded-[32px] p-2 pb-8 flex flex-col shadow-2xl">
                    {/* CSS Mockup of the Purple Graphic */}
                    <div className="bg-gradient-to-br from-[#A07BFE] to-[#784DF1] rounded-[24px] h-56 mb-5 relative overflow-hidden flex items-center justify-center">
                        <div className="relative w-40 h-40 flex items-center justify-center">
                            {/* Orbital Rings */}
                            <div className="absolute inset-0 rounded-full border border-white/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full border border-white/10"></div>
                            
                            {/* Central Brain Core */}
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-10 shadow-lg">
                                <FontAwesomeIcon icon={faBrain} className="text-white text-xl" />
                            </div>

                            {/* Orbiting Dots */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/80 rounded-full shadow-[0_0_10px_white]"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white/60 rounded-full"></div>
                        </div>
                    </div>
                    {/* Card Text */}
                    <div className="px-5">
                        <h4 className="text-xl font-sans text-gray-900 mb-2 tracking-tight">AI That Learns With You</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                            Continuously improves based on your hiring decisions. Gets smarter with every role you fill.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default RenateStatsSection;