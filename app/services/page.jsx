"use client";
import Footer from "../componnets/Footer/Footer";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "01",
    icon: "◈",
    title: "Social Media Management",
    tagline: "Consistent presence. Real community.",
    description:
      "Your social channels should work for you 24/7. We run them with the precision of a newsroom and the creativity of a studio.",
    features: [
      "Platform-specific content calendars (IG, LinkedIn, X)",
      "Daily community management & engagement",
      "Monthly analytics reports with clear next steps",
      "A/B-tested captions and posting times",
    ],
    // Free-use Pexels/Pixabay MP4 videos relevant to each service
    video: "https://pixabay.com/videos/download/x-1360_medium.mp4",
  },
  {
    id: "02",
    icon: "◎",
    title: "Search Engine Optimisation",
    tagline: "Be found before your competitors.",
    description:
      "Traffic you don't pay for, every month, forever. We build SEO foundations that compound and keep delivering over time.",
    features: [
      "Technical SEO audit & on-page optimisation",
      "Keyword research focused on buyer intent",
      "Content strategy aligned with search demand",
      "Monthly ranking reports & roadmap updates",
    ],
    video: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4",
  },
  {
    id: "03",
    icon: "▶",
    title: "Reels & Video Content",
    tagline: "Scroll-stopping. Share-worthy. Always.",
    description:
      "Video is the fastest way to build trust at scale. We concept, script, direct, and edit content that earns its reach.",
    features: [
      "Full-service Reels production (concept to delivery)",
      "Brand-consistent editing & motion graphics",
      "Platform-optimised formats (Reels, Shorts, TikTok)",
      "Hook-driven scripting to maximise watch time",
    ],
    video: "https://videos.pexels.com/video-files/2795405/2795405-uhd_2560_1440_25fps.mp4",
  },
  {
    id: "04",
    icon: "⚡",
    title: "Performance Marketing",
    tagline: "Every rupee works harder.",
    description:
      "Ads that don't just run — they convert. We manage your paid media with obsessive attention to ROI, not just reach.",
    features: [
      "Meta, Google & YouTube ad campaign management",
      "Creative testing & audience segmentation",
      "Retargeting sequences that close the loop",
      "Transparent spend reporting with real attribution",
    ],
    video: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4",
  },
  {
    id: "05",
    icon: "✦",
    title: "Branding & Identity",
    tagline: "Look like the leader. Feel like the choice.",
    description:
      "Your visual identity is your first impression, last impression, and everything in between. We build brands that own the room.",
    features: [
      "Logo design & full visual identity systems",
      "Brand voice, tone & messaging frameworks",
      "Social media kit & brand guidelines",
      "Packaging, pitch decks & collateral design",
    ],
    video: "https://videos.pexels.com/video-files/3693424/3693424-uhd_2560_1440_25fps.mp4",
  },
  {
    id: "06",
    icon: "◉",
    title: "Influencer Collaborations",
    tagline: "Reach people through faces they trust.",
    description:
      "We connect your brand with creators whose audiences are actually your customers — and manage everything from outreach to results.",
    features: [
      "Verified creator sourcing & vetting",
      "Campaign briefing, contracts & coordination",
      "Performance tracking (reach, saves, conversions)",
      "Micro, macro & niche influencer strategies",
    ],
    video: "https://videos.pexels.com/video-files/3988541/3988541-uhd_2560_1440_25fps.mp4",
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (hovered) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        position: "relative",
        overflow: "hidden",
        borderRadius: "3px",
        border: "1.5px solid",
        borderColor: hovered ? "transparent" : "#e8e0e0",
        boxShadow: hovered
          ? "0 24px 64px rgba(141,1,13,0.22)"
          : "0 2px 16px rgba(0,0,0,0.04)",
        cursor: "default",
        transition: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src={service.video}
        muted
        loop
        playsInline
        preload="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.6s ease",
          zIndex: 0,
        }}
      />

      {/* Dark overlay on video */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: hovered
          ? "linear-gradient(135deg, rgba(141,1,13,0.82) 0%, rgba(0,0,0,0.75) 100%)"
          : "transparent",
        zIndex: 1,
        transition: "background 0.5s ease",
      }} />

      {/* Static white bg when not hovered */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "#fff",
        opacity: hovered ? 0 : 1,
        transition: "opacity 0.5s ease",
        zIndex: 0,
      }} />

      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 60, height: 60,
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(141,1,13,0.05)",
        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        transition: "all 0.45s",
        zIndex: 2,
      }} />

      {/* Card content */}
      <div style={{ position: "relative", zIndex: 3, padding: "40px 36px" }}>
        {/* Number + Icon */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <span style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: hovered ? "rgba(255,255,255,0.5)" : "#8d010d",
            transition: "color 0.3s",
          }}>
            {service.id}
          </span>
          <span style={{
            fontSize: 28,
            color: hovered ? "rgba(255,255,255,0.95)" : "#8d010d",
            display: "inline-block",
            transform: hovered ? "scale(1.15) rotate(15deg)" : "scale(1) rotate(0deg)",
            transition: "all 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
          }}>
            {service.icon}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 22,
          fontWeight: 500,
          color: hovered ? "#fff" : "#0a0a0a",
          margin: "0 0 8px",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          transition: "color 0.3s",
        }}>
          {service.title}
        </h3>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif",
          fontSize: 12,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: hovered ? "rgba(255,255,255,0.7)" : "#8d010d",
          margin: "0 0 20px",
          transition: "color 0.3s",
        }}>
          {service.tagline}
        </p>

        {/* Divider */}
        <div style={{
          height: 1,
          background: hovered ? "rgba(255,255,255,0.2)" : "#f0e8e8",
          marginBottom: 20,
          transition: "background 0.3s",
        }} />

        {/* Description */}
        <p style={{
          fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif",
          fontSize: 14.5,
          color: hovered ? "rgba(255,255,255,0.85)" : "#555",
          lineHeight: 1.7,
          margin: "0 0 24px",
          transition: "color 0.3s",
        }}>
          {service.description}
        </p>

        {/* Features */}
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {service.features.map((f, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif",
              fontSize: 13.5,
              color: hovered ? "rgba(255,255,255,0.78)" : "#444",
              marginBottom: 9,
              lineHeight: 1.5,
              transition: "color 0.3s",
            }}>
              <span style={{
                color: hovered ? "rgba(255,255,255,0.5)" : "#8d010d",
                marginTop: 3,
                flexShrink: 0,
                fontSize: 9,
                transition: "color 0.3s",
              }}>→</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Instrument+Sans:wght@400;500;600&display=swap');
       
        body { background: #fff; }
      `}</style>

      <section style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "80px 48px",
      }}>
        {/* Section Heading */}
        <div style={{ marginBottom: 64, maxWidth: 640 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
          }}>
            <div style={{ width: 28, height: 1.5, background: "#8d010d" }} />
            <span style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8d010d",
            }}>
              Our Services
            </span>
          </div>

          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 400,
            color: "#0a0a0a",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: 20,
          }}>
            Six Ways We Scale<br />
            <em style={{ color: "#8d010d", fontStyle: "italic" }}>Your Brand.</em>
          </h2>

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 16,
            color: "#666",
            lineHeight: 1.75,
          }}>
            Pick one, stack them all each service is designed to plug into your growth strategy and deliver measurable results.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: 24,
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}