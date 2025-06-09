// Contact.jsx

import React from "react";
import { Mail, Phone, Home } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row md:p-20">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 p-6">
        <div className="">
          <img
            src="/assets/gallery/contactImage.png"
            alt="Store"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 bg-transparent p-10 lg:pt-5">
        <p className="text-sm tracking-widest text-[#422A3C] uppercase mb-4">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-3xl font-extrabold font-playfair leading-snug mb-6">
          We are here to help
          <br />
          you always...
        </h2>
        <p className="text-base md:text-sm text-[#422A3C] mb-10 max-w-md leading-relaxed">
          Whether you have questions, feedback, or need assistance, we're just a
          message or call away.
        </p>

        {/* Contact Info */}
        <div className="space-y-5">
          <div className="flex items-start space-x-5">
            <div className="p-3 border border-[#422A3C] rounded-md">
              <Home className="text-[#422A3C]" size={24} />
            </div>
            <div>
              <p className="text-lg md:text-sm font-semibold">Visit Us :</p>
              <p className="text-xs text-[#422A3C]">
                MARIENDALSVEJ 50D 2 2000 FREDERIKSBERG.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-5">
            <div className="p-3 border border-[#422A3C] rounded-md">
              <Mail className="text-[#422A3C]" size={24} />
            </div>
            <div>
              <p className="text-lg  md:text-sm font-semibold">Drop Us :</p>
              <p className="text-xs text-[#422A3C]">SUPPORT@BEAUTYNESS.COM</p>
            </div>
          </div>

          <div className="flex items-start space-x-5">
            <div className="p-3 border border-[#422A3C] rounded-md">
              <Phone className="text-[#422A3C]" size={24} />
            </div>
            <div>
              <p className="text-lg md:text-sm font-semibold">Call Us :</p>
              <p className="text-xs text-[#422A3C]">CALL: 1-800-123-9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
