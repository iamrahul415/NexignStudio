import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <div className="bg-[#023530] text-white py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in Touch Today!
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
              Ready to take your business to the next level? Let's discuss how
              we can help you achieve your goals with our innovative solutions.
            </p>
            <button
              className="bg-[#0d5a52] hover:bg-[#073b2e] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300"
              onClick={() =>
                window.open("https://wa.me/919102246263", "_blank")
              }
            >
              Contact Us
            </button>
          </div>

          {/* Company Details */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-[#0d5a52] p-6 rounded-lg max-w-sm">
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
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:info@nexignstudio.com"
                      className="hover:text-green-500 transition-colors"
                    >
                      info@nexignstudio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
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
                      href="tel:+919102246263"
                      className="hover:text-green-500 transition-colors"
                    >
                      +91 9876543210
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
          <div className="bg-[#0d5a52] text-white rounded-2xl p-8 sm:p-12">
            {/* Top Section - Logo and Description */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 text-center md:text-left">
              <div className="mb-4 md:mb-0 w-full md:w-auto">
                <img
                  src="/assets/Logo1.webp"
                  alt="Logo1"
                  className="h-10 object-contain mx-auto md:mx-0"
                />
              </div>
              <div className="max-w-sm w-full md:w-auto mx-auto md:mx-0">
                <p className="text-green-100 text-sm leading-relaxed">
                  Innovative solutions for modern businesses. We help companies
                  transform their digital presence and achieve sustainable
                  growth.
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center md:text-left">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Services</h4>
                <ul className="space-y-2 text-green-100 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Digital Marketing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Company</h4>
                <ul className="space-y-2 text-green-100 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Career</h4>
                <ul className="space-y-2 text-green-100 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Newsletter</h4>
                <p className="text-green-100 text-sm mb-3">
                  Subscribe for updates and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-md text-black text-sm outline-none"
                  />
                  <button className="bg-[#023530] hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#073b2e] pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-green-100 text-sm mb-4 md:mb-0 text-center md:text-left flex items-center justify-center gap-2">
                <span>© 2025</span>
                
                {/* <img
                  src="/assets/Logo1.webp"
                  alt="Logo1"
                  className="h-6 object-contain inline-block"
                /> */}
                <span>Nexign All rights reserved.</span>
              </div>

              <div className="flex space-x-3 sm:space-x-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#0d6358] rounded-full flex items-center justify-center hover:bg-[#073b2e] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.877C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#0d6358] rounded-full flex items-center justify-center hover:bg-[#073b2e] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-.94-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
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
