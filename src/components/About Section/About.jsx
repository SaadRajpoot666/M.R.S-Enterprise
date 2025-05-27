   import AOS from "aos";
 import "aos/dist/aos.css";
 import { useEffect } from "react";
 
 export const About = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once:false,
      offset: 120, // starts the animation 120px before element comes into view
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section id="about" className="mt-[10%] px-6">
      <h1     data-aos="fade-up"
 className="md:text-4xl text-3xl text-center mb-[5%] font-bold">
        📌 Who We Are
      </h1>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-7xl mx-auto">
        {/* IMAGE SECTION */}
        <div data-aos="zoom-in" className="about-image-container w-full lg:w-1/2 min-w-[300px]">
          <div className="h-[500px] w-full overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/about-image.jpg"
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div       data-aos="fade-right"
 className="about-content-container text-lg leading-relaxed lg:w-1/2">
          <p className="mb-4 text-justify">
            Founded in <span className="font-bold text-yellow-500">2015</span> by{" "}
            <span className="font-bold text-yellow-500">Mr. Abdul Raheem</span>,{" "}
            <span className="font-bold text-yellow-500">M.R.S Enterprises</span> is a trusted{" "}
            <span className="font-bold text-yellow-500">industrial importer</span>,{" "}
            <span className="font-bold text-yellow-500">government contractor</span>, and{" "}
            <span className="font-bold text-yellow-500">general order supplier</span> based in{" "}
            <span className="font-bold text-yellow-500">Lahore, Pakistan</span>. With a strong focus on{" "}
            <span className="font-bold text-yellow-500">quality</span> and{" "}
            <span className="font-bold text-yellow-500">client satisfaction</span>, we proudly serve industries across the country.
          </p>

          <p className="mb-4 text-justify">
            Under the leadership of <span className="font-bold text-yellow-500">CEO Abdul Raheem</span>, we've grown from a regional business into a{" "}
            <span className="font-bold text-yellow-500">nationwide industrial solutions provider</span>, known for{" "}
            <span className="font-bold text-yellow-500">importing premium products</span> and ensuring{" "}
            <span className="font-bold text-yellow-500">full regulatory compliance</span>.
          </p>

          <p className="mb-4 text-justify">
            We’re officially registered with:{" "}
            <span className="font-bold text-yellow-500">NTN</span> |{" "}
            <span className="font-bold text-yellow-500">STN</span> |{" "}
            <span className="font-bold text-yellow-500">Chamber of Commerce</span> |{" "}
            <span className="font-bold text-yellow-500">ITC</span>
          </p>

          <p className="text-justify">
            These credentials reflect our commitment to{" "}
            <span className="font-bold text-yellow-500">credibility</span>,{" "}
            <span className="font-bold text-yellow-500">transparency</span>, and{" "}
            <span className="font-bold text-yellow-500">long-term business relationships</span>. At{" "}
            <span className="font-bold text-yellow-500">M.R.S Enterprises</span>, we’re driven to{" "}
            <span className="font-bold text-yellow-500">deliver on time</span>, source the{" "}
            <span className="font-bold text-yellow-500">best global brands</span>, and{" "}
            <span className="font-bold text-yellow-500">exceed expectations</span> — every single time.
          </p>
        </div>
      </div>
    </section>
  );
};
