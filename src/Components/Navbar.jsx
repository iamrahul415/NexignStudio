const Navbar = () => {
  return (
    <header className="w-full flex justify-center mt-6 bg-white">
      <div
        className="bg-black grid grid-cols-3 items-center text-white
                   rounded-full px-8 py-4 w-[90%] max-w-[75rem]"
      >
        {/* Left Links */}
        <nav className="flex justify-center space-x-10 text-sm font-medium">
          <a href="#about" className="hover:text-green-400">About Us</a>
          <a href="#services" className="hover:text-green-400">Services</a>
        </nav>

        {/* Center Logo */}
        <div className="flex items-center justify-center space-x-3">
          {/* Starburst Pattern */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute w-6 h-0.5 bg-[#7CFF3B]"
                style={{
                  transform: `rotate(${i * 22.5}deg)`,
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>
          <span className="text-lg font-bold text-white">Nexign Studio</span>
        </div>

        {/* Right Links */}
        <nav className="flex justify-center space-x-10 text-sm font-medium">
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#reviews" className="hover:text-green-400">Reviews</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
