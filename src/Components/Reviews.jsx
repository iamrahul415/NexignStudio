import React from "react";

const Reviews = () => {
  return (
    <section className="flex justify-center px-4 sm:px-6 py-12 sm:py-16 bg-black relative">
      <div
        className="
          backdrop-blur-md bg-white/30 rounded-3xl shadow-xl
          flex flex-wrap md:flex-nowrap justify-center md:justify-between
          gap-8 sm:gap-10 md:gap-16
          px-6 sm:px-8 md:px-6 py-8 max-w-[90%] w-full relative
        "
      >
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-56 sm:w-72 md:w-80 h-40 sm:h-52 md:h-60 bg-gradient-to-tr from-lime-400/40 to-transparent rounded-full filter blur-3xl"></div>

        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            2000<span className="text-green-300">+</span>
          </p>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1">
            Companies
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            10<span className="text-green-300">+</span>
          </p>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1">
            Years Exp.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            800<span className="text-green-300">+</span>
          </p>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1">
            Hours of Digital
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            150M<span className="text-green-300">+</span>
          </p>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1">
            In Tracked Revenue
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
