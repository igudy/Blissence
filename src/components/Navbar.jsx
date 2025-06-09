import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlignRight, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuClick = (label) => {
    console.log(`Navigated to ${label}`);
    toggleMenu();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white py-[5px] sm:px-6 lg:px-8 shadow-sm">
      <div className="px-3 md:px-0 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link
            to="/"
            className="flex font-portlight text-3xl text-[#BA7894]"
            aria-label="Home"
          >
            <img
              src="./assets/stylicle.svg"
              alt="Logo"
              className="size-8 mr-3"
            />
            STYLICLE
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {["/", "/about", "/contact"].map((path, idx) => {
              const labels = ["Home", "About Us", "Contact Us"];
              return (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => handleMenuClick(labels[idx])}
                    className={`transition font-medium ${
                      isActive(path)
                        ? "text-[#BA7894] underline underline-offset-4"
                        : "text-[#141414] hover:text-gray-500/75"
                    }`}
                  >
                    {labels[idx]}
                  </Link>
                </li>
              );
            })}

            <li>
              <LanguageSelector />
            </li>

            <li
              onClick={() => handleMenuClick("Login")}
              className="cursor-pointer text-[#141414] border border-[#141414] rounded-md px-4 py-2.5 transition hover:text-gray-500/75"
            >
              Login
            </li>

            <li
              onClick={() => handleMenuClick("Signup")}
              className="cursor-pointer rounded-md bg-[#141414] px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              Signup
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            className="text-[#141414] transition hover:text-gray-500/75"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <AlignRight className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        ></div>
        <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white px-4 py-4 shadow-xl">
          <div className="flex justify-end mb-4">
            <button
              className="text-[#141414] transition hover:text-gray-500/75"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="h-full">
            <ul className="flex flex-col items-center justify-center h-[calc(70vh-4rem)] gap-7 text-sm">
              {["/", "/about", "/contact"].map((path, idx) => {
                const labels = ["Home", "About Us", "Contact Us"];
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => handleMenuClick(labels[idx])}
                      className={`transition font-medium ${
                        isActive(path)
                          ? "text-[#BA7894] underline underline-offset-4"
                          : "text-[#141414] hover:text-gray-500/75"
                      }`}
                    >
                      {labels[idx]}
                    </Link>
                  </li>
                );
              })}

              <li>
                <LanguageSelector />
              </li>

              <li
                onClick={() => handleMenuClick("Login")}
                className="text-[#141414] border border-[#141414] rounded-md px-4 py-2.5 mb-20 transition hover:text-gray-500/75"
              >
                Login
              </li>

              <li
                onClick={() => handleMenuClick("Signup")}
                className="rounded-md bg-[#141414] px-5 py-2.5 text-sm font-medium text-white shadow"
              >
                Signup
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
