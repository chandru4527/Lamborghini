import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const Revueltocarousel2 = () => {
    const swiperRef = useRef(null);

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780079880/RearSpoiler_fpuz1m.jpg",
            h1: "raised rear spoiler"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780079882/RearSpoiler_Closed_rkyptr.jpg",
            h1: "lowered rear spoiler"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780079896/VortexGenerator_zanatd.jpg",
            h1: "vortex generator"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780079891/SideAirIntake_by1mqb.jpg",
            h1: "side air intake"
        }
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
                           className="w-full! sm:w-[70%]! lg:w-[65%]!"
                        >
                            <div className="w-full overflow-hidden cursor-grab">

                                {/* Image */}
                                <div className="relative pointer-events-none">

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

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-10 z-10">

                                        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold uppercase leading-tight">
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