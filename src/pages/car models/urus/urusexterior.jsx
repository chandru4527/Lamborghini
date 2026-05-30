import React, { useState } from "react";

export const Urusexterior = () => {

    const [slides, setSlides] = useState("orange");

    const colors = [
        {
            name: "orange",
            color: "#ff5a00",
            type: "video",
            src: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780122105/UrusSE-Exterior_mhtgaa.mp4",
        },
        {
            name: "Olive Gray",
            color: "#444d41",
            type: "image",
            src: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122067/gray-olive_u7mtra.jpg",
        },
        {
            name: "blue",
            color: "#0177a4",
            type: "image",
            src: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122066/blue_r1tysi.jpg",
        },
        {
            name: "purple",
            color: "#431c53",
            type: "image",
            src: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122074/purple_dm71yn.jpg",
        },
    ];

    const currentSlide = colors.find((item) => item.name === slides);

    return (
        <section className="w-full bg-black overflow-hidden">

            {/* Heading */}
            <div className="text-white text-center px-5 lg:px-20 py-2">
                <h1 className="text-4xl lg:text-6xl font-bold uppercase mb-5">
                    Exterior
                </h1>

                <p className="text-gray-300 leading-relaxed text-sm lg:text-base text-justify">
                    Revuelto blends Lamborghini heritage with a bold new design language. Sculpted lines, sharp surfaces and the iconic center line define a futuristic silhouette, while the exposed V12 proudly celebrates its racing DNA.
                </p>
            </div>

            {/* Main Section */}
            <div className="relative w-full">

                {/* Color Selector */}
                <div className="absolute top-0 left-4 lg:left-10 lg:top-0 z-20 h-full">

                    <div className="flex flex-row lg:flex-col lg:h-full lg:items-center lg:justify-center gap-4 lg:gap-5">

                        {colors.map((item) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => setSlides(item.name)}
                                aria-label={item.name}
                                className={`
                                    transition-all 
                                    hover:scale-105 cursor-pointer
                                    ${slides === item.name
                                        ? "scale-100"
                                        : "opacity-70"}
                                `}
                            >
                                <svg
                                    className="w-10 h-10 lg:w-10 lg:h-10"
                                    viewBox="0 0 44 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    {/* Inner Hexagon */}
                                    <path
                                        d="M21.6506 5L38.9711 15V35L21.6506 45L4.33013 35V15L21.6506 5Z"
                                        fill={item.color}
                                    />

                                    {/* Border */}
                                    <path
                                        d="M42.301 13.0771V36.9219L21.6506 48.8447L1.00024 36.9219V13.0771L21.6506 1.1543L42.301 13.0771Z"
                                        stroke={
                                            slides === item.name
                                                ? "white"
                                                : "transparent"
                                        }
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent"></div>
                </div>

                {/* Media Section */}
                <div className="w-full aspect-video overflow-hidden">

                    {currentSlide.type === "video" ? (
                        <video
                            key={slides}
                            src={currentSlide.src}
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    ) : (
                        <img
                            src={currentSlide.src}
                            alt={currentSlide.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* btn */}
                <div className="lg:absolute relative flex justify-center items-center w-full mt-5 lg:mt-0
                lg:bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <button 
                    className="inline-flex w-full lg:w-auto justify-center items-center gap-3 px-7 py-4 border border-white text-white uppercase tracking-wider text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black group"
                    >
                        <span>Start Configuration</span>

                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};