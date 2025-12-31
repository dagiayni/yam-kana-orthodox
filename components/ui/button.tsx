"use strict";
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "gold" | "goldOutline" | "ghost" | "magenta" | "shimmer";
    size?: "sm" | "md" | "lg" | "xl";
}

export function Button({
    className,
    variant = "default",
    size = "md",
    ...props
}: ButtonProps) {
    const variants = {
        default: "bg-charcoal text-white hover:bg-charcoal/90 shadow-sm",
        gold: "bg-gold text-magenta hover:bg-white shadow-lg shadow-gold/20",
        goldOutline: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-magenta",
        magenta: "bg-magenta text-white hover:bg-magenta-light shadow-lg shadow-magenta/20",
        ghost: "bg-transparent text-charcoal hover:bg-ivory",
        shimmer: "relative bg-gold text-magenta overflow-hidden group hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-8 py-3 text-sm",
        lg: "px-10 py-4 text-sm md:text-base",
        xl: "px-12 py-5 text-base md:text-lg",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {variant === "shimmer" && (
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
                </div>
            )}
            <span className="relative z-10">{props.children}</span>
        </button>
    );
}
