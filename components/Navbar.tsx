"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.packages, href: "#packages" },
        { name: t.nav.gallery, href: "#gallery" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.contact, href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
                isScrolled
                    ? "py-4 mx-6 mt-6 rounded-full border border-white/20 shadow-2xl bg-white/70 backdrop-blur-2xl"
                    : "bg-transparent py-10"
            )}
        >
            <div className="container mx-auto px-8 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-4 cursor-pointer group"
                >
                    <div className="w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <img src="/assets/logo 1.png" alt="Yam Kana Logo" className="h-full w-auto object-contain" />
                    </div>
                    <div>
                        <span className={cn(
                            "text-xl font-playfair tracking-tight block transition-colors duration-500",
                            isScrolled ? "text-magenta" : "text-white"
                        )}>
                            {t.hero.brandName}
                        </span>
                        <span className={cn(
                            "text-[8px] tracking-[0.4em] uppercase font-bold block transition-colors duration-500",
                            isScrolled ? "text-gold" : "text-gold"
                        )}>
                            {t.hero.tagline}
                        </span>
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "text-xs md:text-sm font-black tracking-[0.3em] uppercase transition-all duration-300 relative group",
                                isScrolled ? "text-black hover:text-magenta" : "text-white hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}

                    {/* Language Switcher */}
                    <button
                        onClick={() => setLanguage(language === "am" ? "en" : "am")}
                        className={cn(
                            "flex items-center space-x-2 text-xs font-black tracking-widest uppercase transition-all duration-500 border-2 rounded-full px-6 py-2.5",
                            isScrolled
                                ? "text-magenta border-magenta/40 hover:bg-magenta hover:text-white"
                                : "text-white border-white/40 hover:bg-white hover:text-magenta"
                        )}
                    >
                        <Globe className="w-4 h-4" />
                        <span>{language === "am" ? "EN" : "አማርኛ"}</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={cn(
                        "p-3 rounded-full transition-colors",
                        isScrolled ? "bg-magenta text-white" : "bg-white text-magenta"
                    )}>
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-x-6 top-24 z-50 bg-white/95 backdrop-blur-2xl rounded-[40px] p-12 shadow-2xl lg:hidden flex flex-col space-y-8 border border-black/5"
                    >
                        {/* Improved Close Button - Moved lower for better visibility/reachability */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all z-50 border border-white/20 backdrop-blur-xl shadow-2xl"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-playfair font-black tracking-tight text-magenta hover:text-gold transition-colors text-center"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setLanguage(language === "am" ? "en" : "am");
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-center space-x-3 text-sm font-black tracking-widest uppercase text-gold pt-8 border-t border-black/5"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language === "am" ? "English Version" : "የአማርኛ ስሪት"}</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
