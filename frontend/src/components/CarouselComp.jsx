import React, { useState, useEffect } from 'react';
import Image1 from '../assets/hero.jpg';
import Image2 from '../assets/hero.jpg';
import Image3 from '../assets/hero.jpg';
import Image4 from '../assets/hero.jpg';

const images = [Image1, Image2, Image3, Image4];

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