import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <div className="bg-[#023530] text-white py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-dmSans font-semibold mb-4">
              Ready to Stand Out?
            </h2>
            <p className="text-gray-300 font-dmSans text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
              Stop blending in. Let's craft a brand and social presence that turns heads and drives results. Hit us up and let's talk strategy.

            </p>
            <button
              className="bg-[#0d5a52] hover:bg-[#073b2e] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-dmSans transition-colors duration-300"
              onClick={() =>
                window.open("https://wa.me/918095520714", "_blank")
              }
            >
              Contact Us
            </button>
          </div>

          {/* Company Details */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-[#007c6a] p-6 rounded-lg max-w-sm">
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div className="font-dmSans">
                    <p className="text-sm  text-gray-400">Email</p>
                    <a
                      href="mailto:info@nexignstudio.com"
                      className="hover:text-green-500 transition-colors"
                    >
                      nexignspace@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 font-dmSans">
                  <svg
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+918095520714"
                      className="hover:text-green-500 transition-colors"
                    >
                      +91 8095520714
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Green Footer */}
      <div className="bg-[#023530] px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#ffebd8] text-[#023530] rounded-2xl p-8 sm:p-12">
            {/* Top Section - Logo and Description */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 text-center md:text-left">
              <div className="mb-4 md:mb-0 w-full md:w-auto">
                <img
                  src="/assets/Logo2.png"
                  alt="Logo1"
                  className="h-10 object-contain mx-auto md:mx-0"
                />
              </div>
              <div className="max-w-sm w-full md:w-auto mx-auto md:mx-0">
                <p className="text-[#023530] text-sm font-dmSans leading-relaxed">
                  Innovative solutions for modern businesses. We help companies
                  transform their digital presence and achieve sustainable
                  growth.
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center md:text-left">
              <div>
                <h4 className="font-dmSans mb-3 text-lg">Services</h4>
                <ul className="space-y-2 text-[#023530] text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Digital Marketing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-dmSans mb-3 text-lg">Company</h4>
                <ul className="space-y-2 text-[#023530] text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-dmSans mb-3 text-lg">Career</h4>
                <ul className="space-y-2 text-[#023530] text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#011815] transition-colors font-dmSans"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-dmSans mb-3 text-lg">Newsletter</h4>
                <p className="text-[#023530] text-sm mb-3">
                  Subscribe for updates and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-md text-[#023530] text-sm outline-none border border-gray-300 focus:border-green-500 transition-colors"
                  />
                  <button className="bg-[#023530] hover:bg-green-700 text-white font-dmSans px-4 py-2 rounded-md text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#073b2e] pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-green-100 font-dmSans text-sm mb-4 md:mb-0 text-center md:text-left flex items-center justify-center gap-2">
                <span>© 2025</span>
                <span>Nexign All rights reserved.</span>
              </div>

              <div className="flex space-x-3 sm:space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nexign_?igsh=MTZpdTFxaWVhOGp3dg%3D%3D&utm_source=qr
"
                  className="w-8 h-8 bg-[#0d6358] rounded-full flex items-center justify-center hover:bg-[#073b2e] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7zm4.75-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aanchal-s-jain-195b82240/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="w-8 h-8 bg-[#0d6358] rounded-full flex items-center justify-center hover:bg-[#073b2e] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
