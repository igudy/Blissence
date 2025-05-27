// Features.jsx
import React from "react";



const Features = () => {
  const features = [
    {
      icon: <img src="/assets/Icons/beautyExpert.svg" alt="Icon" />,
      title: "Beauty Experts",
      description:
        "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.",
    },
    {
      icon: <img src="/assets/Icons/greatService.svg" alt="Icon" />,
      title: "Great Services",
      description:
        "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.",
    },
    {
      icon: <img src="/assets/Icons/genuine.svg" alt="Icon" />,
      title: "100% Genuine",
      description:
        "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-60 py-20 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <p className="text-[#b07688] uppercase text-sm tracking-widest mb-3">
            Our Values
          </p>
          <h2 className="text-3xl md:text-3xl font-bold text-[#111827]">
            The work values we thrive for
          </h2>
        </div>
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-5 border-b pb-10 last:border-b-0"
            >
              <div className="min-w-[56px] h-14 flex items-center justify-center rounded-md">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
