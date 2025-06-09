import React from "react";
import { User, Mail, Phone, NotebookText, PencilLine } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-[#fdf3e7] py-20 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm text-[#BA7894] uppercase tracking-widest mb-2">
          Schedule your presence
        </p>
        <h2 className="text-4xl font-extrabold font-playfair text-[#1c0f13] mb-4">
          Get in touch
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
          We'd love to hear from you! Whether you're interested in our services,
          have a question, or just want to say hello—feel free to reach out
          using the form below.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-black/10 p-6 sm:p-10 max-w-3xl mx-auto">
        <form className="space-y-4">
          <div className="flex items-center border border-[#1c0f13] rounded-md px-3 py-2">
            <User className="text-[#1c0f13] mr-2" size={18} />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none text-sm text-[#1c0f13] placeholder-[#1c0f13] bg-transparent"
            />
          </div>

          <div className="flex items-center border border-[#1c0f13] rounded-md px-3 py-2">
            <Mail className="text-[#1c0f13] mr-2" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm text-[#1c0f13] placeholder-[#1c0f13] bg-transparent"
            />
          </div>

          <div className="flex items-center border border-[#1c0f13] rounded-md px-3 py-2">
            <Phone className="text-[#1c0f13] mr-2" size={18} />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full outline-none text-sm text-[#1c0f13] placeholder-[#1c0f13] bg-transparent"
            />
          </div>

          <div className="flex items-center border border-[#1c0f13] rounded-md px-3 py-2">
            <NotebookText className="text-[#1c0f13] mr-2" size={18} />
            <input
              type="text"
              placeholder="Service You Need"
              className="w-full outline-none text-sm text-[#1c0f13] placeholder-[#1c0f13] bg-transparent"
            />
          </div>

          <div className="flex items-start border border-[#1c0f13] rounded-md px-3 py-2">
            <PencilLine className="text-[#1c0f13] mr-2 mt-1" size={18} />
            <textarea
              rows="3"
              placeholder="Any Note For Us"
              className="w-full outline-none text-sm text-[rgb(28,15,19)] placeholder-[#1c0f13] bg-transparent resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#35162c] text-white uppercase text-sm tracking-widest py-3 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
