"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { cn } from "@/lib/utils";

export default function BrandEssence() {
    const { t, language } = useLanguage();

    return (
        <section className="py-24 md:py-48 bg-white relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[150px] -mr-64 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] -ml-64 -mb-32" />

            {/* S-Curve Divider Top */}
            <div className="absolute top-0 left-0 right-0 leading-[0] transform rotate-180">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120V60C360 120 720 0 1080 60C1260 90 1380 90 1440 60V120H0Z" fill="black" />
                </svg>
            </div>

            <div className="container mx-auto max-w-5xl text-center px-6 relative z-10">
                <RevealOnScroll>
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-gold text-[10px] md:text-sm tracking-[0.6em] uppercase mb-8 font-bold">
                            {t.brandEssence.title}
                        </span>
                        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        {/* Artistic Large Quotes */}
                        <div className="absolute -top-12 -left-2 md:-top-16 md:-left-16 text-gold/20 text-[120px] md:text-[200px] font-playfair pointer-events-none select-none italic">“</div>
                        <div className="absolute -bottom-24 -right-2 md:-bottom-32 md:-right-16 text-gold/20 text-[120px] md:text-[200px] font-playfair pointer-events-none select-none italic">”</div>

                        <p className={cn(
                            "text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-magenta leading-[1.3] md:leading-[1.3] relative z-10 font-normal tracking-tight px-4 md:px-0",
                            language === 'am' ? 'amharic' : 'font-playfair italic'
                        )}>
                            {t.brandEssence.content}
                        </p>
                    </motion.div>

                    <div className="mt-32 flex justify-center items-center space-x-12">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-[1px] bg-gold/40"
                        />
                        <div className="p-3 border border-gold/40 rounded-full animate-pulse">
                            <div className="w-2 h-2 bg-magenta rounded-full" />
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-[1px] bg-gold/40"
                        />
                    </div>
                </RevealOnScroll>
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
