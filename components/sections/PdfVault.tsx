"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { FileText, Download, X, Mail, User, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PdfVault() {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
        // Simulate download after 2 seconds
        setTimeout(() => {
            setIsOpen(false);
            setStep(1);
            setFormData({ name: "", email: "", phone: "" });
        }, 3000);
    };

    return (
        <section className="py-24 md:py-48 bg-white relative overflow-hidden">
            {/* S-Curve Divider Top */}
            <div className="absolute top-0 left-0 right-0 leading-[0] transform rotate-180">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120V60C360 120 720 0 1080 60C1260 90 1380 90 1440 60V120H0Z" fill="black" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-black rounded-[40px] p-12 md:p-24 relative overflow-hidden shadow-2xl">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealOnScroll direction="left">
                            <div>
                                <h2 className={cn(
                                    "text-4xl md:text-6xl text-white mb-8 leading-tight",
                                    language === 'am' ? 'amharic' : 'font-playfair'
                                )}>
                                    Exclusive <span className="text-gold italic">Planning Vault</span>
                                </h2>
                                <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
                                    Gain instant access to our comprehensive wedding planning guide, detailed pricing structures, and sacred ceremony protocols.
                                </p>

                                <ul className="space-y-6 mb-12">
                                    {['Full Pricing Catalog', 'Ceremony Protocol Guide', 'Vendor Selection Checklist'].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-4 text-white/80">
                                            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-gold" />
                                            </div>
                                            <span className="text-sm tracking-wide uppercase font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="shimmer"
                                    size="xl"
                                    className="rounded-full w-full md:w-auto"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <Download className="mr-3 w-5 h-5" />
                                    Access PDF Vault
                                </Button>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll direction="right" delay={0.2}>
                            <div className="relative">
                                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center p-12 backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="w-24 h-24 rounded-3xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8">
                                            <FileText className="w-10 h-10 text-gold" />
                                        </div>
                                        <h3 className="text-white text-xl font-bold tracking-widest uppercase mb-4">Price Catalog 2024</h3>
                                        <p className="text-gold/60 text-xs tracking-[0.3em] uppercase">Digital Edition</p>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-magenta/20 rounded-full blur-3xl" />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-[40px] w-full max-w-lg p-12 relative overflow-hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 text-black/20 hover:text-black transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {step === 1 ? (
                                <form onSubmit={handleSubmit} className="relative z-10">
                                    <div className="text-center mb-12">
                                        <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                                            <Mail className="w-6 h-6 text-gold" />
                                        </div>
                                        <h3 className="text-3xl text-magenta font-playfair mb-4">Unlock the Vault</h3>
                                        <p className="text-soft-gray text-sm">Please provide your details to receive the planning suite.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="relative">
                                            <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold absolute -top-2 left-6 bg-white px-2 z-10">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full px-8 py-4 rounded-2xl border border-gold/20 focus:border-magenta outline-none transition-all pl-12"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                                        </div>

                                        <div className="relative">
                                            <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold absolute -top-2 left-6 bg-white px-2 z-10">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="email@example.com"
                                                className="w-full px-8 py-4 rounded-2xl border border-gold/20 focus:border-magenta outline-none transition-all pl-12"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                                        </div>

                                        <div className="relative">
                                            <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold absolute -top-2 left-6 bg-white px-2 z-10">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+251 ..."
                                                className="w-full px-8 py-4 rounded-2xl border border-gold/20 focus:border-magenta outline-none transition-all pl-12"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="magenta"
                                        size="lg"
                                        className="w-full rounded-2xl mt-12 group"
                                    >
                                        Download Now
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            ) : (
                                <div className="text-center py-12 relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-24 h-24 rounded-full bg-magenta/10 flex items-center justify-center mx-auto mb-8"
                                    >
                                        <Sparkles className="w-10 h-10 text-magenta" />
                                    </motion.div>
                                    <h3 className="text-3xl text-magenta font-playfair mb-4">Starting Download...</h3>
                                    <p className="text-soft-gray text-sm mb-12">Your exclusive planning suite is on its way to your inbox.</p>
                                    <div className="w-full h-1 bg-ivory rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 2.5 }}
                                            className="h-full bg-gold"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #5b1e2d 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* S-Curve Divider Bottom */}
            <div className="absolute bottom-0 left-0 right-0 leading-[0]">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120V60C360 120 720 0 1080 60C1260 90 1380 90 1440 60V120H0Z" fill="black" />
                </svg>
            </div>
        </section>
    );
}
