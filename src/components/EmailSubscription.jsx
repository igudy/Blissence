import React from 'react';

const EmailSubscription = () => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-28 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/subscription.png"
          alt="Salon"
          className="rounded-2xl w-full object-cover"
        />
      </div>

      {/* Right Side: Subscription Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Subscribe to newsletter
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.
        </p>

        {/* Input and Button */}
        <form className="flex flex-col sm:flex-row items-center bg-white border border-pink-200 rounded-full px-4 py-2 shadow-sm max-w-xl">
          <div className="flex items-center flex-1 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 bg-transparent focus:outline-none placeholder:text-gray-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="mt-2 sm:mt-0 sm:ml-4 bg-black text-white text-sm font-medium px-6 py-2 rounded-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSubscription;
