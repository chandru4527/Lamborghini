import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const [nav, setNav] = useState(false)

    // scroll prevent
    useEffect(() => {
        document.body.style.overflow = nav ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [nav]);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full py-5 z-99 transition-all
                        ${scrolled || nav ? "bg-[#181818]" : "bg-transparent"}
                        `}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className='flex justify-between items-center text-white text-xl lg:text-2xl w-full gap-1'>

                    {/* Menu */}
                    <h1
                        onClick={() => setNav(!nav)}
                        className="hover:bg-black/70 cursor-pointer flex items-center"
                    >
                        {nav ? (
                            <i className="ri-close-line text-2xl"></i>
                        ) : (
                            <i className="ri-menu-line text-xl"></i>
                        )}

                        <span className=" hidden lg:inline">MENU</span>
                    </h1>

                    {/* Logo */}
                    <Link onClick={() => setNav(false)}
                        to="/">
                        <img
                            src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122753/Lambo-logo_axtmdg.svg"
                            alt="Logo"
                            className="w-10 lg:w-12 cursor-pointer"
                        />
                    </Link>

                    {/* Right Icons */}
                    <div className='flex items-center gap-4'>
                        <i className="ri-question-answer-fill cursor-pointer hover:text-gray-300 transition"></i>
                        <i className="ri-search-2-line cursor-pointer hover:text-gray-300 transition"></i>
                    </div>

                </div>
            </div>

            {/* nav links */}
            {nav && (
                <div
                    className={`absolute top-full left-0 w-full bg-black text-white z-999
                                 overflow-hidden transition-all duration-700 ease-in-out
                                 ${nav ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 max-h-[calc(100vh-80px)] overflow-y-auto">

                        {/* TOP GRID */}
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">

                            {[{ name: "MODELS", path: "/models" },
                            { name: "OWNERSHIP", path: "/ownership" },
                            { name: "DEALERSHIPS", path: "/dealers" },
                            { name: "BEYOND", path: "/beyond" },
                            { name: "COMPANY", path: "/company" },
                            { name: "MOTORSPORT", path: "/motorsport" },
                            { name: "MUSEUM", path: "/museum" },
                            { name: "STORE", path: "/store" },
                            { name: "NEWS", path: "/news" }
                            ].map((item, i) => (
                                <li key={i} className="group border-b border-white pb-4">
                                    <Link
                                        to={item.path}
                                        onClick={() => setNav(false)}
                                        className="flex items-center justify-between w-full text-sm tracking-wider"
                                    >
                                        <span>{item.name}</span>
                                        <i className="ri-arrow-right-s-line text-lg transition-transform group-hover:translate-x-1"></i>
                                    </Link>
                                </li>
                            ))}

                        </ul>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-12"></div>

                        {/* BOTTOM GRID */}
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 text-sm text-gray-300 pb-10">

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/design" onClick={() => setNav(false)}>
                                    Design
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/sustainability" onClick={() => setNav(false)}>
                                    Sustainability
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/history" onClick={() => setNav(false)}>
                                    History
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/financial-services" onClick={() => setNav(false)}>
                                    Financial services
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/warranty" onClick={() => setNav(false)}>
                                    Warranty extension
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/driving-programs" onClick={() => setNav(false)}>
                                    Driving Programs
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/lounge" onClick={() => setNav(false)}>
                                    Lounge
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/club" onClick={() => setNav(false)}>
                                    Club
                                </Link>
                            </li>

                            <li className="border-b border-gray-100 pb-3">
                                <Link to="/podcast" onClick={() => setNav(false)}>
                                    Podcast
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            )}
        </div>
    )
}