import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        bg-white px-4 sm:px-6 md:px-20 py-12 sm:py-16 relative overflow-hidden
        rounded-bl-[60px] sm:rounded-bl-[100px] md:rounded-bl-[150px]
        rounded-br-[60px] sm:rounded-br-[100px] md:rounded-br-[150px]
      "
    >
      {/* Starburst Icon - Top Left */}
      <div className="absolute top-10 sm:top-16 left-6 sm:left-12 w-14 h-14 sm:w-20 sm:h-20">
        <div className="relative w-full h-full flex items-center justify-center">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 sm:w-10 h-0.5 bg-[#7CFF3B]"
              style={{
                transform: `rotate(${i * 22.5}deg)`,
                transformOrigin: "center",
              }}
            />
          ))}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#7CFF3B] rounded-full relative z-10"></div>
        </div>
      </div>

      {/* Heading */}
      <h1
        className="
          text-black text-center text-3xl sm:text-4xl md:text-6xl
          font-bold leading-tight mb-10 sm:mb-16 max-w-5xl mx-auto
        "
      >
        Empowering Brands <br className="hidden sm:block" /> Through Creative
        Solutions
      </h1>

      <div
        className="
          grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8
          items-center max-w-7xl mx-auto relative z-10
        "
      >
        {/* Left: paragraph + button */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <p className="text-gray-900 text-base sm:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
            From web development to branding, we deliver innovative strategies
            that elevate your brand and drive growth. Let's create something
            exceptional together
          </p>
          <button
            className="
              text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-black
              rounded-full hover:bg-black hover:text-white transition
              w-fit mx-auto md:mx-0 font-medium
            "
          >
            Start Your Project
          </button>
        </div>

        {/* Center: Large circular background with image */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          <div
            className="
              relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96
              rounded-full bg-gradient-to-b from-gray-200 to-gray-400
              flex items-center justify-center overflow-visible shadow-2xl
            "
          >
            {/* Dark circular overlay */}
            <div
              className="
                absolute bottom-0 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80
                rounded-full bg-gray-900 shadow-2xl
              "
            ></div>

            {/* Main image */}
            <div className="relative w-full h-full rounded-full flex items-center justify-center z-10">
              <img
                className="w-full h-full object-cover rounded-full"
                src="/assets/WomenHero.png"
                alt="Hero"
              />
            </div>

            {/* Blurred tab with buttons */}
            <div className="absolute -bottom-6 flex justify-center w-full z-10 px-2">
              <div
                className="
                  backdrop-blur-md bg-gray-400/70 border border-white/30
                  rounded-full px-2 sm:px-3 py-2 sm:py-3 flex gap-2 sm:gap-3 shadow-lg
                "
              >
                <button
                  className="
                    px-4 sm:px-6 py-2 rounded-full bg-[#7CFF3B] text-black
                    font-semibold hover:bg-[#6EE032] transition text-sm sm:text-base
                  "
                >
                  Start Your Project
                </button>
                <button
                  className="
                    px-4 sm:px-6 py-2 border border-white/50 text-white
                    rounded-full hover:bg-white/10 transition font-medium text-sm sm:text-base
                  "
                >
                  Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: stars + years */}
        <div className="flex flex-col items-center md:items-end justify-center space-y-3 mt-8 md:mt-0">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#7CFF3B] text-2xl sm:text-3xl">
                ★
              </span>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-2xl sm:text-3xl font-bold text-black">10 Years</p>
            <p className="text-gray-900 text-sm sm:text-base font-medium">
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
