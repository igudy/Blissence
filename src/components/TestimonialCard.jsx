import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Leslie Alexander",
    location: "Moncton, Canada",
    title: "Exceptional Service and Support",
    message:
      "From the first interaction, I was impressed by the level of professionalism and attention to detail. The team was always available to answer my questions and made the entire process seamless. I couldn't be happier!",
    img: "/assets/testimonial/testi-img1.png",
    topQuote: "/assets/testimonial/topquote.svg",
    bottomQuote: "/assets/testimonial/bottomquote.svg",
    decorations: [
      "/assets/testimonial/Rectangle10.svg",
      "/assets/testimonial/Rectangle9.svg",
    ],
  },
  {
    name: "James Smith",
    location: "London, UK",
    title: "A Game-Changer for Our Business",
    message:
      "Working with this team has completely transformed how we operate. Their innovative solutions helped us streamline our workflow, save time, and increase customer satisfaction. Highly recommended.",
    img: "/assets/testimonial/testi-img1.png",
    topQuote: "/assets/testimonial/topquote.svg",
    bottomQuote: "/assets/testimonial/bottomquote.svg",
    decorations: [
      "/assets/testimonial/Rectangle10.svg",
      "/assets/testimonial/Rectangle9.svg",
    ],
  },
  {
    name: "Ava Chen",
    location: "Singapore",
    title: "Professional, Reliable, and Creative",
    message:
      "I was blown away by the creativity and quality of work delivered. They listened carefully to my needs and brought my vision to life with precision and flair. Truly a pleasure to work with!",
    img: "/assets/testimonial/testi-img1.png",
    topQuote: "/assets/testimonial/topquote.svg",
    bottomQuote: "/assets/testimonial/bottomquote.svg",
    decorations: [
      "/assets/testimonial/Rectangle10.svg",
      "/assets/testimonial/Rectangle9.svg",
    ],
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
    <div className="w-full bg-gradient-to-b from-white via-white to-gray-100 flex items-center justify-center px-4 pb-4">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-pink-400 uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What our Customers say...
          </h2>
        </div>

        <div className="bg-[#422A3C] rounded-[40px] h-[450px] sm:h-auto w-full flex flex-col md:flex-row items-center px-3 py-0 pb-2 sm:py-12 sm:px-20 lg:px-40 relative">
          <div className="flex flex-row mr-40">
            <div className="flex flex-row gap-2 sm:gap-3 lg:mr-20  sm:h-full">
              {t.decorations.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className={
                    i === 0
                      ? " mt-0 md:mt-0 sm:mb-52 w-6 sm:w-full sm:h-32 h-28"
                      : i === 1
                      ? "mt-[-10px] w-6 sm:w-full md:mt-0 sm:h-72 h-52"
                      : ""
                  }
                />
              ))}

              <div className="absolute z-20 mt-12 sm:mt-20 ml-10  sm:ml-16 ">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-white flex-1 relative z-20 mt-[-30px] sm:mt-0">
            <img
              src={t.topQuote}
              alt="Top quote"
              className="mb-1 sm:mb-4 size-4 sm:size-auto"
            />
            <p className="font-semibold">{t.name}</p>
            <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4">
              {t.location}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2 sm:mb-4">
              {t.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {t.message}
            </p>
            <div className="mt-0 size-4 float-right sm:size-auto sm:mt-4 flex justify-end">
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
            className="w-10 h-10 rounded-full bg-[#422A3C] text-white flex items-center justify-center hover:bg-[#5a3a5e] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
