import React, { useState, useEffect } from 'react';
import Image1 from '../assets/andor.jsx';
import Image2 from '../assets/baemin.jsx';
import Image3 from '../assets/breville.jsx';
import Image4 from '../assets/casa.jsx';
import Image5 from '../assets/grover.jsx';
import Image6 from '../assets/seat.jsx';
import Image7 from '../assets/sig.jsx';
import Image8 from '../assets/tier.jsx';
import Image9 from '../assets/tui.jsx';

const images = [ Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

const CarouselComp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselComp;