"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const clients = [
    {
        name: "Alice Johnson",
        position: "CEO, TechCorp",
        image: "/c1.webp",
        testimonial:
            "This app completely transformed our workflow. It's intuitive, fast, and the support is amazing!",
    },
    {
        name: "Mark Stevens",
        position: "Founder, StartupX",
        image: "/c2.webp",
        testimonial:
            "We saw a huge productivity boost after implementing this tool. Highly recommend to any team!",
    },
];

const ClientSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        customPaging: (i: number) => {
            const client = clients[i % clients.length];
            return (
                <button className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                    <Image
                        src={client?.image || "/c1.webp"}
                        alt={client?.name || `Thumb ${i + 1}`}
                        width={48}
                        height={48}
                        className="object-cover"
                    />
                </button>
            );
        },
        dotsClass: "slick-dots slick-thumb bottom-[-60px]",
    };

    return (
        <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                    What Our Clients Say
                </h2>

                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 flex flex-col items-center">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    width={120}
                                    height={120}
                                    className="rounded-full object-cover mb-4"
                                />
                                <p className="text-gray-700 italic mb-4 text-center max-w-lg">
                                    "{client.testimonial}"
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                                <span className="text-sm text-gray-500">{client.position}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ClientSection;
