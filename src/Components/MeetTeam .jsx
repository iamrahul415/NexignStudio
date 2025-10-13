import React from "react";

const teamMembers = [
  {
    name: "Irfan Junejo",
    role: "Content Creator",
    desc: "Creative storyteller with a background in writing, video production, and brand storytelling. Crafts content that resonates.",
    image: "/assets/men1.jpg",
  },
  {
    name: "Malik Ahlam",
    role: "Digital Marketer",
    desc: "Creative storyteller with a background in writing, video production, and brand storytelling. Crafts content that resonates.",
    image: "/assets/body2.jpg",
  },
  {
    name: "Haseeb Sheikh",
    role: "SEO Specialist",
    desc: "Creative storyteller with a background in writing, video production, and brand storytelling. Crafts content that resonates.",
    image: "/assets/men1.jpg",
  },
  {
    name: "Numan Ahmad",
    role: "Product Designer",
    desc: "Creative storyteller with a background in writing, video production, and brand storytelling. Crafts content that resonates.",
    image: "/assets/GirlImg.jpg",
  },
  {
    name: "Hafiz Farhan",
    role: "Web Developer",
    desc: "Creative storyteller with a background in writing, video production, and brand storytelling. Crafts content that resonates.",
    image: "/assets/men1.jpg",
  },
  {
    name: "Haroon Ahmad",
    role: "Shopify Expert",
    desc: "Creative storyteller with a background in writing, video production, and brand storytelling. Crafts content that resonates.",
    image: "/assets/men2.jpg",
  },
];

const MeetTeam = () => {
  return (
    <section
      id="projects"
      className="bg-black min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12"
    >
      <div className="relative bg-gray-900/70 backdrop-blur-lg rounded-2xl md:rounded-[2rem] shadow-2xl w-full max-w-[95%] md:max-w-[90%] p-6 sm:p-8 md:p-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Meet
            <span className="bg-lime-400 text-white px-2 rounded-md ml-2 inline-block transform -skew-x-12">
              Our Team
            </span>
          </h2>

          <div className="bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg self-center md:self-auto cursor-pointer transition-all duration-300 hover:scale-105">
            <span className="text-black text-sm sm:text-base font-medium">
              Join Our Team
            </span>
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-lime-400 rounded-full"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-xl p-5 sm:p-6 shadow-md flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Top section */}
              <div className="flex items-start gap-4 mb-4">
                {/* Green cross shape */}
                <div className="relative flex-shrink-0">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-lime-400"
                  >
                    <g fill="currentColor" transform="rotate(45 40 40)">
                      <circle cx="40" cy="20" r="20" />
                      <circle cx="40" cy="60" r="20" />
                      <circle cx="20" cy="40" r="20" />
                      <circle cx="60" cy="40" r="20" />
                    </g>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/30"
                    />
                  </div>
                </div>

                {/* Member info */}
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Menu dots */}
                <div className="text-gray-400 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="4" r="2" />
                    <circle cx="10" cy="10" r="2" />
                    <circle cx="10" cy="16" r="2" />
                  </svg>
                </div>
              </div>

              <hr className="border-gray-300 w-full mb-4" />
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
