import React from "react";
import { Play } from "lucide-react";

const Journey = () => {
  return (
    <div className="w-full bg-white px-6 md:pl-12 lg:pl-24 md:pr-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <p className="uppercase text-sm font-semibold text-[#C97E99] tracking-wider mb-2 md:ml-10">
            What includes?
          </p>
          <h2 className="text-[36px] md:text-[25px] font-extrabold font-playfair text-[#3F1D38] leading-tight mb-6">
            The start of the journey
          </h2>
          <p className="text-[#4F4F4F] text-xs leading-relaxed mb-8">
            ServiceMarket.dk was founded in 2021 by two young entrepreneurs who
            saw a problem with the fragmented service industry in Denmark. There
            were thousands of small businesses offering services, but it was
            difficult for consumers to find them and know which ones to choose.
            They developed the idea of creating a platform that would bring all
            these service providers together in one place, making it easier for
            consumers to find what they need and get their issues resolved
            quickly and easily—without having to visit multiple websites or use
            clunky booking tools.
          </p>

          <h3 className="text-xl font-bold font-playfair text-[#111] mb-6">
            Our Methodology :
          </h3>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="pt-1">
                <svg
                  className="w-6 h-6 text-[#C97E99]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base md:text-sm text-[#111] mb-1">
                  The Assessment Stage
                </p>
                <p className="text-[#4F4F4F] text-sm">
                  We begin by understanding the client's needs, identifying the
                  services required, and evaluating the best providers available
                  for the task.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="pt-1">
                <svg
                  className="w-6 h-6 text-[#C97E99]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base md:text-sm text-[#111] mb-1">
                  The Initialization Stage
                </p>
                <p className="text-[#4F4F4F] text-sm">
                  Once we’ve matched the client with the right provider, we set
                  up appointments, ensure onboarding is smooth, and facilitate
                  communication between both parties.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="pt-1">
                <svg
                  className="w-6 h-6 text-[#C97E99]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base md:text-sm text-[#111] mb-1">
                  The Treatment Stage
                </p>
                <p className="text-[#4F4F4F] text-sm">
                  The service is carried out professionally, with follow-ups and
                  quality checks. We ensure satisfaction and collect feedback to
                  continuously improve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Video/Image Section */}
        <div className="relative w-full">
          <img
            src="/assets/gallery/playImage.png"
            alt="Facial Treatment"
            className="w-[500px] h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white text-[#3F1D38] shadow-md flex items-center justify-center">
              <Play className="w-8 h-8 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
