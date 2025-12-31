"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
    const { t, language } = useLanguage();

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Images with Color Overlay */}
            <div className="absolute inset-0">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/assets/hero-desktop.jpg" />
                    <img
                        src="/assets/hero-mobile.jpg"
                        alt="Luxury Wedding"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                </picture>
                {/* Gradient Overlay: Magenta to Black */}
                <div className="absolute inset-0 bg-gradient-to-b from-magenta/40 via-black/40 to-black" />
                <div className="absolute inset-0 bg-magenta/10 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-10 animate-floating"
                >
                    <span className="text-gold tracking-[0.8em] uppercase text-xs md:text-sm mb-8 block font-medium">
                        {t.hero.tagline}
                    </span>
                    <div className="w-24 h-[1px] bg-gold/40 mx-auto" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className={cn(
                        "text-7xl md:text-[10rem] text-white mb-10 leading-tight drop-shadow-2xl",
                        language === "am" ? "amharic" : "font-playfair font-normal"
                    )}
                >
                    {t.hero.brandName}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="text-white/80 text-xl md:text-3xl font-light mb-20 max-w-4xl mx-auto italic leading-relaxed"
                >
                    "{t.hero.description}"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    {/* Book Consultancy Button - SHINING GOLD */}
                    <button
                        onClick={() => window.location.href = 'tel:0989681490'}
                        className="group relative px-12 py-6 overflow-hidden rounded-full min-w-[280px] shining-gold-effect shadow-[0_0_30px_rgba(200,169,93,0.3)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-bright to-gold transition-transform duration-500 group-hover:scale-105" />
                        <span className="relative z-10 text-magenta text-sm font-bold tracking-[0.3em] uppercase">
                            {t.hero.cta1}
                        </span>
                        <div className="absolute inset-0 border border-white/20 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                    </button>

                    {/* Download PDF Button */}
                    <button className="group relative px-12 py-6 overflow-hidden rounded-full border-2 border-gold/50 bg-transparent hover:bg-gold/10 transition-all duration-500 min-w-[280px]">
                        <span className="relative z-10 text-white text-sm font-bold tracking-[0.3em] uppercase group-hover:text-gold transition-colors duration-500">
                            {t.hero.cta2}
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase">{language === 'am' ? 'ዝቅ ይበሉ' : 'Explore'}</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-8 bg-gold"
                    />
                </div>
            </motion.div>
        </section>
    );
}
