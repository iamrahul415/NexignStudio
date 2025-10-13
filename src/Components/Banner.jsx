import React from "react";

export default function NavigationBanner() {
  return (
    <div className="w-full bg-black p-4 sm:p-6 overflow-hidden">
      <div className=" rounded-3xl shadow-xl px-4 sm:px-8 py-6 sm:py-8">
        <div
          className="
            flex items-center gap-4 sm:gap-6
            overflow-x-auto sm:overflow-x-visible
            scroll-smooth
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            auto-scroll-mobile
          "
        >
          {/* Banner items */}
          <div className="flex-shrink-0 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <span className="text-white text-xl sm:text-3xl font-bold">Design</span>
          </div>

          <span className="flex-shrink-0 text-green-400 text-xl sm:text-2xl">✦</span>

          <div className="flex-shrink-0 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <span className="text-white text-xl sm:text-3xl font-bold">App Design</span>
          </div>

          <span className="flex-shrink-0 text-green-400 text-xl sm:text-2xl">✦</span>

          <div className="flex-shrink-0 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <span className="text-white text-xl sm:text-3xl font-bold">Dashboard</span>
          </div>

          <span className="flex-shrink-0 text-green-400 text-xl sm:text-2xl">✦</span>

          <div className="flex-shrink-0 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <span className="text-white text-xl sm:text-3xl font-bold">Wireframe</span>
          </div>

          <span className="flex-shrink-0 text-green-400 text-xl sm:text-2xl">✦</span>

          <div className="flex-shrink-0 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <span className="text-white text-xl sm:text-3xl font-bold">User Research</span>
          </div>
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .auto-scroll-mobile {
          display: flex;
          width: max-content;
          animation: none;
        }

        @media (max-width: 640px) {
          .auto-scroll-mobile {
            animation: scroll-horizontal 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
