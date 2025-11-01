import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center z-20 cursor-pointer">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 text-3xl font-extrabold leading-none">
                        A
                    </span>
                        <span className="text-gray-900 text-2xl font-extrabold leading-none ml-1">
                        ppify
                    </span>
                    </div>
                    <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                        dolor sit amet.
                    </p>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">About Us</h3>
                    <ul className="space-y-2 text-gray-600 text-sm font-semibold">
                        <li className="hover:text-pink-600 cursor-pointer transition">Support Center</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Customer Support</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">About Us</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Copyright</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Popular Campaign</li>
                    </ul>
                </div>

                {/* Our Information */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Our Information</h3>
                    <ul className="space-y-2 text-gray-600 text-sm font-semibold">
                        <li className="hover:text-pink-600 cursor-pointer transition">Return Policy</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Terms & Condition</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Site Map</li>
                        <li className="hover:text-pink-600 cursor-pointer transition">Store Hours</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-600" />
                            <span className="font-semibold text-gray-600">Amsterdam, Netherlands</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} className="text-gray-600" />
                            <span className="font-semibold text-gray-600">+01 23454 65456</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={16} className="text-gray-600" />
                            <span className="font-semibold text-gray-600">7 Days - 8am - 10am</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-600" />
                            <span className="font-semibold text-gray-600">info.example@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Appify. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
