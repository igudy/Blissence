import React from "react";
import { useNavigate } from "react-router-dom";

const BigStory = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact"); // Make sure this route exists in your router
  };

  return (
    <section className="bg-[#432c3c] w-full py-20 px-4 flex justify-center items-center text-center">
      <div className="max-w-3xl">
        <p className="text-sm tracking-widest text-[#d8b4d4] uppercase mb-4">
          Get in us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#fbe6d6] leading-tight font-playfair mb-8">
          We Are Ready To Assist <br /> You In 24x7
        </h1>
      </div>
    </section>
  );
};

export default BigStory;
