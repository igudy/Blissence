import React from "react";

const gallery = [
  { src: "/assets/gallery/image1.png", alt: "Facial treatment with a brush" },
  { src: "/assets/gallery/image2.png", alt: "Woman with curled hair" },
  { src: "/assets/gallery/image3.png", alt: "Relaxing facial massage" },
  { src: "/assets/gallery/image4.png", alt: "Back massage" },
  { src: "/assets/gallery/image5.png", alt: "Anti-aging facial treatment" },
];

const Gallery = () => {
  return (
    <div className="py-12 bg-gray-50 font-playfair text-[#422A3C] text-center">
      <h2 className="text-3xl font-bold text-[#422A3C] mb-4">
        We are <span className="tex">Experienced</span> in making you <br /> very <span className="text-[#422A3C]">Beautiful</span>
      </h2>
      <p className="text-gray-500 font-manrope max-w-xl mx-auto px-2 sm:px-auto mb-8">
        Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[200px] gap-4 max-w-5xl mx-auto px-4">
        {gallery.map((gallery, index) => (
<div
  key={index}
  className={`
    overflow-hidden
    ${index === 0 ? "rounded-tl-[50px] rounded-tr-[50px] md:rounded-tl-[50px] md:rounded-tr-none md:rounded-bl-[50px] md:col-span-1 md:row-span-2" : ""}
    ${index === 2 ? "md:rounded-tr-[50px]" : ""}
    ${index === 4 ? "rounded-bl-[50px] rounded-br-[50px] md:rounded-bl-none md:rounded-br-[50px]" : ""}
  `}
>
  <img
    src={gallery.src}
    alt={gallery.alt}
    className={`w-full ${
      index !== 1 && index !== 2 ? "h-full" : "h-64"
    } object-cover hover:scale-105 transition-transform duration-300`}
  />
</div>

        ))}
      </div>
    </div>
  );
};

export default Gallery;
