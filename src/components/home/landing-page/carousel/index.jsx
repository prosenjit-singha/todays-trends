import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ImageContainer, Image, Title, Subtitle, Caption } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
// importing images
import picture1 from "../../../../img/hero/hero-5.jpg";
import picture2 from "../../../../img/hero/hero-8.jpg";
import picture3 from "../../../../img/hero/hero-10.jpg";

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
          <Image src={picture1} alt="First slide" />
        </ImageContainer>
        <Caption>
          <Title>Reliablity</Title>
          <Subtitle>
            Original Reporting and Analysis Directly from Your Reliable Sources.
          </Subtitle>
        </Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image src={picture2} alt="First slide" />
        </ImageContainer>
        <Caption>
          <Title>Raise Your Voice</Title>
          <Subtitle>Use Your Voice to Roam Around the World.</Subtitle>
        </Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime} style={itemStyle}>
        <ImageContainer>
          <Image src={picture3} alt="First slide" />
        </ImageContainer>
        <Caption>
          <Title>Uniqueness</Title>
          <Subtitle>Have a New Experience with a News Website.</Subtitle>
        </Caption>
      </Carousel.Item>
    </Carousel>
  );
}
