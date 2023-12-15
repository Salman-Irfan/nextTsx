"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* App Name (Left) */}
                <div className="text-green-300 text-lg font-semibold">
                    <Link href="/">Next Js with TypeScript</Link>
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-gray-300 focus:outline-none">
                        ☰
                    </button>
                </div>

                {/* Navbar Menu (Center) */}
                <div
                    className={`lg:flex space-x-4 mx-4 ${
                        isMenuOpen ? "block" : "hidden"
                    }`}>
                    {/* home */}
                    <Link
                        href="/"
                        className="text-white hover:text-gray-300 transition duration-300 mx-4">
                        <>Home</>
                    </Link>
                    {/* about */}
                    <Link
                        href="/about"
                        className="text-white hover:text-gray-300 transition duration-300 mx-4">
                        <>About</>
                    </Link>
                    {/* contact */}
                    <Link
                        href="/contact"
                        className="text-white hover:text-gray-300 transition duration-300 mx-4">
                        <>Contact</>
                    </Link>
                    {/* context api */}
                    <Link
                        href="/context"
                        className="text-white hover:text-gray-300 transition duration-300 mx-4">
                        <>Context</>
                    </Link>
                </div>

                {/* Profile (Right) */}
                <div className="hidden lg:flex items-center">
                    <Link
                        href="/profile"
                        className="text-blue-300 hover:text-gray-300 transition duration-300">
                        <>Profile</>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
