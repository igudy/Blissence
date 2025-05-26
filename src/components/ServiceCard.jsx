import React from "react";

const ServiceCard = ({ image, rating, reviews, title, address, buttonText }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border-[1px] border-slate-500 overflow-hidden flex flex-col w-72">
      <img src={image} alt={title} className="h-60 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <span className="text-[#BA7894] mr-1">★</span>
          <span className="text-sm text-[#BA7894] mr-2">{rating}</span>
          <span className="text-sm text-gray-700 ml-[130px] font-playfair font-semibold">{reviews} reviews</span>
        </div>
        <h3 className="text-lg font-semibold font-playfair mb-1">{title}</h3>
        <p className="text-sm flex text-gray-500 font-playfair mb-4">
          <img src="assets/Icons/location.svg" className="mr-1 size-4" alt="" /> {address}
        </p>
        <button className="mt-auto bg-transparent border-[1px] border-[#BA7894] text-[#BA7894] font-semibold py-2 rounded hover:bg-[#BA7894] hover:text-white transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
