"use strict";
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import am from "../translations/am.json";
import en from "../translations/en.json";

type Translations = typeof am;
type Language = "am" | "en";

interface LanguageContextType {
    language: Language;
    t: Translations;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("am");

    const translations = {
        am,
        en,
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                t: translations[language],
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
