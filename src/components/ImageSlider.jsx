import React, { useEffect, useState, useRef } from "react";
import {sliderImages} from "../assets/assets.js";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = sliderImages.length;

  const goToSlide = (index) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    setCurrentSlide(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Update slide position when currentSlide changes
  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center">
      {/* Slider Container */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          {sliderImages.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Dots / Indicators */}
      <div className="flex items-center mt-5 space-x-2">
        {sliderImages.map((item, index) => (
          <span
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-black" : "bg-black/20"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
