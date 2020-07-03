import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";

const image = [
  {
    id: 1,
    url:
      "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fd450aa4a-f78c-4ab2-bf13-cad493ad8eba%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
  },
  {
    id: 2,
    url:
      "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F7d96d9aa-1a4f-45e3-9545-9694b8e2eb20%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
  },
  {
    id: 3,
    url:
      "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F520348b1-e06d-4ce8-b23f-d7a507a9e2c2%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
  },
];

const Container = styled.div`
  width: 60%;
  overflow: hidden;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TOTAL_SLIDES = 2;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={image[0].url} />
        <Slide img={image[1].url} />
        <Slide img={image[2].url} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
};

export default Slider;
