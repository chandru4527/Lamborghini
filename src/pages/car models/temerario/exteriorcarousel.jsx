import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const ExteriorCarousel = () => {

    const [showText, setShowText] = useState(false);


    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075090/Engine_nzzx00.jpg",
            h1: "Exposed Engine",
            description: "The hybrid twin-turbo V8 is visible through a honeycomb cover designed to ensure ventilation and thermal protection for the upper powertrain components. This configuration enhances heat dissipation while providing clear visual access to the main functional areas of the drivetrain."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075098/rear_xo71e1.jpg",
            h1: "Rear",
            description: "The rear section combines hexagonal taillights, a central exhaust outlet, and an integrated spoiler. Every component is developed to optimize flow extraction, thermal management, and downforce generation. The layout enhances high-speed stability and improves cooling efficiency for the rear braking system."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075100/sidetank_sbvdcb.jpg",
            h1: "side air intakes",
            description: "The side air intakes are designed to optimize the flow of air to the rear brakes and the engine. The intakes feature a hexagonal design that complements the overall aesthetic of the car while ensuring efficient cooling for both the braking system and the powertrain."
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780075093/headlight_c2yvd0.jpg",
            h1: "front headlights",
            description: "The front light cluster integrates the new hexagonal lighting signature and a functional air tunnel dedicated to brake cooling. Every element is engineered to optimize airflow, efficiency, and aerodynamic integration, delivering a measurable increase in front-system cooling performance."
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
                                <div className="relative">

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
                                            <p className="text-gray-300 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed text-justify">
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