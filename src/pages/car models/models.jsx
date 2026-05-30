import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { RangecarCarousel } from '../../components/car carosel/rangecarousel';
import { FewcarCarousel } from '../../components/car carosel/fewcarousel';
import { ConceptcarCarousel } from '../../components/car carosel/conceptcarousel';



export const Models = () => {
    const [cartab, setCartab] = useState("range")

    return (
        <div>

            {/* 1 car bg */}
            <div className="relative w-full aspect-video overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780068395/models_homepage_sb6bnd.jpg"
                    alt=""
                    className="w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 w-full bg-black/40"></div>

                {/* Overlay */}
                <div className="absolute inset-0">

                    {/* Top shadow */}
                    <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black/70 to-transparent"></div>

                    {/* Bottom shadow */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black/40 to-transparent"></div>

                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-10 text-white flex flex-col justify-end-safe lg:justify-around">

                    {/* Breadcrumb (TOP) */}
                    <div className="text-lg hidden lg:inline uppercase font-semibold">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <span className="mx-2">|</span>
                        <span className='text-gray-300'>Models</span>
                    </div>

                    {/* Main Text (BOTTOM) */}
                    <div className="flex flex-col gap-4 uppercase">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                            Lamborghini
                        </p>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            Models
                        </h1>
                    </div>

                </div>

            </div>

            {/* 2 carousel */}
            <div className='w-full h-auto bg-[#181818]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

                    {/* Tabs */}
                    <div className="flex justify-evenly lg:justify-center gap-6 sm:gap-10 text-white pt-10 pb-8">

                        <button
                            onClick={() => setCartab("range")}
                            className={`uppercase pb-2 border-b-2 px-2 transition-all cursor-pointer ${cartab === "range"
                                ? "border-yellow-400 text-yellow-400"
                                : "border-transparent hover:border-white"
                                }`}
                        >
                            range
                        </button>

                        <button
                            onClick={() => setCartab("few-off")}
                            className={`uppercase pb-2 border-b-2 px-2 transition-all cursor-pointer ${cartab === "few-off"
                                ? "border-yellow-400 text-yellow-400"
                                : "border-transparent hover:border-white"
                                }`}
                        >
                            few-off
                        </button>

                        <button
                            onClick={() => setCartab("concept")}
                            className={`uppercase pb-2 border-b-2 px-2 transition-all cursor-pointer ${cartab === "concept"
                                ? "border-yellow-400 text-yellow-400"
                                : "border-transparent hover:border-white"
                                }`}
                        >
                            concept
                        </button>

                    </div>

                    {/* Content */}
                    <div className="">

                        {/* 1.temerario */}
                        {cartab === "range" && (
                            <RangecarCarousel />
                        )}

                        {/* 2.revuelto */}
                        {cartab === "few-off" && (
                            <FewcarCarousel />
                        )}

                        {/* 3.urus */}
                        {cartab === "concept" && (
                            <ConceptcarCarousel />
                        )}

                    </div>

                </div>
            </div>

            <hr className="border-gray-100" />

            {/* 3 history img */}
            <div className="w-full bg-[#111] py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="relative w-full h-75 sm:h-100 md:h-112.5 lg:h-125 overflow-hidden group">

                        <img
                            src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780071478/banner-master-pieces_jtn1lp.jpg"
                            alt="Lamborghini banner"
                            className="w-full h-full object-cover"
                        />

                        {/* Bottom shadow */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent transition-all group-hover:opacity-50"></div>

                        {/* content  */}
                        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-10 text-white flex flex-col justify-end-safe">

                            <div className="flex flex-col gap-4 uppercase">
                                <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                                    Lamborghini
                                </p>

                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                                    Masterpieces
                                </h1>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* 4 company and features */}
            <div className="w-full bg-[#111] py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                        {/* company img */}
                        <div className="relative w-full h-75 sm:h-100 md:h-112.5 lg:h-125 overflow-hidden group">

                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780071479/company-img_xnmzvf.jpg"
                                alt="Lamborghini banner"
                                className="w-full h-full object-cover"
                            />

                            {/* Bottom shadow */}
                            <div className="absolute inset-0 w-full bg-black/40 group-hover:opacity-0 transition-all"></div>

                            {/* content  */}
                            <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-10 text-white flex flex-col justify-end-safe">

                                <div className="flex flex-col gap-4 uppercase">
                                    <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                                        automobili Lamborghini
                                    </p>

                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                                        Company
                                    </h1>
                                </div>

                            </div>

                        </div>

                        {/* color ad img  */}
                        <div className="relative w-full h-75 sm:h-100 md:h-112.5 lg:h-125 overflow-hidden group">

                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780071478/adpersonam-img_czax6a.jpg"
                                alt="Lamborghini color banner"
                                className="w-full h-full object-cover"
                            />

                            {/* Bottom shadow */}
                            <div className="absolute inset-0 w-full bg-black/40 group-hover:opacity-0 transition-all"></div>

                            {/* content  */}
                            <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-10 text-white flex flex-col justify-end-safe">

                                <div className="flex flex-col gap-4 uppercase">
                                    <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">

                                        Make it unique make it yours
                                    </p>

                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                                        ad personam
                                    </h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};