import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

export const Huracancarousel2 = () => {

    const slides = [
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119548/one_g4zwdp.jpg",
            title: "Huracán | Lamborghini.com"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119550/two_s6gamy.jpg",
            title: "Huracán | Lamborghini.com"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119548/three_j0iuhx.jpg",
            title: "Huracán | Lamborghini.com"
        },
        {
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780119546/four_d52j1p.jpg",
            title: "Huracán | Lamborghini.com"
        },
    ];

    return (
        <div className="w-full bg-black">

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

                className="w-full temerario-slider"
            >
                {slides.map((item, i) => (
                    <SwiperSlide key={i}>

                        <div className="relative overflow-hidden cursor-grab">

                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                 className="w-full aspect-video object-cover"
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