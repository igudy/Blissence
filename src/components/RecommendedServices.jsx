import React from "react";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import salon1 from "../assets/card/salon1.png";
import salon2 from "../assets/card/salon2.png";
import salon3 from "../assets/card/salon3.png";
import salon4 from "../assets/card/salon4.png";
import salon5 from "../assets/card/salon5.png";

const services = [
  {
    id: 1,
    image: salon1,
    rating: 4.8,
    reviews: 127,
    title: "Luxury Hair Studio",
    address: "Brookpark Ext, North Olmsted",
    price: "$85+",
    services: ["Haircuts", "Coloring", "Extensions"],
    buttonText: "BOOK NOW",
  },
  {
    id: 2,
    image: salon2,
    rating: 4.7,
    reviews: 92,
    title: "Urban Beauty Lounge",
    address: "Main St, Fort Myers",
    price: "$65+",
    services: ["Facials", "Waxing", "Makeup"],
    buttonText: "BOOK NOW",
  },
  {
    id: 3,
    image: salon3,
    rating: 4.9,
    reviews: 215,
    title: "Deluxe Spa Retreat",
    address: "Ocean View, Miami Beach",
    price: "$120+",
    services: ["Massages", "Body Treatments", "Aromatherapy"],
    buttonText: "BOOK NOW",
  },
  {
    id: 4,
    image: salon4,
    rating: 4.6,
    reviews: 78,
    title: "Executive Barber Club",
    address: "Financial District, NYC",
    price: "$45+",
    services: ["Shaves", "Beard Care", "Hot Towel"],
    buttonText: "BOOK NOW",
  },
  {
    id: 5,
    image: salon5,
    rating: 4.8,
    reviews: 143,
    title: "Glamour Nail Atelier",
    address: "Rodeo Drive, Beverly Hills",
    price: "$55+",
    services: ["Manicures", "Pedicures", "Nail Art"],
    buttonText: "BOOK NOW",
  },
];

const RecommendedServices = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf5f0] to-white"
    >
      <div className="max-w-7xl mx-auto my-10">
        <div className="text-center mb-12 mt-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xs uppercase text-[#BA7894] font-medium tracking-widest my-3 pt-5"
          >
            Premium Selection
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#422A3C] font-playfair mb-3"
          >
            Curated For You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Discover hand-picked beauty services tailored to your preferences
          </motion.p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".recommended-next",
            prevEl: ".recommended-prev",
          }}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="pb-8 relative group"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <ServiceCard {...service} />
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <button className="recommended-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-[#3a1d2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#f7e5c1]">
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button className="recommended-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-[#3a1d2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#f7e5c1]">
            <FiChevronRight className="w-6 h-6" />
          </button>
        </Swiper>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <button className="px-8 py-3 bg-[#422A3C] text-white rounded-full font-medium hover:bg-[#5a3a4f] transition-colors shadow-lg hover:shadow-xl">
            View All Services
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RecommendedServices;
