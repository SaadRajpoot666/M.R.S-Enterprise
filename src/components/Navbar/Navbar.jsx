 import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

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
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <nav className="bg-gray-900 hidden md:block px-6 py-4 rounded-2xl mt-2 ml-1 mr-1 shadow-lg">
        <ul className="flex justify-center items-center gap-10 text-white text-xl font-serif uppercase">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={1500}
                offset={-80} // offset for fixed navbar
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-gray-900 px-4 py-2 rounded-2xl mt-2 ml-1 mr-1 shadow-lg">
        <div
          className="text-3xl text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
        <div
          className={`transition-all duration-500 ease-in-out transform overflow-hidden rounded-md ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-gray-900 mt-2`}
        >
          <ul className="flex flex-col items-center text-white text-xl font-serif gap-4 py-4 uppercase">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-400 transition duration-300"
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
