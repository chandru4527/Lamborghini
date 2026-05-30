import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const Revueltocarousel3 = () => {

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080400/front_p4oxox.webp",
            title: "Revuelto | Lamborghini.com"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080406/interior_chkswc.avif",
            title: "Revuelto | Lamborghini.com"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080412/wheel_gm7t9v.avif",
            title: "Revuelto | Lamborghini.com"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780080396/back_zohx25.jpg",
            title: "Revuelto | Lamborghini.com"
        },
    ];

    return (
        <div className="w-full bg-black py-10 md:py-16">

            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={1000}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}

                className="w-full temerario-slider pb-12"
            >
                {slides.map((item, i) => (
                    <SwiperSlide key={i}>

                        <div className="relative overflow-hidden cursor-grab">

                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-65 sm:h-100 md:h-160 object-cover"
                                loading="lazy"
                            />
                             {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};