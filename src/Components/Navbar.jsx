import { useState } from "react";
import { Menu, X, Mail, MapPin, ExternalLink, MessageCircle, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
    setIsOpen(false);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact", onClick: handleContactClick },
  ];

  return (
    <>
      <nav className="bg-[#faf6f0] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 group cursor-pointer">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.onClick}
                  className="px-4 py-2 text-[#073b2e] hover:text-[#073a2d] font-dmSans font-medium text-base transition-all duration-300 relative group"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 
                    bg-gradient-to-r from-[#0d5a52]  via-[#073b2e] to-[#023530] 
                    group-hover:w-full transition-all duration-300"
                  ></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 bg-gradient-to-r from-[#0d5a52] via-[#0d6358] to-[#023530] text-white font-medium rounded-lg hover:from-[#0d6358] hover:via-[#073b2e] hover:to-[#023530] transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-[#073b2e] hover:text-white hover:bg-[#faf6f0] transition-all duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6 text-[#073b2e]" />
                ) : (
                  <Menu className="block h-6 w-6 text-[#073b2e]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-64" : "max-h-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#faf6f0] rounded-lg mt-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.onClick}
                  className="block px-4 py-2 text-[#073b2e] hover:text-white hover:bg-slate-700 font-medium rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-[#0d5a52] via-[#0d6358] to-[#023530] text-white font-dmSans rounded-lg hover:from-[#0d6358] hover:via-[#073b2e] hover:to-[#023530] transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="float-right text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#073b2e] mb-6 clear-both">
              GET IN TOUCH WITH US
            </h2>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#0d5a52] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Email</p>
                  <a
                    href="mailto:nexignspace@gmail.com"
                    className="text-[#073b2e] font-semibold hover:text-[#0d5a52] transition-colors break-all"
                  >
                    nexignspace@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-[#0d5a52] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/918095520714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#073b2e] font-semibold hover:text-[#0d5a52] transition-colors"
                  >
                    +91 8095520714
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-3">
                <Instagram className="h-5 w-5 text-[#0d5a52] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Instagram</p>
                  <a
                    href="https://www.instagram.com/nexign_?igsh=MTZpdTFxaWVhOGp3dg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#073b2e] font-semibold hover:text-[#0d5a52] transition-colors"
                  >
                    @nexign_
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-3">
                <Linkedin className="h-5 w-5 text-[#0d5a52] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/aanchal-s-jain-195b82240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#073b2e] font-semibold hover:text-[#0d5a52] transition-colors"
                  >
                    Aanchal S Jain
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#0d5a52] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">Location</p>
                  <p className="text-[#073b2e] font-semibold">Bangalore</p>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="w-full mt-8 px-4 py-2 bg-gradient-to-r from-[#0d5a52] via-[#0d6358] to-[#023530] text-white font-medium rounded-lg hover:from-[#0d6358] hover:via-[#073b2e] hover:to-[#023530] transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}