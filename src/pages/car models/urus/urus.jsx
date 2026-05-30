import React from 'react'

import { Link } from 'react-router-dom'
import { Uruscarousel1 } from './uruscarousel1'
import { Uruscarousel2 } from './uruscarousel2'
import { Uruscarousel3 } from './uruscarousel3'
import { Urusexterior } from './urusexterior'
import { UrusExteriorCarousel } from './urusexteriorcarousel'
import { UrusInteriorCarousel } from './urusinteriorcarousel'
import { Urussespecs } from './urus specs'

export const Urus = () => {
    return (
        <div>
            {/* 1 car bg */}
            <div className="relative w-full aspect-video overflow-hidden">

                {/* Background Image */}
                <video
                    src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1778341242/urus_vhxtp2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 w-full bg-black/10"></div>

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
                        <Link to="/models" className="hover:text-gray-300">Models</Link>
                        <span className="mx-2">|</span>
                        <span className='text-gray-300'>Urus se</span>
                    </div>

                    {/* Main Text (BOTTOM) */}
                    <div className="flex flex-col gap-4 uppercase">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                            Lamborghini
                        </p>

                        <h1 className="text-xl sm:text-3xl lg:text-7xl font-bold tracking-tight">
                            urus se
                        </h1>
                    </div>

                </div>

            </div>

            {/* 2 Description Section */}
            <div className="w-full bg-[#181818] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                        {/* Logo */}
                        <div className="flex justify-center">
                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780120881/urus-se-svg_son5ve.svg"
                                className="w-48 md:w-64 lg:w-72"
                                alt='revuelto'
                            />
                        </div>

                        {/* Paragraph */}
                        <p className="text-sm lg:text-base leading-relaxed text-gray-200 font-light tracking-wide text-justify">
                            Urus SE marks Lamborghini’s next step toward full hybridization. As the first PHEV Super SUV, it delivers 800 CV, outstanding comfort, performance and efficiency, cutting emissions by up to 80% and redefining the luxury SSUV driving experience.
                        </p>

                    </div>
                </div>
            </div>

            {/* 3 Performance Values Banner */}
            <div className="w-full bg-[#181818] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                        {/* KPI 1 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                588 <span className="text-lg md:text-xl text-gray-100">kW</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                Max power (combined ICE+EE)
                            </p>
                        </div>

                        {/* KPI 2 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                312 <span className="text-lg md:text-xl text-gray-100">km/h</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                Max speed
                            </p>
                        </div>

                        {/* KPI 3 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                3.4 <span className="text-lg md:text-xl text-gray-100">s</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                0–100 km/h
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4 powertrain */}
            <div className="w-full bg-black text-white pt-10  overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        <div className="w-full text-center p-1">

                            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                                powertrain
                            </h3>

                            <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-6 text-justify">
                                The hybrid powertrain combines a re-engineered twin-turbo V8 with an electric motor, delivering 800 CV, over 60 km in EV mode, 0–100 km/h in 3.4 s and a 312 km/h top speed.
                            </p>

                        </div>
                    </div>

                    {/* Video/Image Section */}
                    <div className="relative overflow-hidden pointer-events-none">

                        {/* overlay */}
                        <div className="absolute inset-0 bg-linear-to-b from-black via-black/50 to-transparent"></div>

                        <video
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-62 sm:h-75 md:h-105 object-cover"
                        >
                            <source src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1780121154/Powertrain_motdec.mp4" type="video/mp4" />
                        </video>

                    </div>

                </div>
            </div>

            {/* 5 carousel 1 sections */}
            <div className='w-full bg-black py-10 relative overflow-hidden'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Uruscarousel1 />
                </div>
            </div>

            {/* 6 Aerodynamics Section */}
            <div className="w-full bg-black text-white pt-10 overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        <div className="w-full text-center p-1">

                            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                                Aerodynamics
                            </h3>

                            <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-6 text-justify">
                                Urus SE introduces a new aerodynamic setup, increasing rear downforce by 35%, cooling efficiency by 15% and brake cooling by 30%, enhancing stability and performance.
                            </p>

                        </div>
                    </div>

                    {/* Video/Image Section */}
                    <div className="relative overflow-hidden pointer-events-none">

                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-62.5 sm:h-75 md:h-100 object-cover"
                        >
                            <source src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1780121557/UrusSE-Aero_yqpze1.mp4" type="video/mp4" />
                        </video>

                    </div>

                </div>

                {/* aerodynamics carousel */}
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <Uruscarousel2 />
                </div>

            </div>

            {/* 7 carousel 2 section */}
            <div className='w-full bg-black'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Uruscarousel3 />
                </div>
            </div>

            {/* 8 exterior section */}
            <div className='w-full bg-black py-5'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Urusexterior />

                    {/* exterior carousel */}
                    <UrusExteriorCarousel />

                </div>
            </div>

            {/* 9 interior section */}
            <div className="w-full bg-black py-10">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* heading */}
                    <div className="text-white text-center px-5 lg:px-20 py-2">
                        <h1 className="text-4xl lg:text-6xl font-bold uppercase mb-5">
                            interior
                        </h1>

                        <p className="text-gray-300 leading-relaxed text-sm lg:text-base text-justify">
                            Revuelto’s interior elevates the “Feel Like a Pilot” philosophy with a driver-centric cockpit, clean volumes and hexagonal elements, creating a futuristic space that connects driver and machine.
                        </p>
                    </div>

                    {/* interior image */}
                    <div className='aspect-video relative'>

                        {/* Interior Img */}
                        <video
                            src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1780122393/UrusSE-Interior_kvkrge.mp4"
                            autoPlay
                            muted
                            playsInline
                            className="w-full aspect-video object-cover"
                        ></video>

                        {/* overlay */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent"></div>
                        </div>
                    </div>

                    {/* interior carousel */}
                    <UrusInteriorCarousel />


                </div>
            </div>

            {/* 10 specifications */}
            <div className='w-full'>
                <Urussespecs />
            </div>

            {/* 12 discover more */}
            <section className="relative w-full h-80 overflow-hidden">

                {/* img */}
                <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780121151/banner-discover_hcqpsq.jpg"
                    alt="discover"
                    className="w-full h-full object-cover object-left"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* content */}
                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

                        <h1 className="text-white uppercase text-3xl md:text-2xl lg:text-5xl font-bold tracking-wide">
                            Discover More
                        </h1>

                        <div className="flex flex-col lg:flex-row lg:gap-5 gap-3 mt-5 w-full h-full">

                            <button className="bg-white text-black px-8 py-4 uppercase font-semibold hover:bg-gray-200 transition-all cursor-pointer flex items-center justify-center gap-5">

                                <span>Start Configuration</span>
                                <span>
                                    <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor"></path></svg>
                                </span>

                            </button>

                            <button className="border border-white text-white px-8 py-4 uppercase font-semibold hover:bg-white hover:text-black transition-all cursor-pointer flex justify-center items-center gap-5">
                                <span>Contact Dealer</span>
                                <span>
                                    <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 9.67001V6.33001L12 4.68001L8.99997 6.33001V9.67001L12 11.32L15 9.67001ZM9.99997 6.92001L12 5.82001L14 6.92001V9.08001L12 10.18L9.99997 9.08001V6.92001ZM16.707 16L13.947 16.002L16.492 12.22C16.953 11.532 17.329 10.838 17.609 10.16C17.731 9.86401 17.812 9.61301 17.865 9.37001C17.961 8.92001 18.005 8.45701 18 7.99601C17.958 4.81101 15.371 2.12301 12.234 2.00201H12.233C12.163 1.99901 11.836 1.99901 11.767 2.00201C8.62897 2.12301 6.04297 4.81201 5.99997 7.99601C5.99297 8.45701 6.03897 8.92001 6.13497 9.37101C6.18697 9.61401 6.26497 9.85601 6.38997 10.159C6.66997 10.838 7.04597 11.532 7.50797 12.222L10.052 16.002L7.29297 16L4.29297 19L7.29297 22H16.707L19.707 19L16.707 16ZM7.31497 9.77801C7.22955 9.57915 7.16227 9.37297 7.11397 9.16201C7.03307 8.78347 6.99483 8.39706 6.99997 8.01001C7.03597 5.35001 9.18997 3.10301 11.804 3.00301C11.9346 3.00006 12.0653 3.00006 12.196 3.00301C14.81 3.10301 16.964 5.35001 16.999 8.01001C17.005 8.39801 16.967 8.78601 16.887 9.16201C16.844 9.35901 16.777 9.55401 16.685 9.77801C16.43 10.397 16.085 11.031 15.662 11.664L12 17.104L8.33897 11.664C7.93685 11.0705 7.5932 10.4387 7.31497 9.77801ZM16.293 21H7.70697L5.70697 19L7.70697 17L10.726 17.002L12 18.896L13.274 17.002L16.293 17L18.293 19L16.293 21Z" fill="currentColor" stroke="currentColor" stroke-width="0.4"></path></svg>
                                </span>

                            </button>

                            <button className="border border-white text-white px-8 py-4 uppercase font-semibold hover:bg-white hover:text-black transition-all cursor-pointer flex justify-center items-center gap-5">

                                <span>Download Brochure</span>
                                <span><i class="ri-download-2-line"></i></span>

                            </button>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}
