"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
    { id: 1, url: "/assets/Screenshot_20251231_130212_Instagram.jpg", key: "img1", categoryKey: "ritual" },
    { id: 2, url: "/assets/ce82aa5aa53fa0c20d66811c34680302.jpg", key: "img2", categoryKey: "celebration" },
    { id: 3, url: "/assets/Screenshot_20251231_130142_Instagram.jpg", key: "img3", categoryKey: "decor" },
    { id: 4, url: "/assets/ca9f6ad72ef73d4d289d5ea0f8f6465d.jpg", key: "img4", categoryKey: "emotion" },
    { id: 5, url: "/assets/479c93b52cc5568aa4e744a1fdff6c1b.jpg", key: "img5", categoryKey: "moment" },
    { id: 6, url: "/assets/hero-desktop.jpg", key: "img6", categoryKey: "luxury" }
];

export default function Gallery() {
    const { t, language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <section id="gallery" className="py-24 md:py-48 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                    <RevealOnScroll className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-8 h-[1px] bg-gold" />
                            <p className={cn(
                                "text-gold text-[10px] md:text-xs uppercase font-bold tracking-[0.3em]",
                                language === 'am' ? 'amharic tracking-normal' : ''
                            )}>
                                {t.gallery.sectionLabel}
                            </p>
                        </div>
                        <h2 className={cn(
                            "text-5xl md:text-8xl text-black leading-tight tracking-tight",
                            language === 'am' ? 'amharic text-6xl md:text-7xl lg:text-8xl' : 'font-playfair md:tracking-tighter'
                        )}>
                            {t.gallery.title}
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.3} className="max-w-md">
                        <p className={cn(
                            "text-soft-gray text-xl italic font-light leading-relaxed",
                            language === 'am' ? 'amharic text-lg' : ''
                        )}>
                            {t.gallery.subtitle}
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Luxury Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
                    {/* First Large Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="sm:col-span-2 md:col-span-8 md:row-span-2 group relative cursor-pointer overflow-hidden rounded-[24px] md:rounded-[32px] shadow-lg"
                        onClick={() => setSelectedImage(galleryImages[0])}
                    >
                        <div className="aspect-[4/5] sm:aspect-square md:aspect-auto md:h-full overflow-hidden">
                            <img src={galleryImages[0].url} alt="" className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                            <h4 className="text-white text-xl md:text-2xl font-playfair opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                {(t.gallery.images as any)[galleryImages[0].key]}
                            </h4>
                        </div>
                    </motion.div>

                    {/* Subsequent Items */}
                    {galleryImages.slice(1).map((img, idx) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className="col-span-1 md:col-span-4 group relative cursor-pointer overflow-hidden rounded-[20px] md:rounded-[24px] shadow-md"
                            onClick={() => setSelectedImage(img)}
                        >
                            <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/3] overflow-hidden">
                                <img src={img.url} alt="" className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-end md:hidden">
                                <h4 className="text-white text-sm font-playfair">{(t.gallery.images as any)[img.key]}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-6 md:p-20 backdrop-blur-2xl"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-10 right-10 text-white/40 hover:text-gold transition-colors p-4 z-50 border border-white/10 rounded-full"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                                <img
                                    src={selectedImage.url}
                                    alt={(t.gallery.images as any)[selectedImage.key]}
                                    className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
                                />
                            </div>
                            <div className="mt-12 text-center">
                                <p className="text-gold tracking-[0.6em] uppercase text-[10px] mb-4 font-bold">
                                    {(t.gallery.categories as any)[selectedImage.categoryKey]}
                                </p>
                                <h3 className={cn(
                                    "text-white text-4xl md:text-6xl mb-8",
                                    language === 'am' ? 'amharic' : 'font-playfair'
                                )}>
                                    {(t.gallery.images as any)[selectedImage.key]}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
