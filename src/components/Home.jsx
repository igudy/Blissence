import React, { useState } from "react";
import CategorySection from "./CategorySection";
import SearchBar from "./SearchBar";
import Gallery from "./Gallery";
import Service from "./ServiceCard";
import ServiceCard from "./ServiceCard";
import RecommendedServices from "./RecommendedServices";
import TestimonialCard from "./TestimonialCard";
import EmailSubscription from "./EmailSubscription";
import Footer from "./Footer";

const Home = () => {
  const [serviceName, setServiceName] = useState("");
  const [address, setAddress] = useState("");

  const handleSearch = () => {
    console.log("Service:", serviceName);
    console.log("Address:", address);
  };

  return (
    <div>
      {/* CTA SECTION */}
      <div className="relative w-full h-[600px] sm:h-[450px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/homeimg.jpg"
            alt="Beautiful salon services"
            className="w-full h-full object-cover object-center scale-110 hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#431c3d]/90 via-[#422A3CD9]/90 md:from-[#422A3CD9]/100 md:via-[#422A3CD9]/90 md:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-center items-center md:items-start mt-4 md:mt-5 text-center md:text-left">
              {/* Tagline with Animation */}
              <div className="flex items-center mb-4 animate-fadeInUp">
                <img
                  src="/assets/SMlogo1.svg"
                  alt="Stylistic Mark"
                  className="w-5 h-5 mr-2 filter brightness-0 invert"
                />
                <span className="uppercase tracking-widest text-xs md:text-sm font-medium text-white/90 ">
                  Hair Salon • Masseuse • Beauty Salon
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-[#F7E5C1] leading-tight mb-6 animate-fadeInUp delay-100">
                <span className="inline-block">Find premium beauty</span>
                <br />
                <span className="inline-block">services near you</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-8 px-4 sm:px-0 animate-fadeInUp delay-200">
                Discover top-rated beauty professionals in your area. Book
                appointments instantly and experience luxury at your
                convenience.
              </p>

              {/* Enhanced Search Bar */}
              <div className="w-full max-w-2xl animate-fadeInUp delay-300">
                <SearchBar
                  serviceName={serviceName}
                  setServiceName={setServiceName}
                  address={address}
                  setAddress={setAddress}
                  onSearch={handleSearch}
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 text-white/80 text-xs animate-fadeInUp delay-400">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Verified Professionals
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Instant Booking
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Secure Payments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION BELOW CTA */}
      <CategorySection />
      {/* GALLERY SECTION */}
      <Gallery />
      {/* RECOMMENDED SERVICES SECTION */}
      <RecommendedServices />
      {/* TESTIMONIAL SECTION */}
      <TestimonialCard />
      {/* EMAILSUBSCRIPTION SECTION */}
      <EmailSubscription />
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

export default Home;
