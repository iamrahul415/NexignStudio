// src/components/Body.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Body() {
  const [isVisible, setIsVisible] = useState({
    heading: false,
    image1: false,
    description: false,
    image2: false,
  });

  const headingRef = useRef(null);
  const image1Ref = useRef(null);
  const descriptionRef = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const refName = entry.target.dataset.ref;
          setIsVisible((prev) => ({ ...prev, [refName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: headingRef, name: "heading" },
      { ref: image1Ref, name: "image1" },
      { ref: descriptionRef, name: "description" },
      { ref: image2Ref, name: "image2" },
    ];

    refs.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.ref = name;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="
        bg-black text-white min-h-screen flex flex-col justify-center
        px-4 sm:px-6 md:px-16 py-10 md:py-0
      "
    >
      {/* Content Grid */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12
          items-start
        "
      >
        {/* Left Column */}
        <div className="flex flex-col space-y-6 sm:space-y-8">
          {/* Heading */}
          <div
            ref={headingRef}
            className={`
              transition-all duration-1000 ease-out
              ${
                isVisible.heading
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-bold leading-tight
              "
            >
              Turning idea into <br />
              <span className="text-white">Masterpieces</span>
            </h1>
          </div>

          {/* Office Image */}
          <div
            ref={image1Ref}
            className={`
              relative md:mt-6 sm:mt-10
              transition-all duration-1000 ease-out delay-200
              ${
                isVisible.image1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }
            `}
          >
            <img
              src="/assets/Body1.png"
              alt="Creative Office"
              className="rounded-lg w-full object-cover grayscale"
            />
            <div
              className="
                absolute bottom-3 sm:bottom-4 left-3 sm:left-4
                bg-lime-400 text-black px-3 sm:px-4 py-1.5 sm:py-2
                rounded-md font-medium text-xs sm:text-sm
              "
            >
              A Creative Design <br /> Agency
            </div>
            <div
              className="
                absolute top-2 sm:top-4 -left-3 sm:-left-4
                text-lime-400 text-3xl sm:text-4xl
              "
            >
              ✦
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start space-y-6 sm:space-y-8 pt-4 md:pt-0">
          {/* Description Text */}
          <div
            ref={descriptionRef}
            className={`
              transition-all duration-1000 ease-out delay-300
              ${
                isVisible.description
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <p
              className="
                text-gray-300 leading-relaxed
                text-base sm:text-lg
                text-start
              "
            >
              We are a national team, but our creative challenges are well
              recognized. By dedicating ourselves to the world with our best
              minds, we strive to stand out as cutting-edge innovators in the
              media—always with purpose.
            </p>
          </div>

          {/* Woman Image */}
          <div
            ref={image2Ref}
            className={`
              flex justify-start
              transition-all duration-1000 ease-out delay-500
              ${
                isVisible.image2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }
            `}
          >
            <img
              src="/assets/women.jpg"
              alt="Creative Leader"
              className="
                rounded-lg w-[90%] sm:w-[80%] md:w-[60%]
                object-cover grayscale
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}