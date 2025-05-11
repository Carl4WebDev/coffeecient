import React, { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import ParticleEffect from "../ParticleEffect/ParticleEffect";

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance required
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Determine which products to display based on currentIndex
  const visibleProducts = [];
  for (let i = 0; i < Math.min(3, products.length); i++) {
    const index = (currentIndex + i) % products.length;
    visibleProducts.push(products[index]);
  }

  return (
    <div className="relative mb-4">
      <div
        ref={carouselRef}
        className="relative overflow-hidden w-full md:p-10  "
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex transition-transform duration-300 ease-in-out">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 px-4 flex-shrink-0"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#a26d3c]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Navigation arrows */}
      <ParticleEffect options={{ particleCount: 10, size: 10 }}>
        <button
          onClick={prevSlide}
          className=" absolute -translate-x-9 md:-translate-x-0 left-4 top-1/2 -translate-y-1/2 bg-btn-login text-white p-2 rounded-full shadow-md hover:bg-[#332110] transition-colors"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </ParticleEffect>
      <ParticleEffect options={{ particleCount: 10, size: 10 }}>
        <button
          onClick={nextSlide}
          className="absolute  translate-x-9 md:translate-x-0 right-4 top-1/2  -translate-y-1/2 bg-btn-login text-white p-2 rounded-full shadow-md hover:bg-[#332110] transition-colors"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </ParticleEffect>
    </div>
  );
};

export default ProductCarousel;
