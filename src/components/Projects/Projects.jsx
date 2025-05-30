import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import db from "../../assets/data/ProjectsData.json";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out", // more natural motion
      offset: 80,
      once: false,
    }); // 🎯 animation triggers every time on scroll
  }, []);
  return (
    <section id="projects" className="mt-[10%] px-6  " data-aos="fade-up">
      <h1
        data-aos="fade-up"
        className="md:text-4xl text-3xl text-center font-extrabold font-sans "
      >
        {" "}
        💼 Our Projects{" "}
      </h1>
      <p
        className="text-lg text-center max-w-4xl mx-auto mt-6 mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        At <span className="font-bold text-yellow-500">M.R.S Enterprises</span>,
        we take pride in successfully executing high-impact industrial projects
        across Pakistan. From power and energy to food processing and
        manufacturing, our collaborations with prestigious organizations like{" "}
        <span className="font-bold text-yellow-500">PAEC</span>,{" "}
        <span className="font-bold text-yellow-500">Akzo Nobel</span>, and{" "}
        <span className="font-bold text-yellow-500">Fauji Group</span> reflect
        our unmatched commitment to quality, innovation, and technical
        excellence. Each project is a testament to our ability to deliver
        customized solutions, premium-grade equipment, and reliable service in
        demanding industrial environments.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-6xl mx-auto text-lg ">
        {db.map(({ id, image, title, alt, description },index) => (
          <div
            key={id}
            className="card px-4 py-4 shadow-2xl bg-[#f5f5f5] rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={image}
              alt={alt}
              className=" rounded-md w-full"
            />
            <h1 className="text-yellow-500 text-2xl font-bold font-serif mt-4">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
