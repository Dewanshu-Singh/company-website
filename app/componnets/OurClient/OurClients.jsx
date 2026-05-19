"use client";
import React from "react";
import Image from "next/image";
import logo1 from "../../assets/client/SGVU.jpg"
import logo2 from "../../assets/client/s_r_n.png"
import logo3 from "../../assets/client/sh.png"
import logo4 from "../../assets/client/Shodh_AI.png"

const logos = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
];

export default function OurClients() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-satoshi font-bold text-[#8D010D]">
          Our Clients
        </h2>
        <p className="text-sm md:text-xl mt-3 text-[#8D010D]/90 leading-relaxed">
          Brands that trust us to build, scale, and stand out
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[...Array(6)].flatMap(() => logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-12"
            >
              <Image
                src={logo.src}
                alt="Client logo"
                width={200}
                height={100}
                className="h-10 md:h-14 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </section>
  );
}