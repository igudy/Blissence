import React from 'react';

const SearchBar = ({ serviceName, setServiceName, address, setAddress, onSearch }) => {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl md:rounded-full shadow-lg  px-6 py-3 md:gap-0 gap-4 md:w-[700px] mx-auto">
        {/* Service Name Input */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-[#b46c87] font-semibold text-sm mb-1">Service Name</label>
          <div className="flex items-center mr-5 border-b border-black/30">
            <input
              type="text"
              placeholder="Book your service..."
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="w-full md:w-48 focus:outline-none text-black placeholder:text-black text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Address Input */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-[#b46c87] font-semibold text-sm mb-1">Address</label>
          <div className="flex items-center border-b border-black">
            <input
              type="text"
              placeholder="Enter location"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="md:w-48 w-full focus:outline-none text-black placeholder:text-black text-sm"
            />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10s7-4.5 7-10A7 7 0 005 11c0 5.5 7 10 7 10z" />
              </svg>

          </div>
        </div>

        {/* Search Button */}
        <button
          aria-label="Search for service"
          className="bg-[#b46c87] text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold md:ml-2 "
          onClick={onSearch}
        >
          Search
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
