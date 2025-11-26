import React, { useState, useEffect, useRef } from "react";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    companies: 0,
    years: 0,
    hours: 0,
    revenue: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      companies: 50,
      years: 4,
      hours: 1500,
      revenue: 8
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        companies: Math.floor(targets.companies * progress),
        years: Math.floor(targets.years * progress),
        hours: Math.floor(targets.hours * progress),
        revenue: Math.floor(targets.revenue * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="flex justify-center px-4 sm:px-6 py-12 sm:py-16 bg-[#023530] relative">
      <div
        className="
          backdrop-blur-md bg-[#faf6f0] rounded-[40px] shadow-xl
          flex flex-row justify-around items-center
          gap-4 sm:gap-6 md:gap-16
          px-4 sm:px-8 md:px-6 py-6 sm:py-8 max-w-[95%] sm:max-w-[90%] w-full relative overflow-hidden
        "
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-green-400/10 to-transparent rounded-3xl filter blur-2xl"></div>

        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center flex-1 relative z-10">
          <p className="text-xl sm:text-3xl md:text-5xl font-dmSans text-[#073b2e]">
            {counts.companies}<span className="text-[#073b2e]">+</span>
          </p>
          <p className="text-[#073b2e] text-[10px] sm:text-sm md:text-base mt-1">
            Companies
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center flex-1 relative z-10">
          <p className="text-xl sm:text-3xl md:text-5xl font-dmSans text-[#073b2e]">
            {counts.years}<span className="text-[#023530]">+</span>
          </p>
          <p className="text-[#073b2e] text-[10px] sm:text-sm md:text-base mt-1">
            Years Exp.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center flex-1 relative z-10">
          <p className="text-xl sm:text-3xl md:text-5xl font-dmSans text-[#073b2e]">
            {counts.hours}<span className="text-[#073b2e]">+</span>
          </p>
          <p className="text-[#073b2e] text-[10px] sm:text-sm md:text-base mt-1">
            Design Assets Delivered
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center text-center flex-1 relative z-10">
          <p className="text-xl sm:text-3xl md:text-5xl font-dmSans text-[#073b2e]">
            {counts.revenue}<span className="text-[#073b2e]">+</span>
          </p>
          <p className="text-[#073b2e] text-[10px] sm:text-sm md:text-base mt-1">
            Multinational Projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;