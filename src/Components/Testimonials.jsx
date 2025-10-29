import React, { useEffect, useRef } from "react";

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
  {
    name: "Olivia Brown",
    role: "Design Director, Artify",
    image: "./assets/men2.jpg",
    text: "Creatix brought our brand to life with their unique creative flair. The designs captured our essence perfectly.",
  },
  {
    name: "Liam Carter",
    role: "CTO, InnovateHub",
    image: "./assets/men1.jpg",
    text: "Their understanding of modern design and user experience helped us elevate our digital product beyond expectations.",
  },
  {
    name: "Emily Stone",
    role: "Operations Head, BlueWave",
    image: "./assets/men2.jpg",
    text: "Creatix combines professionalism with creativity like no one else. Every project feels fresh and impactful.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Continuous infinite scroll
  useEffect(() => {
    const container = scrollRef.current;
    let req;
    const speed = 0.8; // Adjust scroll speed here

    const loop = () => {
      if (container) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        req = requestAnimationFrame(loop);
      }
    };

    req = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <section id="reviews" className="bg-[#023530] text-white py-10 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="
            flex space-x-4 sm:space-x-6 overflow-x-hidden
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {/* Duplicate testimonials for seamless loop */}
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 bg-[#0d5a52] rounded-2xl p-5 sm:p-6 shadow-lg
                w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem]
                flex flex-col justify-between
              "
            >
              <div>
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
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed line-clamp-5">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
