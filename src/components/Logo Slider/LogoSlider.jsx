 import React from "react";

const logos = [
  "/logos/fluke.png",
  "/logos/abb.png",
  "/logos/honeywell.png",
  "/logos/schneider.png",
  "/logos/mitutoyo.png",
  "/logos/rigid.png",
  "/logos/unit.png",
  "/logos/intes.png",
  "/logos/tense.png",
  "/logos/insize.png",
  "/logos/moteck.png",
  "/logos/innerpack.png",
];

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
