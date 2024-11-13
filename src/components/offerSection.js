import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

const OfferContainer = styled.div`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.blackWhite};

  h2 {
    font-size: 42px;
    font-weight: 700;
    // text-align: center;
    margin-bottom: 20px;
  }

  .offer__item {
    margin-bottom: 60px;

    h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      line-height: 1.8;
      color: ${({ theme }) => theme.colors.whiteBlack};
    }
  }

  

    img {
      width: 100%;
      // max-width: 500px;
      // margin-right: 30px;
      border-radius: 10px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    }

    .offer__gallery-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    // .offer__gallery {
    //   width: 60%;
    // }
    
    .slider__nav-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    
    .slider__nav {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    .slider__nav:hover {
      opacity: 0.6;
    }
    
    .slider__nav--left {
      margin-right: 20px;
      // background-color: ${({ theme }) => theme.colors.blackWhite};
      background-color: #0a9e0d;
      background: linear-gradient(
        269deg,#36c557 -14.78%,#182e87 110.05%);
    }
    
    .slider__nav--right {
      margin-left: 20px;
      // background-color: ${({ theme }) => theme.colors.blackWhite};
      background-color: #0a9e0d;
      background: linear-gradient(
        90deg,#36c557 -14.78%,#182e87 110.05%);
    }
    

  @media (max-width: 768px) {
    .offer__item {
      text-align: center;
    }

    .slider__nav-container {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
    }
    padding: 60px 0;
  }
`;


function Offer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: '',
      alt: '',
      text: ''
    },
    {
      src: '',
      alt: '',
      text: ''
    },
    {
      src: '',
      alt: '',
      text: ''
    },
    {
      src: '',
      alt: '',
      text: ''
    },

  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <OfferContainer>
      <Container>
        <Row>
        <Col md={6}>
          <div className="offer__item">
            <h2>Visio Wall</h2>
            <h3>{images[activeIndex].alt}</h3>
            <p>{images[activeIndex].text}</p>
          </div>
          <div className="offer__gallery-container">
            <div className="slider__nav-container">
              <div className="slider__nav slider__nav--left" onClick={handlePrev}>
                <FaChevronLeft />
              </div>
              <div className="slider__nav slider__nav--right" onClick={handleNext}>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </Col>
          <Col md={6}>
          <img src={images[activeIndex].src} alt={images[activeIndex].alt} text={images[activeIndex].text} />

          
          </Col>
        </Row>
      </Container>
    </OfferContainer>
  );
}
    
export default Offer;
