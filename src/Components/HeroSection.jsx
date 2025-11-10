import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        bg-white px-4 sm:px-6 md:px-20 py-5 sm:py-16 relative overflow-hidden
        rounded-bl-[60px] sm:rounded-bl-[100px] md:rounded-bl-[150px]
        rounded-br-[60px] sm:rounded-br-[100px] md:rounded-br-[150px]
        opacity-90 sm:opacity-100 transition-opacity
      "
    >
      {/* Starburst Icon - hidden on mobile, bouncing on larger screens */}
      <div
        className="
          hidden sm:block absolute top-10 md:top-16 left-12 
          w-14 h-14 sm:w-20 sm:h-20 animate-bounceStarburst
        "
      >
        <div className="relative w-full h-full flex items-start justify-center">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 sm:w-10 h-0.5 bg-[#073a2d]"
              style={{
                transform: `rotate(${i * 22.5}deg)`,
                transformOrigin: "center",
              }}
            />
          ))}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#073a2d] rounded-full relative z-10"></div>
        </div>
      </div>

      {/* Heading */}
      <h1
        className="
          text-[#0d6358] text-center text-3xl sm:text-4xl md:text-6xl
          font-semibold leading-tight mb-10 sm:mb-16 max-w-5xl mx-auto
          pt-8 sm:pt-0
        "
      >
        Empowering Brands <br className="hidden sm:block" /> Through Design That Speaks
      </h1>

      <div
        className="
          grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8
          items-center max-w-7xl mx-auto relative z-10
        "
      >
        {/* Left: paragraph + button */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <p className="text-[#0d6358] font-outfit text-base sm:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
            Nexign Studio thrives on creative challenges. We're a forward-thinking team dedicated to delivering design that's sharp, intentional, and impossible to ignore. Through Graphic Design and Social Media Management, we help brands stand out with purpose and precision.
          </p>
          <button
            className="
              text-[#0d6358] px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#073b2e]
              rounded-full hover:bg-[#073b2e] hover:text-white transition
              w-fit mx-auto md:mx-0 font-medium
            "
          >
            Start Your Project
          </button>
        </div>

        {/* Center: Only floating blurred tab with buttons */}
        <div className="relative flex justify-center md:mt-0">
          <div
            className="
              backdrop-blur-md bg-[#0d6358] border border-white/30
              rounded-full px-3 py-3 sm:px-4 sm:py-4 flex gap-3 sm:gap-4 shadow-lg
              animate-float
            "
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <button
              className="
                px-4 sm:px-6 py-2 rounded-full bg-[#073a2d] text-text-[#0d6358]
                font-outfit hover:bg-[#023530] transition text-sm sm:text-base
              "
            >
              Start Your Project
            </button>
            <button
              className="
                px-4 sm:px-6 py-2 border border-white/50 text-white
                rounded-full hover:bg-white/10 transition font-outfit text-sm sm:text-base
              "
            >
              Let's Collaborate
            </button>
          </div>
        </div>

        {/* Right: stars + years */}
        <div className="flex flex-col items-center md:items-end justify-center space-y-3 mt-8 md:mt-0">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#073a2d] text-2xl sm:text-3xl">
                ★
              </span>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-2xl sm:text-3xl font-outfit text-[#0d6358] leading-tight">
              4+ Years
            </p>
            <p className="text-[#0d6358] text-sm sm:text-base font-outfit leading-tight">
              Experience
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounceStarburst {
          0% {
            transform: translateY(0) scale(1);
          }
          20% {
            transform: translateY(-20px) scale(1.05);
          }
          40% {
            transform: translateY(0) scale(0.95);
          }
          60% {
            transform: translateY(-10px) scale(1.02);
          }
          80%, 100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-bounceStarburst {
          animation: bounceStarburst 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
