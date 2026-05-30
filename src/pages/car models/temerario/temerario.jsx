import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Temerariocarousel1 } from './temerariocarousel1';
import { Temerariocarousel2 } from './temerariocarousel2';
import { Temerariocarousel3 } from './temerariocarousel3';
import { Temerarioexterior } from './temerarioexterior';
import { ExteriorCarousel } from './exteriorcarousel';
import { InteriorCarousel } from './interiorcarousel';

export const Temerario = () => {

    const [spec, setSpec] = useState(false)

    // scroll prevent
    useEffect(() => {
        document.body.style.overflow = spec ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [spec]);

    // specifications data
    const specifications = [
        {
            title: "DISPLACEMENT",
            value: "3995.2 cm³ (243.8 cu in)",
        },
        {
            title: "MAX POWER (COMBINED ICE+EE)",
            value: "920 CV / 677 kW",
        },
        {
            title: "TOP SPEED",
            value: "343 km/h",
        },
        {
            title: "ACCELERATION 0-100 KM/H",
            value: "2.7 s",
        },
        {
            title: "Combined consumption*",
            value: "11.2 l/100km (WLTP)",
        },
        {
            title: "Combined CO₂ emissions*",
            value: "272 g/km (WLTP)",
        },
        {
            title: "Combined power consumption*",
            value: "4.3 kWh/100km (WLTP)",
        },
        {
            title: "Combined fuel consumption with discharged battery*",
            value: "14 l/100km (WLTP)",
        },
        {
            title: "Combined CO₂ efficiency class*",
            value: "G (WLTP)",
        },
        {
            title: "CO₂ efficiency class with discharged battery*",
            value: "G (WLTP)",
        },
    ];

    return (
        <div className='relative'>
            {/* 1 car bg */}
            <div className="relative w-full overflow-hidden">

                {/* Background Image */}
                <video
                    src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1778341238/temerario_e5kk0o.mp4"
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
                        <span className='text-gray-300'>Temerario</span>
                    </div>

                    {/* Main Text (BOTTOM) */}
                    <div className="flex flex-col gap-4 uppercase">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest">
                            Lamborghini
                        </p>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            Temerario
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
                                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780070366/temerario-svg_zvogdx.svg"
                                alt="Temerario | Lamborghini.com"
                                className="w-48 md:w-64 lg:w-72"
                            />
                        </div>

                        {/* Paragraph */}
                        <p className="text-sm lg:text-base leading-relaxed text-gray-200 font-light tracking-wide text-justify">
                            Lamborghini's Temerario is the brand's first super sports car with a V8 twin-turbo engine and three electric motors, delivering 920 CV. As the second vehicle in the HPEV range, it excels in performance and comfort, showcasing new design concepts and unique customization options.
                        </p>

                    </div>
                </div>
            </div>

            {/* 3 Performance Values Banner */}
            <div className="w-full bg-[#181818] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                        {/* KPI 1 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                677 <span className="text-lg md:text-xl text-gray-100">kW</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                Max power (combined ICE+EE)
                            </p>
                        </div>

                        {/* KPI 2 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                343 <span className="text-lg md:text-xl text-gray-100">km/h</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                Max speed
                            </p>
                        </div>

                        {/* KPI 3 */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">
                                2.7 <span className="text-lg md:text-xl text-gray-100">s</span>
                            </div>
                            <p className="text-sm md:text-base text-gray-100">
                                0–100 km/h
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4 Video Section */}
            <div className='w-full bg-black py-10'>

                {/* video */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <video
                        src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1778344926/Temerario_mechine_ho0uyi.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover object-center w-full"
                    >
                    </video>

                    {/* Overlay */}
                    <div className="absolute inset-0 w-full bg-black/40"></div>
                </div>
            </div>

            {/* 5 Carousel 1 Section */}
            <div className='w-full bg-black py-10 relative overflow-hidden'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <Temerariocarousel1 />
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
                                Temerario achieves peak aerodynamic efficiency, delivering superior stability, cooling and braking.
                                Aero load increases by +103% vs Huracán EVO, rising to +158% with Alleggerita.
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
                            className="w-full h-62.5 sm:h-75 md:h-125 object-cover"
                        >
                            <source src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1780073955/Temerario-aerodynamic_wgomhk.mp4" type="video/mp4" />
                        </video>

                    </div>

                </div>

                {/* aerodynamics carousel */}
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <Temerariocarousel2 />
                </div>

            </div>

            {/* 7 carousel 2 section */}
            <div className='w-full bg-black'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Temerariocarousel3 />
                </div>
            </div>

            {/* 8 exterior section */}
            <div className='w-full bg-black py-5'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Temerarioexterior />

                    {/* exterior carousel */}
                    <ExteriorCarousel />
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
                            Temerario redefines the “Feel like a pilot” concept, offering more space, superior comfort, intuitive HMI and connected services for a new onboard driving experience.
                        </p>
                    </div>

                    {/* interior image */}
                    <div className='aspect-video relative'>

                        {/* Interior Img */}
                        <img src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075736/Temerario_interior_rip3b4.jpg" alt="interior" />

                        {/* overlay */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent"></div>
                        </div>
                    </div>

                    {/* interior carousel */}
                    <InteriorCarousel />
                </div>
            </div>

            {/* 10 specifications */}
            <section className="w-full bg-black py-10">

                <div className="max-w-7xl mx-auto px-5 lg:px-8 text-white">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Left Content */}
                        <div className='flex flex-col gap-3'>

                            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
                                Performance
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-none mb-2">
                                Technical
                                Specifications
                            </h1>

                            <button onClick={() => setSpec(!spec)}
                                className="group flex items-center justify-center gap-4 border border-white px-7 py-4 uppercase 
                                tracking-[0.2em] text-sm transition-all duration-300 hover:bg-white hover:text-black 
                                cursor-pointer hover:scale-[1.02]">

                                <span>All Specifications</span>

                                <span className="transition-transform duration-300 group-hover:rotate-90">
                                    <i className="ri-add-large-line text-lg"></i>
                                </span>

                            </button>
                        </div>

                        {/* Right Content */}
                        <div>
                            {specifications.map((spec, index) => (
                                <div key={index} className="flex justify-between gap-5 py-3 border-b border-white/20">
                                    <span className="text-gray-400 text-sm uppercase tracking-wider">{spec.title}</span>
                                    <span className="text-white text-sm">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Full Specifications Modal */}
            {spec && (
                <div
                    className={`fixed inset-0 z-999 bg-white text-black overflow-y-auto  py-10
                                    transition-all duration-700 ease-in-out
                                    ${spec ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                >

                    {/* Header */}
                    <div className=" top-0 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-5 flex items-center justify-between">

                            <div className='w-full'>
                                <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-wide">
                                    Technical Specifications
                                </h2>

                                {/* Close Button */}
                                <button
                                    onClick={() => setSpec(false)}
                                    className="group absolute top-0 right-0 flex font-semibold items-center gap-3 uppercase text-xl cursor-pointer"
                                >
                                    <span className='hidden lg:inline'>Close</span>

                                    <i className="ri-close-line text-2xl transition-transform duration-300 group-hover:rotate-90"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}

                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                            {/* right side */}
                            <div className='w-full'>

                                {/* 1 Consumption */}
                                <div className='w-full'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Consumption
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["Combined consumption*", "11.2 l/100km (WLTP)"],
                                            ["Combined CO₂ emissions*", "272 g/km (WLTP)"],
                                            ["Combined power consumption*", "4.3 kWh/100km (WLTP)"],
                                            ["Combined fuel consumption with discharged battery*", "14 l/100km (WLTP)"],
                                            ["Combined CO₂ efficiency class*", "G (WLTP)"],
                                            ["CO₂ efficiency class with discharged battery*", "G (WLTP)"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2 Powertrain */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Powertrain
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["ENGINE", "V8 Bi-Turbo - Hot-V 4.0l"],
                                            ["DISPLACEMENT", "3,995.2 cm³ (243.8 cu in)"],
                                            ["BORE AND STROKE", "90 mm x 78.5 mm"],
                                            ["COMPRESSION RATIO", "1 : 9.3"],
                                            ["MAX POWER @ RPM (ICE)", "800 CV @ 9000-9750 rpm"],
                                            ["MAX POWER (ICE+EE)", "920 CV / 677kW"],
                                            ["MAX TORQUE @ RPM", "730 Nm @ 4000-7000 rpm"],
                                            ["COOLING SYSTEM", "Liquid cooled - dedicated circuit for HV components"],
                                            ["ENGINE MANAGEMENT SYSTEM", "Central DI - Bosch"],
                                            ["LUBRICATION SYSTEM", "Dry sump"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3 Transmission */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Transmission
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["TRANSMISSION", "AMT"],
                                            ["GEARBOX", "8 gears"],
                                            ["CLUTCH", "Dual clutch"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4 Hybrid System */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Hybrid System
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["BATTERY", "Lithium-ion high specific power battery with pouch cells"],
                                            ["GENERATOR", "P1 eMotor"],
                                            ["FRONT E-AXLE", "220kW @3500rpm"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 5 Performance */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Performance
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["MAX SPEED", "343 km/h"],
                                            ["ACCELERATION 0-100 KM/H", "2.7 s"],
                                            ["BRAKING 100-0 KM/H", "32 m"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* right side */}
                            <div className='w-full'>

                                {/* 1 Body & Chassis */}
                                <div className='w-full'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Body & Chassis
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["FRAME", "Full Aluminum"],
                                            ["BODY", "Aluminum"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2 Wheels */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mt-10">
                                        Wheels
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["TIRES – FRONT", "Bridgestone Potenza Sport 255/35 ZR20"],
                                            ["TIRES – REAR", "Bridgestone Potenza Sport 325/30 ZR21"],
                                            ["FRONT RIMS", "20 x 9J ET37"],
                                            ["REAR RIMS", "21 x 11.5J ET42.5"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3 Steering & Suspension */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mt-10">
                                        Steering & Suspension
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["ELECTRONIC STABILITY CONTROL (ESC)", "ESC integrating ABS and TCS with different characteristics according to the driving mode selected"],
                                            ["STEERING", "EPS - Electric Power Steering"],
                                            ["SUSPENSION TYPE", "Front and rear double wishbone"],
                                            ["DAMPING SYSTEM", "Lamborghini Magneride"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4 Braking System */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mt-10">
                                        Braking System
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["BRAKES", "Carbon Ceramic Brakes Plus"],
                                            ["FRONT BRAKES", "410x38mm discs"],
                                            ["REAR BRAKES", "390x32mm discs"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 5 Safety */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mt-10">
                                        Safety
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["AIRBAGS", "Driver, passenger, side airbags. Knee airbags only for specific markets"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-right text-sm">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 6 Dimensions */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mt-10">
                                        Dimensions
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["WHEELBASE", "2,658 mm (104.6457 in.)"],
                                            ["LENGTH", "4,706 mm (185.2756 in.)"],
                                            ["WIDTH (EXCLUDING MIRRORS)", "1,996 mm (78.5826 in.)"],
                                            ["WIDTH (INCLUDING MIRRORS)", "2,246 mm (88.4252 in.)"],
                                            ["HEIGHT", "1,201 mm (47.2834 in.)"],
                                            ["FRONT TRACK", "1,722 mm (67.7952 in.)"],
                                            ["REAR TRACK", "1,670 mm (65.7480 in.)"],
                                            ["DRY WEIGHT", "1,690 kg (3,725.8 lb)"],
                                            ["WEIGHT-TO-POWER RATIO", "1.84 kg/CV"],
                                            ["WEIGHT DISTRIBUTION (FRONT-REAR)", "43.4% front – 56.6% rear"]
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ------------------------------------------- */}

                </div>
            )}


            {/* 11 discover more */}
            <section className="relative w-full h-80 overflow-hidden">

                {/* img */}
                <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780076141/discover-banner_lv447p.jpg"
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
                                    <svg aria-hidden="true" className="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z" fill="currentColor"></path></svg>
                                </span>

                            </button>

                            <button className="border border-white text-white px-8 py-4 uppercase font-semibold hover:bg-white hover:text-black transition-all cursor-pointer flex justify-center items-center gap-5">
                                <span>Contact Dealer</span>
                                <span>
                                    <svg aria-hidden="true" className="icon light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 9.67001V6.33001L12 4.68001L8.99997 6.33001V9.67001L12 11.32L15 9.67001ZM9.99997 6.92001L12 5.82001L14 6.92001V9.08001L12 10.18L9.99997 9.08001V6.92001ZM16.707 16L13.947 16.002L16.492 12.22C16.953 11.532 17.329 10.838 17.609 10.16C17.731 9.86401 17.812 9.61301 17.865 9.37001C17.961 8.92001 18.005 8.45701 18 7.99601C17.958 4.81101 15.371 2.12301 12.234 2.00201H12.233C12.163 1.99901 11.836 1.99901 11.767 2.00201C8.62897 2.12301 6.04297 4.81201 5.99997 7.99601C5.99297 8.45701 6.03897 8.92001 6.13497 9.37101C6.18697 9.61401 6.26497 9.85601 6.38997 10.159C6.66997 10.838 7.04597 11.532 7.50797 12.222L10.052 16.002L7.29297 16L4.29297 19L7.29297 22H16.707L19.707 19L16.707 16ZM7.31497 9.77801C7.22955 9.57915 7.16227 9.37297 7.11397 9.16201C7.03307 8.78347 6.99483 8.39706 6.99997 8.01001C7.03597 5.35001 9.18997 3.10301 11.804 3.00301C11.9346 3.00006 12.0653 3.00006 12.196 3.00301C14.81 3.10301 16.964 5.35001 16.999 8.01001C17.005 8.39801 16.967 8.78601 16.887 9.16201C16.844 9.35901 16.777 9.55401 16.685 9.77801C16.43 10.397 16.085 11.031 15.662 11.664L12 17.104L8.33897 11.664C7.93685 11.0705 7.5932 10.4387 7.31497 9.77801ZM16.293 21H7.70697L5.70697 19L7.70697 17L10.726 17.002L12 18.896L13.274 17.002L16.293 17L18.293 19L16.293 21Z" fill="currentColor" stroke="currentColor" strokeWidth="0.4"></path></svg>
                                </span>

                            </button>

                            <button className="border border-white text-white px-8 py-4 uppercase font-semibold hover:bg-white hover:text-black transition-all cursor-pointer flex justify-center items-center gap-5">

                                <span>Download Brochure</span>
                                <span><i className="ri-download-2-line"></i></span>

                            </button>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}
