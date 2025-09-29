"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  const services = [
    { id: "01", title: "UI/UX Design" },
    { id: "02", title: "Web Development" },
    { id: "03", title: "3D Design" },
    { id: "04", title: "Motion Graphics" },
  ];

  return (
    <section
      id="services"
      className="
        relative min-h-screen bg-black flex items-center justify-center
        px-4 sm:px-6 md:px-16 py-10 sm:py-12 md:py-20
      "
    >
      {/* Card Container */}
      <div
        className="
          relative bg-gray-900/70 backdrop-blur-lg rounded-[2rem] shadow-2xl
          w-full max-w-[95%] sm:max-w-[90%]
          grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:p-10 md:p-12
        "
      >
        {/* Green circular gradients */}
        <div className="absolute -top-16 sm:-top-20 -left-16 sm:-left-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-tr from-lime-400/40 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-6 sm:-bottom-10 right-6 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-lime-400/30 to-transparent rounded-full filter blur-2xl"></div>

        {/* Side Label */}
        <div
          className="
            hidden md:block absolute top-20 -left-11 -translate-y-1/2
            rotate-[-90deg] z-10
          "
        >
          <span className="bg-lime-400 text-black font-semibold px-3 py-1 text-sm tracking-wide">
            WHAT WE DO
          </span>
        </div>

        {/* Left Column: Services */}
        <div className="flex flex-col justify-center space-y-6">
          <h2
            className="
              text-2xl sm:text-3xl md:text-5xl
              font-bold text-white
            "
          >
            Our{" "}
            <span className="bg-lime-400 text-white px-2 rounded-md inline-block transform -skew-x-12">
              Services
            </span>
          </h2>
          <p className="text-gray-300 max-w-md text-sm sm:text-base">
            We offer a range of creative and digital services designed to help
            your brand stand out.
          </p>

          {/* Service List */}
          <div className="flex flex-col gap-4">
            {services.map((service, i) => (
              <button
                key={i}
                className={`
                  flex justify-between items-center text-white px-4 sm:px-6 py-3 sm:py-4
                  rounded-full border text-left transition
                  ${
                    i === 0
                      ? "bg-transparent text-lime-400 hover:bg-black/50 border-gray-600 hover:border-lime-400"
                      : "bg-transparent border-gray-600 hover:bg-black/50 hover:border-lime-400"
                  }
                `}
              >
                <span className="font-medium text-sm sm:text-base">
                  {service.id} {service.title}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Center Column: Image */}
        <div className="flex justify-center items-center relative">
          <img
            src="/assets/ServicesImg.jpg"
            alt="Service Expert"
            className="
              w-64 sm:w-72 md:w-80 rounded-xl object-cover
              grayscale shadow-lg
            "
          />
        </div>

        {/* Right Column: Cards */}
        <div className="flex flex-col justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-gray-700/50 backdrop-blur-md rounded-xl p-4 sm:p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-200">
              Ever wondered how design magic happens?
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="font-bold text-white text-sm sm:text-base">
                See how we works
              </span>
              <div
                className="
                  w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                  bg-white rounded-full transition-all duration-300
                  transform hover:bg-gray-300 group
                "
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform duration-300 group-hover:-rotate-45" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-lime-400/70 backdrop-blur-md rounded-xl p-4 sm:p-6 flex flex-col justify-between text-black">
            <p className="text-sm sm:text-base font-medium">
              Looking for design experts who can bring your vision to life?
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="font-bold text-sm sm:text-base">
                Meet our Expert
              </span>
              <div
                className="
                  w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                  bg-white rounded-full transition-all duration-300
                  transform hover:bg-black hover:text-white group
                "
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
