// components/Navbar.js
'use client'; // Make sure the code runs on the client-side

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyApp</div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 space-y-4 md:space-y-0 absolute md:relative top-16 right-0 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:bg-transparent p-6 md:p-0 md:flex-row md:items-center`}
        >
          <Link href="/" className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
