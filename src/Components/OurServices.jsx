"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      id: "01",
      title: "Logo and Branding",
      link: "https://drive.google.com/drive/folders/1Lm8UNe9_Ycx1dxn8peqm-nuYyeWgiTo8",
    },
    {
      id: "02",
      title: "Graphic Designing",
      link: "https://drive.google.com/drive/folders/1Lm8UNe9_Ycx1dxn8peqm-nuYyeWgiTo8",
    },
    {
      id: "03",
      title: "Product & Packaging Design",
      link: "https://drive.google.com/drive/folders/1Lm8UNe9_Ycx1dxn8peqm-nuYyeWgiTo8",
    },
    {
      id: "04",
      title: "Social Media Management",
      link: "https://drive.google.com/drive/folders/1Lm8UNe9_Ycx1dxn8peqm-nuYyeWgiTo8",
    },
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

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out both;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>

      <section
        id="services"
        className="relative min-h-screen bg-[#023530] flex items-center justify-center px-4 sm:px-6 md:px-16 py-16"
      >
        {/* Glow gradients */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Main card */}
        <div
          className="
            relative bg-[#01725f]/90 backdrop-blur-lg rounded-[2rem] shadow-2xl
            w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-10
          "
        >
          {/* Side Label */}
          <div className="hidden lg:block absolute top-20 -left-12 rotate-[-90deg]">
            <span className="bg-[#073a2d] text-white font-dmSans px-3 py-1 text-sm tracking-wide">
              WHAT WE DO
            </span>
          </div>

          {/* LEFT: Service List */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-6 animate-fade-in-left">
            <h2 className="text-3xl md:text-5xl font-dmSans font-semibold text-white leading-tight">
              Our{" "}
              <span className="bg-[#073b2e] text-white px-2 rounded-md inline-block transform -skew-x-12 hover:skew-x-0 transition-transform duration-300">
                Services
              </span>
            </h2>

            <p className="text-gray-100 max-w-md text-base font-dmSans opacity-90">
              We craft digital experiences that inspire and empower brands to
              stand out.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              {services.map((service, i) => (
                <a
                  key={i}
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-[90%] sm:mx-auto"
                >
                  <button
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className="
                      w-full flex justify-between items-center 
                      px-5 py-3 rounded-full

                      border border-lime-400/40 text-lime-300/70
                      hover:text-white hover:border-lime-400 hover:bg-lime-400/10
                      transition-all duration-300

                      hover:shadow-[0_0_20px_rgba(163,255,194,0.15)]
                      transform hover:scale-105 animate-fade-in-left
                    "
                  >
                    <span className="font-dmSans text-base text-left leading-snug">
                      {service.id}. {service.title}
                    </span>

                    <div
                      className="
                        w-9 h-9 flex items-center justify-center bg-[#0d6358]
                        rounded-full hover:scale-110 hover:-rotate-45
                        transition-transform duration-300
                      "
                    >
                      <ArrowRight className="w-4 h-4 text-lime-400" />
                    </div>
                  </button>
                </a>
              ))}
            </div>
          </div>

          {/* CENTER: Image */}
          <div className="lg:col-span-4 flex justify-center items-start animate-fade-in-up">
            <div className="relative group mt-10 sm:mt-20">
              <div className="absolute inset-0 bg-lime-400/20 rounded-2xl blur-xl group-hover:bg-lime-400/30 transition-all duration-500"></div>
              <img
                src="/assets/ServicesImg.jpg"
                alt="Our Services"
                className="
                  relative w-full h-auto max-w-[320px] rounded-2xl object-cover
                  grayscale group-hover:grayscale-0 shadow-[0_0_40px_rgba(0,0,0,0.4)]
                  group-hover:scale-105 transition-all duration-500
                "
              />
            </div>
          </div>

          {/* RIGHT: Info Cards */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-6 animate-fade-in-right mt-10 sm:mt-20">
            {/* Card 1 */}
            <a
              href="https://drive.google.com/drive/folders/1Lm8UNe9_Ycx1dxn8peqm-nuYyeWgiTo8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="
                bg-[#0d5a52]/90 backdrop-blur-md rounded-2xl p-6 flex flex-col
                border border-lime-400/20 hover:border-lime-400/60
                hover:shadow-[0_0_30px_rgba(163,255,194,0.1)]
                hover:-translate-y-1 transition-all duration-300 group cursor-pointer
              "
              >
                <p className="text-gray-100 mb-4 text-sm leading-relaxed">
                  Ever wondered how design magic happens?
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-dmSans text-white text-sm group-hover:text-lime-400">
                    Design portfolio
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#ffebd8] rounded-full group-hover:bg-[#073a2d] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-black group-hover:text-lime-400 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="https://drive.google.com/your-social-media-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="
                bg-[#0d5a52]/90 backdrop-blur-md rounded-2xl p-6 flex flex-col
                border border-lime-400/20 hover:border-lime-400/60
                hover:shadow-[0_0_30px_rgba(163,255,194,0.1)]
                hover:-translate-y-1 transition-all duration-300 group cursor-pointer
              "
              >
                <p className="text-gray-100 mb-4 text-sm leading-relaxed">
                  Want to level up your social media game? Let's turn your vision
                  into scroll-stopping content! ✨
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-dmSans text-white text-sm group-hover:text-lime-400">
                    Social Media Management
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#ffebd8] rounded-full group-hover:bg-[#073a2d] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-black group-hover:text-lime-400 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
