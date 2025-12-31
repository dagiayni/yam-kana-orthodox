"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutUs() {
    const { t, language } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Ambient Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magenta/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Content Side */}
                    <RevealOnScroll direction="left">
                        <div className="max-w-xl">
                            <p className="text-gold text-xs tracking-[0.5em] uppercase mb-6 font-bold">
                                {t.about.sectionLabel}
                            </p>
                            <h2 className={cn(
                                "text-4xl md:text-6xl text-magenta mb-8 leading-tight",
                                language === 'am' ? 'amharic' : 'font-playfair'
                            )}>
                                {t.about.title}
                            </h2>
                            <p className="text-soft-gray text-lg md:text-xl leading-relaxed mb-12 font-light">
                                {t.about.description || t.about.content}
                            </p>

                            <div className="w-24 h-[1px] bg-gold" />
                        </div>
                    </RevealOnScroll>

                    {/* Video Side */}
                    <RevealOnScroll direction="right" delay={0.2}>
                        <div className="relative group">
                            <div className="relative aspect-[4/5] md:aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                                {!isPlaying ? (
                                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-gold/20 backdrop-blur-sm" />
                                        <motion.button
                                            onClick={() => setIsPlaying(true)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-24 h-24 rounded-full bg-gold text-white flex items-center justify-center shadow-xl z-20"
                                        >
                                            <Play className="w-8 h-8 fill-white ml-1" />
                                        </motion.button>
                                        <img
                                            src="/assets/Screenshot_20251231_130212_Instagram.jpg"
                                            alt="Wedding Experience"
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]"
                                        />
                                    </div>
                                ) : (
                                    <video
                                        src="/assets/about-vid.mp4"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        autoPlay
                                        controls
                                        playsInline
                                    />
                                )}
                            </div>

                            {/* Floating Accent */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-[30px] border border-gold/20 -z-10 backdrop-blur-md"
                            />
                        </div>
                    </RevealOnScroll>
                </div>
            </div>

            {/* S-Curve Divider Bottom */}
            <div className="absolute bottom-0 left-0 right-0 leading-[0]">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120V60C360 120 720 0 1080 60C1260 90 1380 90 1440 60V120H0Z" fill="black" />
                </svg>
            </div>
        </section>
    );
}
