"use client";
import React from "react";
import Image from "next/image";
import img from "../../assets/Mharoo.svg";
// import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#8D010D] text-white flex flex-col items-center py-20 px-6">

      {/* CTA HEADLINE */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-satoshi font-bold text-center leading-tight max-w-3xl"
      >
        Your Competitor Isn't Waiting.
        <br />
        Neither Should You.
      </motion.h2>

      {/* BODY COPY */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white/80 text-center mt-6 max-w-xl"
      >
        One conversation could change the trajectory of your brand. Let's find
        out what's possible together — starting with a free, no-pressure audit.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.button
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 bg-white text-[#8D010D] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        Book My Free Brand Audit →
      </motion.button>

      {/* EMAIL */}
      <a
        href="mailto:Info@mharoomedia.com"
        className="mt-4 text-white/80 hover:text-white transition"
      >
       Info@mharoomedia.com
      </a>

      {/* LOGO */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <Image
          src={img}
          className="h-12 sm:h-16 md:h-20 lg:h-24"
          alt="Mharoo Media logo"
        />
      </motion.div>

      <hr className="mt-8 border-white/30 w-full max-w-6xl" />

      {/* CONTENT */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

        {/* SOCIAL */}
        {/* <div className="flex justify-center md:justify-start space-x-5">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-white/80 hover:text-white transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-white/80 hover:text-white transition" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-white/80 hover:text-white transition" />
          </a>
        </div> */}

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Work</a>
          <a href="#" className="hover:text-white transition">Blog</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </nav>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center md:items-end text-sm text-white/70 space-y-1">
          <p>© {new Date().getFullYear()} Mharoo Media.</p>
          <p>All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}