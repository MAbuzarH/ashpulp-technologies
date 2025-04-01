// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky md:hidden  top-0 z-50 flex justify-center w-full  py-4">
      <div className="w-[95%]  flex items-center justify-between rounded-lg border bg-white border-gray-200 px-6 py-3 shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="h-8 w-auto cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={30} 
                height={12}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - visible on screens > 786px */}
        <div className="hidden md:flex items-center space-x-4">
          <NavButton href="/" label="Home" />
          <NavButton href="/about" label="About" />
          <NavButton href="/services" label="Services" />
          
          {/* Dropdown Button - Desktop Version */}
          <div className="relative">
            <button
              onClick={toggleResourcesDropdown}
              className="flex items-center text-gray-300 hover:text-black transition-colors duration-200 px-3 py-2"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                  resourcesDropdownOpen ? 'rotate-180' : ''
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

            {/* Dropdown Menu - Desktop Version */}
            {resourcesDropdownOpen && (
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
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button - visible on screens ≤ 786px */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 hover:text-black focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              color="black"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Separate from navbar container */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-400 rounded-4xl z-40 pt-24">
          <div className="flex flex-col items-center border-t-2 space-y-6 p-4">
            <MobileNavButton href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavButton href="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavButton href="/services" label="Services" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Mobile Resources Dropdown */}
            <div className="w-48 flex flex-col items-center">
              <button
                onClick={toggleResourcesDropdown}
                className="text-gray-300 hover:text-black transition-colors duration-200 py-2 flex items-center"
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    resourcesDropdownOpen ? 'rotate-180' : ''
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
              
              {resourcesDropdownOpen && (
                <div className="flex flex-col items-center space-y-4 my-4">
                  <Link 
                    href="/resources/docs"
                    className="text-gray-300 hover:text-black transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link 
                    href="/resources/tutorials"
                    className="text-gray-300 hover:text-black transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tutorials
                  </Link>
                </div>
              )}
            </div>
            
            <MobileNavButton href="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Button with black background */}
            <Link 
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 text-center"
            >
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 w-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper component for desktop navigation buttons
// interface NavButtonProps {
//   href: string;
//   label: string;
// }

const NavButton = ({ href, label }) => {
  return (
    <Link 
      href={href}
      className="text-gray-300 hover:text-black transition-colors duration-200 px-3 py-2"
    >
      {label}
    </Link>
  );
};

// Helper component for mobile navigation buttons
// interface MobileNavButtonProps {
//   href: string;
//   label: string;
//   onClick: () => void;
// }

const MobileNavButton = ({ href, label, onClick }) => {
  return (
    <Link 
      href={href}
      className="text-gray-300 hover:text-black transition-colors duration-200 py-2 text-lg"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;