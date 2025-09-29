import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Einser",
    role: "CEO, PixelCraft Agency",
    image: "./assets/men1.jpg",
    text: "Working with Creatix has been an incredible experience. They truly listened to our needs and delivered stunning designs that exceeded expectations.",
  },
  {
    name: "Jordan Hayes",
    role: "Head of Product, BrightLabs",
    image: "./assets/men2.jpg",
    text: "Partnering with Creatix has completely transformed our brand presence. Their creative vision brought our ideas to life in a way we couldn’t have imagined.",
  },
  {
    name: "Sophia Lin",
    role: "Marketing Lead, NovaTech",
    image: "./assets/men1.jpg",
    text: "The team’s professionalism and creativity stood out. They take complex ideas and turn them into designs that make a real impact on our product.",
  },
  {
    name: "David Kumar",
    role: "Founder, SkyEdge",
    image: "./assets/men2.jpg",
    text: "Creatix consistently delivers exceptional quality. Their attention to detail and dedication to excellence is unmatched.",
  },
  {
    name: "Maria Lopez",
    role: "Product Manager, ZenStudio",
    image: "./assets/men1.jpg",
    text: "From start to finish, working with Creatix was seamless. The results exceeded our expectations and impressed our entire team.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Auto horizontal scroll
  useEffect(() => {
    const container = scrollRef.current;
    let req;
    const speed = 1; // px per frame, adjust speed here

    const loop = () => {
      if (container) {
        container.scrollLeft += speed;
        // Loop back to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
        req = requestAnimationFrame(loop);
      }
    };

    req = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(req);
  }, []);

  const scrollBy = (dir) => {
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="bg-black text-white py-10 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="
            flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {/* Duplicate the array for infinite scroll effect */}
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 bg-neutral-900 rounded-xl p-5 sm:p-6 shadow-md
                w-[85%] sm:w-[22rem] md:w-[28rem] lg:w-[35rem]
                h-auto sm:h-64
              "
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{t.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Prev / Next buttons */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
          <button
            onClick={() => scrollBy("left")}
            className="bg-neutral-800 hover:bg-neutral-700 p-2 sm:p-3 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="bg-neutral-800 hover:bg-neutral-700 p-2 sm:p-3 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
