import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const Temerariocarousel2 = () => {


    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073946/Aero-Front_rebcry.jpg",
            h1: "front"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073950/Aero-Wing_erkmhv.jpg",
            h1: "wing"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073949/Aero-VortexGenerator_l1l2lk.jpg",
            h1: "vortex generator"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073944/Aero-Center_ezpm1h.jpg",
            h1: "center"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073942/Aero-BrakeCooling_bsbwd3.jpg",
            h1: "brake cooling"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780073942/Aero-AeroBumper_ytiyuh.jpg",
            h1: "aero bumper"
        },
    ];

    return (
        <div className="w-full bg-black overflow-hidden">
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


                                    {/* CONTENT */}
                                    <div className="absolute top-0 left-0 p-5 sm:p-8 lg:p-10 z-10 transition-all">

                                        <h1 className="text-white uppercase font-bold text-2xl lg:text-3xl">
                                            {item.h1}
                                        </h1>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};