import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const UrusExteriorCarousel = () => {

    const [showText, setShowText] = useState(false);


    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122101/Roof_lb8uks.jpg",
            h1: "hood",
            description: "The front section features a new hood with a floating design, where the absence of the cut-off line creates visual continuity and amplifies the athletic stance of Urus SE. Inspired by Revuelto, it delivers a clean yet muscular identity that redefines the SUV’s front presence with unmistakable Lamborghini character."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122071/Headlight_wjfyyg.jpg",
            h1: "front headlight",
            description: "The new headlight clusters with matrix LED technology introduce a brand-new light signature inspired by the tail of the Lamborghini bull. Sharp, futuristic and instantly recognizable, they elevate the front design while reinforcing the unmistakable visual identity of Urus SE in any lighting condition."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122077/rear_mtwriy.jpg",
            h1: "rear",
            description: "The rear has been completely redesigned, introducing Gallardo-inspired continuity that links the taillight clusters with “Y” lights and the new diffuser. Together with the new spoiler, the diffuser increases rear downforce by 35%, enhancing stability and giving the vehicle even sportier proportions and visual width."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780122080/rim_fb6rhg.jpg",
            h1: "Rims",
            description: "Urus SE offers ultimate customization: new 23” Galanthus alloy rims with Pirelli P Zero (21”-23”) tires providing comfort and sportiness. Scorpion Winter 2 also available for the winter. All equipped with Pirelli Elect technology for the first hybrid Urus."
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