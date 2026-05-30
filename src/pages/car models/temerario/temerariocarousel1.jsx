import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export const Temerariocarousel1 = () => {

    const [showText, setShowText] = useState(false);


    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073409/Powertrain_eya3ck.jpg",
            h1: "POWERTRAIN",
            description:
                "Twin-turbo hybrid V8 delivering extreme performance and instant response.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073408/Ldvi_2.0_pb0kzc.jpg",
            h1: "LDVI 2.0",
            description:
                "Advanced vehicle dynamics system engineered for precision and control.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073411/SpaceFrame_a7wg5y.jpg",
            h1: "SPACE FRAME",
            description:
                "Lightweight aluminum chassis designed for rigidity and aerodynamic efficiency.",
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780073407/Engine_atm79a.mp4",
            h1: "ENGINE",
            description: "Pure V8 power with twin-turbocharging, delivering exhilarating performance and a thrilling driving experience.",
        },
    ];

    return (
        <div className="w-full bg-black py-10 overflow-hidden">
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
                            <div className="w-full overflow-hidden">

                                {/* Media */}
                                <div className="relative">

                                    {item.img.endsWith(".mp4") ? (

                                        <video
                                            src={item.img}
                                            autoPlay
                                            muted
                                            playsInline
                                            className="w-full aspect-video object-cover pointer-events-none"
                                        />

                                    ) : (

                                        <img
                                            src={item.img}
                                            alt={item.h1}
                                            loading="lazy"
                                            className="w-full aspect-video object-cover"
                                        />

                                    )}

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

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};