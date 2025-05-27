import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlignRight, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white py-[5px] sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link to="/" className="flex font-portlight text-3xl text-[#BA7894]" aria-label="Home">
            <span className="sr-only">Home</span>
            <img src="./assets/stylicle.svg" alt="Logo" className="size-8 flex mr-3 " />
            STYLICLE
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link to="/" className="text-[#141414] transition hover:text-gray-500/75">
                Home
              </Link>
            </li>

               <li>
              <Link to="/about" className="text-[#141414] transition hover:text-gray-500/75">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-[#141414] transition hover:text-gray-500/75">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/language" className="text-[#141414] transition hover:text-gray-500/75">
                EN
              </Link>
            </li>

            <li>
              <Link to="/login" className="text-[#141414] border-[1px] border-[#141414] rounded-md px-4 py-2.5 transition hover:text-gray-500/75">
                Login
              </Link>
            </li>

            <li>
              <Link to="/signup" className="rounded-md bg-[#141414] px-4 py-3 text-sm font-medium text-white shadow">
                Signup
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button className="text-[#141414] transition hover:text-gray-500/75" onClick={toggleMenu}>
            {menuOpen ? <X className="h-6 w-6" /> : <AlignRight className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-2">
          <ul className="space-y-4 px-4 py-2 text-sm">
            <li>
              <Link to="/" className="text-[#141414] transition hover:text-gray-500/75" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#141414] transition hover:text-gray-500/75" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
             <li>
              <Link to="/contact" className="text-[#141414] transition hover:text-gray-500/75" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/en" className="text-[#141414] transition hover:text-gray-500/75" onClick={toggleMenu}>
                EN
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-[#141414] border-[1px] border-[#141414] rounded-md px-4 py-2.5 mb-28 transition hover:text-gray-500/75 " onClick={toggleMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="rounded-md bg-[#141414] px-5 py-2.5 text-sm font-medium text-white shadow" onClick={toggleMenu}>
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
