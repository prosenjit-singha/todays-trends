import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: max(80vh, 680px);
  overflow: hidden;
  background-color: hsla(170, 5%, 10%, 1);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
`;

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const intervalTime = 10000;
  //   styles

  const itemStyle = {
    height: "100%",
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image
            src="https://source.unsplash.com/random/300×200/?entertainment"
            alt="First slide"
          />
        </ImageContainer>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image
            src="https://source.unsplash.com/random/300×200/?entertainment"
            alt="First slide"
          />
        </ImageContainer>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image
            src="https://source.unsplash.com/random/300×200/?entertainment"
            alt="First slide"
          />
        </ImageContainer>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
