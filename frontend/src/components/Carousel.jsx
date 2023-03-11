import React, { useState, useEffect } from 'react';
// import './Carousel.css';
import Image1 from "../assets/grover.jsx";
import Image2 from "../assets/sig.jsx";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const slides = [
    <Image1/>,
    <Image2/>,
    <Image1/>,
    <Image1/>,
    <Image1/>,
    <Image1/>,
    <Image1/>,
    <Image1/>,
    <Image1/>,
    <Image2/>,
    <Image2/>,
    <Image2/>,
    <Image2/>,
  ]

  const goToNextSlide = () => {
    console.log(currentIndex);
    if (currentIndex === slides.length - 3) {
      setCurrentIndex(0);
      setTranslateValue(0);
      console.log(1);
    } else {
      setCurrentIndex(c => c + 1);
      setTranslateValue(t => t - slideWidth(t));
      console.log(2);
    }
  };

  const slideWidth = (t) => {
    return document.querySelector('.slide').clientWidth;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
      // setTranslateValue(t => t - slideWidth());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s',
          display: 'flex',
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
