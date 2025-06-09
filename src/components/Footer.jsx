import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#20161f] text-white sm:text-xs font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-32 py-10">
        {/* Top section: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row items-center md:justify-between border-b border-[#3e2d37] pb-8">
          {/* Logo - Replace this with your logo image if needed */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-10 h-10 text-[#20161f] font-bold flex items-center justify-center rounded-sm">
              <img src="/assets/SMlogo.svg" alt="" />
            </div>
            <span className="text-lg tracking-widest font-medium">
              SERVICEMARKET
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-[#20161f] transition"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Middle section: Links */}
        <div className="grid grid-cols-3 px-3 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-10 sm:text-sm text-[10px] text-[#ccc]">
          {/* Explore */}
          <div className="text-left sm:text-left">
            <h3 className="text-base font-playfair font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-playfair font-semibold mb-4">
              Utility Pages
            </h3>
            <ul className="space-y-2dd">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right sm:text-center md:text-left mr-3 sm:mr-0 md:mr-0">
            <h3 className="text-base sm:text-lg font-playfair font-semibold mb-4 ">
              Keep in Touch
            </h3>
            <div className="space-y-2">
              <div>
                <strong>Address : </strong>
                Mariendalsvej 50D 2 2000
                <br />
                Frederiksberg.
              </div>
              <div>
                <strong>Mail : </strong>
                support@service
                <br />
                market.com
              </div>
              <div>
                <strong>Phone : </strong>
                (+22) 123 - 4567 - 900
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t bg-[#160813] border-[#3e2d37] text-center py-5 text-[#ccc] text-[7px] sm:text-[10px]">
        <div className="flex flex-row justify-center items-center gap-1">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="font-medium">Ignovations</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
