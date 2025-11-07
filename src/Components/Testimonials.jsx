import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

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

  useEffect(() => {
    const container = scrollRef.current;
    let req;
    const speed = 0.6;

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
    <section id="reviews" className="bg-[#012A26] text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#024d45] via-transparent to-[#012A26] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-10 font-outfit">
          What Our Clients Say
        </h2>

        <div
          ref={scrollRef}
          className="
            flex space-x-4 sm:space-x-6 overflow-x-hidden
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 w-[14rem] sm:w-[18rem] md:w-[21rem]
                bg-gradient-to-br from-[#0b4d44] to-[#06695e]
                rounded-3xl p-4 sm:p-6 md:p-8
                shadow-[0_0_20px_rgba(0,0,0,0.3)]
                transition-all duration-500 ease-in-out transform
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,200,0.3)]
              "
            >
              <div className="flex items-center mb-4 sm:mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-teal-400 object-cover shadow-md mr-3 sm:mr-4"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg">{t.name}</h3>
                  <p className="text-teal-300 text-xs sm:text-sm">{t.role}</p>
                </div>
              </div>

              <Quote className="text-teal-400 opacity-70 mb-2 sm:mb-3" size={20} />

              <p className="text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
