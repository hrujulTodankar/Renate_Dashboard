import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team from "../assets/team.png";
import renatelogo from "../assets/renate_ai.png";
// Brands Icons
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
// Solid Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerLinks = [
  { name: "Download", url: "#" },
  { name: "Product", url: "#" },
  { name: "Docs", url: "#" },
  { name: "Changelog", url: "#" },
  { name: "Press", url: "#" },
  { name: "Releases", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Pricing", url: "#" },
  { name: "Use Cases", url: "#" },
];

const socialIcons = [
  { icon: faInstagram, url: "#" },
  { icon: faFacebookF, url: "#" },
  { icon: faXTwitter, url: "#" },
  { icon: faLinkedinIn, url: "#" },
  { icon: faYoutube, url: "#" },
  { icon: faDiscord, url: "#" },
  { icon: faEnvelope, url: "#" },
];

function RenateLastScreen() {
  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      
      {/* 1. Hero / Background Image Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center">
        
        {/* Background Image with Dark Gradient for Text Contrast */}
        <div className="absolute inset-0">
          <img 
            src={team} 
            alt="Team collaborating" 
            className="w-full h-full object-cover" 
          />
          {/* Subtle gradient so the white text remains readable over the bright window */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1635]/80 via-[#1A1635]/40 to-transparent"></div>
        </div>

        {/* Content Overlay - Left Aligned */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-end pb-16 md:pb-24">
        
        {/* Background Image with Dark Gradient for Text Contrast */}
        <div className="absolute inset-0">
          <img 
            src={team} 
            alt="Team collaborating" 
            className="w-full h-full object-cover" 
          />
          {/* CHANGED: Made the left gradient slightly darker to match the new image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1B3A] via-[#1C1B3A]/70 to-transparent"></div>
        </div>

        {/* Content Overlay - Bottom Left Aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-2">
          
          <button className="bg-[#A855F7] text-white text-[13px] font-sans px-6 py-2.5 rounded-full mb-6 shadow-md hover:bg-purple-500 transition-colors">
            Book a demo
          </button>

          <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-sans text-white leading-[1.05] tracking-tight max-w-2xl">
            Grow your Team that <br />
            <span className="font-light">Builds, Sells & Scales</span>
          </h1>
        </div>
      </div>
      </div>

      {/* 2. Lower / Footer Section */}
      {/* 2. Lower / Footer Section */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 lg:px-20 py-16 md:py-24">
        
        <div className="flex flex-col lg:flex-row justify-between w-full">
          
          {/* ========================================= */}
          {/* LEFT SIDE: Heading & Social Icons         */}
          {/* ========================================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[250px] mb-16 lg:mb-0">
            
            {/* Heading */}
            <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-light text-black leading-[1.1] tracking-tight">
              Experience <span className="text-[#A855F7] font-normal">comfort.</span>
            </h2>

            {/* Social Icons - Pushed to bottom */}
            <div className="flex items-center gap-5 md:gap-6 mt-16 lg:mt-auto">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-400 hover:text-gray-800 transition-colors text-[22px]">
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE: Links, Logo & Copyright       */}
          {/* ========================================= */}
          <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            
            {/* Inner wrapper to keep the links and logo tightly aligned */}
            <div className="w-full max-w-[450px] flex flex-col justify-between min-h-[250px]">
              
              {/* Top: 2-Column Links Grid */}
              <div className="grid grid-cols-2 gap-8 w-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-3.5">
                  {footerLinks.slice(0, 5).map((link) => (
                    <a key={link.name} href={link.url} className="text-[14px] sm:text-[15px] text-gray-900 font-medium tracking-wide hover:text-[#A855F7] transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-3.5">
                  {footerLinks.slice(5).map((link) => (
                    <a key={link.name} href={link.url} className="text-[14px] sm:text-[15px] text-gray-900 font-medium tracking-wide hover:text-[#A855F7] transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom: Logo and Copyright aligned directly under the link columns */}
              <div className="grid grid-cols-2 gap-8 w-full mt-16 lg:mt-auto items-center">
                {/* Logo aligns under Column 1 */}
                <div className="flex justify-start">
                  <img 
                      src={renatelogo} 
                      alt="Renate AI" 
                      className="h-6 sm:h-7 w-auto object-contain" 
                  />
                </div>
                {/* Copyright aligns under Column 2 */}
                <div className="flex justify-start">
                  <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium tracking-wide">
                    © 2026 renate.ai Inc.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RenateLastScreen;