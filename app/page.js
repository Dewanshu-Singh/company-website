"use client";
import Hero from "./componnets/Hero/Hero";
import Ourservices from "./componnets/Ourservices/Ourservices";
import About from "./componnets/About/About";
import Gallery from "./componnets/Gallery/Gallery";
import Contact from "./componnets/Contact/Contact";
import Footer from "./componnets/Footer/Footer";
import OurClients from "./componnets/OurClient/OurClients";
import Process from "./componnets/Process/Process";
import VideoSection from "./componnets/VideoSection";
import InstagramSection from "./componnets/Instagramsection/Instagramsection";
 // Required for client-side animations in App Router
export default function Home() {
 

  return (
    <div>
      <Hero/>
      <Ourservices/>
      <Gallery/>
      <VideoSection/>
      <InstagramSection/>
      <OurClients/>
      <About/>
      <Process/>
      <Contact/>
      <Footer/>
    </div>
  );
}
