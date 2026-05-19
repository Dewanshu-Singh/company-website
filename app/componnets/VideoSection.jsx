"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactPlayer from "react-player";

const VIDEOS = [
  {
    url: "https://youtu.be/YLhefncZqSs?si=STGUfs_Rk0azsWUT",
    title: "India AI Impact Summit 2026",
    subtitle: "Where India's brightest minds converge to shape the future of artificial intelligence.",
    location: "New Delhi, India",
    date: "March 2026",
    edition: "Inaugural",
  },
  {
    url: "https://youtu.be/ZiyHOIri4Vo?si=uPZMf26P_PxVPTMd",
    title: "AESTR ALPHA AI Summit",
    subtitle: "Visionary leaders share the roadmap for AI-driven transformation across industries.",
    location: "New Delhi, India",
    date: "March 2026",
    edition: "Session II",
  },
  {
    url: "https://youtube.com/shorts/EnudigrxxdE?si=52-oE0WC7bl1Jdce",
    title: "Your First Internship",
    subtitle: "Emerging AI startups pitch their boldest ideas to the nation's top investors.",
    location: "New Delhi, India",
    date: "March 2026",
    edition: "Session III",
  },
  {
    url: "https://youtu.be/U3simEyrRJ4?si=-uj8sI_mJm_q4ozD",
    title: "Shodh AI",
    subtitle: "Regulators and technologists debate the future of ethical AI policy in India.",
    location: "New Delhi, India",
    date: "March 2026",
    edition: "Session IV",
  },
  {
    url: "https://youtu.be/vsdqzT1LcJ8?si=k1iCmigB0jmVNAS4",
    title: "Startup Spotlight",
    subtitle: "How artificial intelligence is revolutionizing diagnostics and patient outcomes.",
    location: "New Delhi, India",
    date: "March 2026",
    edition: "Session V",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function VideoSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [playing, setPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoRef = useRef(null);
  const progressRef = useRef(null);
  const progressStartRef = useRef(null);

  const goTo = useCallback(
    (idx, dir = 1) => {
      if (transitioning || idx === current) return;
      setDirection(dir);
      setPrev(current);
      setTransitioning(true);
      setPlaying(false);
      setProgress(0);
      setTimeout(() => {
        setCurrent(idx);
        setPrev(null);
        setTransitioning(false);
      }, 500);
    },
    [current, transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % VIDEOS.length, 1);
  }, [current, goTo]);

  const goToPrev = useCallback(() => {
    goTo((current - 1 + VIDEOS.length) % VIDEOS.length, -1);
  }, [current, goTo]);

  // Auto slide + progress bar
  useEffect(() => {
    if (playing) return; // pause auto-slide when video is playing
    progressStartRef.current = performance.now();
    setProgress(0);

    const tick = () => {
      const elapsed = performance.now() - progressStartRef.current;
      const p = Math.min((elapsed / AUTO_SLIDE_INTERVAL) * 100, 100);
      setProgress(p);
      if (p < 100) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        next();
      }
    };
    progressRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(progressRef.current);
    };
  }, [current, playing, next]);

  const video = VIDEOS[current];

  return (
    <section
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      className="relative w-full py-24 bg-white overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Custom cursor */}
      <div
        className="fixed z-50 pointer-events-none"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full bg-[#8D010D] text-white font-extrabold text-[11px] tracking-widest uppercase transition-all duration-300 ease-out
            ${isHovered ? "w-20 h-20 opacity-100" : "w-4 h-4 opacity-60"}`}
        >
          {isHovered ? (playing ? "PAUSE" : "PLAY") : ""}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
        {/* Badge row */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#8D010D] border border-[#8D010D]/30 rounded-full px-3 py-1">
            Featured
          </span>
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">
            2026
          </span>
        </div>

        {/* Animated title + description */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 transition-all duration-500"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning
              ? `translateY(${direction * 8}px)`
              : "translateY(0)",
          }}
        >
          <h2 className="text-4xl font-satoshi md:text-6xl font-bold text-[#8D010D] leading-tight max-w-xl">
            {video.title.split(" ").map((word, i) => (
              <span key={i} style={{ display: "inline-block", marginRight: "0.25em" }}>
                {word}
              </span>
            ))}
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xs md:text-right leading-relaxed">
            {video.subtitle}
          </p>
        </div>

        {/* Video carousel container */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
          {/* Slide-out (previous) */}
          {prev !== null && (
            <div
              className="absolute inset-0 z-10"
              style={{
                animation: `slideOut${direction > 0 ? "Left" : "Right"} 0.5s ease forwards`,
              }}
            >
              <ReactPlayer
                url={VIDEOS[prev].url}
                playing={false}
                width="100%"
                height="100%"
                style={{ pointerEvents: "none" }}
              />
            </div>
          )}

          {/* Slide-in (current) */}
          <div
            className="absolute inset-0 z-20"
            style={{
              animation: transitioning
                ? `slideIn${direction > 0 ? "Right" : "Left"} 0.5s ease forwards`
                : "none",
            }}
            onClick={() => setPlaying((p) => !p)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Pause overlay */}
            <div
              className={`absolute inset-0 z-10 bg-black/30 transition-opacity duration-500
                ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            />
            {/* Paused hint */}
            <div
              className={`absolute bottom-6 left-6 z-20 transition-all duration-500
                ${playing ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
            >
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-white/60">
                Hover & click to watch
              </span>
            </div>

            <ReactPlayer
              src={video.url}
              playing={playing}
              loop
              width="100%"
              height="100%"
              playsinline
              config={{
                youtube: { playerVars: { controls: 0, modestbranding: 1, rel: 0 } },
              }}
              style={{ pointerEvents: "none" }}
            />
          </div>

          {/* Slide counter — top right */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-white/70 bg-black/40 rounded-full px-3 py-1">
              {String(current + 1).padStart(2, "0")} / {String(VIDEOS.length).padStart(2, "0")}
            </span>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#8D010D] transition-colors duration-200 flex items-center justify-center text-white"
            style={{ cursor: "none" }}
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#8D010D] transition-colors duration-200 flex items-center justify-center text-white"
            style={{ cursor: "none" }}
          >
            ›
          </button>
        </div>

        {/* Dot nav + auto-progress */}
        <div className="flex items-center justify-center gap-3 pt-1">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === current ? 48 : 24,
                background: i === current ? "#8D010D22" : "#8D010D33",
                cursor: "none",
              }}
            >
              {i === current && (
                <div
                  className="absolute inset-y-0 left-0 bg-[#8D010D] rounded-full"
                  style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Footer meta row */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#8D010D]/10 transition-all duration-500"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(6px)" : "translateY(0)",
          }}
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">Location</span>
              <span className="text-sm font-extrabold text-[#8D010D]">{video.location}</span>
            </div>
            <div className="w-px h-8 bg-[#8D010D]/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">Date</span>
              <span className="text-sm font-extrabold text-[#8D010D]">{video.date}</span>
            </div>
            <div className="w-px h-8 bg-[#8D010D]/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">Edition</span>
              <span className="text-sm font-extrabold text-[#8D010D]">{video.edition}</span>
            </div>
          </div>
          <span className="text-[#8D010D] font-extrabold text-sm flex items-center gap-2">
            ✦ India AI Impact Summit
          </span>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to   { transform: translateX(-6%); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to   { transform: translateX(6%); opacity: 0; }
        }
        @keyframes slideInRight {
          from { transform: translateX(6%); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-6%); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}