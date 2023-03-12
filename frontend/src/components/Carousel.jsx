import React from 'react';
// import './Carousel.css';
import Image3 from "../assets/grover.jsx";
import Image9 from "../assets/sig.jsx";
import Image1 from "../assets/andor.jsx";
import Image4 from "../assets/baemin.jsx";
import Image5 from "../assets/breville";
import Image6 from "../assets/casa";
import Image2 from "../assets/seat";
import Image7 from "../assets/tier";
import Image8 from "../assets/tui";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [translateValue, setTranslateValue] = React.useState(0);
  const slides = [
    <Image1/>,
    <Image2/>,
    <Image3/>,
    <Image4/>,
    <Image5/>,
    <Image6/>,
    <Image7/>,
    <Image8/>,
    <Image9/>,
    <Image1/>,
    <Image2/>,
    <Image3/>,
    <Image4/>,
    <Image5/>,
    <Image6/>,
    <Image7/>,
    <Image8/>,
    <Image9/>,
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-4/5 mx-auto">
      <div
        className="carousel-wrapper w-4/5 mx-auto"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 3.0s',
          display: 'flex',
          backgroundRepeat: 'round',
          transformStyle: 'preserve-3d',
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
