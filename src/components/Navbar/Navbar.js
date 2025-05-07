import coffeecient from "../../assets/images/coffeecient-logo.png";

import React from "react";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Products", "About Us", "Contact"];
  return (
    <nav className="bg-bg-navbar shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop/Mobile Header */}
        <div className="flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex items-center">
            <img className=" min-w-24 w-60 h-20" src={coffeecient} />
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right-aligned buttons (always visible) */}
          <div className="flex items-center space-x-4">
            <button>
              <ShoppingCartIcon className="w-10 h-10 " />
            </button>

            <button className="px-4 py-2 bg-btn-login text-white rounded hover:bg-btn-login-shadow">
              Login
            </button>

            {/* Mobile menu button (hidden on desktop) */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2  text-center ">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
