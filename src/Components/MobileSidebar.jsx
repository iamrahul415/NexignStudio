import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 px-4 py-4 flex items-center justify-between">
        {/* Hamburger Menu Button - Left Side */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Logo - Right Side */}
        <div className="text-xl font-bold text-blue-600">
          MyLogo
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={toggleSidebar}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-20 px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <section id="projects" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-gray-600">Your projects content goes here.</p>
          </section>

          <section id="services" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Services</h2>
            <p className="text-gray-600">Your services content goes here.</p>
          </section>

          <section id="about" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600">Your about us content goes here.</p>
          </section>

          <section id="reviews" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
            <p className="text-gray-600">Your reviews content goes here.</p>
          </section>
        </div>
      </main>
    </div>
  );
}