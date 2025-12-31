"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Button } from "@/components/ui/button";

export default function CTA() {
    const { t, language } = useLanguage();

    return (
        <section id="cta" className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-magenta/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-3xl text-center relative z-10 px-6">
                <RevealOnScroll>
                    <div className="mb-6 flex flex-col items-center">
                        <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-bold mb-3">Manifestation</span>
                        <div className="w-8 h-[1px] bg-gold/40" />
                    </div>

                    <h2 className={cn(
                        "text-3xl md:text-5xl text-black mb-8 tracking-tighter leading-tight font-playfair",
                        language === 'am' ? 'amharic text-4xl md:text-5xl' : ''
                    )}>
                        {t.cta.text}
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                        <Button
                            variant="shimmer"
                            size="lg"
                            className="rounded-full tracking-[0.3em] uppercase text-[10px] px-8 py-6"
                            onClick={() => window.location.href = 'tel:0989681490'}
                        >
                            {t.cta.button}
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 border-t border-black/5 pt-12">
                        <div className="flex flex-col items-center">
                            <span className="text-black font-playfair text-base md:text-lg mb-1 italic">Consultation</span>
                            <span className="text-gold text-[7px] md:text-[8px] tracking-widest uppercase font-bold">Complimentary</span>
                        </div>
                        <div className="hidden lg:flex flex-col items-center">
                            <div className="w-px h-8 bg-black/5" />
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-black font-playfair text-base md:text-lg mb-1 italic">Response</span>
                            <span className="text-gold text-[7px] md:text-[8px] tracking-widest uppercase font-bold">Within 24 Hours</span>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
