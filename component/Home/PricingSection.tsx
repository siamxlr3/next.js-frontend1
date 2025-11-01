"use client";

import React from "react";

const PricingSection = () => {
    const plans = [
        {
            title: "Starter Plan",
            price: 15,
            color: "from-blue-500 to-indigo-600",
        },
        {
            title: "Business Plan",
            price: 45,
            color: "from-purple-500 to-pink-600",
        },
    ];

    return (
        <section className="bg-[#eefaff] py-24 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
                Simple, <span className="text-blue-700">Transparent Pricing</span>
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-10">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className="backdrop-blur-md bg-white/70 border border-gray-100 shadow-lg rounded-2xl w-[320px] md:w-[420px] p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <h3 className="text-lg font-semibold text-blue-700 mb-4">{plan.title}</h3>
                        <div className="flex items-end justify-center mb-6">
                            <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                            <span className="text-gray-500 text-lg ml-1">/mo</span>
                        </div>
                        <ul className="space-y-3 text-gray-600 text-sm mb-8 text-left">
                            <li>✔ Unlimited Connections</li>
                            <li>✔ Advanced Analytics</li>
                            <li>✔ Draft Payments</li>
                            <li>✔ Lifetime Updates</li>
                            <li>✔ Premium Support</li>
                        </ul>
                        <button
                            className={`w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r ${plan.color} transition-all hover:opacity-90`}
                        >
                            Start 14 Days Free Trial
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;
