 import React from "react";
import fluke from '../../assets/logos/fluke.png';
import abb from '../../assets/logos/abb.png';
import honeywell from '../../assets/logos/honeywell.png';
import schneider from '../../assets/logos/schneider.png';
import mitutoyo from '../../assets/logos/mitutoyo.png';
import rigid from '../../assets/logos/rigid.png';
import unit from '../../assets/logos/unit.png';
import intes from '../../assets/logos/intes.png';
import tense from '../../assets/logos/tense.png';
import insize from '../../assets/logos/insize.png';
import moteck from '../../assets/logos/moteck.png';
import innerpack from '../../assets/logos/innerpack.png';

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

export default logos;

 

export const LogoSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-6 bg-white border-t mt-[5%] border-b border-gray-200">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2 font-serif">
  Trusted Global Brands
</h2>
<p className="text-center text-gray-600 text-lg mb-6">
  We proudly supply premium products from <br /> world-renowned manufacturers.
</p>

      <div
        className="flex gap-16"
        style={{
          animation: "scroll 30s linear infinite",
          minWidth: "200%",
        }}
      >
        {logos.concat(logos).map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Brand Logo"
            className="h-16 w-auto inline-block  mt-6 mb-6  transition duration-300"
          />
        ))}
      </div>

      {/* 🎯 Inline animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};
