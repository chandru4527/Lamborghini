import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const InteriorCarousel = () => {

    const [showText, setShowText] = useState(false);


    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075728/DrivingModes_okjqdf.jpg",
            h1: "driving modes",
            description: "New driving modes deliver race-inspired emotions, adapting Temerario to every scenario. Città, Strada, Sport and Corsa combine with electric strategies in up to 13 configurations, maximizing hybrid performance, efficiency and driving engagement."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075730/Hmi_nirveq.jpg",
            h1: "hmi & infotainment",
            description: "The new HMI features three coordinated displays driven by a single electronic brain, ensuring a seamless user experience. Advanced 3D graphics, customization options and swipe functionality create an immersive, intuitive cockpit aligned with Lamborghini’s electrified vision."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075727/Connectivity_q3pkdx.jpg",
            h1: "connect with your temerario",
            description: "The suite of connected technologies featured in the Temerario brings driving engagement to new levels."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075733/PassengerDisplay_pmjehx.jpg",
            h1: "passenger display",
            description: "The 9.1” passenger display provides access to driving data and infotainment functions through a shared HMI. Integrated into the dashboard, it supports gesture-based interaction and content transfer, offering direct access to technical information and vehicle configuration features."
        }
    ];

    return (
        <div className="w-full bg-black pt-5 overflow-hidden">
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
                            className="w-full! sm:w-[70%]! lg:w-[60%]!"
                        >
                            <div className="w-full overflow-hidden cursor-grab">

                                {/* Image */}
                                <div className="relative aspect-video">

                                    <img
                                        src={item.img}
                                        alt={item.h1}
                                        loading="lazy"
                                        className="w-full aspect-video object-cover"
                                    />

                                    {/* OVERLAY */}
                                    {
                                        showText === i && (
                                            <div className="absolute inset-0 bg-black/80" />
                                        )
                                    }

                                    {/* CONTENT */}
                                    <div className="absolute top-0 left-0 p-5 sm:p-8 lg:p-10 z-10 transition-all">

                                        <h1 className="text-white uppercase font-bold text-2xl lg:text-3xl">
                                            {item.h1}
                                        </h1>

                                        {showText === i && (
                                            <p className="text-gray-300 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}

                                    </div>

                                    <button
                                        onClick={() => setShowText(showText === i ? null : i)}
                                        className="absolute bottom-5 right-5 z-50 cursor-pointer transition-all duration-300 hover:scale-110"
                                    >
                                        {/* SVG */}
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z"
                                                fill="white"
                                                stroke="black"
                                                strokeWidth="1"
                                            />
                                        </svg>

                                        {/* ICON */}
                                        <span
                                            className={`absolute inset-0 flex items-center justify-center text-black text-lg transition-all duration-300 ${showText === i ? "rotate-45" : "rotate-0"
                                                }`}
                                        >
                                            <i className="ri-add-large-line"></i>
                                        </span>
                                    </button>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};