import React from 'react'
import { useState, useEffect } from 'react'


export const Huracanspecs = () => {

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
            value: "5,204 cm3",
        },
        {
            title: "MAX POWER (COMBINED ICE+EE)",
            value: "470/640 kW/CV at 8000 rpm",
        },
        {
            title: "TOP SPEED",
            value: "325 km/h",
        },
        {
            title: "ACCELERATION 0-100 KM/H",
            value: "3.2 s",
        },
        {
            title: "Combined consumption*",
            value: "14,5 l/100km (WLTP)",
        },
        {
            title: "Combined CO₂ emissions*",
            value: "328 g/km (WLTP)"
        },
        {
            title: "Combined CO₂ efficiency class*",
            value: "G (WLTP)",
        }
    ];


    return (
        <div>
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
                                    <span className="text-gray-400 text-sm uppercase tracking-wider text-left">{spec.title}</span>
                                    <span className="text-white text-sm text-right">{spec.value}</span>
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

                            {/* left side */}
                            <div className='w-full'>

                                {/* 1 Consumption */}
                                <div className='w-full'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Consumption
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["Combined consumption*", "14 l/100km (WLTP)"],
                                            ["Combined CO₂ emissions*", "328 g/km (WLTP)"],
                                            ["Combined CO₂ efficiency class*", "G (WLTP)"]
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2 ENGINE */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        ENGINE
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["ENGINE", "V10"],
                                            ["DISPLACEMENT", "5,204 cm3"],
                                            ["BORE AND STROKE", "84,5 x 92,8 mm"],
                                            ["COMPRESSION RATIO", "12,7:1"],
                                            ["MAX POWER", "470/640 kW/CV at 8000 rpm"],
                                            ["MAX TORQUE @ RPM", "565 nm"],
                                            ["COOLING SYSTEM", "Liquid cooled"],
                                            ["LUBRICATION SYSTEM", "Dry sump"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">
                                                    {value}</span>
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
                                            ["TRANSMISSION", "rwd"],
                                            ["GEARBOX", "7 gears"],
                                            ["CLUTCH", "Dual clutch"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">
                                                    {value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4 Performance */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Performance
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["MAX SPEED", "325 km/h"],
                                            ["ACCELERATION 0-100 KM/H", "3.2 s"],
                                            ["BRAKING 100-0 KM/H", "31.5 m"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">
                                                    {value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 5 Body & Chassis */}
                                <div className='w-full'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Body & Chassis
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["FRAME", "Multi-technology carbon fiber monocoque, front structure in Forged Composites"],
                                            ["BODY", "Carbon fiber body, aluminium doors, thermoplastic front and rear bumpers"],
                                            ["AERODYNAMICS", "Active rear wing featuring 3 positions according to the different driving modes and driving dynamics"]
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-20 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* right side */}
                            <div className='w-full'>

                                {/* 1 Wheels */}
                                <div className=''>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                                        Wheels
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["TIRES FRONT", "265/35 ZRF20 (99Y) XL Bridgestone Potenza Sport RFT"],
                                            ["TIRES REAR", "345/30 ZRF21 (111Y) XL Bridgestone Potenza Sport RFT"],
                                            ["FRONT RIMS", "20 x 9.5j (21 x 9.5j optional)"],
                                            ["REAR RIMS", "21 x 12j (22 x 12.5j optional)"],
                                        ].map(([title, value], index) => (
                                            <div key={index} className="flex justify-between gap-5 py-3 border-b border-gray-300">
                                                <span className="text-gray-400 text-sm uppercase font-bold tracking-wider text-left">{title}</span>
                                                <span className="text-black font-semibold uppercase text-sm text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2 Steering & Suspension */}
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

                                {/* 3 Braking System */}
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

                                {/* 4 Safety */}
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

                                {/* 5 Dimensions */}
                                <div className='mt-10'>
                                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mt-10">
                                        Dimensions
                                    </h3>

                                    <div className="space-y-5">
                                        {[
                                            ["WHEELBASE", "2779 mm"],
                                            ["LENGTH", "4947 mm"],
                                            ["WIDTH (EXCLUDING MIRRORS)", "4947 mm"],
                                            ["WIDTH (INCLUDING MIRRORS)", "2266 mm"],
                                            ["HEIGHT", "1161 mm"],
                                            ["FRONT TRACK", "1,720 mm"],
                                            ["REAR TRACK", "1,701 mm"],
                                            ["DRY WEIGHT", "1,780 kg"],
                                            ["WEIGHT DISTRIBUTION (FRONT-REAR)", "% 43/57"]
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

                </div>
            )}
        </div>
    )
}
