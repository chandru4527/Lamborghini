import React, { useState } from 'react'
import { Heropage } from '../home/heropage'
import CarCarousel from '../home/carousel'


export const Home = () => {

  const [cartab, setCartab] = useState("temerario")

  return (
    <div >
      {/* 1 bg video */}
      <div className='aspect-video'>
        <Heropage />
      </div>

      {/* 2 carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 mb-6 mt-5 md:mt-10">

          <h1 className="text-2xl sm:text-4xl font-bold uppercase">
            models
          </h1>

          <a
            href="#"
            className="hidden lg:inline text-sm font-semibold uppercase tracking-wide border-b py-2 hover:bg-gray-200 transition-all"
          >
            discover all models <span><i className="ri-arrow-right-long-line"></i></span>
          </a>

        </div>

        <CarCarousel />

      </div>

      {/* 3 dealers banner*/}
      <div className="w-full h-65 sm:h-70 md:h-70 lg:h-100 relative overflow-hidden">

        {/* image instead of bg */}
        <img
          src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780067027/banner-desktop-dealer_dmeld8.jpg"
          alt="Dealer Background"
          className="absolute inset-0 w-full h-full object-cover object-start"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end lg:pb-10 pb-5">

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-bold mb-4 sm:mb-6">
            Dealer Locator
          </h1>

          <button className="w-full sm:w-fit px-6 py-3 border border-white font-bold uppercase tracking-wider bg-white text-black transition duration-300 flex items-center justify-center sm:justify-start">
            Find Your Dealer
            <span className="ml-2">
              <i className="ri-arrow-right-long-line"></i>
            </span>
          </button>

        </div>
      </div>

      {/* 4 model view */}
      <div className='w-full h-auto bg-[#181818]'>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          {/* Tabs */}
          <div className="flex justify-evenly lg:justify-center gap-6 sm:gap-10 text-white pt-10 pb-8">

            <button
              onClick={() => setCartab("temerario")}
              className={`uppercase pb-2 border-b-2 px-2 transition-all cursor-pointer ${cartab === "temerario"
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:border-white"
                }`}
            >
              Temerario
            </button>

            <button
              onClick={() => setCartab("revuelto")}
              className={`uppercase pb-2 border-b-2 px-2 transition-all cursor-pointer ${cartab === "revuelto"
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:border-white"
                }`}
            >
              Revuelto
            </button>

            <button
              onClick={() => setCartab("urus")}
              className={`uppercase pb-2 border-b-2 px-2 transition-all cursor-pointer ${cartab === "urus"
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent hover:border-white"
                }`}
            >
              Urus SE
            </button>

          </div>

          {/* Content */}
          <div className="">

            {/* 1.temerario */}
            {cartab === "temerario" && (
              <div className="relative w-full overflow-hidden">

                {/* content */}
                <div className=" relative z-10 flex items-center justify-center w-full lg:block lg:absolute lg:left-10 lg:top-1/3">

                  <div className="uppercase space-y-4 max-w-xl text-center lg:text-left pt-10 lg:pt-0 w-full">

                    <p className="text-sm tracking-widest text-gray-300 text-start">
                      Configure your
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white text-start">
                      Temerario
                    </h1>

                    {/* btns */}
                    <div className="flex flex-col lg:flex-row gap-4 w-full">

                      <button className="w-full lg:w-auto flex items-center justify-center gap-2 font-semibold uppercase px-6 py-3 bg-[#ffc000] hover:bg-[#c59812] text-black transition cursor-pointer">

                        <span>Start configuration</span>

                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z"
                            fill="currentColor"
                          />
                        </svg>

                      </button>

                      <button className="w-full lg:w-auto flex items-center justify-center gap-2 font-semibold uppercase px-6 py-3 border border-white bg-white text-black cursor-pointer transition hover:bg-black hover:text-white">

                        <span>Explore the model</span>

                        <i className="ri-arrow-right-line text-lg"></i>

                      </button>

                    </div>
                  </div>
                </div>

                {/* img */}
                <div
                  className="h-full w-full mt-5 lg:mt-0 flex justify-center z-10">
                  <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780067353/model_chooser_temerario_mop2nj.png"
                    alt="Temerario"
                    className="h-62.25 sm:h-75 md:h-100 lg:h-125 w-full object-cover
                    object-[75%_center] sm:object-[80%_center] md:object-[90%_center] lg:object-[100%_center]"/>
                </div>

              </div>
            )}

            {/* 2.revuelto */}
            {cartab === "revuelto" && (
              <div className="relative w-full overflow-hidden">

                {/* content */}
                <div className=" relative z-10 flex items-center justify-center w-full lg:block lg:absolute lg:left-10 lg:top-1/3">

                  <div className="uppercase space-y-4 max-w-xl text-center lg:text-left pt-10 lg:pt-0 w-full">

                    <p className="text-sm tracking-widest text-gray-300 text-start">
                      Configure your
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white text-start">
                      revuelto
                    </h1>

                    {/* btns */}
                    <div className="flex flex-col lg:flex-row gap-4 w-full">

                      <button className="w-full lg:w-auto flex items-center justify-center gap-2 font-semibold uppercase px-6 py-3 bg-[#ffc000] hover:bg-[#c59812] text-black transition cursor-pointer">

                        <span>Start configuration</span>

                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z"
                            fill="currentColor"
                          />
                        </svg>

                      </button>

                      <button className="w-full lg:w-auto flex items-center justify-center gap-2 font-semibold uppercase px-6 py-3 border border-white bg-white text-black cursor-pointer transition hover:bg-black hover:text-white">

                        <span>Explore the model</span>

                        <i className="ri-arrow-right-line text-lg"></i>

                      </button>

                    </div>
                  </div>
                </div>

                {/* img */}
                <div
                  className="h-full w-full mt-5 lg:mt-0 flex justify-center z-10">
                  <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780067349/model_chooser_revuelto_kchhrp.png"
                    alt="Temerario"
                    className="h-62.25 sm:h-75 md:h-100 lg:h-125 w-full object-cover
                    object-[75%_center] md:object-[90%_center] lg:object-[100%_center]"
                  />
                </div>

              </div>
            )}

            {/* 3.urus */}
            {cartab === "urus" && (
              <div className="relative w-full overflow-hidden">

                {/* content */}
                <div className=" relative z-10 flex items-center justify-center w-full lg:block lg:absolute lg:left-10 lg:top-1/3">

                  <div className="uppercase space-y-4 max-w-xl text-center lg:text-left pt-10 lg:pt-0 w-full">

                    <p className="text-sm tracking-widest text-gray-300 text-start">
                      Configure your
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white text-start">
                      urus se
                    </h1>

                    {/* btns */}
                    <div className="flex flex-col lg:flex-row gap-4 w-full">

                      <button className="w-full lg:w-auto flex items-center justify-center gap-2 font-semibold uppercase px-6 py-3 bg-[#ffc000] hover:bg-[#c59812] text-black transition cursor-pointer">

                        <span>Start configuration</span>

                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 1.94702L3 6.18302V17.817L12 22.053L21 17.817V6.18302L12 1.94702ZM12.5 20.712V18H11.5V20.712L4 17.182V7.28902L6.002 8.23102L6.427 7.32602L4.675 6.50002L12 3.05302L19.325 6.50002L17.573 7.32502L17.999 8.23002L20 7.28802V17.183L12.5 20.712ZM14.927 9.67502L12.5 10.817V14H11.5V10.817L9.073 9.67502L9.499 8.77002L12 9.94702L14.502 8.77002L14.927 9.67502Z"
                            fill="currentColor"
                          />
                        </svg>

                      </button>

                      <button className="w-full lg:w-auto flex items-center justify-center gap-2 font-semibold uppercase px-6 py-3 border border-white bg-white text-black cursor-pointer transition hover:bg-black hover:text-white">

                        <span>Explore the model</span>

                        <i className="ri-arrow-right-line text-lg"></i>

                      </button>

                    </div>
                  </div>
                </div>

                {/* img */}
                <div
                  className="h-full w-full mt-10 lg:mt-0 flex justify-center z-10">
                  <img
                    src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1780067354/model_chooser_urus_se_ptrv6r.png"
                    alt="Temerario"
                    className="h-62.25 sm:h-75 md:h-100 lg:h-125 w-full object-cover
                    object-[75%_center] md:object-[90%_center] lg:object-[100%_center]"
                  />
                </div>

              </div>
            )}

          </div>

          <div className="w-full">
            <p className="text-sm sm:text-sm text-gray-100 leading-relaxed text-justify">
              Energy consumption (weighted combined): 21,4 kWh/100 Km plus 5,71 l/100km; CO2 emissions (weighted combined): 140 g/km; CO2 class (weighted combined): E; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 12,9 l/100km
            </p>
          </div>

        </div>

      </div>


    </div>
  )
}
