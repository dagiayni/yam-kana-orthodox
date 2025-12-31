"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ShieldCheck, Sparkles, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhyUs() {
    const { t, language } = useLanguage();

    const icons = [
        <Heart className="w-8 h-8" />,
        <Sparkles className="w-8 h-8" />,
        <ShieldCheck className="w-8 h-8" />
    ];

    return (
        <section className="py-20 md:py-32 bg-black relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-magenta/5 rounded-full blur-[100px] -mr-48 -mt-24 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll className="text-center mb-20">
                    <p className="text-gold text-xs tracking-[0.6em] uppercase mb-6 font-bold">The Difference</p>
                    <h2 className={cn(
                        "text-4xl md:text-6xl text-white mb-8 tracking-tighter",
                        language === 'am' ? 'amharic text-5xl md:text-6xl' : 'font-playfair'
                    )}>
                        {t.whyUs.title}
                    </h2>
                    <div className="w-24 h-[1px] bg-gold/30 mx-auto" />
                </RevealOnScroll>

                <div className="md:grid md:grid-cols-3 md:gap-8 flex overflow-x-auto md:overflow-visible pb-8 md:pb-0 gap-4 custom-scrollbar snap-x">
                    {t.whyUs.points.map((point: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={cn(
                                "relative group p-8 md:p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/[0.08] transition-all duration-500 shrink-0 snap-start",
                                "w-[80vw] md:w-auto" // Fixed width on mobile for horizontal scroll
                            )}
                        >
                            <div className="mb-8 text-gold p-4 bg-gold/5 rounded-2xl w-fit border border-gold/10 group-hover:scale-110 transition-transform duration-500">
                                {icons[idx]}
                            </div>

                            <div className="absolute top-10 right-10">
                                <span className="text-gold/20 text-4xl md:text-5xl font-playfair font-bold">0{idx + 1}</span>
                            </div>

                            <h3 className={cn(
                                "text-xl md:text-2xl mb-4 tracking-wide text-white font-bold group-hover:text-gold transition-colors",
                                language === 'am' ? 'amharic text-2xl md:text-3xl' : 'uppercase'
                            )}>
                                {point.title}
                            </h3>

                            <p className="text-white/80 leading-relaxed text-sm md:text-base font-light">
                                {point.text}
                            </p>

                            <motion.div
                                className="mt-8 h-[1px] bg-gold/20"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* S-Curve Divider Bottom */}
            <div className="absolute bottom-0 left-0 right-0 leading-[0]">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120V60C360 120 720 0 1080 60C1260 90 1380 90 1440 60V120H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
