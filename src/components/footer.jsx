import React from "react";

import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <footer className="text-white py-12">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-gray-100 pb-10 gap-6 lg:gap-10 uppercase">

                        {/* Column */}
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to='/company' className="hover:text-gray-400 cursor-pointer transition">Company</Link>
                            </li>
                            <li>
                                <Link to='/sustainability' className="hover:text-gray-400 cursor-pointer transition">Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link to='/cookie-settings' className="hover:text-gray-400 cursor-pointer transition">Cookie settings
                                </Link>
                            </li>
                        </ul>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to='/financials' className="hover:text-gray-400 cursor-pointer transition">Financials</Link>
                            </li>
                            <li>
                                <Link to='/media-center' className="hover:text-gray-400 cursor-pointer transition">Media Center</Link>
                            </li>
                            <li>
                                <Link to='/sitemap' className="hover:text-gray-400 cursor-pointer transition">Sitemap</Link>
                            </li>
                        </ul>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to='/careers' className="hover:text-gray-400 cursor-pointer transition">Careers</Link>
                            </li>
                            <li>
                                <Link to='/privacy-policy' className="hover:text-gray-400 cursor-pointer transition">Privacy & Legal</Link>
                            </li>
                            <li>
                                <Link to='/newsletter' className="hover:text-gray-400 cursor-pointer transition">Newsletter</Link>
                            </li>
                        </ul>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to='/contact-us' className="hover:text-gray-400 cursor-pointer transition">Contact us</Link>
                            </li>
                            <li>
                                <Link to='/accessibility' className="hover:text-gray-400 cursor-pointer transition">Accessibility</Link>
                            </li>
                        </ul>

                        {/* Social */}
                        <div className="flex flex-col">
                            <p className="mb-4 text-xs tracking-widest text-gray-300">
                                Follow us
                            </p>

                            <div className="flex flex-wrap gap-4 text-lg">
                                <Link to="/instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-instagram-line hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                                <Link to="/threads" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-threads-fill hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                                <Link to="/facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-facebook-fill hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                                <Link to="/youtube" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-youtube-fill hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                                <Link to="/twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-twitter-x-line hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                                <Link to="/tiktok" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-tiktok-fill hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                                <Link to="/linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-linkedin-fill hover:text-gray-400 cursor-pointer"></i>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Disclaimer */}
                    <div className="text-xs mt-8 leading-relaxed text-gray-200 max-w-4xl">
                        <p className="text-justify">
                            The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 text-xs text-gray-200 space-y-4">
                        <p className="border-b border-gray-100 pb-5">
                            This site is protected by reCAPTCHA and the Privacy Policy and Terms of Service of Google apply.
                        </p>

                        <p>
                            © 2026 Automobili | Lamborghini CK. All rights reserved.
                        </p>
                    </div>

                    {/* Logo */}
                    <div className="mt-10 flex justify-center">
                        <Link to="/">
                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122753/Lambo-logo_axtmdg.svg"
                                alt="Logo"
                                className="w-10 lg:w-12 cursor-pointer"
                            />
                        </Link>
                    </div>

                </footer>
            </div>
        </div>
    );
};
