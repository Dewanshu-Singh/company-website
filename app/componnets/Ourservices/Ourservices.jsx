"use client";
import React from 'react'
import Image from "next/image";
import Frame1 from "../../assets/Frame1.svg"
import Frame2 from "../../assets/Frame2.svg"
import Frame3 from "../../assets/Frame3.svg"
import Frame4 from "../../assets/Frame4.svg"
import Frame5 from "../../assets/Frame5.svg"
import Frame6 from "../../assets/Frame6.svg"
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';




export default function Ourservices() {
    const [step, setStep] = useState(0);
    const [activeServiceId, setActiveServiceId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 6);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const services = [
        {
            id: 1,
            image: Frame1,
            title: "Social Media Management",
            tagline: "Consistent presence. Real community.",
            desc: "Your social channels should work for you 24/7. We run them with the precision of a newsroom and the creativity of a studio.",
            points: [
                "Platform-specific content calendars (IG, LinkedIn, X)",
                "Daily community management & engagement",
                "Monthly analytics reports with clear next steps",
                "A/B-tested captions and posting times"
            ]
        },
        {
            id: 2,
            image: Frame3,
            title: "Search Engine Optimisation",
            tagline: "Be found before your competitors.",
            desc: "Traffic you don't pay for, every month, forever. We build SEO foundations that compound and keep delivering over time.",
            points: [
                "Technical SEO audit & on-page optimisation",
                "Keyword research focused on buyer intent",
                "Content strategy aligned with search demand",
                "Monthly ranking reports & roadmap updates"
            ]
        },
        {
            id: 3,
            image: Frame5,
            title: "Reels & Video Content",
            tagline: "Scroll-stopping. Share-worthy.",
            desc: "Video is the fastest way to build trust at scale. We concept, script, direct, and edit content that earns its reach.",
            points: [
                "Full-service Reels production (concept to delivery)",
                "Brand-consistent editing & motion graphics",
                "Platform-optimised formats (Reels, Shorts)",
                "Hook-driven scripting to maximise watch time"
            ]
        },
        {
            id: 4,
            image: Frame2,
            title: "Performance Marketing",
            tagline: "Every rupee works harder.",
            desc: "Ads that don't just run — they convert. We manage your paid media with obsessive attention to ROI, not just reach.",
            points: [
                "Meta, Google & YouTube ad campaign management",
                "Creative testing & audience segmentation",
                "Retargeting sequences that close the loop",
                "Transparent spend reporting with real attribution"
            ]
        },
        {
            id: 5,
            image: Frame4,
            title: "Branding & Identity",
            tagline: "Look like the leader.",
            desc: "Your visual identity is your first impression, last impression, and everything in between. We build brands that own the room.",
            points: [
                "Logo design & full visual identity systems",
                "Brand voice, tone & messaging frameworks",
                "Social media kit & brand guidelines",
                "Packaging, pitch decks & collateral design"
            ]
        },
        {
            id: 6,
            image: Frame6,
            title: "Influencer Collaborations",
            tagline: "Reach people through faces they trust.",
            desc: "We connect your brand with creators whose audiences are actually your customers — and manage everything from outreach to results.",
            points: [
                "Verified creator sourcing & vetting",
                "Campaign briefing, contracts & coordination",
                "Performance tracking (reach, saves, conversions)",
                "Micro, macro & niche influencer strategies"
            ]
        }
    ];

    const selectedService = services.find((service) => service.id === activeServiceId);

    return (
        <div className="flex flex-col justify-center items-center py-16">

            {/* ── BACKDROP ── */}
            <div
                onClick={() => setActiveServiceId(null)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-400
                    ${activeServiceId ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* ── RIGHT-SIDE DRAWER ── */}
            <div
                className={`fixed top-0 right-0 h-screen w-[460px] max-w-[90vw] bg-white z-50 overflow-y-auto
                    transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${activeServiceId ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close button */}
                <button
                    onClick={() => setActiveServiceId(null)}
                    className="absolute top-5 left-5 text-[#8D010D] text-xl leading-none px-2 py-1 rounded hover:bg-red-50 transition-colors cursor-pointer border-none bg-transparent"
                >
                    ✕
                </button>

                {selectedService && (
                    <div className="px-8 pt-16 pb-12">
                        <div className="w-full rounded-2xl overflow-hidden mb-6">
                            <Image
                                src={selectedService.image}
                                alt={selectedService.title}
                                className="w-full  object-cover"
                            />
                        </div>
                        <h2 className="font-cabinet font-extrabold text-[#8D010D] text-3xl leading-tight">
                            {selectedService.title}
                        </h2>
                        <p className="italic text-[#8D010D] opacity-75 mt-2 text-lg font-cabinet">
                            {selectedService.tagline}
                        </p>
                        <hr className="border-[#f0d0d0] my-5" />
                        <p className="text-gray-700 text-sm leading-relaxed mb-6">
                            {selectedService.desc}
                        </p>
                        <div className="flex flex-col gap-3">
                            {selectedService.points.map((point, i) => (
                                <div key={i} className="flex gap-2 text-sm leading-relaxed text-gray-800">
                                    <span className="text-[#8D010D] font-bold shrink-0 mt-[1px]">→</span>
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ════════════════════════════════════════
                DESKTOP (lg+) — original animation untouched
            ════════════════════════════════════════ */}
            <section className="w-[90%] text-center max-w-7xl hidden lg:block" style={{ height: "100%", overflow: "hidden" }}>
                <div className="text-center mb-14">
                    <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold font-satoshi text-[#8D010D] mb-2">
                        Our Services
                    </h2>
                    <p className="text-[15px] sm:text-xl md:text-2xl mb-10 text-[#8D010D]">
                        Six Ways We Scale Your Brand.
                    </p>
                </div>

                <div className='flex' style={{ position: "relative" }}>
                    <div className='flex'>
                        <div className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px]" : "h-[350px]"}`} style={{ overflow: "hidden" }}>
                            <Image src={Frame1} onClick={() => setActiveServiceId(1)} alt="Service icon" className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px]" : step === 1 ? "h-[350px]" : step === 2 ? "h-[350px] -translate-y-[360px] " : "h-[350px] -translate-y-[360px]"}`} />
                            <Image src={Frame3} onClick={() => setActiveServiceId(2)} alt="Service icon" className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px]" : step === 1 ? "h-[350px]" : step === 2 ? "h-[350px] -translate-y-[350px] " : step === 3 ? "h-[350px] -translate-y-[350px] " : "h-[350px] -translate-y-[680px]"}`} />
                            <Image src={Frame5} onClick={() => setActiveServiceId(3)} alt="Service icon" className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px]" : step === 1 ? "h-[350px]" : step === 2 ? "h-[350px] -translate-y-[350px] " : step === 3 ? "h-[350px] -translate-y-[350px] " : step === 4 ? "h-[350px] -translate-y-[670px] " : "h-[350px] -translate-y-[680px]"}`} />
                        </div>

                        <div
                            className={`transform transition-all duration-[1500ms] ${step === 0 ? "translate-x-120 translate-y-0 h-[100px] w-[270px]" : "translate-x-100 translate-y-0 h-[100px] w-[270px]"}`}
                            style={{ overflow: "hidden", position: "absolute" }}
                        >
                            {/* Social Media */}
                            <div className={`flex h-[95px] transition-transform duration-700 ${step === 0 ? "translate-y-0" : step === 1 ? "translate-y-0" : "-translate-y-[100px]"}`}>
                                <span className="mr-1 mt-1 ml-2 font-cabinet text-[25px] font-extrabold text-[#8D010D]">✦</span>

                                <div className="flex flex-col leading-tight">
                                    <h1 className="text-3xl font-cabinet font-extrabold text-[#8D010D]">Social Media <br /> Management</h1>
                                    <div className='w-[100%] flex justify-end mr-[30px]'>
                                        <span
                                            onClick={() => setActiveServiceId(1)}
                                            className="flex items-center gap-1 text-[12px] text-[#8D010D] underline cursor-pointer group"
                                        >
                                            View More
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-200 group-hover:translate-x-[2px]"
                                            >
                                                <path
                                                    d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                                                    stroke="#8D010D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* SEO */}
                            <div className={`flex h-[90px] transition-transform duration-700 ${step === 2 ? "-translate-y-[90px]" : step === 3 ? "-translate-y-[90px]" : "translate-y-[100px]"}`}>
                                <span className="mr-1 mt-2 ml-2 font-cabinet text-[25px] font-extrabold text-[#8D010D]">✦</span>
                                <div className="flex flex-col leading-tight">
                                    <h1 className="text-3xl font-cabinet font-extrabold text-[#8D010D]">Search Engine <br /> Optimisation</h1>
                                    <div className='w-[100%] flex justify-end mr-[30px]'>
                                        <span
                                            onClick={() => setActiveServiceId(2)}
                                            className="flex items-center gap-1 text-[12px] text-[#8D010D] underline cursor-pointer group"
                                        >
                                            View More
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-200 group-hover:translate-x-[2px]"
                                            >
                                                <path
                                                    d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                                                    stroke="#8D010D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {/* Reels */}
                            <div className={`flex h-[90px] transition-transform duration-700 ${step === 4 ? "-translate-y-[180px]" : step === 5 ? "-translate-y-[180px]" : "translate-y-[100px]"}`}>
                                <span className="mr-1 mt-2 ml-2 font-cabinet font-extrabold text-[25px] text-[#8D010D]">✦</span>
                                <div className="flex flex-col leading-tight">
                                    <h1 className="text-3xl font-cabinet font-extrabold text-[#8D010D]">Reels & Video <br /> Content</h1>

                                    <div className='w-[100%] flex justify-end mr-[30px]'>
                                        <span
                                            onClick={() => setActiveServiceId(3)}
                                            className="flex items-center gap-1 text-[12px] text-[#8D010D] underline cursor-pointer group"
                                        >
                                            View More
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-200 group-hover:translate-x-[2px]"
                                            >
                                                <path
                                                    d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                                                    stroke="#8D010D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`transform transition-all duration-[1500ms] ${step === 0 ? "translate-x-20 translate-y-100 " : "translate-x-90 translate-y-0"}`}>
                        <div className={`transform transition-all duration-[1500ms] ${step === 0 ? "-translate-x-60 translate-y-100 h-[100px] w-[250px] " : "-translate-x-40 translate-y-50 h-[100px] w-[250px]"}`} style={{ overflow: "hidden", position: "absolute" }}>

                            {/* Performance Marketing */}
                            <div className={`flex flex-col h-[90px] transition-transform duration-700 ${step === 0 ? "translate-y-0" : step === 1 ? "translate-y-0" : step === 2 ? "translate-y-0" : "-translate-y-[90px]"}`}>
                                <h1 className='text-3xl font-cabinet font-extrabold text-[#8D010D]'>Performance <span className='mr-1 mt-2 ml-2 font-cabinet text-[25px]'>✦</span> <br /> Marketing</h1>
                                <div className='w-[100%] flex  ml-[130px] mt-1'>
                                    <span
                                        onClick={() => setActiveServiceId(4)}
                                        className="flex items-center gap-1 text-[12px] text-[#8D010D] underline cursor-pointer group"
                                    >
                                        View More
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-200 group-hover:translate-x-[2px]"
                                        >
                                            <path
                                                d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                                                stroke="#8D010D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Branding & Identity */}
                            <div className={`flex flex-col h-[90px] transition-transform duration-700 ${step === 3 ? "-translate-y-[90px]" : step === 4 ? "-translate-y-[90px]" : "translate-y-[90px]"}`}>
                                <h1 className='text-3xl font-cabinet font-extrabold text-[#8D010D]'>Branding & <span className='mr-1 mt-2 ml-2 font-cabinet text-[25px]'>✦</span> <br /> Identity</h1>
                                <div className='w-[100%] flex ml-[130px] mt-1'>
                                    <span
                                        onClick={() => setActiveServiceId(5)}
                                        className="flex items-center gap-1 text-[12px] text-[#8D010D] underline cursor-pointer group"
                                    >
                                        View More
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-200 group-hover:translate-x-[2px]"
                                        >
                                            <path
                                                d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                                                stroke="#8D010D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Influencer Collaborations */}
                            <div className={`flex flex-col h-[90px] transition-transform duration-700 ${step === 5 ? "-translate-y-[180px]" : "translate-y-[90px]"}`}>
                                <h1 className='text-3xl font-cabinet font-extrabold text-[#8D010D]'>Influencer <span className='mr-1 mt-2 ml-2 font-cabinet text-[25px]'>✦</span> <br /> Collaborations</h1>
                                <div className='w-[100%] flex ml-[130px] mt-1'>
                                    <span
                                        onClick={() => setActiveServiceId(6)}
                                        className="flex items-center gap-1 text-[12px] text-[#8D010D] underline cursor-pointer group"
                                    >
                                        View More
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-200 group-hover:translate-x-[2px]"
                                        >
                                            <path
                                                d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
                                                stroke="#8D010D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px]" : "h-[350px]"}`} style={{ overflow: "hidden" }}>
                            <Image src={Frame2} onClick={() => setActiveServiceId(4)} alt="Service icon" className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px]" : step === 1 ? "h-[350px]" : step === 2 ? "h-[350px] " : "h-[350px] -translate-y-[680px]"}`} />
                            <Image src={Frame4} onClick={() => setActiveServiceId(5)} alt="Service icon" className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px] translate-x-20" : step === 1 ? "h-[350px] translate-x-20" : step === 2 ? "h-[350px] translate-x-20 " : step === 3 ? "h-[340px] translate-x-20 -translate-y-[350px] " : step === 4 ? "h-[340px] translate-x-20 -translate-y-[350px] " : "h-[350px] translate-x-20 -translate-y-[700px]"}`} />
                            <Image src={Frame6} onClick={() => setActiveServiceId(6)} alt="Service icon" className={`transition-all duration-[1500ms] ${step === 0 ? "h-[500px] translate-x-20" : step === 1 ? "h-[350px] translate-x-20" : step === 2 ? "h-[350px] translate-x-20 " : step === 3 ? "h-[340px] translate-x-20 -translate-y-[350px] " : step === 4 ? "h-[340px] translate-x-20 -translate-y-[350px] " : step === 5 ? "h-[340px] translate-x-20 -translate-y-[685px] " : "h-[350px] translate-x-20 -translate-y-[700px]"}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                TABLET (md → lg) — original animation untouched
            ════════════════════════════════════════ */}
            <section className='hidden md:flex lg:hidden flex-col w-full py-12 px-12'>
                <h1 className={"text-[#8D010D] mb-4 transition-all font-bold font-satoshi duration-[1500ms] text-5xl"}>
                    Our Services
                </h1>
                <p className="text-[#8D010D] text-2xl mb-10">
                    We help brands grow and get noticed with
                </p>
            </section>

            <section className="w-[90%] max-w-7xl hidden md:flex lg:hidden mx-auto py-12 h-[400px] overflow-hidden">
                <div className={`transition-transform duration-[1200ms] ease-out`} style={{ transform: `translateY(-${step * 420}px)` }}>

                    {/* SLIDE 1 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div><Image src={Frame1} alt="Service" className="rounded-xl w-full" /></div>
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-3xl font-extrabold leading-tight">Social Media <br /> Management</h1>
                            <span onClick={() => setActiveServiceId(1)} className="text-[12px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-3xl font-extrabold leading-tight">Performance <br /> Marketing</h1>
                            <span onClick={() => setActiveServiceId(4)} className="text-[12px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                        <div><Image src={Frame2} alt="Service" className="rounded-xl w-full" /></div>
                    </div>

                    {/* SLIDE 3 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div><Image src={Frame3} alt="Service" className="rounded-xl w-full" /></div>
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-3xl font-extrabold leading-tight">Search Engine <br /> Optimisation</h1>
                            <span onClick={() => setActiveServiceId(2)} className="text-[12px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                    </div>

                    {/* SLIDE 4 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div>
                            <span className="text-[#8D010D] font-cabinet text-xl font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-3xl font-extrabold leading-tight">Branding & <br /> Identity</h1>
                            <span onClick={() => setActiveServiceId(5)} className="text-[12px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                        <div><Image src={Frame4} alt="Service" className="rounded-xl w-full" /></div>
                    </div>

                    {/* SLIDE 5 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div><Image src={Frame5} alt="Service" className="rounded-xl w-full" /></div>
                        <div>
                            <span className="text-[#8D010D] font-cabinet text-xl font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-3xl font-extrabold leading-tight">Reels & Video <br /> Content</h1>
                            <span onClick={() => setActiveServiceId(3)} className="text-[12px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                    </div>

                    {/* SLIDE 6 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div>
                            <span className="text-[#8D010D] font-cabinet text-xl font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-3xl font-extrabold leading-tight">Influencer <br /> Collaborations</h1>
                            <span onClick={() => setActiveServiceId(6)} className="text-[12px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                        <div><Image src={Frame6} alt="Service" className="rounded-xl w-full" /></div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                MOBILE — original animation untouched
            ════════════════════════════════════════ */}
            <section className='block md:hidden flex-col w-full py-12 px-12'>
                <h1 className={"text-[#8D010D] text-center mb-2 transition-all font-bold font-satoshi duration-[1500ms] text-3xl"}>
                    Our Services
                </h1>
                <p className="text-[#8D010D] text-1xl mb-2 text-center">
                    We help brands grow and get noticed with
                </p>
            </section>

            <section className="w-[90%] h-[200px] mx-auto py-10 block md:hidden" style={{ overflow: "hidden" }}>
                <div className={`transition-transform duration-[1200ms] ease-out`} style={{ transform: `translateY(-${step * 420}px)` }}>

                    {/* SLIDE 1 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div><Image src={Frame1} alt="Service" className="rounded-xl w-full" /></div>
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-1xl font-extrabold leading-tight">Social Media <br /> Management</h1>
                            <span onClick={() => setActiveServiceId(1)} className="text-[11px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-1xl font-extrabold leading-tight">Performance <br /> Marketing</h1>
                            <span onClick={() => setActiveServiceId(4)} className="text-[11px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                        <div><Image src={Frame2} alt="Service" className="rounded-xl w-full" /></div>
                    </div>

                    {/* SLIDE 3 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div><Image src={Frame3} alt="Service" className="rounded-xl w-full" /></div>
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-2xl font-extrabold leading-tight">Search Engine <br /> Optimisation</h1>
                            <span onClick={() => setActiveServiceId(2)} className="text-[11px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                    </div>

                    {/* SLIDE 4 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div>
                            <span className="text-[#8D010D] font-cabinet text-xl font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-2xl font-extrabold leading-tight">Branding & <br /> Identity</h1>
                            <span onClick={() => setActiveServiceId(5)} className="text-[11px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                        <div><Image src={Frame4} alt="Service" className="rounded-xl w-full" /></div>
                    </div>

                    {/* SLIDE 5 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div><Image src={Frame5} alt="Service" className="rounded-xl w-full" /></div>
                        <div>
                            <span className="text-[#8D010D] text-xl font-cabinet font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-2xl font-extrabold leading-tight">Reels & Video <br /> Content</h1>
                            <span onClick={() => setActiveServiceId(3)} className="text-[11px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                    </div>

                    {/* SLIDE 6 */}
                    <div className="grid grid-cols-2 gap-10 h-[420px]">
                        <div>
                            <span className="text-[#8D010D] font-cabinet text-xl font-extrabold">✦</span>
                            <h1 className="text-[#8D010D] font-cabinet text-2xl font-extrabold leading-tight">Influencer <br /> Collaborations</h1>
                            <span onClick={() => setActiveServiceId(6)} className="text-[11px] text-[#8D010D] underline cursor-pointer mt-1 block">View More</span>
                        </div>
                        <div><Image src={Frame6} alt="Service" className="rounded-xl w-full" /></div>
                    </div>
                </div>

            </section>
            <div className="max-w-7xl flex items-center justify-end h-full mt-10" onClick={() => navigation.navigate("/services")}>
                <span className="px-4 py-2 bg-[#8D010D] text-white text-sm font-semibold rounded-lg cursor-pointer flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md">
                    View More
                    <span>→</span>
                </span>
            </div>

        </div>
    )
}