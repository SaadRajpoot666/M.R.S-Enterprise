 import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Link} from "react-scroll"
import { FaArrowRight } from 'react-icons/fa'
export const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,  easing: "ease-in-out", // more natural motion
  offset: 80, once: false });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden mt-[18%] md:mt-[8%] " id="home">
      {/* Background Image */}
      <img
        src="/images/header-bg.avif"
        alt="Hero Background"
        data-aos="fade"
        className="absolute top-0 left-0 w-full h-full blur-sm brightness-50 object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 h-full w-full" data-aos="zoom-in">
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md md:w-[70%]">
          Leading Industrial Importer and Certified Government Contractor Serving Pakistan
        </h1>
        <p className="text-gray-200 mt-4 max-w-xl text-lg font-serif">
          M.R.S Enterprises is a trusted industrial goods importer in Pakistan,
          supplying electricals, safety gear, precision tools, and mechanical
          systems...
        </p>
        <button className="flex flex-row text-2xl mt-10 text-white font-bold bg-black/50 px-4 py-2 rounded-2xl hover:text-yellow-500 hover:scale-110 hover:bg-white transition-all duration-300 ">
<Link to="about" smooth={true} >Learn More <FaArrowRight className="inline"   /> </Link>
        </button>
      </div>
    </section>
  );
};
