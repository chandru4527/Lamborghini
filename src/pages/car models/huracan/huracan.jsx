import React from 'react'
import { Link } from 'react-router-dom'

import { Huracancarousel1 } from './huracan carousel1'
import { HuracanTabs } from './huracantabs'
import { Huracanspecs } from './huracanspec'
import { Huracancarousel2 } from './huracan carousel2'


export const Huracan = () => {


    return (

        <div>

            {/* 1 car bg */}
            <div className="relative w-full lg:h-screen overflow-hidden">

                {/* Background Image */}
                <video
                    src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1778341231/huracan_zx2iby.mp4"
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
                        <span className='text-gray-300'>Huracan tecnica</span>
                    </div>

                    {/* Main Text (BOTTOM) */}
                    <div className="flex flex-col gap-4 uppercase">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                            Lamborghini
                        </p>

                        <h1 className="text-xl sm:text-3xl lg:text-7xl font-bold tracking-tight">
                            Huracan tecnica
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
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780070365/tecnica-svg_lgdhpg.svg"
                                className="w-48 md:w-64 lg:w-72"
                                alt='revuelto'
                            />
                        </div>

                        {/* Paragraph */}
                        <p className="text-sm lg:text-base leading-relaxed text-gray-200 font-light tracking-wide text-justify">
                            The latest member of the Huracán range provides the purest Lamborghini driving experience combined with the freedom of everyday use: a bridge between past and future, lifestyle and performance, road and track. Huracán Tecnica brings forth a pilot’s attitude in every driver, delivering the most rewarding performance and the ultimate, fun-to-drive experience — simultaneously. Unleash the unique character of the most versatile Huracán.
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
                                470 <span className="text-lg md:text-xl text-gray-100">kW</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                Max power (combined ICE+EE)
                            </p>
                        </div>

                        {/* KPI 2 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                325 <span className="text-lg md:text-xl text-gray-100">km/h</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                Max speed
                            </p>
                        </div>

                        {/* KPI 3 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                3.2 <span className="text-lg md:text-xl text-gray-100">s</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                0–100 km/h
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4 img argument */}
            <div className="w-full bg-black aspect-video text-white relative overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119083/AR-desktop_ghurax.jpg"
                    alt="AR Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full grid">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                        {/* Text */}
                        <div className="max-w-xl">
                            <h1 className="text-xl md:text-3xl font-bold mb-4">
                                AUGMENTED REALITY
                            </h1>

                            <p className="text-gray-300 text-justify text-sm md:text-base">
                                Frame the QR code with your smartphone and turn on the
                                Lamborghini Augmented Reality experience.
                            </p>
                        </div>

                        {/* QR Code */}
                        <div className="bg-white p-3 rounded hidden md:block">
                            <img
                                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/huracan/huracan_tecnica/qr/04_06/lam.bo.HuracanTecnica_En.png"
                                alt="QR Code"
                                className="w-40"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* 5 exterior */}
            <div className="w-full bg-white py-10 md:py-15 lg:py-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        {/* Content */}
                        <div className="lg:w-1/2">

                            <h1 className="uppercase text-black font-bold text-3xl md:text-5xl mb-5">
                                Exterior
                            </h1>

                            <p className="text-gray-700 leading-8 text-lg mb-5 text-justify">
                                Huracán Tecnica was designed as a bridge between worlds
                                to combine performance and beauty. The lines emphasize
                                distinctive new expressions inspired by the racing DNA
                                of the Huracán Super Trofeo EVO2.

                                The front and rear architectures were restructured with
                                sharper lines to improve aerodynamics, bringing about
                                stability and ease in every condition, especially on
                                the track.

                                The powerful lines shape a new, unforgettable portrait
                                of the Huracán range.
                            </p>

                            <button
                                className="w-full sm:flex-1 px-6 py-3 bg-[#917300] text-white uppercase cursor-pointer hover:bg-[#7a6200] transition flex items-center justify-center gap-5">

                                Exterior design 3d view
                                <span>
                                    <svg aria-hidden="true" className="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.044 6.51702H8.784V7.56202L7.011 9.87502H7.048C8.352 9.87502 9.016 10.515 9.016 11.719V13.318C9.016 14.462 8.266 15.311 6.938 15.311C5.621 15.311 4.858 14.548 4.81 13.256V11.941H5.781V13.281C5.843 14.007 6.273 14.388 6.95 14.388C7.626 14.388 7.995 13.982 7.995 13.355V11.744C7.995 11.08 7.675 10.699 6.925 10.699H5.672V10.268L7.774 7.44002H5.044V6.51702ZM9.841 12.531V9.48002C9.841 7.47502 10.69 6.38002 12.116 6.38002C13.334 6.38002 14.06 7.07002 14.183 8.26202V8.91402H13.199V8.24002C13.088 7.61302 12.744 7.30502 12.116 7.30502C11.305 7.30502 10.826 7.85902 10.826 9.61802L10.85 11.093C11.046 10.269 11.6 9.78902 12.412 9.78902C13.469 9.78902 14.219 10.502 14.219 11.77V13.171C14.219 14.475 13.383 15.312 12.067 15.312C10.665 15.312 9.841 14.437 9.841 12.531ZM12.055 14.375C12.707 14.375 13.187 14.007 13.187 13.232V11.842C13.187 11.068 12.707 10.686 12.055 10.686C11.415 10.686 10.935 11.068 10.935 11.842V13.232C10.935 14.007 11.415 14.376 12.055 14.376V14.375ZM14.798 12.372V9.32002C14.798 7.43902 15.745 6.38002 17.134 6.38002C18.523 6.38002 19.471 7.43902 19.471 9.32002V12.37C19.471 14.251 18.524 15.31 17.134 15.31C15.744 15.31 14.798 14.251 14.798 12.37V12.372ZM17.134 14.364C17.897 14.364 18.438 13.786 18.438 12.396V9.29602C18.438 7.90602 17.897 7.32902 17.134 7.32902C16.372 7.32902 15.831 7.90702 15.831 9.29602V12.396C15.831 13.786 16.372 14.364 17.134 14.364ZM20.5 6.69702C19.673 6.69702 19 6.02402 19 5.19702C19 4.37002 19.673 3.69702 20.5 3.69702C21.327 3.69702 22 4.37002 22 5.19702C22 6.02402 21.327 6.69702 20.5 6.69702ZM20.5 4.69702C20.3671 4.69715 20.2397 4.75006 20.1459 4.84411C20.052 4.93816 19.9994 5.06565 19.9995 5.19852C19.9996 5.3314 20.0525 5.45877 20.1466 5.55264C20.2406 5.6465 20.3681 5.69915 20.501 5.69902C20.6339 5.69889 20.7613 5.64598 20.8551 5.55193C20.949 5.45788 21.0016 5.3304 21.0015 5.19752C21.0014 5.06465 20.9485 4.93727 20.8544 4.84341C20.7604 4.74955 20.6329 4.69689 20.5 4.69702ZM23 13.5C23 12.357 22.427 11.252 21.344 10.306L20.686 11.058C21.546 11.81 22 12.654 22 13.5C22 16.21 17.42 18.5 12 18.5C6.58 18.5 2 16.21 2 13.5C2 12.374 2.81 11.258 4.278 10.357L3.756 9.50402C1.979 10.594 1 12.013 1 13.5C1 16.864 5.832 19.5 12 19.5C18.168 19.5 23 16.864 23 13.5Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </span>
                            </button>

                        </div>

                        {/* Image */}
                        <div className="lg:w-1/2 w-full">

                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119084/huracan-tecnica_exterior_zxjiqo.jpg"
                                alt="Huracan Tecnica Exterior"
                                className="w-full h-auto object-cover shadow-lg"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* 6 interior */}
            <div className="w-full bg-white py-10 md:py-15">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">

                        {/* Content */}
                        <div className="lg:w-1/2">

                            <h1 className="uppercase text-black font-bold text-3xl md:text-5xl mb-5">
                                interior
                            </h1>

                            <p className="text-gray-700 leading-8 text-lg mb-5 text-justify">
                                Made for the driver. The versatility that distinguishes Huracán Tecnica is also a main feature of its interior, with extensive personalization options geared toward providing the most fulfilling driving experience. Exclusive interior finishes made of top-quality materials reflect Lamborghini’s Italian design heritage and include a new dedicated trim for the sports seats.

                                Technology also plays a large role in the experience, with dedicated HMI graphics and enhanced connectivity exclusive to Huracán Tecnica. A vast range of Ad Personam combinations is available to further enhance exclusivity.
                            </p>

                            <button
                                className="w-full sm:flex-1 px-6 py-3 bg-[#917300] text-white uppercase cursor-pointer hover:bg-[#7a6200] transition flex items-center justify-center gap-5">

                                Exterior design 3d view
                                <span>
                                    <svg aria-hidden="true" className="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.044 6.51702H8.784V7.56202L7.011 9.87502H7.048C8.352 9.87502 9.016 10.515 9.016 11.719V13.318C9.016 14.462 8.266 15.311 6.938 15.311C5.621 15.311 4.858 14.548 4.81 13.256V11.941H5.781V13.281C5.843 14.007 6.273 14.388 6.95 14.388C7.626 14.388 7.995 13.982 7.995 13.355V11.744C7.995 11.08 7.675 10.699 6.925 10.699H5.672V10.268L7.774 7.44002H5.044V6.51702ZM9.841 12.531V9.48002C9.841 7.47502 10.69 6.38002 12.116 6.38002C13.334 6.38002 14.06 7.07002 14.183 8.26202V8.91402H13.199V8.24002C13.088 7.61302 12.744 7.30502 12.116 7.30502C11.305 7.30502 10.826 7.85902 10.826 9.61802L10.85 11.093C11.046 10.269 11.6 9.78902 12.412 9.78902C13.469 9.78902 14.219 10.502 14.219 11.77V13.171C14.219 14.475 13.383 15.312 12.067 15.312C10.665 15.312 9.841 14.437 9.841 12.531ZM12.055 14.375C12.707 14.375 13.187 14.007 13.187 13.232V11.842C13.187 11.068 12.707 10.686 12.055 10.686C11.415 10.686 10.935 11.068 10.935 11.842V13.232C10.935 14.007 11.415 14.376 12.055 14.376V14.375ZM14.798 12.372V9.32002C14.798 7.43902 15.745 6.38002 17.134 6.38002C18.523 6.38002 19.471 7.43902 19.471 9.32002V12.37C19.471 14.251 18.524 15.31 17.134 15.31C15.744 15.31 14.798 14.251 14.798 12.37V12.372ZM17.134 14.364C17.897 14.364 18.438 13.786 18.438 12.396V9.29602C18.438 7.90602 17.897 7.32902 17.134 7.32902C16.372 7.32902 15.831 7.90702 15.831 9.29602V12.396C15.831 13.786 16.372 14.364 17.134 14.364ZM20.5 6.69702C19.673 6.69702 19 6.02402 19 5.19702C19 4.37002 19.673 3.69702 20.5 3.69702C21.327 3.69702 22 4.37002 22 5.19702C22 6.02402 21.327 6.69702 20.5 6.69702ZM20.5 4.69702C20.3671 4.69715 20.2397 4.75006 20.1459 4.84411C20.052 4.93816 19.9994 5.06565 19.9995 5.19852C19.9996 5.3314 20.0525 5.45877 20.1466 5.55264C20.2406 5.6465 20.3681 5.69915 20.501 5.69902C20.6339 5.69889 20.7613 5.64598 20.8551 5.55193C20.949 5.45788 21.0016 5.3304 21.0015 5.19752C21.0014 5.06465 20.9485 4.93727 20.8544 4.84341C20.7604 4.74955 20.6329 4.69689 20.5 4.69702ZM23 13.5C23 12.357 22.427 11.252 21.344 10.306L20.686 11.058C21.546 11.81 22 12.654 22 13.5C22 16.21 17.42 18.5 12 18.5C6.58 18.5 2 16.21 2 13.5C2 12.374 2.81 11.258 4.278 10.357L3.756 9.50402C1.979 10.594 1 12.013 1 13.5C1 16.864 5.832 19.5 12 19.5C18.168 19.5 23 16.864 23 13.5Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </span>
                            </button>

                        </div>

                        {/* Image */}
                        <div className="lg:w-1/2 w-full">

                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119083/Huracan-Interior_nofpya.webp"
                                alt="Huracan Tecnica Exterior"
                                className="w-full h-full object-cover shadow-lg"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* 7 carousel */}
            <div className='w-full'>
                <Huracancarousel1 />
            </div>

            {/* 8 tablists */}
            <div className="w-full">
                <HuracanTabs />
            </div>

            {/* 9 specifications */}
            <div className='w-full'>
                <Huracanspecs />
            </div>

            {/* 10 discover cento */}
            <section className="py-10 lg:py-15 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h4 className="text-xl md:text-3xl font-bold uppercase tracking-wide">
                        Discover Centro Stile
                    </h4>
                </div>
            </section>

            {/* 11 carousel 2 */}
            <div className='w-full'>
                <Huracancarousel2 />
            </div>

            {/* 13 connectivity */}
            <div className="w-full bg-[#181818] py-10 md:py-15 lg:py-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Image */}
                        <div className="lg:w-1/2 w-full">

                            <img
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119083/connectivity_crejce.jpg"
                                alt="Huracan Tecnica connectivity"
                                className="w-full h-full object-cover shadow-lg"
                            />

                        </div>

                        {/* Content */}
                        <div className="lg:w-1/2">

                            <h1 className="uppercase text-white font-bold text-3xl md:text-5xl mb-5">
                                CONNECT WITH YOUR HURACÁN TECNICA
                            </h1>

                            <p className="text-gray-100 leading-8 text-lg mb-5 text-justify">
                                The exclusive and advanced suite of connected technologies is ready to raise driving engagement to a level never experienced before. Lamborghini Connect gives Huracán Tecnica drivers peace of mind when they are not at the wheel and provides always-up-to-date functions on board.
                            </p>

                            <button
                                className="w-full sm:flex-1 px-6 py-3 bg-white text-black uppercase cursor-pointer font-semibold
                                 hover:bg-black hover:text-white transition-all flex items-center justify-center gap-5">

                                discover more
                                <span>
                                    <i class="ri-add-large-fill"></i>
                                </span>
                            </button>

                        </div>
                    </div>

                </div>

            </div>

            {/* 11 discover more */}
            <section className="relative w-full h-80 overflow-hidden">

                {/* img */}
                <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119083/banner-discover_bgwvcb.jpg"
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

                            <button className="bg-transparent text-white px-8 py-4 uppercase font-semibold hover:bg-gray-200 
                           hover:text-black transition-all cursor-pointer flex items-center justify-center gap-5 border border-white">

                                <span>Start Configuration</span>
                                <span>
                                    <svg aria-hidden="true" class="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor"></path></svg>
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
