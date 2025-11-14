import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="w-full flex justify-center bg-[#ffebd8]">
        <div className="flex items-center justify-between bg-[#ffebd8] text-[#073a2d] rounded-full px-4 py-3 w-[90%] max-w-[75rem] relative shadow-sm">
          {/* Left Section - Mobile Menu / Left Nav */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-[#073a2d] hover:text-[#023530] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>

            {/* Desktop Left Nav */}
            <nav className="hidden md:flex items-center space-x-14 text-lg font-dmSans">
              <a
                href="#about"
                className="hover:text-[#023530] transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="hover:text-[#023530] transition-colors"
              >
                Services
              </a>
            </nav>
          </div>

          {/* Logo */}
          <div className="flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 justify-end w-auto md:w-auto">
            <img
              src="/assets/Logo2.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Right Section - Desktop Only */}
          <nav className="hidden md:flex items-center space-x-14 text-lg font-dmSans">
            <a
              href="#projects"
              className="hover:text-[#023530] transition-colors"
            >
              Projects
            </a>
            <a
              href="#reviews"
              className="hover:text-[#023530] transition-colors"
            >
              Reviews
            </a>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#ffebd8] text-[#023530] z-50 transform transition-transform duration-300 ease-in-out shadow-lg md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-6 right-6 text-[#023530] hover:text-green-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-start mb-10">
            <img
              src="/assets/Logo2.png"
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-6 text-lg font-dmSans">
            {[
              { name: "About Us", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "Reviews", href: "#reviews" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-green-400 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
