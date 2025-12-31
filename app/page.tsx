"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Packages from "@/components/sections/Packages";
import Gallery from "@/components/sections/Gallery";
import PdfVault from "@/components/sections/PdfVault";
import WhyUs from "@/components/sections/WhyUs";
import AboutUs from "@/components/sections/AboutUs";
import ContactForm from "@/components/sections/ContactForm";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-gold selection:text-magenta">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <AboutUs />
        <Packages />
        <Gallery />
        <WhyUs />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
