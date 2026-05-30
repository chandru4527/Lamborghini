import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "./carcarousel.css"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export default function CarCarousel() {
  const swiperRef = useRef(null);

  const slides = [
    {
      img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066007/Temerario_bcjqo7.png",
      svg: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066316/temerario-svg_u1icty.svg",
      h1: "You can't hide who you are",
      link: "/models/temerario"
    },
    {
      img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066006/Revuelto_pugu6l.png",
      svg: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066313/revuelto-svg_amvch2.svg",
      h1: "From now on",
      link: "/models/revuelto"
    },
    {
      img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066005/Huracan_Tecnica_pij4k8.png",
      svg: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066312/huracan-tecnica-svg_brhr2l.svg",
      h1: "Take all your soul to drive",
      link: "/models/huracan-tecnica"
    },
    {
      img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066009/Urus_rb43qa.png",
      svg: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780066318/urus-svg_wyfa3c.svg",
      h1: "Dare to live more",
      link: "/models/urus"
    }
  ];

  return (
    <div className="w-full bg-white lg:py-16">
      <div className="w-full relative">

        <Swiper
          id="carcarousel"
          modules={[EffectCoverflow, Pagination]}
          effect={window.innerWidth < 768 ? "slide" : "coverflow"}
          centeredSlides={true}
          loop={false}
          rewind={true}
          speed={800}
          spaceBetween={50}

          pagination={{ clickable: true }}

          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 1.3,
              spaceBetween: 50,
            },

            1280: {
              slidesPerView: 1.4,
              spaceBetween: 50,
            },
          }}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}

          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}

          className="w-full overflow-visible"
        >
          {slides.map((item, i) => (

            <SwiperSlide key={i}>
              <div className="w-full flex flex-col items-center py-10">

                {/* Top */}
                <div className="text-center">
                  <img src={item.svg} alt="" className="w-40 md:w-60 mx-auto" />
                  <h1 className="text-[#494949] text-2xl md:text-4xl font-bold mt-5 uppercase">
                    {item.h1}
                  </h1>
                </div>

                {/* Car */}
                <img
                  src={item.img}
                  alt=""
                  className="w-[90%] max-w-3xl object-contain mt-6"
                  loading="lazy"
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-15 w-full max-w-lg">

                  <button className="hidden w-full sm:flex-1 px-6 py-3 border border-black uppercase cursor-pointer hover:bg-black hover:text-white transition lg:flex items-center justify-center">
                    Download brochure
                    <span className="ml-2">
                      <i className="ri-download-2-line"></i>
                    </span>
                  </button>

                  <Link
                    to={item.link}
                    className="w-full sm:flex-1 px-6 py-3 bg-[#917300]
                                 flex items-center justify-center text-white uppercase hover:bg-[#7a6200] transition-all cursor-pointer"
                  >
                    <span>Explore the model</span>

                    <span className="ml-2">
                      <i className="ri-arrow-right-long-line"></i>
                    </span>
                  </Link>



                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* carsousel btns */}
        <div>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden lg:flex absolute left-5 top-5 -translate-y-1/2 text-4xl p-2  z-10"
          >
            <div className="relative w-20 h-20 cursor-pointer">
              <svg
                viewBox="0 0 50.464 58.271"
                className="w-full h-full"
              >
                <path
                  d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z"
                  fill="#fff"
                  stroke="#111"
                  strokeWidth="1"
                />
              </svg>

              {/* Icon (centered) */}
              <div className="absolute inset-0 flex items-center justify-center text-black text-xl">
                <i className="ri-arrow-left-s-line"></i>
              </div>

            </div>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden lg:flex absolute right-5 top-5 -translate-y-1/2 text-4xl text-black z-10"
          >
            <div className="relative w-20 h-20 cursor-pointer">
              {/* Hexagon */}
              <svg
                viewBox="0 0 50.464 58.271"
                className="w-full h-full"
              >
                <path
                  d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z"
                  fill="#fff"
                  stroke="#111"
                  strokeWidth="1"
                />
              </svg>

              {/* Icon (centered) */}
              <div className="absolute inset-0 flex items-center justify-center text-black text-xl">
                <i className="ri-arrow-right-s-line"></i>
              </div>

            </div>
          </button>
        </div>

      </div>
      <div className="w-full mt-10 mb-10 lg:mb-0">
        <p className="text-sm sm:text-sm text-gray-500 leading-relaxed text-justify">
          Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km;
          CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G;
          CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km
        </p>
      </div>
    </div>
  );
}