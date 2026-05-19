"use client";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Hero() {
  const [step, setStep] = useState(0); // only drives background / vector motion
  const [openAudit, setOpenAudit] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log("Current Step:", step);

  return (
  <div className="bg-[url('/bg.jpg')] h-screen w-full flex items-center bg-center bg-no-repeat bg-cover overflow-hidden">
    {/* Bottom white fade */}
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />
      <section className="hidden md:flex w-full  justify-center">
        <div className="relative flex items-center gap-6">

          {/* Animated Vector (ONLY this animates) */}
          {/* logo  */}
          <Image
            src="/Vector.svg"
            alt="Vector"
            width={200}
            height={230}
            className={`transition-transform duration-[1500ms] mt-18
        ${step === 0 && "translate-x-60 rotate-90"}
        ${step === 1 && "translate-x-0 rotate-0"}
         ${step === 2 && "rotate-90"}
      `}
          />

          {/* Text Block */}
          <div
            className={`flex flex-col mt-10 transition-transform duration-[1500ms]
        ${step === 0 && "translate-x-90 opacity-0"}
        ${step === 1 && "translate-x-0 opacity-100"}
        ${step === 2 && "translate-x-40 opacity-100"}
      `}>
            <h1 className="text-[#8D010D] font-bold font-satoshi italicBold text-5xl md:text-7xl">
              Mharoo Media
            </h1>

            {/* Animated tagline */}
            <div className="relative h-10 md:h-14 overflow-hidden mt-3">

              {/* Step 0 */}
              <p
                className={`absolute left-0 top-0 text-[#8D010D] text-lg md:text-2xl font-satoshi transition-all duration-[1000ms]
            ${step === 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
                style={{ fontWeight: 600 }}
              >
               Your Brand Deserves to Be Impossible to Ignore.
              </p>

              {/* Step 1 */}
              <p
                className={`absolute left-0 top-0 text-[#8D010D] text-lg md:text-2xl font-satoshi transition-all duration-[1000ms]
            ${step === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                style={{ fontWeight: 600 }}
              >
                Let’s Work Together —{" "}
                <button
                  onClick={() => setOpenAudit(true)}
                  className="underline underline-offset-4 hover:opacity-80 transition font-semibold"
                >
                  Make an Audit
                </button>
              </p>

            </div>
          </div>

        </div>
      </section>
<section className="flex md:hidden w-full items-center justify-center">
    <Image
            src="/Vector.svg"
            alt="Vector"
            width={130}
            height={130}
            className={`transition-transform duration-[1500ms]
        ${step === 0 && "translate-x-25 rotate-90"}
        ${step === 1 && "translate-x-0 rotate-0"}
         ${step === 2 && "translate-x-25  rotate-90"}
      `}
          />
          <div
            className={`flex flex-col transition-transform duration-[1500ms]
        ${step === 0 && "translate-x-90 opacity-0"}
        ${step === 1 && "translate-x-0 opacity-100"}
        ${step === 2 && "-translate-x-15 translate-y-40 opacity-100"}
      `}>
            <h1 className="text-[#8D010D] font-bold font-satoshi italicBold text-3xl md:text-7xl">
              Mharoo Media
            </h1>

            {/* Animated tagline */}
            <div className="relative h-15 md:h-15 overflow-hidden mt-3">

              {/* Step 0 */}
              <p
                className={`absolute left-0 top-0 text-[#8D010D] text-[12px] md:text-1xl font-satoshi transition-all duration-[1000ms]
            ${step === 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
                style={{ fontWeight: 600 }}
              >
                Making Your Brand the Main Character
              </p>

              {/* Step 1 */}
              <p
                className={`absolute left-0 top-0 text-[#8D010D] text-[12px] font-satoshi transition-all duration-[1000ms]
            ${step === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                style={{ fontWeight: 600 }}
              >
                Let’s Work Together —{" "}
                <button
                  onClick={() => setOpenAudit(true)}
                  className="underline underline-offset-4 hover:opacity-80 transition font-semibold"
                >
                  Make an Audit
                </button>
              </p>

            </div>
          </div>
</section>

      {openAudit && (
        <div className="fixed font-satoshi inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative">

            <button
              onClick={() => setOpenAudit(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-[#8D010D]">
              Make an Audit
            </h2>

            {/* Replace with your real form */}
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Tell us about your brand"
                className="border p-2 rounded"
              />

              <button className="mt-2 bg-[#8D010D] text-white py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
