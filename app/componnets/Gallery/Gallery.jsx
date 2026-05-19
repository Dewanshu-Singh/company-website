"use client";
import React, { useState } from "react";
import Image from "next/image";
const behanceProjects = [
  "/assets/work/1.jpg",
  "/assets/work/2.jpg",
  "/assets/work/3.jpg",
  "/assets/work/4.jpg",
  "/assets/work/7.png",
  "/assets/work/5.jpg",
  "/assets/work/6.jpg",
  
];

const INITIAL_COUNT = 3;

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore
    ? behanceProjects
    : behanceProjects.slice(0, INITIAL_COUNT);

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-[#8D010D] mb-2">
          Our Works
        </h2>
        <p className="text-lg md:text-xl text-[#8D010D]">
          A glimpse into the stories we've brought to life
        </p>
      </div>

      {/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {visibleProjects.map((src, i) => (
    <div key={i} className="w-full rounded-xl overflow-hidden">
     <Image
  src={src}
  alt={`Project ${i + 1}`}
  width={500}
  height={316}
  className="w-full h-[316px] object-cover"
/>
    </div>
  ))}
</div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:opacity-80 transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}