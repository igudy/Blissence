import React, { useState } from 'react';
import CategorySection from './CategorySection';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import Service from './ServiceCard';
import ServiceCard from './ServiceCard';
import RecommendedServices from './RecommendedServices';
import TestimonialCard from './TestimonialCard';
import EmailSubscription from './EmailSubscription';
import Footer from './Footer';

const Home = () => {
  const [serviceName, setServiceName] = useState('');
  const [address, setAddress] = useState('');

  const handleSearch = () => {
    console.log("Service:", serviceName);
    console.log("Address:", address);
  };

  return (
    <div>
      {/* CTA SECTION */}
      <div className="CTA relative justify-center items-center sm:w-full w-full h-[500px]">
        <img
          src="/assets/homeimg.jpg"
          alt="img"
          className="sm:w-6/12 float-right md:z-[-1] h-full object-cover"
        />
        <div className="absolute w-full inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#431c3d]/90 via-[#422A3CD9]/90 md:from-[#422A3CD9]/100 md:via-[#422A3CD9]/100 md:to-transparent" />

        <div className="absolute inset-0 top-10 flex flex-col justify-center sm:items-start items-center md:pl-28 lg:pl-28 text-white max-w-xl">
          <p className="uppercase flex tracking-widest text-xs md:text-sm mb-2">
            <img src="/assets/SMlogo1.svg" alt="Logo" className="size-5 mr-1" />
            Hair Salon, Masseuse, Beauty Salon
          </p>
          <h1 className="text-4xl font-playfair text-[#F7E5C1] sm:text-6xl font-bold text-center sm:text-start leading-tight mb-4">
            Find a service <br /> close to you
          </h1>
          <p className="text-xs sm:m-0 mx-6 sm:text-base text-justify sm:text-start md:text-lg text-white/80 ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>

          {/* SearchBar */}
          <SearchBar
            serviceName={serviceName}
            setServiceName={setServiceName}
            address={address}
            setAddress={setAddress}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* CATEGORY SECTION BELOW CTA */}
      <CategorySection />
      {/* GALLERY SECTION */}
      <Gallery />
      {/* RECOMMENDED SERVICES SECTION */}
      <RecommendedServices/>
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
