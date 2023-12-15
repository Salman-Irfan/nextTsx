"use client"
import React, { createContext } from "react";

// types
type ThemeType = "light" | "dark";
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

// context
const ThemeContext = createContext<ThemeContextType | null>({
    theme: "light",
    toggleTheme: () =>{}
})

const page = () => {
    return (
        <>
            <h1>Context</h1>
        </>
    );
};

export default page;
