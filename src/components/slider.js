import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sliderImage1 from '../images/slider1/barber.png';  
import sliderImage2 from '../images/slider1/uczelnia2.png';  
import sliderImage3 from '../images/slider1/muzeum.png'; 
import sliderImage4 from '../images/slider1/pizzeria.png';  
import sliderImage5 from '../images/slider1/pokoj.png'; 
import sliderImage6 from '../images/slider1/salon_kosmetyczny.png';  
import sliderImage7 from '../images/slider1/muzeum2.png'; 
import sliderImage8 from '../images/slider1/szkoła.png'; 
import sliderImage9 from '../images/slider1/uczelnia.png'; 
import sliderImage10 from '../images/slider1/inspiracja.png'; 

const SliderWrapper = styled.div`
  width: 100%;
  height: 60vh; /* Wysokość slidera, zmień w zależności od potrzeb */
  position: relative;
  overflow: hidden;
  margin-bottom: 3.5rem;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 1s ease-in-out;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'white' : 'gray')};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7, sliderImage8, sliderImage9, sliderImage10];  // Tablica ze zdjęciami

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
    }, 3000); // Zmiana co 3 sekundy

    return () => clearInterval(intervalId);  // Oczyść interval po odmontowaniu komponentu
  }, []);

  return (
    <SliderWrapper>
      <Slide bgImage={images[currentSlide]} />
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}  // Kliknięcie na kropkę zmienia slajd
          />
        ))}
      </DotContainer>
    </SliderWrapper>
  );
};

export default Slider;
