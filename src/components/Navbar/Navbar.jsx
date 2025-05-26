 import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Desktop */}
      <nav className="bg-gray-900 hidden md:block mt-2 ml-4 mr-4 rounded-2xl">
        <ul className="md:flex text-white md:flex-row pt-4 pb-4 text-2xl gap-8 uppercase md:justify-center font-serif">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:cursor-pointer hover:text-yellow-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="pt-2 pb-2 px-4">
        {/* Hamburger Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer text-white bg-gray-900 p-2 rounded-md"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Animated Mobile Menu */}
        <div
          className={`transition-all duration-500 ease-in-out origin-top transform md:hidden overflow-hidden rounded-md ${
            isOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          } bg-gray-900 shadow-md mt-2`}
        >
          <ul className="flex flex-col uppercase text-center text-white text-2xl gap-4 p-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
