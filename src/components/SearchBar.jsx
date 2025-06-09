import React from 'react';

const SearchBar = ({ serviceName, setServiceName, address, setAddress, onSearch }) => {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl md:rounded-full shadow-lg  px-6 py-2 md:gap-4 gap-4 md:w-[600px] lg:w-[800px] mx-auto">
        {/* Service Name Input */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-[#b46c87] font-semibold text-sm mb-1">Service Name</label>
          <div className="flex items-center border-b border-black">
            <input
              type="text"
              placeholder="Book your service..."
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="md:w-38 lg:w-48 w-full focus:outline-none text-black placeholder:text-black/50 text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black lg:ml-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Address Input */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-[#b46c87] font-semibold text-sm mb-1">Address</label>
          <div className="flex items-center border-b border-black sm:mr-5">
            <input
              type="text"
              placeholder="Enter location"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="sm:w-40 md:w-38 lg:w-48 w-full focus:outline-none text-black placeholder:text-black/50 text-sm"
            />
            <img src="/assets/Icons/location.svg" className="md:ml-3 lg:ml-20" alt="" />

          </div>
        </div>

        {/* Search Button */}
        <button
          aria-label="Search for service"
          className="bg-[#b46c87] text-white rounded-full md:px-6 px-8 py-3 flex items-center gap-2 font-semibold md:mr-[-10px] "
          onClick={onSearch}
        >
          Search
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
