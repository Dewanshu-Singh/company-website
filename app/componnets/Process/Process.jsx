"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Free Brand Audit",
    time: "Day 1",
    tag: "Discovery",
    text: "We dig into your current presence, identify what's holding you back, and show you exactly where the opportunity is.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy Session",
    time: "Days 2–5",
    tag: "Planning",
    text: "We co-create a 90-day growth roadmap tailored to your goals, audience, and budget.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M6 20V10l6-6 6 6v10" /><rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Launch & Create",
    time: "Week 2–4",
    tag: "Execution",
    text: "Our team builds content, campaigns, and creative aligned with the strategy — ready to publish.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Review & Scale",
    time: "Ongoing",
    tag: "Growth",
    text: "Monthly check-ins with real data. We double down on what works and cut what doesn't.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative bg-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle, #8D010D 1px, transparent 1px)`,
        backgroundSize: "32px 32px"
      }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8D010D] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className={`mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8D010D]" />
            <span className="text-[11px] font-cabinet font-extrabold tracking-[0.2em] uppercase text-[#8D010D]">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-satoshi font-bold text-[#8D010D] leading-tight max-w-2xl">
            From First Call <br />to Full Momentum.
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            A process designed to move fast without cutting corners — so you see results without the agency runaround.
          </p>
        </div>

        {/* Main layout: left number rail + right cards */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">

          {/* Left — step selector */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-0 md:w-[200px] shrink-0">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`group flex md:flex-row items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 w-full
                  ${activeStep === i
                    ? "bg-[#8D010D] text-white"
                    : "bg-transparent text-gray-400 hover:text-[#8D010D] hover:bg-[#8D010D]/5"
                  }
                  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
                `}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className={`text-[11px] font-cabinet font-extrabold tracking-widest ${activeStep === i ? "text-white/60" : "text-gray-300"}`}>
                  {step.number}
                </span>
                <span className={`hidden md:block text-sm font-cabinet font-extrabold leading-tight ${activeStep === i ? "text-white" : ""}`}>
                  {step.title}
                </span>
              </button>
            ))}

            {/* Progress bar */}
            <div className="hidden md:block mt-6 mx-4">
              <div className="h-[3px] bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8D010D] rounded-full transition-all duration-700"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-2 font-cabinet tracking-wider">
                {activeStep + 1} of {steps.length} steps
              </p>
            </div>
          </div>

          {/* Right — active card */}
          <div className="flex-1">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${activeStep === i ? "opacity-100 translate-y-0 block" : "opacity-0 translate-y-4 hidden"}`}
              >
                <div className="relative border border-gray-100 rounded-2xl p-8 md:p-12 bg-white shadow-[0_2px_40px_rgba(141,1,13,0.06)] overflow-hidden">

                  {/* Large background number */}
                  <span className="absolute -top-4 -right-2 text-[120px] md:text-[160px] font-satoshi font-bold text-[#8D010D]/[0.04] leading-none select-none pointer-events-none">
                    {step.number}
                  </span>

                  {/* Tag + time */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-cabinet font-extrabold tracking-[0.15em] uppercase text-[#8D010D] bg-[#8D010D]/8 px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                    <span className="text-[11px] font-cabinet text-gray-400 tracking-wider">
                      ⏱ {step.time}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#8D010D]/8 text-[#8D010D] flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-satoshi font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-[2px] bg-[#8D010D] rounded-full mb-5" />

                  {/* Text */}
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                    {step.text}
                  </p>

                  {/* Bottom nav */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                      disabled={activeStep === 0}
                      className="flex items-center gap-2 text-sm font-cabinet font-extrabold text-gray-300 disabled:opacity-30 hover:text-[#8D010D] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                        <path d="M11 6H1M1 6L5.5 1.5M1 6L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Prev
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                      {steps.map((_, di) => (
                        <button
                          key={di}
                          onClick={() => setActiveStep(di)}
                          className={`rounded-full transition-all duration-300 ${activeStep === di ? "w-6 h-2 bg-[#8D010D]" : "w-2 h-2 bg-gray-200"}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveStep((p) => Math.min(steps.length - 1, p + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="flex items-center gap-2 text-sm font-cabinet font-extrabold text-[#8D010D] disabled:opacity-30 hover:opacity-70 transition-opacity"
                    >
                      Next
                      <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom summary row */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex flex-col gap-1 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300
                ${activeStep === i
                  ? "border-[#8D010D] bg-[#8D010D]/5"
                  : "border-gray-100 hover:border-[#8D010D]/30"
                }`}
            >
              <span className="text-[10px] font-cabinet font-extrabold tracking-widest uppercase text-[#8D010D]/50">{step.time}</span>
              <span className="text-sm font-cabinet font-extrabold text-gray-800 leading-tight">{step.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}