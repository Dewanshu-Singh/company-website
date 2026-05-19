import localFont from "next/font/local";
import { Geist, Geist_Mono,DM_Sans  } from "next/font/google";
import Navbar from "./componnets/Navbar";
import "./globals.css";
import CustomCursor from "./componnets/CustomCursor";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// IMPORTANT: use absolute paths from /public
const satoshi = localFont({
  src: [
    {
      path: "/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Bold.otf",
      weight: "600",
      style: "normal",
    },
     {
      path: "/fonts/Satoshi-Italic.otf",
      weight: "700",
      style: "italic",
    },
     {
      path: "/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italicBold",
    },
  ],
  variable: "--font-satoshi",
});

const cabinet = localFont({
  src: [
    { path: "/fonts/CabinetGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "/fonts/CabinetGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "/fonts/CabinetGrotesk-Bold.otf", weight: "700", style: "normal" },
    { path: "/fonts/CabinetGrotesk-Extrabold.otf", weight: "800", style: "normal" },
    { path: "/fonts/CabinetGrotesk-Thin.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-cabinet",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${cabinet.variable} antialiased`}
      >
        <CustomCursor/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
