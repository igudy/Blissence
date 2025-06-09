import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";

const categories = [
  { name: "Makeup-artist", icon: "/assets/category/makeup-artist.png" },
  { name: "Frisørsalon", icon: "/assets/category/frisorsalon.png" },
  { name: "Wellness", icon: "/assets/category/wellnesscenter.png" },
  { name: "Barberson", icon: "/assets/category/barbersalon.png" },
  { name: "Massage klinik", icon: "/assets/category/massageklinik.png" },
  { name: "Fodterapeut", icon: "/assets/category/fodterapeut.png" },
];

const CategorySection = () => {
  return (
    <div className="relative py-10">
      <Swiper
        modules={[Navigation, Mousewheel, FreeMode]}
        navigation={{
          nextEl: ".right-btn",
          prevEl: ".left-btn",
        }}
        spaceBetween={24}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        simulateTouch={true}
        freeMode={true}
        mousewheel={{
          forceToAxis: true, // Makes it scroll horizontally only
        }}
        touchStartPreventDefault={false}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="w-full rounded-full flex items-center justify-center">
                <img src={cat.icon} alt={cat.name} className="sm:w-20 w-10" />
              </div>
              <span className="text-[#3a1d2f] font-medium text-sm md:text-lg lg:text-xl">
                {cat.name}
              </span>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="left-btn absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-lg">
        <img src="/assets/Icons/Leftclick-icon.png" alt="Left" />
      </button>

      <button className="right-btn absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-lg">
        <img src="/assets/Icons/Rightclick.png" alt="Right" />
      </button>
    </div>
  );
};

export default CategorySection;
