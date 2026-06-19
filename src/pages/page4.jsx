import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faExpand, 
    faArrowRight 
} from "@fortawesome/free-solid-svg-icons";
import frame from "../assets/frame.png";

function RenateScaleSection() {
    return (
        <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-20 font-sans flex flex-col min-h-[80vh]">
            
            {/* Main Wrapper */}
            <div className="max-w-5xl mx-auto w-full">
                
                {/* ============================================================ */}
                {/* UNIFIED CONTAINER: Holds both text and image together tightly */}
                {/* ============================================================ */}
                <div className="flex flex-col gap-10 items-start w-full">
                    
                    {/* TOP SECTION: Text Content & CTAs */}
                    <div className="flex flex-col items-start text-left w-full">
                        
                        {/* Top Scale Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-blue-600 text-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={faExpand} />
                            </div>
                            <span className="text-[13px] font-medium text-gray-700 tracking-wide">Scale</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-[36px] sm:text-[44px] lg:text-[54px] font-semibold text-black leading-[1.1] tracking-tight mb-6">
                            Grow your Team that <br className="hidden sm:block" />
                            <span className="font-light text-black">Builds, Sells & Scales</span>
                        </h2>

                        {/* Sub-headline Paragraph */}
                        <p className="text-[15px] text-gray-400 font-normal leading-relaxed max-w-[600px] mb-10">
                            Other platforms give you tools. Renate gives you intelligence. 
                            Every part of your business learns, improves, and works harder 
                            over time—so you can succeed faster with less effort.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-start items-center gap-4">
                            <button className="bg-[#8B5CF6] text-white text-[13px] font-medium px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#7C3AED] transition-colors shadow-sm">
                                Get Started
                                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                                </div>
                            </button>
                            
                            <button className="border border-purple-200 text-gray-600 text-[13px] font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                                Start Free Trial
                            </button>
                        </div>
                    </div>

                    {/* BOTTOM SECTION: Exported Image Frame */}
                    {/* Changed to justify-start so it anchors to the same left line as the text */}
                    <div className="flex justify-start w-full">
                        <img 
                            src={frame} 
                            alt="Renate Scaling Metrics" 
                            className="w-full max-w-4xl h-auto object-contain"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default RenateScaleSection;