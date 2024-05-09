import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  // Array of slide objects with image URLs
  const slides = [
    {
      url: "https://static.vecteezy.com/system/resources/previews/003/783/115/original/special-offer-sale-banner-promotion-offer-free-vector.jpg",
    },
    {
      url: "https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg",
    },
    {
      url: "https://img.freepik.com/premium-vector/special-offer-black-friday-banner-template_488814-112.jpg",
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/003/692/287/non_2x/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg",
    },
    {
      url: "https://marketplace.canva.com/EAFTmJ1S4C8/1/0/1600w/canva-black-and-yellow-simple-modern-special-offer-sale-banner-tmQkZmI1a7Q.jpg",
    },
  ];

  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Effect to automatically transition to next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run the effect whenever currentIndex changes

  return (
    <div className="max-w-[1000] h-[580px] w-full m-auto relative group">
      {/* Display current slide */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dot indicators for each slide */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
