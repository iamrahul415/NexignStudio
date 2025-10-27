import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="w-full flex justify-center mt-6 bg-white">
        <div className="bg-[#073a2d] grid grid-cols-3 items-center text-white rounded-full px-8 py-4 w-[90%] max-w-[75rem] md:grid-cols-3 relative">
          {/* Mobile: Menu Button (Left) */}
          <div className="md:hidden flex justify-start">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-white hover:text-green-400 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop: Left Links */}
          <nav className="hidden md:flex justify-center space-x-10 text-sm font-medium">
            <a href="#about" className="hover:text-green-400 transition-colors">
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-green-400 transition-colors"
            >
              Services
            </a>
          </nav>

          {/* ✅ Center Logo (Mobile: Right Side) */}
          <div className="flex items-center justify-center col-span-2 md:col-span-1">
            <img
              src="/assets/Logo.webp"
              alt="Logo"
              className="h-10 w-auto md:h-12 object-contain"
            />
          </div>

          {/* Desktop: Right Links */}
          <nav className="hidden md:flex justify-center space-x-10 text-sm font-medium">
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#reviews"
              className="hover:text-green-400 transition-colors"
            >
              Reviews
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#023530] bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#023530] text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Logo in Sidebar */}
          <div className="flex items-center justify-center mb-10">
            <img
              src="/assets/Logo.webp"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            <a
              href="#about"
              className="text-lg hover:text-green-400 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-lg hover:text-green-400 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-lg hover:text-green-400 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              Projects
            </a>
            <a
              href="#reviews"
              className="text-lg hover:text-green-400 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              Reviews
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
