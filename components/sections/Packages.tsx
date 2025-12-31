"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Button } from "@/components/ui/button";
import {
    Diamond, Gem, CircleDot, Sparkles, Shell,
    ChevronDown, ChevronUp, Gift, Check, ArrowRight, X, Sparkle
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function Packages() {
    const { t, language } = useLanguage();
    const isMobile = useIsMobile();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const [viewingPackage, setViewingPackage] = useState<any>(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    useEffect(() => {
        if (!isMobile || !isAutoScrolling) return;

        const container = scrollRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isMobile, isAutoScrolling]);

    const packages = [
        {
            id: "diamond",
            icon: <Diamond className="w-10 h-10" />,
            tier: "elite",
            priceValue: "$15,000+",
            color: "from-gold/20 to-black",
            accent: "gold"
        },
        {
            id: "emerald",
            icon: <Gem className="w-10 h-10" />,
            tier: "popular",
            priceValue: "$8,500+",
            color: "from-[#064e3b]/30 to-black",
            accent: "#10b981"
        },
        {
            id: "sapphire",
            icon: <CircleDot className="w-10 h-10" />,
            tier: "standard",
            priceValue: "$4,000+",
            color: "from-blue-900/30 to-black",
            accent: "#3b82f6"
        },
        {
            id: "ruby",
            icon: <Sparkles className="w-10 h-10" />,
            tier: "popular",
            priceValue: "Custom Quote",
            color: "from-red-900/30 to-black",
            accent: "#ef4444"
        },
        {
            id: "pearl",
            icon: <Shell className="w-10 h-10" />,
            tier: "standard",
            priceValue: "$2,500+",
            color: "from-slate-400/20 to-black",
            accent: "#cbd5e1"
        },
    ];

    const handleSelectPackage = (packageId: string) => {
        window.location.href = 'tel:0989681490';
    };

    const toggleAddon = (addonId: string) => {
        setSelectedAddons((prev) =>
            prev.includes(addonId)
                ? prev.filter((id) => id !== addonId)
                : [...prev, addonId]
        );
    };

    return (
        <section id="packages" className="py-20 md:py-32 bg-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-magenta/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll className="text-center mb-24">
                    <p className="text-gold text-xs tracking-[0.6em] uppercase mb-6 font-bold">
                        {t.packages.sectionLabel}
                    </p>
                    <h2 className={cn(
                        "text-4xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight",
                        language === 'am' ? 'amharic' : 'font-playfair'
                    )}>
                        {t.packages.title}
                    </h2>
                    <p className="text-white/40 text-xl max-w-2xl mx-auto italic font-light">
                        {t.packages.subtitle}
                    </p>
                </RevealOnScroll>

                {/* Bento Grid Layout - Horizontal scroll on mobile */}
                <div className="relative group/slider">
                    {/* Enhanced Mobile Swipe Hint */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0.4, 1, 0.4], x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="md:hidden flex items-center gap-3 mb-8 text-gold px-4 justify-end"
                    >
                        <span className="text-[10px] tracking-[0.4em] font-black uppercase whitespace-nowrap">
                            {language === 'am' ? 'ለበለጠ ዝርዝር ይግለጡ' : 'Swipe for More'}
                        </span>
                        <div className="w-12 h-[1px] bg-gold/50 relative">
                            <motion.div
                                animate={{ left: ["0%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute top-0 w-2 h-[1.5px] bg-gold shadow-[0_0_10px_#c8a95d]"
                            />
                        </div>
                    </motion.div>

                    <div
                        ref={scrollRef}
                        onTouchStart={() => setIsAutoScrolling(false)}
                        onMouseDown={() => setIsAutoScrolling(false)}
                        className="md:grid md:grid-cols-6 md:gap-6 lg:gap-8 flex overflow-x-auto md:overflow-visible pb-12 md:pb-0 gap-6 custom-scrollbar snap-x snap-mandatory scroll-px-6 md:scroll-px-0"
                    >
                        {packages.map((pkg, idx) => {
                            const pkgData = (t.packages as any)[pkg.id];
                            const isDiamond = pkg.id === "diamond";
                            const isEmerald = pkg.id === "emerald";

                            return (
                                <motion.div
                                    key={pkg.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: idx * 0.1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    style={{ borderColor: pkg.accent + '33' } as any}
                                    className={cn(
                                        "relative group rounded-[40px] overflow-hidden p-8 md:p-10 flex flex-col transition-all duration-500 hover:translate-y-[-8px] shrink-0 snap-center",
                                        "w-[80vw] md:w-auto border", // Adjusted to 80vw for a better "peek" of the next card
                                        isDiamond ? "md:col-span-4 min-h-[600px]" : "md:col-span-2",
                                        "bg-gradient-to-br",
                                        pkg.color
                                    )}
                                >
                                    {/* Badge for Featured */}
                                    {(isDiamond || isEmerald) && (
                                        <div className={cn(
                                            "absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-md",
                                            isDiamond ? "bg-gold text-black" : "bg-magenta text-white"
                                        )}>
                                            {isDiamond ? t.packages.eliteSelection : t.packages.mostPopular}
                                        </div>
                                    )}

                                    <div className="mb-10 scale-125 origin-left" style={{ color: pkg.accent }}>{pkg.icon}</div>

                                    <div className="mb-auto">
                                        <h3 className={cn(
                                            "text-4xl mb-3 tracking-tight text-white",
                                            language === 'am' ? 'amharic text-3xl' : 'font-playfair'
                                        )}>
                                            {pkgData.name}
                                        </h3>
                                        <p className="text-white/50 text-sm mb-6 leading-relaxed max-w-sm">
                                            {pkgData.description}
                                        </p>
                                        <div className="flex items-baseline gap-2 mb-8">
                                            <span className="text-3xl font-medium" style={{ color: pkg.accent }}>{pkg.priceValue}</span>
                                        </div>

                                        {/* Features Preview */}
                                        <div className="space-y-4 mb-8">
                                            {pkgData.features.slice(0, 3).map((feature: string, i: number) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: pkg.accent }} />
                                                    <span className="text-xs text-white/60 font-light tracking-wide line-clamp-1">{feature}</span>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => setViewingPackage({ ...pkgData, ...pkg })}
                                                className="text-white/80 text-[10px] tracking-[0.2em] font-bold uppercase mt-4 flex items-center gap-2 hover:gap-4 transition-all"
                                                style={{ color: pkg.accent }}
                                            >
                                                {t.packages.seeDetailedOffering} <ArrowRight className="w-3 h-3" />
                                            </button>
                                        </div>

                                        {/* Gifts Box */}
                                        {pkgData.gifts && pkgData.gifts.length > 0 && (
                                            <div className="mb-10 bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden group/gifts h-40">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="p-2 rounded-xl bg-white/5" style={{ color: pkg.accent }}>
                                                        <Gift className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase" style={{ color: pkg.accent }}>{t.packages.giftsIncluded}</span>
                                                </div>
                                                <div className="space-y-3">
                                                    {pkgData.gifts.slice(0, 2).map((gift: string, i: number) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: pkg.accent }} />
                                                            <span className="text-[11px] text-white/80 font-medium italic line-clamp-1">{gift}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                                    <Sparkle className="w-12 h-12 group-hover/gifts:rotate-45 transition-transform duration-1000" style={{ color: pkg.accent }} />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => handleSelectPackage(pkg.id)}
                                        style={{ backgroundColor: isDiamond ? pkg.accent : 'transparent', color: isDiamond ? 'black' : 'white', borderColor: isDiamond ? 'transparent' : 'rgba(255,255,255,0.1)' } as any}
                                        className={cn(
                                            "w-full py-5 rounded-2xl flex items-center justify-center gap-2 group/btn transition-all duration-500 font-bold tracking-[0.2em] uppercase text-[11px]",
                                            !isDiamond && "border hover:bg-white hover:text-black"
                                        )}
                                    >
                                        {t.packages.selectPackage}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                    {/* Visual indicators for mobile */}
                    <div className="md:hidden flex justify-center gap-3 mt-4">
                        {packages.map((pkg, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-gold/20 transition-all duration-500"
                                style={{ backgroundColor: i === 0 ? pkg.accent : undefined }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Package Details Modal */}
            <AnimatePresence>
                {viewingPackage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-2xl"
                        onClick={() => setViewingPackage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[40px] w-full max-w-4xl p-8 md:p-16 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Improved Close Button - Moved lower for better visibility/reachability */}
                            <button
                                onClick={() => setViewingPackage(null)}
                                className="sticky top-8 md:top-0 float-right mb-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all z-50 border border-white/20 backdrop-blur-xl shadow-2xl"
                            >
                                <X className="w-6 h-6 md:w-8 md:h-8" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-12 md:gap-16 clear-both">
                                <div>
                                    <div className="mb-8" style={{ color: viewingPackage.accent }}>{viewingPackage.icon}</div>
                                    <h3 className={cn(
                                        "text-4xl md:text-5xl text-white mb-6",
                                        language === 'am' ? 'amharic' : 'font-playfair'
                                    )}>
                                        {viewingPackage.name}
                                    </h3>
                                    <p className="font-bold tracking-[0.4em] uppercase text-sm mb-8" style={{ color: viewingPackage.accent }}>{viewingPackage.priceValue}</p>
                                    <p className="text-white/60 text-lg font-light leading-relaxed mb-12 italic">
                                        "{viewingPackage.description}"
                                    </p>

                                    <Button
                                        variant="magenta"
                                        size="xl"
                                        className="w-full rounded-2xl h-16 text-sm tracking-widest"
                                        onClick={() => {
                                            handleSelectPackage(viewingPackage.id);
                                            setViewingPackage(null);
                                        }}
                                    >
                                        {t.packages.chooseThisPackage}
                                    </Button>
                                </div>

                                <div className="space-y-12">
                                    <div>
                                        <h4 className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold mb-8">{t.packages.whatIsIncluded}</h4>
                                        <ul className="space-y-6">
                                            {viewingPackage.features.map((feature: string, i: number) => (
                                                <li key={i} className="flex items-start gap-4 text-white/80">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: viewingPackage.accent }} />
                                                    <span className="text-sm font-light tracking-wide">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {viewingPackage.gifts && viewingPackage.gifts.length > 0 && (
                                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8" style={{ borderColor: viewingPackage.accent + '33' }}>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2 rounded-xl bg-white/5" style={{ color: viewingPackage.accent }}>
                                                    <Gift className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-[10px] tracking-[0.6em] uppercase font-bold" style={{ color: viewingPackage.accent }}>{t.packages.exclusiveGifts}</h4>
                                            </div>
                                            <ul className="space-y-4">
                                                {viewingPackage.gifts.map((gift: string, i: number) => (
                                                    <li key={i} className="flex items-center gap-4 text-white">
                                                        <Sparkles className="w-4 h-4 opacity-50" style={{ color: viewingPackage.accent }} />
                                                        <span className="text-sm font-bold tracking-tight italic">{gift}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Secondary Close Button at bottom for reachability */}
                            <div className="mt-16 pt-8 border-t border-white/5 flex justify-center">
                                <button
                                    onClick={() => setViewingPackage(null)}
                                    className="text-white/30 hover:text-white text-xs tracking-[0.4em] uppercase font-bold transition-colors"
                                >
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Add-ons Section - Redesigned to match image, horizontal scroll on mobile */}
            <div className="container mx-auto px-6 mt-40 relative z-10">
                <RevealOnScroll className="text-center mb-20">
                    <h3 className={cn(
                        "text-4xl md:text-5xl text-white mb-6 tracking-wide",
                        language === 'am' ? 'amharic' : 'font-playfair uppercase'
                    )}>
                        {t.addons.title}
                    </h3>
                    <p className="text-white/50 italic text-lg font-light">
                        {t.addons.subtitle}
                    </p>
                </RevealOnScroll>

                <div className="relative group/addons">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 flex overflow-x-auto md:overflow-visible pb-12 md:pb-0 gap-4 custom-scrollbar snap-x snap-mandatory">
                        {t.addons.items.map((addon: any, index: number) => (
                            <motion.div
                                key={addon.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => toggleAddon(addon.id)}
                                className={cn(
                                    "group cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex items-start gap-6 relative overflow-hidden shrink-0 snap-center",
                                    "w-[80vw] md:w-auto", // Fixed width on mobile for horizontal scroll
                                    selectedAddons.includes(addon.id)
                                        ? "bg-white/[0.08] border-gold/50"
                                        : "bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                                )}
                            >
                                {/* Selection Indicator Circle */}
                                <div className={cn(
                                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-1 shrink-0",
                                    selectedAddons.includes(addon.id) ? "border-gold bg-gold" : "border-white/20 group-hover:border-white/40"
                                )}>
                                    {selectedAddons.includes(addon.id) && <Check className="w-3 h-3 text-black stroke-[3px]" />}
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className={cn(
                                            "text-white font-bold tracking-widest text-sm uppercase group-hover:text-gold transition-colors",
                                            language === 'am' ? 'amharic text-base' : 'font-playfair'
                                        )}>
                                            {addon.name}
                                        </h4>
                                        <span className="text-[11px] font-bold text-gold tracking-tight ml-4">
                                            {addon.price}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed font-light">
                                        {addon.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
