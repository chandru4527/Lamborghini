import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const RevueltoInteriorCarousel = () => {

    const [showText, setShowText] = useState(false);

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780081301/DrivingMode_dhpnc3.jpg",
            h1: "driving modes",
            description: "Revuelto combines driving and hybrid modes to deliver 13 distinct experiences. Città, Strada, Sport and Corsa adapt the interaction between V12 and e-motors, ranging from all-electric efficiency to uncompromising high-performance driving."
        },

        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780081325/Hmi_e5tqgs.jpg",
            h1: "hmi",
            description:
                "The new HMI ecosystem features three digital displays with a refined graphic interface designed for clarity and speed. Every interaction is intuitive and driver-focused, enhancing the connection with the Revuelto and delivering a seamless, immersive control experience."
        },

        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780081295/Connectivity_vb3zan.jpg",
            h1: "connect with your revuelto",
            description:
                "The suite of connected technologies featured in the Revuelto takes the best of two worlds from the services already available for Urus and Huracán to bring driving engagement to a level never experienced before."
        },

        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780081331/PassengerDisplay_iszfzl.jpg",
            h1: "passengers display",
            description:
                "The passenger display offers an engaging view of the Revuelto’s performance. Real-time data, navigation and entertainment functions allow the passenger to follow every moment of the drive, transforming each journey into a shared Lamborghini experience."
        },

        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780081344/VirtualCockpit_jygp5w.jpg",
            h1: "virtual cockpit",
            description:
                "A futuristic cockpit designed to keep every control within the driver’s reach."
        }
    ];

    return (
        <div className="w-full bg-black py-5 overflow-hidden">

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

                        <div className="relative overflow-hidden rounded">

                            {/* IMAGE */}
                            <img
                                src={item.img}
                                alt={item.h1}
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
    );
};