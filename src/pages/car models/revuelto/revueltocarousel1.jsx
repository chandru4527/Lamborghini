import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export const Revueltocarousel1 = () => {

    const [showText, setShowText] = useState(false);

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780079453/Gearbox_ankedx.mp4",
            h1: "v12",
            description: "The new naturally aspirated V12, lighter and more powerful than ever, defines the heart of the Revuelto. Paired with the hybrid system, it offers an explosive power delivery and a uniquely emotional soundtrack. A masterpiece of engineering that marks a new era of Lamborghini performance.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780079447/ElectricMotor_hbav1m.jpg",
            h1: "ELECTRIC engine",
            description: "The Revuelto’s three electric motors deliver instant torque and extreme precision, working in perfect synergy with the V12. This advanced HPEV layout enhances responsiveness and efficiency, turning electrification into a new dimension of performance—pure, immediate, unmistakably Lamborghini.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780079453/Gearbox_ankedx.mp4",
            h1: "GEARBOX",
            description: "The compact eight-speed dual-clutch gearbox ensures lightning-fast gear changes and seamless power transfer. Integrated transversely, it enhances weight distribution and agility while working together with the rear electric motor to deliver superior traction and dynamic balance.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780079456/LDVI_nkggqt.jpg",
            h1: "LDVI 2.0",
            description: "The new LDVI 2.0 enhances vehicle control by managing torque distribution at each wheel in real time. By predicting grip levels and adapting longitudinal and lateral dynamics, it optimizes acceleration, braking and traction to deliver maximum performance and precision.",
        }
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