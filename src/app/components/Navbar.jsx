// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`sticky hidden md:flex top-0 z-50  justify-center w-full  py-4`}>
      <div className="w-[95%] bg-white flex items-center justify-between rounded-lg border border-gray-200 px-6 py-3 shadow-sm">
        {/* Logo */}
        <div className=" w-[50%]">
          <Link href="/">
            <div className="cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={45} 
                height={15}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <NavButton href="/work" label="Work" />
          <NavButton href="/about" label="About" />
          <NavButton href="/services" label="Services" />
          
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-300 hover:text-black transition-colors duration-200 px-3 py-2"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                <Link 
                  href="/resources/docs"
                  className="block px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-50"
                >
                  Documentation
                </Link>
                <Link 
                  href="/resources/tutorials"
                  className="block px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-50"
                >
                  Tutorials
                </Link>
              </div>
            )}
          </div>

          <NavButton href="/contact" label="Contact" />
          
          {/* Button with black background */}
          <Link href="/signup">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Start A Project
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation buttons
// interface NavButtonProps {
//   href: string;
//   label: string;
// }


const NavButton = ({ href, label }) => {
  return (
    <Link 
      href={href}
      className="text-gray-300 hover:text-black transition-colors duration-200 px-3 py-2 "
    >
      {label}
    </Link>
  );
};

export default Navbar;