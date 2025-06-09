import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";

// Example data (you can fetch from API instead)
const services = [
  {
    image: "/assets/card/salon1.png",
    rating: 4.5,
    reviews: 104,
    title: "Salon Name",
    address: "Brookpark Ext, 27085, North Olmsted, 44070",
    buttonText: "BOOK NOW",
  },
  {
    image: "/assets/card/salon2.png",
    rating: 4.5,
    reviews: 104,
    title: "Salon Name",
    address: "2267 Main st, Fort Myers, 33901",
    buttonText: "BOOK NOW",
  },
  {
    image: "/assets/card/salon3.png",
    rating: 4.5,
    reviews: 104,
    title: "Deluxe room",
    address: "2267 Main st, Fort Myers, 33901",
    buttonText: "BOOK NOW",
  },
  {
    image: "/assets/card/salon4.png",
    rating: 4.5,
    reviews: 104,
    title: "Meeting room",
    address: "2267 Main st, Fort Myers, 33901",
    buttonText: "BOOK NOW",
  },
];

const RecommendedServices = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto relative">
      <div className="text-center mb-10">
        <h2 className="text-xs uppercase text-[#BA7894] font-sans tracking-wide mb-2">
          Our Services
        </h2>
        <h1 className="text-3xl font-bold text-[#422A3C] font-playfair mb-2">
          Recommended
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin
          neque.
        </p>
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-lg shadow-md"
      >
        <img src="/assets/Icons/Leftclick-icon.png" alt="Scroll Left" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-10 scrollbar-hide"
      >
        {services.map((service, index) => (
          <div className="flex-shrink-0" key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-lg shadow-md"
      >
        <img src="/assets/Icons/Rightclick.png" alt="Scroll Right" />
      </button>
    </section>
  );
};

export default RecommendedServices;
