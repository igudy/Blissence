import React, { useRef } from 'react';

const categories = [
    { name: "Makeup-artist", icon: "/assets/category/makeup-artist.png" },
    { name: "Frisørsalon", icon: "/assets/category/frisorsalon.png" },
    { name: "Wellness", icon: "/assets/category/wellnesscenter.png" },
    { name: "Barberson", icon: "/assets/category/barbersalon.png" },
    { name: "Massageklinik", icon: "/assets/category/massageklinik.png" },
    { name: "Fodterapeut", icon: "/assets/category/fodterapeut.png" },

    { name: "Makeup-artist", icon: "/assets/category/makeup-artist.png" },
    { name: "Frisørsalon", icon: "/assets/category/frisorsalon.png" },
    { name: "Wellness", icon: "/assets/category/wellnesscenter.png" },
    { name: "Barberson", icon: "/assets/category/barbersalon.png" },
    { name: "Massageklinik", icon: "/assets/category/massageklinik.png" },
    { name: "Fodterapeut", icon: "/assets/category/fodterapeut.png" },

];

const CategorySection = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="relative py-10">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2  rounded-lg"
      >
        <img src="/assets/Icons/Leftclick-icon.png" alt="" />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-16 scrollbar-hide"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] flex flex-col items-center text-center"
          >
            <div className="w-full rounded-full flex items-center justify-center">
              <img src={cat.icon} alt={cat.name} className="w-20" />
            </div>
            <span className="text-[#3a1d2f] font-medium">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-lg"
      >
        <img src="/assets/Icons/Rightclick.png" alt="" />
      </button>
    </div>
  );
};

export default CategorySection;
