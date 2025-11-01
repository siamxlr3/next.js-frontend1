"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Home", "About", "Feature", "Testimonial", "Blog", "Contact"];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md transition-all duration-300">
            <div className="max-w-[1400px] mx-auto h-20 flex items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center cursor-pointer select-none">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent text-3xl font-extrabold tracking-tight">
            A
          </span>
                    <span className="text-gray-900 text-2xl font-extrabold ml-1">ppify</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10 text-sm font-semibold">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Join Now Button */}
                <div className="hidden md:block">
                    <button className="px-6 py-2 rounded-full text-white font-semibold text-sm shadow-md bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300">
                        Join Now
                    </button>
                </div>

                {/* Mobile Menu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 hover:text-blue-600 transition"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-lg animate-slideDown">
                    <nav className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-semibold">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-blue-600 transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="px-5 py-2 mt-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 shadow-md transform hover:scale-105 transition-all duration-300">
                            Join Now
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
