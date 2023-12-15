import { ThemeContext } from "@/app/context/page";
import React, { useContext } from "react";

const ChangeThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    /*
        errors on above line:
        1. Property 'toggleTheme' does not exist on type 'ThemeContextType | null'.ts(2339)
        2. Property 'theme' does not exist on type 'ThemeContextType | null'.ts(2339)
    */
    return (
        <>
            <div
                className="container"
                style={{
                    backgroundColor: theme === "dark" ? "black" : "white",
                    color: theme === "dark" ? "white" : "black",
                }}>
                <h1>Change Theme Button</h1>
                <h2>Box</h2>
                <button
                    className="btn bg-green-300 px-4 text-gray-700"
                    onClick={toggleTheme}>
                    Change Theme
                </button>
            </div>
        </>
    );
};

export default ChangeThemeButton;
