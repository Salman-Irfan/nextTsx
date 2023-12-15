import { ThemeContext } from "@/app/context/page";
import React, { ReactNode, useState } from "react";
// types
type ThemeType = "light" | "dark";
// types
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: (theme: ThemeType) => void;
}

const ThemeProvider = ({children}:{children: ReactNode}) => {
    const [theme, setTheme] = useState<ThemeType>("light")
    // toggle theme function
    const toggleTheme = (theme: ThemeType) =>{
        setTheme((prev)=>(
            prev === 'light' ? 'dark' : 'light'
        ));
    }
    return (
        <>
            <ThemeContext.Provider
                value={{
                    theme,
                    toggleTheme
                }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
};

export default ThemeProvider;
