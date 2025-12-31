"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const { t, language } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: ""
    });

    useEffect(() => {
        const handlePackageSelection = (e: any) => {
            if (e.detail?.packageId) {
                setFormData(prev => ({ ...prev, package: e.detail.packageId }));
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }
        };
        window.addEventListener('packageSelected', handlePackageSelection);
        return () => window.removeEventListener('packageSelected', handlePackageSelection);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const FloatingInput = ({ label, id, type = "text", required = true }: any) => (
        <div className="relative group mb-8">
            <input
                type={type}
                id={id}
                required={required}
                className={cn(
                    "w-full bg-transparent border-b-2 border-black/10 py-4 outline-none transition-all duration-500",
                    "focus:border-magenta text-black text-lg font-light",
                    (formData as any)[id] ? "border-magenta/40" : ""
                )}
                placeholder=" "
                value={(formData as any)[id]}
                onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
                onFocus={() => setActiveField(id)}
                onBlur={() => setActiveField(null)}
            />
            <label
                htmlFor={id}
                className={cn(
                    "absolute left-0 top-4 text-black/30 pointer-events-none transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-bold",
                    activeField === id || (formData as any)[id]
                        ? "-translate-y-8 text-magenta scale-90"
                        : "group-hover:text-black/50"
                )}
            >
                {label}
            </label>
            <div className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-magenta transition-all duration-700 ease-out",
                activeField === id ? "w-full" : "w-0"
            )} />
        </div>
    );

    return (
        <section id="contact" className="py-24 md:py-48 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
                    {/* Information Side */}
                    <RevealOnScroll direction="left">
                        <div className="flex flex-col h-full justify-between py-12">
                            <div>
                                <p className="text-gold text-xs tracking-[0.6em] uppercase mb-8 font-bold">Get in touch</p>
                                <h2 className={cn(
                                    "text-5xl md:text-8xl text-black mb-12 leading-none tracking-tighter",
                                    language === 'am' ? 'amharic' : 'font-playfair'
                                )}>
                                    Let's Start Your <span className="text-gold italic">Journey</span>
                                </h2>
                                <p className="text-soft-gray text-xl font-light leading-relaxed max-w-md">
                                    Whether you have a date fixed or just dreaming, our team is ready to craft your holy union.
                                </p>
                            </div>

                            <div className="mt-24 space-y-12">
                                <div>
                                    <p className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Direct Office</p>
                                    <p className="text-2xl text-black font-playfair">Addis Ababa, Ethiopia</p>
                                    <p className="text-black/60 font-light mt-2">+251 900 000 000</p>
                                </div>
                                <div>
                                    <p className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Email Inquiry</p>
                                    <p className="text-2xl text-black font-playfair underline underline-offset-8 decoration-gold/30">concierge@yamkana.com</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Form Side */}
                    <RevealOnScroll direction="right" delay={0.2}>
                        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-black/5">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit}>
                                    <FloatingInput label="Full Name" id="name" />
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <FloatingInput label="Email Address" id="email" type="email" />
                                        <FloatingInput label="Phone Number" id="phone" type="tel" />
                                    </div>

                                    <div className="relative group mb-12">
                                        <select
                                            id="package"
                                            className={cn(
                                                "w-full bg-transparent border-b-2 border-black/10 py-4 outline-none transition-all duration-500 appearance-none pointer-cursor",
                                                "focus:border-magenta text-black text-lg font-light",
                                                formData.package ? "border-magenta/40" : ""
                                            )}
                                            value={formData.package}
                                            onChange={(e) => setFormData(prev => ({ ...prev, package: e.target.value }))}
                                            onFocus={() => setActiveField('package')}
                                            onBlur={() => setActiveField(null)}
                                        >
                                            <option value="" disabled className="text-black/30">Select a Package</option>
                                            <option value="diamond">Diamond (Elite)</option>
                                            <option value="emerald">Emerald (Popular)</option>
                                            <option value="sapphire">Sapphire (Standard)</option>
                                            <option value="ruby">Ruby (Custom)</option>
                                            <option value="pearl">Pearl (Standard)</option>
                                        </select>
                                        <label
                                            htmlFor="package"
                                            className={cn(
                                                "absolute left-0 top-4 text-black/30 pointer-events-none transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-bold",
                                                activeField === 'package' || formData.package
                                                    ? "-translate-y-8 text-magenta scale-90"
                                                    : ""
                                            )}
                                        >
                                            Interested Package
                                        </label>
                                        <div className={cn(
                                            "absolute bottom-0 left-0 h-[2px] bg-magenta transition-all duration-700 ease-out",
                                            activeField === 'package' ? "w-full" : "w-0"
                                        )} />
                                    </div>

                                    <div className="relative group mb-16">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className={cn(
                                                "w-full bg-transparent border-b-2 border-black/10 py-4 outline-none transition-all duration-500 resize-none",
                                                "focus:border-magenta text-black text-lg font-light",
                                                formData.message ? "border-magenta/40" : ""
                                            )}
                                            placeholder=" "
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                            onFocus={() => setActiveField('message')}
                                            onBlur={() => setActiveField(null)}
                                        />
                                        <label
                                            htmlFor="message"
                                            className={cn(
                                                "absolute left-0 top-4 text-black/30 pointer-events-none transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-bold",
                                                activeField === 'message' || formData.message
                                                    ? "-translate-y-8 text-magenta scale-90"
                                                    : ""
                                            )}
                                        >
                                            Tell us more about your dream wedding
                                        </label>
                                        <div className={cn(
                                            "absolute bottom-0 left-0 h-[2px] bg-magenta transition-all duration-700 ease-out",
                                            activeField === 'message' ? "w-full" : "w-0"
                                        )} />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="magenta"
                                        size="xl"
                                        className="w-full rounded-2xl group flex items-center justify-center space-x-4"
                                    >
                                        <span>Send Inquiry</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-24"
                                >
                                    <div className="w-24 h-24 rounded-full bg-magenta/10 flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 className="w-12 h-12 text-magenta" />
                                    </div>
                                    <h3 className="text-4xl text-black font-playfair mb-6">Inquiry Received</h3>
                                    <p className="text-soft-gray text-lg font-light mb-12">
                                        Thank you, {formData.name.split(' ')[0]}. Our concierge team will reach out to you within the next 24 hours.
                                    </p>
                                    <Button
                                        variant="ghost"
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-gold tracking-widest uppercase text-xs font-bold"
                                    >
                                        Send another message
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
