// AboutService.jsx
import React from "react";

const AboutService = () => {
  return (
    <section className="w-full bg-[#f9f0de] flex justify-center py-20 px-4 md:px-8 md:py-28">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-stretch">
        {/* Left image section */}
        <div className="relative bg-[#3f253b] md:h-96 w-full md:w-1/2 flex justify-center items-center">
          <div className="absolute left-0 top-0 bottom-0 w-1/5 bg-[#3f253b] z-0"></div>
          <div className="relative z-10 p-4">
            <img
              src="/assets/AboutImage1.jpg"
              alt="Service"
              className="object-cover md:ml-4 w-[450px] h-[550px] max-w-full"
            />
          </div>
        </div>

        {/* Right text section */}
        <div className="w-full md:h-96 md:w-1/2 bg-[#3f253b] text-white px-6 py-10 md:py-20 md:px-20 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest mb-3 text-[#e6d4e0]">
            About Us
          </p>
          <h2 className="text-3xl font-bold font-playfair leading-tight mb-6 text-[#f6ecf3]">
            It’s the bridge between<br />
            service companies<br />
            and consumers.
          </h2>
          <p className="text-sm leading-relaxed text-[#d7c4d2]">
            ServiceMarket.dk is a Copenhagen-based technology company known for
            our overview platform. Our aim is to simplify and improve everyday
            life for citizens in Denmark. One platform that brings together all
            services in an easy and controlled environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
