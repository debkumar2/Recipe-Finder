import React, { useState, useEffect } from "react";
import brandImg from "../assets/brandLogo.png";
import CmnButton from "./CmnButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white text-black shadow-sm">
      {/* Main Navbar Bar */}
      <div className="px-6 md:px-14 lg:px-20 py-4 flex items-center justify-between relative bg-white z-50">
        <div className="w-[140px] md:w-[180px]">
          <img src={brandImg} alt="Flavorly Logo" className="w-full object-contain" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-4 xl:gap-8">
          {['Home', 'Recipes', 'Categories', 'Collections', 'Meal Planner', 'About'].map((item) => (
            <li key={item} className="px-2 xl:px-4 py-2">
              <a
                href="#"
                className="relative font-medium text-sm xl:text-base text-gray-800 hover:text-red-600 transition-colors py-1 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Items */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Action Buttons (Hidden on mobile & tablet) */}
          <div className="hidden lg:flex gap-3 xl:gap-4">
            <CmnButton btnName="Log In" variant="dark" />
            <CmnButton btnName="Sign Up" variant="red" />
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button
            className="lg:hidden p-2 -mr-2 text-gray-800 hover:text-red-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 z-40 max-h-[calc(100vh-70px)] overflow-y-auto transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-4">
          {['Home', 'Recipes', 'Categories', 'Collections', 'Meal Planner', 'About'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="inline-block relative font-semibold text-lg text-gray-800 hover:text-red-600 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
          <div className="flex justify-center w-full [&>button]:w-full">
            <CmnButton btnName="Log In" variant="dark" />
          </div>
          <div className="flex justify-center w-full [&>button]:w-full">
            <CmnButton btnName="Sign Up" variant="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
