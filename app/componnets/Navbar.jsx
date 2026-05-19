"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LEFT  = ["Services", "Work", "Company"];
const NAV_RIGHT = ["About", "Contact"];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered]   = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          scrolled ? "bg-white" : "bg-white"
        }`}
      >
        {/* Top micro-bar */}
        <div className="w-full bg-[#8D010D] flex items-center justify-between px-6 h-7 overflow-hidden">
          <span className="text-[9px] font-extrabold tracking-[0.3em] uppercase text-white/70">
            Mharoo Media
          </span>
          {/* Scrolling ticker */}
          <div className="overflow-hidden flex-1 mx-8">
            <div className="flex gap-12 animate-[ticker_18s_linear_infinite] whitespace-nowrap w-max">
              {Array(6).fill("Creative · Strategy · Film · Brand Identity · Digital").map((t, i) => (
                <span key={i} className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40">{t}</span>
              ))}
            </div>
          </div>
          <span className="text-[9px] font-extrabold tracking-[0.3em] uppercase text-white/70">
            ©{new Date().getFullYear()}
          </span>
        </div>

        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-6 flex items-center h-[64px]">

          {/* LEFT LINKS */}
          <ul className="hidden md:flex items-center gap-8 flex-1">
            {NAV_LEFT.map((label) => (
              <NavItem key={label} label={label} href={`/${label.toLowerCase()}`}
                hovered={hovered} setHovered={setHovered} />
            ))}
          </ul>

          {/* CENTER LOGO */}
          <Link href="/" className="flex flex-col items-center group select-none mx-6 md:mx-12">
            <div className="flex items-center gap-[2px]">
              <span className="text-[22px] font-black tracking-[-0.06em] text-black uppercase leading-none group-hover:text-[#8D010D] transition-colors duration-300">
                MHAROO
              </span>
            </div>
            <div className="flex items-center gap-2 mt-[1px]">
              <div className="h-[1px] w-4 bg-[#8D010D]" />
              <span className="text-[8px] font-black tracking-[0.35em] uppercase text-[#8D010D]">
                MEDIA
              </span>
              <div className="h-[1px] w-4 bg-[#8D010D]" />
            </div>
          </Link>

          {/* RIGHT LINKS */}
          <ul className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {NAV_RIGHT.map((label) => (
              <NavItem key={label} label={label} href={`/${label.toLowerCase()}`}
                hovered={hovered} setHovered={setHovered} />
            ))}
            {/* Live dot CTA */}
            <li>
              <Link href="/contact"
                className="inline-flex items-center gap-2 pl-4 pr-5 py-2 rounded-full border border-[#8D010D] text-[#8D010D] hover:bg-[#8D010D] hover:text-white transition-all duration-300 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8D010D] group-hover:bg-white animate-pulse" />
                <span className="text-[11px] font-black tracking-[0.15em] uppercase">Let's Talk</span>
              </Link>
            </li>
          </ul>

          {/* MOBILE TRIGGER */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex flex-col select-none">
              <span className="text-[18px] font-black tracking-[-0.04em] text-black uppercase leading-none">MHAROO</span>
              <span className="text-[7px] font-black tracking-[0.35em] uppercase text-[#8D010D]">MEDIA</span>
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[5px] justify-center w-10 h-10 items-end"
              aria-label="Open menu"
            >
              <span className="h-[2px] w-6 bg-black rounded-full transition-all duration-300" />
              <span className="h-[2px] w-4 bg-[#8D010D] rounded-full transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-[1px] bg-black/8" />
      </nav>

      {/* ── MOBILE FULLSCREEN DRAWER ──────────────────────── */}
      <div className={`fixed inset-0 z-[60] flex transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Dark overlay (left) */}
        <div
          className={`flex-1 bg-black/50 transition-all duration-700 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Panel (right) */}
        <div className={`w-[85vw] max-w-sm bg-white flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}>

          {/* Panel header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-black/8">
            <div>
              <p className="text-[8px] font-black tracking-[0.35em] uppercase text-[#8D010D]">Navigation</p>
              <p className="text-[11px] font-bold text-black/40 mt-0.5">Mharoo Media ©{new Date().getFullYear()}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:border-[#8D010D] hover:text-[#8D010D] transition-colors"
            >
              <X size={15} />
            </button>
          </div>

          {/* Big nav links */}
          <ul className="flex flex-col flex-1 justify-center px-8 gap-0">
            {[...NAV_LEFT, ...NAV_RIGHT].map((label, i) => (
              <li
                key={label}
                style={{ transitionDelay: open ? `${100 + i * 65}ms` : "0ms" }}
                className={`transition-all duration-500 border-b border-black/6 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link
                  href={`/${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 group"
                >
                  <span className="text-[32px] font-black uppercase tracking-[-0.03em] text-black group-hover:text-[#8D010D] transition-colors duration-200 leading-none">
                    {label}
                  </span>
                  <span className="text-[9px] font-black tracking-widest text-black/20 group-hover:text-[#8D010D] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Panel footer */}
          <div className="px-8 pb-10 pt-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#8D010D] text-white rounded-full text-[11px] font-black tracking-[0.2em] uppercase hover:bg-black transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}

function NavItem({ label, href, hovered, setHovered }) {
  const isHov = hovered === label;
  return (
    <li>
      <Link
        href={href}
        onMouseEnter={() => setHovered(label)}
        onMouseLeave={() => setHovered(null)}
        className="relative flex flex-col items-center gap-0.5 group"
      >
        <span className={`text-[11px] font-black tracking-[0.18em] uppercase transition-colors duration-200 ${
          isHov ? "text-[#8D010D]" : "text-black/70"
        }`}>
          {label}
        </span>
        {/* Underline that draws from center outward */}
        <span className={`h-[1.5px] bg-[#8D010D] rounded-full transition-all duration-300 ${
          isHov ? "w-full" : "w-0"
        }`} />
      </Link>
    </li>
  );
}