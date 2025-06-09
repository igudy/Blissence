import React, { useState } from "react";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    console.log(`Language changed to: ${selectedLang}`);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#BA7894]"
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="es">ES</option>
    </select>
  );
};

export default LanguageSelector;
