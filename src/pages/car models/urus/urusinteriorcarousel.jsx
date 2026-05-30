import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const UrusInteriorCarousel = () => {

    const [showText, setShowText] = useState(false);

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122387/dirve_modes_gmmxqb.jpg",
            h1: "driving modes",
            description: "Urus SE delivers complete control in every scenario through advanced hybrid strategies combined with multiple driving modes. Strada, Sport, Corsa, Sabbia, Terra and Neve pair with EV, Hybrid, Recharge and Performance modes for 11 dynamic configurations."
        },

        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122390/Hmi_w7c7s3.jpg",
            h1: "hmi",
            description:
                "The new Urus SE HMI enhances driver focus with a larger display, updated graphics and smartphone-inspired layout. The Endless Carousel allows intuitive control of vehicle functions, delivering a seamless experience aligned with Lamborghini’s electrified design language."
        },

        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122356/Connectivity_ixebcg.jpg",
            h1: "connect with your urus se",
            description:
                "State-of-the-art navigation, comfort, safety, and entertainment features create unparalleled onboard and remote connectivity for a complete Lamborghini experience."
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