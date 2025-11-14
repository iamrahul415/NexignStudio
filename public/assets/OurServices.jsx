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
      className="relative min-h-screen bg-[#023530] flex items-center justify-center px-6 md:px-16 py-12 md:py-20"
    >
      {/* Card Container */}
      <div className="relative bg-gray-900/70 backdrop-blur-lg rounded-[2rem] shadow-2xl max-w-[90%] w-full grid md:grid-cols-3 gap-8 p-12">
        {/* Green circular gradients */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-tr from-lime-400/40 to-transparent rounded-full filter blur-3xl "></div>
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-lime-400/30 to-transparent rounded-full filter blur-2xl"></div>

        {/* Side Label */}
        <div className="absolute top-20 -left-11 -translate-y-1/2 rotate-[-90deg] z-10">
          <span className="bg-lime-400 text-black font-semibold px-3 py-1 text-sm tracking-wide">
            WHAT WE DO
          </span>
        </div>

        {/* Left Column: Services */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-lime-400 text-white px-2 rounded-md">
              Services
            </span>
          </h2>
          <p className="text-gray-300 max-w-md">
            We offer a range of creative and digital services designed to help
            your brand stand out.
          </p>

          {/* Service List */}
          <div className="flex flex-col gap-4">
            {services.map((service, i) => (
              <button
                key={i}
                className={`flex justify-between items-center text-white px-6 py-4 rounded-full border border-gray-600 text-left transition ${
                  i === 0
                    ? "bg-black/50 text-lime-400 border-lime-400"
                    : "bg-transparent hover:bg-gray-800/50"
                }`}
              >
                <span className="font-medium">
                  {service.id} {service.title}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Center Column: Image */}
        <div className="flex justify-center items-center relative">
          <img
            src="/assets/GirlImg.jpg"
            alt="Service Expert"
            className="w-80 rounded-xl object-cover grayscale shadow-lg"
          />

          {/* Rotating Spiral Text */}
          <svg
            className="absolute inset-0 w-[350px] h-[450px] pointer-events-none animate-spin-slow z-0"
            viewBox="0 0 500 500"
          >
            <defs>
              {/* Circle path (you can tweak radius for tighter/looser spiral look) */}
              <path
                id="circlePath"
                d="
          M 250, 250
          m -180, 0
          a 180,180 0 1,1 360,0
          a 180,180 0 1,1 -360,0
        "
              />
            </defs>

            <text fill="#6B7280" fontSize="18" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0%">
                Digital Node Digital Node Digital Node Digital Node Digital Node
                Digital Node Digital Node Digital Node Digital Node Digital Node
              </textPath>
            </text>
          </svg>
        </div>

        {/* Tailwind CSS Custom Animation */}
        <style jsx>{`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
        `}</style>

        {/* Right Column: Cards */}
        <div className="flex flex-col justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-gray-700/50 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-200">
              Ever wondered how design magic happens?
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="font-bold text-white">See how we works</span>
              <div
                className="w-8 h-8 flex items-center justify-center bg-[#ffebd8] rounded-full 
                      transition-all duration-300 transform hover:bg-gray-300  group"
              >
                <ArrowRight className="w-5 h-5 text-black transition-transform duration-300 group-hover:-rotate-45" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-lime-400/70 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between text-black">
            <p className="text-sm font-medium">
              Looking for design experts who can bring your vision to life?
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="font-bold">Meet our Expert</span>
              <div
                className="w-8 h-8 flex items-center justify-center bg-[#ffebd8] rounded-full 
                      transition-all duration-300 transform hover:bg-black hover:text-white group"
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
