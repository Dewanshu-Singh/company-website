"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Frame7 from "../../assets/Frame7.svg";
import Vector from "../../assets/Vector.svg";
import Commitment from "../Commitment";


function CountUp({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
export default function About() {
  return (
    <>
    <section className="bg-[#8d010d] min-h-screen flex items-end justify-center relative overflow-hidden">

      {/* Bottom Image */}
      <Image
        src={Frame7}
        alt="About visual"
        className="z-20 w-full md:w-auto object-cover"
      />

      {/* Decorative Vectors */}
      <Image
        src={Vector}
        alt="Decorative vector"
        className="absolute w-full object-cover bottom-[80px] z-10"
      />

      <Image
        src={Vector}
        alt="Decorative vector"
        className="absolute w-full object-cover bottom-[80px] z-0 float-fade-up opacity-40"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col text-white px-6 md:px-16">

        {/* Section Label */}
        <p className="text-sm tracking-widest opacity-70 mt-12 md:mt-16">
          Why Mharoo
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-satoshi font-bold mt-3 leading-tight max-w-3xl">
          Most Agencies Deliver Content.
          <br />
          We Deliver Momentum.
        </h1>

        {/* Body Copy */}
        <div className="max-w-2xl mt-6 space-y-4 text-lg md:text-xl opacity-90 leading-relaxed">
          <p>
            You've been posting. Boosting. Tweaking. But your brand still feels
            like a best-kept secret  and your competitors are getting the
            attention you deserve.
          </p>

          <p>
            That stops here. Mharoo Media was built for brands that are done
            blending in. We combine sharp creative with performance-backed
            strategy to grow your audience, strengthen your identity, and turn
            your digital presence into a revenue engine.
          </p>

          <p className="italic opacity-80">
            Born in Jaipur. Obsessed with results. We don't just manage your
            marketing we take ownership of your growth.
          </p>
        </div>

        {/* Commitment Pillars */}
       
    
      </div>
    </section>
   <Commitment/>
        </>

  );
}