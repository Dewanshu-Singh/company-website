"use client";
import React from "react";

const REELS = [
  { shortcode: "DTZe30SExxB", tag: "Highlights", title: "Behind the Summit" },
  { shortcode: "DTShbieE8wh", tag: "Reels",      title: "On the Ground"     },
  { shortcode: "DTNYyWvkzQy", tag: "Interviews", title: "Voices of Impact"  },
];

export default function InstagramSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">

        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#8D010D] border border-[#8D010D]/30 rounded-full px-3 py-1 w-fit flex items-center gap-1.5">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram Reels
            </span>
            <h2 className="text-4xl font-satoshi font-bold text-[#8D010D]">From the Floor</h2>
          </div>
          <a
            href="https://www.instagram.com/aestr.alpha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8D010D] font-extrabold text-sm hover:opacity-60 transition-opacity"
          >
            ✦ @aestr.alpha
          </a>
        </div>

        {/* Three equal boxes side by side */}
        <div className="flex flex-row gap-4 w-full">
          {REELS.map((reel, i) => (
            <div key={reel.shortcode} className="flex-1 flex flex-col gap-2 min-w-0">

              {/* Box */}
              <div
                className="w-full rounded-2xl overflow-hidden bg-[#f5f5f5]"
                style={{ aspectRatio: "9/16" }}
              >
             <iframe
  src={`https://www.instagram.com/reel/${reel.shortcode}/embed/`}
  width="100%"
  height="100%"
  className="border-0"
  scrolling="no"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
/>
              </div>

              {/* Label row */}
              {/* <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#8D010D]">
                  {reel.title}
                </span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div> */}

            </div>
          ))}
        </div>

        {/* Footer divider */}
        {/* <div className="flex items-center justify-between pt-2 border-t border-[#8D010D]/10">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">Location</span>
              <span className="text-sm font-extrabold text-[#8D010D]">New Delhi, India</span>
            </div>
            <div className="w-px h-8 bg-[#8D010D]/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">Date</span>
              <span className="text-sm font-extrabold text-[#8D010D]">March 2026</span>
            </div>
            <div className="w-px h-8 bg-[#8D010D]/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">Edition</span>
              <span className="text-sm font-extrabold text-[#8D010D]">Inaugural</span>
            </div>
          </div>
          <span className="text-[#8D010D] font-extrabold text-sm">✦ India AI Impact Summit</span>
        </div> */}

      </div>
    </section>
  );
}