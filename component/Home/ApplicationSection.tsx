"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        image: "/i1.png",
        title: "Create Free Account",
        desc: "Set up your account in seconds — no hassle, no credit card required.",
        link: "Start Earning",
    },
    {
        image: "/i2.png",
        title: "Monitor User Analytics",
        desc: "Gain insights with real-time data visualization and easy tracking tools.",
        link: "Sign Up Your Store",
    },
    {
        image: "/i3.png",
        title: "Safe & Trusted",
        desc: "Your data is encrypted, ensuring top-level security and reliability.",
        link: "Get The App",
    },
    {
        image: "/i4.png",
        title: "Fast Customer Support",
        desc: "Our dedicated team is here 24/7 to help you get the best experience.",
        link: "Learn More",
    },
];

const ApplicationSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-14">
                    Why Choose <span className="text-blue-700">Our Application?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-b from-[#f9f9ff] to-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="flex justify-center mb-6">
                                <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{feature.desc}</p>
                            <a href="#" className="text-blue-700 font-semibold text-sm hover:underline">
                                {feature.link} →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApplicationSection;
