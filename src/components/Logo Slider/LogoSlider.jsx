import React from "react";
import fluke from "../../assets/logos/fluke.png";
import abb from "../../assets/logos/abb.png";
import honeywell from "../../assets/logos/honeywell.png";
import schneider from "../../assets/logos/schneider.png";
import mitutoyo from "../../assets/logos/mitutoyo.png";
import rigid from "../../assets/logos/rigid.png";
import unit from "../../assets/logos/unit.png";
import intes from "../../assets/logos/intes.png";
import tense from "../../assets/logos/tense.png";
import insize from "../../assets/logos/insize.png";
import moteck from "../../assets/logos/moteck.png";
import innerpack from "../../assets/logos/innerpack.png";

// 🌀 Import Swiper core
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// 💅 Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// 🖼️ Logos Array
const logos = [
  fluke,
  abb,
  honeywell,
  schneider,
  mitutoyo,
  rigid,
  unit,
  intes,
  tense,
  insize,
  moteck,
  innerpack,
];

export const LogoSlider = () => {
  return (
    <div className="py-6 bg-white border-t mt-[5%] border-b border-gray-200">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2 font-serif">
        Trusted Global Brands
      </h2>
      <p className="text-center text-gray-600 text-lg mb-6">
        We proudly supply premium products from <br /> world-renowned
        manufacturers.
      </p>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1, // almost no delay between slides
          disableOnInteraction: false,
        }}
        speed={4000} // very slow slide transition
        allowTouchMove={true}
        className="px-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-20">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
