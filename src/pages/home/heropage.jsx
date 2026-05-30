import React from 'react'

export const Heropage = () => {
    return (
        <div className="relative w-full aspect-video overflow-hidden">

            <video
                src="https://res.cloudinary.com/dhlflr2cc/video/upload/v1778050208/Lamborghini_d1d4wl.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
            />

            {/* Only show overlay*/}
            <div className="absolute inset-0 w-full bg-black/30"></div>

            {/* content */}
            <div className="absolute inset-0 z-50 flex items-end-safe lg:pb-20">

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-5 sm:pb-10 lg:pb-24 uppercase text-white">

                    <div className="flex flex-col gap-2 sm:gap-5 lg:gap-5">

                        <p className="text-sm sm:text-base lg:text-lg font-semibold tracking-tight">
                            inspiring future since 1963
                        </p>

                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                            Driven by dreams
                        </h1>

                        <button className="w-full md:w-fit text-white border border-white uppercase cursor-pointer font-semibold px-5 py-3 tracking-wide transition-all duration-300 hover:bg-black hover:text-white outline-none">
                            discover more
                            <span className="ml-2">
                                <i className="ri-arrow-right-long-fill"></i>
                            </span>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}