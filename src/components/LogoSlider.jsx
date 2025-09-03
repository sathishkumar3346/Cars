import React, { useEffect, useState } from "react";
import {brand} from "../assets/assets.js"

const LogoSlider = () => {

  return (
    <div className="w-full overflow-hidden py-6">
  
      <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
        {brand.map((brands) => (
          <div
            key={brands.id}
            className="flex-shrink-0 px-8 flex items-center"
          >
            <img
              src={brands.image}
              alt={brands.alt}
              className="h-50 w-50 object-contain "
            />

          </div>
        ))}
      </div>


      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;
