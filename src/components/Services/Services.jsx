 import servicesData from "../../assets/data/servicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease-in-out", // more natural motion
  offset: 80, once: false }); // 🎯 animation triggers every time on scroll
  }, []);
 
  return (
    <section id="services" className="mt-[10%] px-6" data-aos="fade-up">
      <h1 className="md:text-4xl text-3xl text-center mb-8 font-bold">
        🛠️ Our Services
      </h1>

      <p
        className="text-lg text-center max-w-4xl mx-auto mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        At <span className="font-bold text-yellow-500">M.R.S Enterprises</span>,
        we offer a wide range of industrial solutions tailored to meet the
        demands of both public and private sectors across Pakistan. With strong
        sourcing networks from countries like{" "}
        <span className="font-bold text-yellow-500">Italy</span>,{" "}
        <span className="font-bold text-yellow-500">France</span>,{" "}
        <span className="font-bold text-yellow-500">UAE</span>,{" "}
        <span className="font-bold text-yellow-500">Germany</span>,{" "}
        <span className="font-bold text-yellow-500">USA</span>, and{" "}
        <span className="font-bold text-yellow-500">China</span>, we ensure
        high-quality, durable, and efficient industrial components.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-lg">
        {servicesData.map(({ id, title, description, img, alt }, index) => (
          <div
            key={id}
            className="card px-4 py-4 shadow-2xl bg-[#f5f5f5] rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay={index*100}
          >
            <img
              src={img}
              alt={alt}
              className="h-[40vh] rounded-md w-full"
            />
            <h1 className="text-yellow-500 text-2xl font-bold font-serif mt-4">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <p
        className="text-center text-lg mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We proudly work with top international brands like{" "}
        <span className="font-bold text-yellow-500">Fluke</span>,{" "}
        <span className="font-bold text-yellow-500">Schneider Electric</span>,{" "}
        <span className="font-bold text-yellow-500">ABB</span>,{" "}
        <span className="font-bold text-yellow-500">Honeywell</span>, and more —
        ensuring top-notch quality every step of the way.
      </p>
    </section>
  );
};
