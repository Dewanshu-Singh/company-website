"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const pillars = [
  {
    number: "01",
    title: "Strategy First, Always",
    text: "Every piece of content we create is backed by data and directed by a clear goal. No guesswork. No random posting schedules. Just intentional growth.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M6 20V10l6-6 6 6v10" /><rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Creative That Converts",
    text: "Aesthetic is non-negotiable — but so are results. We build content that stops the scroll AND moves people to act.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Real Partnership",
    text: "You get a dedicated team invested in your brand's success. We communicate openly, report clearly, and adapt fast.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Culture-First Thinking",
    text: "We don't copy what's trending — we understand your audience and build content they actually want to share.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const stats = [
  { end: 3, prefix: "", suffix: "×", label: "Average engagement lift in 90 days" },
  { end: 50, prefix: "", suffix: "+", label: "Brand campaigns launched" },
  { end: 0, prefix: "₹", suffix: "", label: "Wasted on vanity metrics" },
  { end: 100, prefix: "", suffix: "%", label: "Dedicated to your growth" },
];

export default function Commitment() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#8D010D] overflow-hidden py-28 px-6 md:px-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: "28px 28px"
      }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-black/10 translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-white/40" />
            <span className="text-[11px] font-cabinet font-extrabold tracking-[0.2em] uppercase text-white/60">
              Our Commitment
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-satoshi font-bold text-white leading-tight max-w-2xl">
            Why Brands <br />Choose Us.
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden mb-px">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredPillar(i)}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`relative p-8 md:p-10 bg-[#8D010D] transition-all duration-500 cursor-default overflow-hidden
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                ${hoveredPillar === i ? "bg-white/[0.06]" : ""}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Ghost number */}
              <span className="absolute -bottom-3 -right-1 text-[90px] font-satoshi font-bold text-white/[0.04] leading-none select-none pointer-events-none">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 text-white
                ${hoveredPillar === i ? "bg-white/20" : "bg-white/10"}`}>
                {pillar.icon}
              </div>

              {/* Number tag */}
              <span className="text-[10px] font-cabinet font-extrabold tracking-[0.2em] uppercase text-white/40 block mb-2">
                {pillar.number}
              </span>

              <h3 className="text-xl md:text-2xl font-satoshi font-bold text-white mb-3 leading-tight">
                {pillar.title}
              </h3>

              <div className={`w-8 h-[2px] rounded-full mb-4 transition-all duration-500 ${hoveredPillar === i ? "bg-white w-14" : "bg-white/30"}`} />

              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} visible={visible} delay={i * 120} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCard({ stat, visible, delay }) {
  const count = useCountUp(stat.end, 1800, visible);

  return (
    <div
      className={`flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay + 400}ms` }}
    >
      {/* Top accent */}
      <div className="w-8 h-[2px] bg-white/30 rounded-full mb-5" />

      <p className="text-4xl md:text-5xl font-satoshi font-bold text-white leading-none tabular-nums">
        {stat.prefix}{count}{stat.suffix}
      </p>

      <p className="text-white/50 text-xs leading-relaxed mt-3 font-cabinet">
        {stat.label}
      </p>
    </div>
  );
}