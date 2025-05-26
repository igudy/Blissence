import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Leslie Alexander",
    location: "Moncton, Canada",
    title: "Neque porro quisquam est qui dolum",
    message:
      "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English.",
    img: "/assets/testimonial/testi-img1.png",
    topQuote: "/assets/testimonial/topquote.svg",
    bottomQuote: "/assets/testimonial/bottomquote.svg",
    decorations: ["/assets/testimonial/Rectangle10.svg", "/assets/testimonial/Rectangle9.svg"],
  },
  {
    name: "James Smith",
    location: "London, UK",
    title: "Excepteur sint occaecat cupidatat",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl. Nulla facilisi. Integer lobortis justo vitae turpis finibus.",
    img: "/assets/testimonial/testi-img2.png",
    topQuote: "/assets/testimonial/topquote.svg",
    bottomQuote: "/assets/testimonial/bottomquote.svg",
    decorations: ["/assets/testimonial/Rectangle10.svg", "/assets/testimonial/Rectangle9.svg"],
  },
  {
    name: "Ava Chen",
    location: "Singapore",
    title: "Ut enim ad minim veniam",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "/assets/testimonial/testi-img3.png",
    topQuote: "/assets/testimonial/topquote.svg",
    bottomQuote: "/assets/testimonial/bottomquote.svg",
    decorations: ["/assets/testimonial/Rectangle10.svg", "/assets/testimonial/Rectangle9.svg"],
  },
];

const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const t = testimonials[current];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-white to-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-pink-400 uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What our Customers say...
          </h2>
        </div>

        <div className="bg-[#3b233d] rounded-3xl w-full flex flex-col md:flex-row items-center px-8 py-20 md:py-16 md:px-40 relative">
          <div className="flex flex-row mr-40">
            <div className="flex flex-row gap-3 md:gap-5  md:h-full">
          {t.decorations.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={
                i === 0
                  ? "mb-48 mt-11 md:mt-0 md:mb-52 md:h-full h-28"
                  : i === 1
                  ? "mt-10 md:mt-0 md:h-full h-60"
                  : ""
              }
            />
          ))}

              <div className="absolute z-20 mt-28 md:mt-36 ml-16  md:ml-24 ">
                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-white flex-1 relative z-20 mt-10 md:mt-0">
            <img src={t.topQuote} alt="Top quote" className="mb-4" />
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-300 mb-4">{t.location}</p>
            <h3 className="text-2xl font-bold leading-snug mb-4">{t.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{t.message}</p>
            <div className="mt-4 flex justify-end">
              <img src={t.bottomQuote} alt="Bottom quote" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#3b233d] text-white flex items-center justify-center hover:bg-[#5a3a5e] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
