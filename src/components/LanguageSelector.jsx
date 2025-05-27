// src/components/LanguageSelector.jsx
import React, { useState } from "react";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleLanguageChange = (lang) => {
    console.log(`Language switched to: ${lang}`);
    setOpen(false);
    // Optional: add logic to change language in your app
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-[#141414] transition hover:text-gray-500/75"
      >
        EN
      </button>
      {open && (
        <div className="absolute mt-2 w-28 bg-white shadow-md rounded-md z-10">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLanguageChange("FR")}
            >
              FR
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLanguageChange("ES")}
            >
              ES
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLanguageChange("DE")}
            >
              DE
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
