import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export const Uruscarousel1 = () => {

    const [showText, setShowText] = useState(false);

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780121283/Engine_qqe1av.mp4",
            h1: "Engine",
            description: "The twin-turbo 4.0 V8, re-engineered to work in optimal synergy with the electric powertrain, delivers a total output of 800 CV with instant torque for every driving condition. It embodies the “two hearts” philosophy, combining thermal power and electric precision for a uniquely powerful Super SUV experience.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780121291/Transmission_tla29h.jpg",
            h1: "Transmission",
            description: "The 8-speed automatic gearbox with torque converter works together with the new centrally-located electric torque vectoring system and the electronic limited-slip rear differential. The result is maximum traction, agility and “on-demand” oversteering, translating every input into pure, super-sports-car dynamics.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780121283/Engine_qqe1av.mp4",
            h1: "Engine sound",
            description: "Use headphones or earphones for an 8D sound experience.",
        },
    ];

    return (
        <div className="w-full bg-black py-5 overflow-hidden">
            <div className="w-full relative">

                <Swiper
                    modules={[FreeMode, Pagination]}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    speed={1000}
                    pagination={{ clickable: true }}
                    className="revueltoSwiper px-4 md:px-10"
                >
                    {slides.map((item, i) => (
                        <SwiperSlide
                            key={i}
                            className="w-full! sm:w-[70%]! lg:w-[65%]!"
                        >
                            <div className="w-full overflow-hidden">

                                {/* Media */}
                                <div className="relative">

                                    {item.img.endsWith(".mp4") ? (

                                        <video
                                            src={item.img}
                                            autoPlay
                                            muted
                                            playsInline
                                            className="w-full aspect-video object-cover"
                                        />

                                    ) : (

                                        <img
                                            src={item.img}
                                            alt={item.h1}
                                            loading="lazy"
                                            className="w-full aspect-video object-cover"
                                        />

                                    )}

                                    <div className="absolute inset-0 bg-black/40"></div>

                                    {/* Overlay */}
                                    {showText === i && <div className="absolute inset-0 bg-black/90"></div>}

                                    {/* Content */}
                                    <div className="absolute top-0 left-0 w-full px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-10 z-10">

                                        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold uppercase leading-tight">
                                            {item.h1}
                                        </h1>

                                        {showText === i && (<p className="text-gray-300 text-xs sm:text-sm md:text-lg mt-2 md:mt-4 leading-relaxed max-w-full md:max-w-2xl text-justify">
                                            {item.description}
                                        </p>)}

                                    </div>

                                </div>

                                <button
                                    onClick={() => setShowText(showText === i ? null : i)}
                                    className="absolute bottom-5 right-5 z-50 cursor-pointer transition-all"
                                >

                                    {/* SVG */}
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        stroke="000"
                                        strokeWidth="2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >

                                        <path
                                            d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z"
                                            fill="white"
                                        />

                                    </svg>

                                    {/* ICON */}
                                    <span className={`absolute inset-0 flex items-center justify-center text-black text-lg transition-all ${showText === i ? "rotate-45" : "rotate-0"}
                                    `}>

                                        <i
                                            className="ri-add-large-line"></i>

                                    </span>

                                </button>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};