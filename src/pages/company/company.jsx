import React from 'react'

import { Link } from 'react-router-dom'


export const Company = () => {
    return (
        <div>
            {/* 1 car bg */}
            <div className="relative w-full lg:h-screen overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780071887/company-img_u77o8l.jpg"
                    alt=""
                    className="w-full h-86 sm:h-95 md:h-96 lg:absolute lg:inset-0 lg:w-full lg:h-full object-cover"
                />

                <div className="absolute inset-0 w-full bg-black/10"></div>

                {/* Overlay */}
                <div className="absolute inset-0">

                    {/* Top shadow */}
                    <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black/70 to-transparent"></div>

                    {/* Bottom shadow */}
                    <div className="absolute bottom-0 left-0 w-full h-50 bg-linear-to-t from-black/40 to-transparent"></div>

                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-10 text-white flex flex-col justify-end-safe lg:justify-around">

                    {/* Breadcrumb */}
                    <div className="text-lg hidden lg:inline uppercase font-semibold">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <span className="mx-2">|</span>
                        <span className='text-white'>company</span>
                    </div>

                    {/* Main Text */}
                    <div className="flex flex-col gap-4 uppercase">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                            automobili Lamborghini
                        </p>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            company
                        </h1>
                    </div>

                </div>

            </div>

            {/* 2 company profile */}
            <div className="w-full bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 items-center">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780071888/company-inside_ieytia.png"
                                alt="Lamborghini Connectivity"
                                className="w-full h-75 sm:h-100 lg:h-112.5 object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-5">

                            <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white">
                                Company profile
                            </h1>

                            <p className="text-white leading-relaxed max-w-lg text-justify">
                                Founded in 1963 by Ferruccio Lamborghini and headquartered in Sant’Agata Bolognese, Italy, Automobili Lamborghini is synonymous with
                                design excellence and super sports car performance, with iconic models such as Revuelto, Urus SE and Temerario. The brand has been combining
                                technological innovation with audacious style for over 60 years, creating cars that have gone down in automotive history.
                            </p>
                            <p className="text-white leading-relaxed max-w-lg text-justify">
                                Today, Automobili Lamborghini integrates sustainability, well-being and inclusion into its vision, embodying the values brave, unexpected and authentic in the foundation of its “Driving Humans Beyond” mission.

                            </p>

                            <button className="uppercase bg-white text-black px-6 py-3 w-fit tracking-widest flex items-center gap-2 cursor-pointer font-semibold transition-colors duration-300 hover:bg-gray-200">
                                Discover More
                                <i className="ri-arrow-right-line"></i>
                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
