import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Einser",
    role: "CEO, PixelCraft Agency",
    image: "./assets/men1.jpg",
    text: "Nexign Studio transformed our entire brand identity. Their logo and branding work gave our company a fresh, modern, and powerful look that instantly connected with our audience.",
  },
  {
    name: "Jordan Hayes",
    role: "Head of Product, BrightLabs",
    image: "./assets/men2.jpg",
    text: "The graphic design quality from Nexign Studio is unmatched. Every visual they delivered looked professional, clean, and perfectly aligned with our brand.",
  },
  {
    name: "Sophia Lin",
    role: "Marketing Lead, NovaTech",
    image: "./assets/men1.jpg",
    text: "Our product packaging design improved dramatically after working with Nexign Studio. They added a premium, eye-catching touch that boosted our product appeal instantly.",
  },
  {
    name: "David Kumar",
    role: "Founder, SkyEdge",
    image: "./assets/men2.jpg",
    text: "Nexign Studio helped us redefine our brand from scratch. Their logo design and brand strategy gave our startup a solid identity and a strong visual presence.",
  },
  {
    name: "Maria Lopez",
    role: "Product Manager, ZenStudio",
    image: "./assets/men1.jpg",
    text: "The packaging concepts from Nexign Studio were beyond impressive. Their designs are visually stunning and created a premium feel for our entire product line.",
  },
  {
    name: "Olivia Brown",
    role: "Design Director, Artify",
    image: "./assets/men2.jpg",
    text: "Nexign Studio's graphic design expertise stands out. Every creative asset—banners, posters, social graphics—was crafted with precision and artistic flair.",
  },
  {
    name: "Liam Carter",
    role: "CTO, InnovateHub",
    image: "./assets/men1.jpg",
    text: "Our social media presence grew rapidly after partnering with Nexign Studio. Their creative content and brand consistency made a huge difference.",
  },
  {
    name: "Emily Stone",
    role: "Operations Head, BlueWave",
    image: "./assets/men2.jpg",
    text: "Nexign Studio made social media management so easy. Their creative posts, strategies, and high-quality visuals increased our engagement more than we expected.",
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
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 font-outfit">
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
