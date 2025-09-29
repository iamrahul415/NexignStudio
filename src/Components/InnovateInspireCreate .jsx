import React from "react";

const InnovateInspireCreate = () => {
  return (
    <section
      className="
        bg-black text-white flex flex-col items-center
        py-6 sm:py-8
      "
    >
      {/* Main Text Row */}
      <div
        className="
          flex flex-wrap justify-center items-center
          space-x-3 sm:space-x-6 md:space-x-12
          text-2xl sm:text-3xl md:text-5xl
          font-bold text-center
        "
      >
        <span>Innovate</span>
        <span className="text-lime-400 text-3xl sm:text-4xl md:text-5xl">✦</span>
        <span>Inspire</span>
        <span className="text-lime-400 text-3xl sm:text-4xl md:text-5xl">✦</span>
        <span>Create</span>
      </div>

      {/* Bottom Divider */}
      <div
        className="
          flex items-center w-full mt-4 sm:mt-6 px-4 sm:px-6
        "
      >
        <div className="flex-grow border-t border-white"></div>
        <span className="text-lime-400 mx-3 sm:mx-4 text-lg sm:text-xl">✦</span>
        <div className="flex-grow border-t border-white"></div>
      </div>
    </section>
  );
};

export default InnovateInspireCreate;
