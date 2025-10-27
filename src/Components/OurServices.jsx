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
    <>
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <section
        id="services"
        className="
          relative min-h-screen bg-[#023530] flex items-center justify-center
          px-4 sm:px-6 md:px-16 py-10 sm:py-12 md:py-20
        "
      >
        {/* Card Container */}
        <div
          className="
            relative bg-[#0d6358] backdrop-blur-lg rounded-[2rem] shadow-2xl
            w-full max-w-[95%] sm:max-w-[90%] lg:max-w-7xl
            grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 md:p-12
          "
        >
          {/* Green circular gradients */}
          <div className="absolute -top-16 sm:-top-20 -left-16 sm:-left-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-tr from-lime-400/40 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-6 sm:-bottom-10 right-6 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-lime-400/30 to-transparent rounded-full filter blur-2xl animate-pulse-slow"></div>

          {/* Side Label */}
          <div
            className="
              hidden lg:block absolute top-20 -left-11 -translate-y-1/2
              rotate-[-90deg] z-10
            "
          >
            <span className="bg-lime-400 text-black font-semibold px-3 py-1 text-sm tracking-wide">
              WHAT WE DO
            </span>
          </div>

          {/* Left Column: Services */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 animate-fade-in-left">
            <h2
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-bold text-white
              "
            >
              Our{" "}
              <span className="bg-[#073b2e] text-white px-2 rounded-md inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-300">
                Services
              </span>
            </h2>
            <p className="text-gray-300 max-w-md text-sm sm:text-base">
              We offer a range of creative and digital services designed to help
              your brand stand out.
            </p>

            {/* Service List */}
            <div className="flex flex-col gap-3">
              {services.map((service, i) => (
                <button
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className={`
                    flex justify-between items-center text-white px-4 sm:px-6 py-3 sm:py-4
                    rounded-full border text-left transition-all duration-300
                    transform hover:scale-105 hover:shadow-lg animate-fade-in-left
                    ${
                      i === 0
                        ? "bg-transparent text-lime-400 hover:bg-black/50 border-gray-600 hover:border-lime-400"
                        : "bg-transparent border-gray-600 hover:bg-black/50 hover:border-lime-400 hover:text-lime-400"
                    }
                  `}
                >
                  <span className="font-medium text-sm sm:text-base">
                    {service.id} {service.title}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-lime-400 rounded-full transition-transform duration-300 hover:-rotate-45 hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center Column: Image */}
          <div className="lg:col-span-4 flex justify-center items-center relative animate-fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-lime-400/20 rounded-xl blur-xl group-hover:bg-lime-400/30 transition-all duration-500"></div>
              <img
                src="/assets/ServicesImg.jpg"
                alt="Service Expert"
                className="
                  relative w-full h-auto max-w-[280px] sm:max-w-[320px] rounded-xl object-cover
                  grayscale shadow-2xl group-hover:grayscale-0 transition-all duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-5 animate-fade-in-right">
            {/* Card 1 */}
            <div 
              className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 flex flex-col justify-between
              border border-gray-700/50 hover:border-lime-400/50 transition-all duration-300
              hover:shadow-xl hover:shadow-lime-400/10 hover:-translate-y-1 group cursor-pointer"
            >
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                Ever wondered how design magic happens?
              </p>

              <div className="flex items-center gap-3">
                <span className="font-bold text-white text-sm sm:text-base group-hover:text-lime-400 transition-colors duration-300">
                  See how we works
                </span>
                <div
                  className="
                    w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                    bg-white rounded-full transition-all duration-300
                    group-hover:bg-lime-400 group-hover:scale-110
                  "
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform duration-300 group-hover:-rotate-45" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="bg-[#073b2e] backdrop-blur-md rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-black
              hover:bg-lime-400 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/30
              hover:-translate-y-1 group cursor-pointer"
            >
              <p className="text-sm sm:text-base font-medium mb-4 leading-relaxed">
                Looking for design experts who can bring your vision to life?
              </p>

              <div className="flex items-center gap-3">
                <span className="font-bold text-sm sm:text-base">
                  Meet our Expert
                </span>
                <div
                  className="
                    w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                    bg-white rounded-full transition-all duration-300
                    group-hover:bg-black group-hover:scale-110
                  "
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}