"use client";
import ThemeProvider from "@/components/ThemeProvider";
import React, { createContext } from "react";

// types
type ThemeType = "light" | "dark";
// types
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: (theme: ThemeType) => void; // Update the type to match the implementation
}

// context
export const ThemeContext = createContext<ThemeContextType | null>({
    theme: "light",
    toggleTheme: () => {}, // Now the type matches: () => void
});

const page = () => {
    return (
        <>
            <ThemeProvider>
                <h1>Context</h1>
            </ThemeProvider>
        </>
    );
};

export default page;
