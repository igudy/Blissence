// BigStory.jsx
import React from "react";

const BigStory = () => {
  return (
    <section className="bg-[#432c3c] w-full py-20 px-4 flex justify-center items-center text-center">
      <div className="max-w-3xl">
        <p className="text-sm tracking-widest text-[#d8b4d4] uppercase mb-4">
          Short story about us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#fbe6d6] leading-tight mb-8">
          The big story behind, our <br /> beautyness center
        </h1>
        <button className="bg-[#b86a8c] text-white font-semibold px-8 py-3 uppercase text-sm tracking-widest">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default BigStory;
