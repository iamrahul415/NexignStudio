import React from "react";

export default function NavigationBanner() {
  const items = [
    "Graphic Design",
    "Social Media",
    "Branding",
    "Content Creation",
    "Creative Thinking",
  ];

  return (
    <div className="w-full bg-[#023530] p-2 sm:p-6 overflow-hidden">
      <div className="rounded-3xl shadow-xl px-4 sm:px-8 py-6 sm:py-8 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="scroll-track flex items-center gap-6 whitespace-nowrap">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 bg-[#ffffff10] shadow-lg">
                  <span className="text-white text-lg sm:text-2xl lg:text-3xl font-dmSans">
                    {item}
                  </span>
                </div>

                <span className="flex-shrink-0 text-green-400 text-2xl lg:text-3xl">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* FAST SMOOTH SCROLL */
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: marquee-fast 9s linear infinite;
        }
      `}</style>
    </div>
  );
}
