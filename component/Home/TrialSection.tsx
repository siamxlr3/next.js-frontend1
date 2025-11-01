"use client";

import React from "react";

const TrialSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#0a0a0a] via-[#0c0f17] to-[#111827] text-white flex flex-col items-center justify-center py-24 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
                Unlock Premium Features — Free for 14 Days
            </h2>
            <p className="text-gray-400 text-center max-w-xl mb-8">
                No credit card required. Experience the best we have to offer, risk-free.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105">
                Start Free Trial
            </button>
            <p className="text-gray-500 text-sm mt-4">Cancel anytime — zero commitment</p>
        </section>
    );
};

export default TrialSection;
