import { useRef, useState } from "react";

export const HuracanTabs = () => {

    const tabs = [
        {
            title: "AERODYNAMICS",
            features: "FEATURE HIGHLIGHTS",
            heading: "Aerodynamics",
            paragraph: "The exterior design was revised to improve aerodynamics, a fundamental aspect for stability of          use in every condition. These modifications have led to improved downforce and reduced drag.",
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780120246/aerodynamic_ws1pna.mp4",
        },
        {
            title: "ENGINE",
            features: "FEATURE HIGHLIGHTS",
            heading: "ENGINE",
            paragraph: "When the engine of Huracán Tecnica roars to life, it reveals a clear link with Huracán STO. The heart of the Tecnica is a powerful 5.2-liter V10 naturally aspirated engine that produces an output of 640 CV (470 kW) at 8,000 rpm and a maximum torque of 565 Nm at 6,500 rpm. This power offers the very best engine output in every condition, which is then combined with a finely tuned accelerator response. The performance level is striking: acceleration from 0 to 100 km/h in 3.2 seconds, 0 to 200 km/h in 9.1 seconds, and a top speed of 325 km/h. The Huracán Tecnica offers an unforgettable driving experience that demonstrates pure power.",
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780120266/engine_t3ss7o.mp4",
        },
        {
            title: "P-TCS",
            features: "FEATURE HIGHLIGHTS",
            heading: "P-TCS",
            paragraph: "P-TCS is Lamborghini’s specific traction-control management that prioritizes sportiness while providing confident, visceral feedback. Compared to a standard TCS, the proactive management of torque improves the effectiveness on low-grip surfaces in Strada mode, maximizes the “fun to drive” element in Sport mode, and enhances vehicle traction and sharpness at corner exit in Corsa mode.",
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780120251/ptcs_zo4alp.jpg",
        },
        {
            title: "Dedicated Brake Cooling System",
            features: "FEATURE HIGHLIGHTS",
            heading: "Dedicated Brake Cooling System",
            paragraph: "The brake cooling system was redesigned and improved at the front and rear, pushing the airflow directly inside each brake disc to maximize heat dissipation. This improvement led to a temperature reduction in the most sensible parts of the car, such as brake fluids and discs.",
            img: "https://res.cloudinary.com/dhlflr2cc/video/upload/v1780120249/brake_qtsgfk.mp4",
        },
        {
            title: "REAR-WHEEL STEERING",
            features: "FEATURE HIGHLIGHTS",
            heading: "REAR-WHEEL STEERING",
            paragraph: "Huracán Tecnica offers the Lamborghini rear-wheel steering system, ensuring best-in-class dynamic performance according to the driving mode selected: Strada, Sport or Corsa. The LRS system manages the rear steering axle through two electromechanical actuators. This system improves agility at low speeds while providing optimum vehicle control and greater stability at highway speeds. ",
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780120247/rear_wheel_hdcokw.jpg",
        },
        {
            title: "Direct Steering",
            features: "FEATURE HIGHLIGHTS",
            heading: "Direct Steering",
            paragraph: "Like STO, Huracán Tecnica is equipped with direct steering that makes the steering response more immediate, creating an exceptional connection between the driver, the car and the road.",
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780120242/direct_steering_jjrtew.jpg",
        },
        {
            title: "LDVI",
            features: "FEATURE HIGHLIGHTS",
            heading: "LDVI",
            paragraph: "Lamborghini Integrated Vehicle Dynamics (LDVI) is the technological brain of Huracán Tecnica, capable of coordinating a complex and sophisticated system for the management of driving dynamics. Based on the driver’s input, the external environment and the selected driving mode, LDVI can anticipate the driver’s wishes, shifting from underlying feedback logic to “feed-forward” logic, from reaction to anticipation — this is the real evolution.",
            img: "https://res.cloudinary.com/dhlflr2cc/image/upload/v1780120249/ldvi_mtexcf.jpg",
        },
    ]

    // Active Tab
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // Scroll Ref
    const scrollRef = useRef(null);

    // Scroll Left
    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    };

    // Scroll Right
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 200,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full bg-white py-15">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tabs Wrapper */}
                <div className="relative h-16 px-3">

                    {/* Left Arrow */}
                    <span
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2  z-20 cursor-pointer
                            bg-white hover:bg-gray-200 transition-all p-2">
                        <i className="ri-arrow-left-s-line text-3xl"></i>
                    </span>

                    {/* Right Arrow */}
                    <span
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer
                            bg-white hover:bg-gray-200 transition-all p-2">
                        <i className="ri-arrow-right-s-line text-3xl"></i>
                    </span>

                    {/* Tabs */}
                    <div
                        ref={scrollRef}
                        className="h-full w-full flex items-center gap-12 overflow-x-auto scrollbar-none whitespace-nowrap
                                   px-12 scroll-smooth"
                    >

                        {tabs.map((tab, i) => (

                            <button
                                key={i}
                                onClick={() => setActiveTab(tab)}
                                className={`px-2 py-2 uppercase text-sm md:text-base transition-all whitespace-nowrap
                                  ${activeTab.title === tab.title
                                        ? "border-b-2 border-black text-black font-bold"
                                        : "text-gray-500 border-b hover:text-black font-bold"
                                    } cursor-pointer`}>
                                {tab.title}
                            </button>

                        ))}

                    </div>

                </div>

                {/* Content */}
                <div className="w-full pt-15">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">

                        <div className="h-full overflow-hidden">

                            {activeTab.img.endsWith(".mp4") ? (

                                <video
                                    src={activeTab.img}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full block h-65 sm:h-87.5 md:h-100 object-cover scale-100 pointer-events-none "
                                />

                            ) : (

                                <img
                                    src={activeTab.img}
                                    alt={activeTab.title}
                                    onContextMenu={(e) => e.preventDefault()}
                                    className="w-full h-65 sm:h-87.5 md:h-100 object-cover scale-100 pointer-events-none"

                                />

                            )}

                        </div>

                        <div className="flex flex-col justify-center h-full px-4 md:px-8">

                            <h3 className=" text-sm md:text-base uppercase tracking-[4px] text-gray-500 mb-4 font-bold">
                                {activeTab.features}
                            </h3>

                            <h1 className=" text-3xl md:text-5xl font-bold uppercase leading-tight mb-6 ">
                                {activeTab.heading}
                            </h1>

                            <p className=" text-gray-600 leading-8 text-base md:text-lg text-justify">
                                {activeTab.paragraph}
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};