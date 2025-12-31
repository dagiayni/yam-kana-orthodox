"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Instagram, Facebook, Mail, Phone, ArrowUp, Send } from "lucide-react";

export default function Footer() {
   const { t, language, setLanguage } = useLanguage();

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <footer className="bg-[#fcfcfc] text-black pt-20 pb-16 relative overflow-hidden border-t border-black/5">
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

               {/* Brand Vision */}
               <div className="lg:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center space-x-3 mb-8">
                     <div className="w-14 h-14 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                        <img src="/assets/logo 1.png" alt="Yam Kana Logo" className="h-full w-auto object-contain" />
                     </div>
                     <span className="text-2xl font-playfair tracking-tight text-black">{t.hero.brandName}</span>
                  </div>

                  <h3 className={cn(
                     "text-3xl md:text-5xl mb-10 leading-tight tracking-tighter text-black max-w-lg",
                     language === 'am' ? 'amharic' : 'font-playfair'
                  )}>
                     {t.footer.whereHolinessMeets} <span className="text-gold italic">{t.footer.highElegance}.</span>
                  </h3>

                  <div className="flex space-x-3">
                     {[Instagram, Facebook, Send].map((Icon, i) => (
                        <a key={i} href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-500 group">
                           <Icon className="w-4 h-4 text-black/40 group-hover:text-black" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick Links */}
               <div className="lg:col-span-3 flex flex-col items-center md:items-start">
                  <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-bold mb-8 block">{t.footer.philosophy}</span>
                  <ul className="space-y-4 text-center md:text-left">
                     {[
                        { name: t.nav.home, id: 'home' },
                        { name: t.nav.packages, id: 'packages' },
                        { name: t.nav.gallery, id: 'gallery' },
                        { name: t.nav.about, id: 'aboutus' },
                        { name: t.nav.contact, id: 'contact' }
                     ].map((item) => (
                        <li key={item.id}>
                           <a href={`#${item.id}`} className="text-base font-light text-black/60 hover:text-gold transition-colors inline-block relative group">
                              {item.name}
                              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact Details */}
               <div className="lg:col-span-3 flex flex-col items-center md:items-start">
                  <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-bold mb-8 block">{t.footer.getInTouch}</span>
                  <div className="space-y-8 text-center md:text-left">
                     <div>
                        <p className="text-gold/40 text-[8px] tracking-widest uppercase font-bold mb-3">{t.footer.inquiries}</p>
                        <p className="text-lg md:text-xl font-playfair hover:text-gold transition-colors cursor-pointer text-black">concierge@yamkana.com</p>
                     </div>
                     <div>
                        <p className="text-gold/40 text-[8px] tracking-widest uppercase font-bold mb-3">{t.footer.directLine}</p>
                        <p className="text-lg md:text-xl font-playfair hover:text-gold transition-colors cursor-pointer text-black">+251 900 000 000</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <p className="text-[9px] tracking-[0.3em] font-bold uppercase text-black/20 order-2 md:order-1">
                     © {new Date().getFullYear()} {t.footer.rights}
                  </p>
                  <div className="flex items-center space-x-5 order-1 md:order-2">
                     <button onClick={() => setLanguage('am')} className={cn("text-[8px] tracking-widest uppercase font-bold transition-colors", language === 'am' ? 'text-gold' : 'text-black/20 hover:text-black')}>አማርኛ</button>
                     <div className="w-[1px] h-3 bg-black/10" />
                     <button onClick={() => setLanguage('en')} className={cn("text-[8px] tracking-widest uppercase font-bold transition-colors", language === 'en' ? 'text-gold' : 'text-black/20 hover:text-black')}>English</button>
                  </div>
               </div>

               <button onClick={scrollToTop} className="flex items-center space-x-5 group">
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-black/40 group-hover:text-gold transition-colors">{t.footer.returnToTop}</span>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-700">
                     <ArrowUp className="w-4 h-4 text-black group-hover:text-black transition-colors" />
                  </div>
               </button>
            </div>
         </div>

         {/* Decorative Text */}
         <div className="absolute bottom-[-5%] left-[-5%] text-[15vw] font-playfair font-black text-black/[0.01] pointer-events-none select-none whitespace-nowrap hidden md:block">
            YAM KANA WEDDINGS
         </div>
      </footer>
   );
}
