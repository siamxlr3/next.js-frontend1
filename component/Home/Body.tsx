"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Body = () => {
    return (
        <section className="bg-gradient-to-br from-[#f3f6ff] to-[#eef1ff] min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
                {/* Left Section */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm rounded-full px-5 py-2 w-fit mb-4 animate-fade-in">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              News
            </span>
                        <p className="text-gray-600 text-sm">
                            Updated Terms & Conditions — Check what’s new!
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        The smarter workspace <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              built for your success.
            </span>
                    </h1>

                    <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
                        Streamline your tasks, boost productivity, and stay ahead — all from one beautifully designed dashboard.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <a href="#" className="hover:scale-105 transition-transform">
                            <Image src="/gp.png" alt="Google Play" width={144} height={48} />
                        </a>
                        <a href="#" className="hover:scale-105 transition-transform">
                            <Image src="/as.png" alt="App Store" width={144} height={48} />
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src="/hero.png"
                        alt="Hero Illustration"
                        width={480}
                        height={480}
                        className="w-full max-w-lg drop-shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Body;
