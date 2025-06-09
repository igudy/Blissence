import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

const SearchBar = ({
  serviceName,
  setServiceName,
  address,
  setAddress,
  onSearch,
}) => {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg px-6 py-4 gap-4 max-w-4xl mx-auto w-full">
        {/* Service Name Input */}
        <div className="flex flex-col flex-1 w-full">
          <label
            htmlFor="service"
            className="text-[#b46c87] font-medium text-sm mb-1"
          >
            Service Name
          </label>
          <div className="relative">
            <input
              id="service"
              type="text"
              placeholder="Book your service..."
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="w-full pr-8 text-sm placeholder:text-gray-400 text-gray-800 focus:outline-none border-b border-gray-300 py-2 focus:border-[#b46c87] transition-colors"
            />
            <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Address Input */}
        <div className="flex flex-col flex-1 w-full">
          <label
            htmlFor="address"
            className="text-[#b46c87] font-medium text-sm mb-1"
          >
            Address
          </label>
          <div className="relative">
            <input
              id="address"
              type="text"
              placeholder="Enter location"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full pr-8 text-sm placeholder:text-gray-400 text-gray-800 focus:outline-none border-b border-gray-300 py-2 focus:border-[#b46c87] transition-colors"
            />
            <FiMapPin className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Search Button */}
        <button
          aria-label="Search"
          onClick={onSearch}
          className="bg-[#b46c87] hover:bg-[#9d5b75] text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 whitespace-nowrap transition-colors shadow-md hover:shadow-lg"
        >
          Search
          <FiSearch className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
