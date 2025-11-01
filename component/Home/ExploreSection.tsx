"use client";

import React from "react";

const ExploreSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#f6f9ff] to-[#eef6ff] py-24">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex justify-center">
                    <img
                        src="/a.jpg"
                        alt="Analytics"
                        className="w-[90%] max-w-[450px] rounded-2xl shadow-lg hover:scale-105 transition-transform"
                    />
                </div>

                <div>
                    <p className="text-blue-700 font-semibold mb-2 uppercase tracking-wide">
                        Audience Insights
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-5">
                        Take control with <span className="text-blue-700">powerful analytics</span>.
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Get real-time insights that help you understand user behavior and optimize performance with our customizable dashboard.
                    </p>

                    <ul className="space-y-3 mb-8 text-gray-700">
                        <li>✅ Chat prompt module supported</li>
                        <li>✅ Unlimited features with paid plan</li>
                        <li>✅ Manage ultimate conversations</li>
                    </ul>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 hover:bg-blue-700"
                    >
                        Explore More →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;
