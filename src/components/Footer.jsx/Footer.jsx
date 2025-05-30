import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-[10%] py-8 px-6 " id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-3">
            M.R.S Enterprises
          </h2>
          <p className="text-sm leading-relaxed">
            M.R.S Enterprises is a trusted name in industrial supply solutions
            across Pakistan. We specialize in providing top-quality products
            sourced from international brands for the mechanical, electrical,
            safety, and automation industries.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-3">
            📞 Contact Us
          </h2>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:mrsenterprises29@gmail.com"
              className="text-yellow-400"
            >
              mrsenterprises29@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:&nbsp;
            <a
              href="tel:+923214243092"
              className="text-yellow-400 hover:underline"
            >
              +92 321 4243092
            </a>
            <br />
            Landline:&nbsp;
            <a
              href="tel:+924237668885"
              className="text-yellow-400 hover:underline"
            >
              042-37668885
            </a>
          </p>

          <p className="text-sm">Location: Lahore, Punjab, Pakistan</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-3">
            📌 Quick Links
          </h2>
          <ul className="text-sm space-y-1 flex flex-col justify-center">
            <Link smooth={true} duration={1500} to="services">
              <a href="#services" className="hover:text-yellow-400">
                Our Services
              </a>
            </Link>
            <Link smooth={true} duration={1500} to="projects">
              <a href="#projects" className="hover:text-yellow-400">
                Our Projects
              </a>
            </Link>
            <Link smooth={true} duration={1500} to="about">
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
            </Link>
            <Link smooth={true} duration={1500} to="contact">
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-base text-gray-400 border-t border-gray-700 pt-6 mt-12">
        <p className="mb-1">
          <span className="text-yellow-300">
            {" "}
            &copy; {new Date().getFullYear()}{" "}
          </span>{" "}
          <span className="font-semibold text-white">M.R.S Enterprises</span>.{" "}
          <span className="text-white">All rights reserved. </span>
        </p>
        <p>
          <span className="text-white"> Powered with 💡 by </span>{" "}
          <a
            href="https://sbkdev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold hover:underline"
          >
            Saad.Dev
          </a>
        </p>
      </div>
    </footer>
  );
};
