import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, FreeMode, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const categories = [
  { name: "Makeup Artist", icon: "/assets/category/makeup-artist.png" },
  { name: "Hair Salon", icon: "/assets/category/frisorsalon.png" },
  { name: "Wellness", icon: "/assets/category/wellnesscenter.png" },
  { name: "Barber", icon: "/assets/category/barbersalon.png" },
  { name: "Massage Clinic", icon: "/assets/category/massageklinik.png" },
  { name: "Foot Therapist", icon: "/assets/category/fodterapeut.png" },
  { name: "Wellness", icon: "/assets/category/wellnesscenter.png" },
];

const CategorySection = () => {
  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf5f0] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#3a1d2f] mb-1">
            Explore Categories
          </h2>
          <p className="text-lg text-[#3a1d2f]/80 max-w-2xl mx-auto">
            Discover the perfect service for your needs
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Mousewheel, FreeMode, Autoplay]}
            navigation={{
              nextEl: ".category-next",
              prevEl: ".category-prev",
            }}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            freeMode={{
              momentum: true,
              momentumBounce: false,
              momentumRatio: 1,
              momentumVelocityRatio: 1,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.5,
            }}
            touchStartPreventDefault={false}
            className="pb-12"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <div className="group relative cursor-pointer">
                  <div
                    className="flex flex-col items-center text-center p-4 transition-all 
                  duration-200 hover:transform hover:scale-105"
                  >
                    <div
                      className="w-16 md:w-28 md:h-28 rounded-full
                     bg-white shadow-lg flex items-center justify-center p-4 mb-4
                      transition-all duration-300 group-hover:shadow-xl 
                      group-hover:bg-[#f7e5c1]/20"
                    >
                      <img
                        src={cat.icon}
                        alt={cat.name}
                        className="w-full h-full object-contain transition-transform 
                        duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span
                      className="text-[#3a1d2f] font-medium text-[12px] md:text-sm md:text-base 
                    lg:text-sm transition-colors duration-300 
                    text-[#b46c87]"
                    >
                      {cat.name}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl border-2
                   border-transparent border-[#b46c87]/30 
                   transition-all duration-300 pointer-events-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="category-prev absolute left-0 top-1/2 
          -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center 
          bg-white rounded-full shadow-lg text-[#3a1d2f] opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 
          hover:bg-[#f7e5c1]"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="category-next absolute right-0 top-1/2
           -translate-y-1/2 z-10 w-10 h-10 flex items-center 
           justify-center bg-white rounded-full shadow-lg 
           text-[#3a1d2f] opacity-0 group-hover:opacity-100 
           transition-opacity duration-300 hover:bg-[#f7e5c1]"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
