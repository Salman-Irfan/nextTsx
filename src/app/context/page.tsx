"use client";
import ChangeThemeButton from "@/components/ChangeThemeButton";
import ThemeProvider from "@/components/ThemeProvider";
import React, { createContext } from "react";

// types
type ThemeType = "light" | "dark";
// types
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: (theme: ThemeType) => void;
}

// context
export const ThemeContext = createContext<ThemeContextType | null>({
    theme: "light",
    toggleTheme: (theme: ThemeType) => {}, // Provide a function with the correct signature
});


const page = () => {
    return (
        <>
            <ThemeProvider>
                <h1>Context</h1>
                {/* import another component button to change theme */}
                <ChangeThemeButton/>
            </ThemeProvider>
        </>
    );
};

export default page;
