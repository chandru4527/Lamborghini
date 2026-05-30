import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const RevueltoExteriorCarousel = () => {

    const [showText, setShowText] = useState(false);


    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080837/Headlight_mlfqjk.jpg",
            h1: "front light",
            description: "The Y-shaped LED daytime running lights form the unmistakable signature of the Revuelto. Their sharp geometry and advanced lighting technology create a futuristic, assertive presence, illuminating the road with absolute precision while reinforcing the Lamborghini design DNA."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080831/EngineBay_moirat.jpg",
            h1: "open engine bay",
            description: "With the engine bay open, the Revuelto reveals its V12 HPEV in all its sculptural power. Exposed components, premium materials and bold architecture highlight the fusion of innovation and craftsmanship, celebrating the engineering heart of the new flagship."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080848/Rear_zupynx.jpg",
            h1: "rear / exhausts",
            description: "The high-mounted exhausts dominate the rear design, inspired by pure motorsport aesthetics. Combined with the large diffuser and aerodynamic surfaces, they express raw power and functional beauty. The V12 unleashes its signature sound, delivering an unmistakably Lamborghini presence."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080861/wheel_aiwcag.avif",
            h1: "Precision-Crafted Wheels",
            description: "Designed for both speed and stability, the wheel combines aerodynamic styling with high-performance engineering. The striking finish adds a premium and futuristic look to the vehicle."
        }
    ];

    return (
        <div className="w-full bg-black pt-10 overflow-hidden">
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
                            <div className="w-full overflow-hidden cursor-grab">

                                {/* Image */}
                                <div className="relative">

                                    {
                                        showText === i && (
                                            <div className="absolute inset-0 bg-black/90" />
                                        )
                                    }

                                    <img
                                        src={item.img}
                                        alt={item.h1}
                                        loading="lazy"
                                        className="w-full aspect-video object-cover"
                                    />

                                    {/* Content */}
                                    <div className="absolute top-0 left-0 w-full z-10">

                                        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold uppercase leading-tight">
                                            {item.h1}
                                        </h1>

                                        {
                                            showText === i && (
                                                <p className="text-gray-300 text-xs sm:text-sm md:text-lg mt-2 md:mt-4 leading-relaxed max-w-full md:max-w-2xl text-justify">
                                                    {item.description}
                                                </p>
                                            )
                                        }

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