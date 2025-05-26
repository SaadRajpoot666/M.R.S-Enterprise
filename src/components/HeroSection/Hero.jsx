 import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
        <p className="text-gray-200 mt-4 max-w-xl text-lg">
          M.R.S Enterprises is a trusted industrial goods importer in Pakistan,
          supplying electricals, safety gear, precision tools, and mechanical
          systems...
        </p>
      </div>
    </section>
  );
};
