import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageContainer, Image, Title, Subtitle, Caption } from "./styles";

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
            src="https://source.unsplash.com/random/300×200/?reliable"
            alt="First slide"
          />
        </ImageContainer>
        <Caption>
          <Title>Reliablity</Title>
          <Subtitle>
            Original Reporting and Analysis Directly From Your Reliable Sources.
          </Subtitle>
        </Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image
            src="https://source.unsplash.com/random/300×200/?trust"
            alt="First slide"
          />
        </ImageContainer>
        <Caption>
          <Title>Trust</Title>
          <Subtitle>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Subtitle>
        </Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image
            src="https://source.unsplash.com/random/300×200/?technology"
            alt="First slide"
          />
        </ImageContainer>
        <Caption>
          <Title>Functionality</Title>
          <Subtitle>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Subtitle>
        </Caption>
      </Carousel.Item>
    </Carousel>
  );
}
