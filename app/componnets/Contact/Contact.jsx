"use client";
import React, { useState } from "react";

export default function Contact() {
  const [service, setService] = useState("");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F61A2D]/100 via-[#F61A2D]/20 to-transparent backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-md px-1">
        <form className="bg-[#8D010D] rounded-2xl px-8 py-10 w-full shadow-2xl space-y-6 font-satoshi">

          <h3 className="text-4xl font-bold text-white text-center">
            Contact Us
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="tel"
            placeholder="Your Phone"
            required
            className="w-full bg-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" disabled>Select a service</option>
            <option value="social">Social Media</option>
            <option value="seo">SEO</option>
            <option value="marketing">Performance Marketing</option>
            <option value="branding">Branding</option>
          </select>

          <button
            type="submit"
            className="w-full bg-white text-[#8D010D] py-3 rounded-md font-semibold hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}