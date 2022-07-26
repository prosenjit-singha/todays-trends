import React, { useEffect, useRef } from "react";
import {
  Container,
  Pages,
  Page,
  Title,
  SubTitle,
  Button,
  Content,
  Indicator,
  Dot,
  Active,
} from "./styles";
import hero1 from "../../../../img/hero/hero-6.jpg";
import hero2 from "../../../../img/hero/hero-7.jpg";
import hero3 from "../../../../img/hero/hero-8.jpg";
import hero4 from "../../../../img/hero/hero-9.jpg";
import hero5 from "../../../../img/hero/hero-10.jpg";
import { useSpring, config, to } from "react-spring";
import { useGesture } from "@use-gesture/react";

export const DATA = [
  {
    title: "This is the title 1",
    subTitle:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    img: hero1,
  },
  {
    title: "This is the title 2",
    subTitle:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    img: hero2,
  },
  {
    title: "This is the title 3",
    subTitle:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    img: hero3,
  },
  {
    title: "This is the title 4",
    subTitle:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    img: hero4,
  },
  {
    title: "This is the title 5",
    subTitle:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    img: hero5,
  },
];

const HeroSection = () => {
  const startX = useRef(0);
  const scrollRange = useRef([0, 1]);
  const pagesRef = useRef();
  const pagesWidth = useRef(0);
  const dataLength = DATA.length;
  const [activeStyle, activeApi] = useSpring(() => ({
    left: 0,
    config: config.wobbly,
  }));
  const handleClick = (i) => {
    const scrollValue = pagesRef.current.clientWidth;
    pagesRef.current.scrollLeft = scrollValue * i;
  };
  const bind = useGesture({
    onScrollStart: () => {
      startX.current = pagesRef.current.scrollLeft;
      scrollRange.current = [0, pagesRef.current.clientWidth * dataLength - 1];
    },
    onScroll: () => {
      const scrollLeft = pagesRef.current.scrollLeft;
      const scrollMoved = pagesRef.current.scrollLeft - startX.current;
      activeApi.start({
        left: Math.floor(
          (scrollLeft * 100) / (pagesWidth.current * (dataLength - 1))
        ),
      });
    },
    onScrollEnd: () => {},
  });
  useEffect(() => {
    pagesWidth.current = pagesRef.current.clientWidth;
  }, []);
  return (
    <Container>
      <Pages {...bind()} ref={pagesRef}>
        {DATA.map((item, i) => (
          <Page style={{ backgroundImage: `url(${item.img})` }}>
            <Content>
              <Title>{item.title}</Title>
              <SubTitle> {item.subTitle} </SubTitle>
              <Button>Speak Now</Button>
            </Content>
          </Page>
        ))}
      </Pages>
      <Indicator>
        {DATA.map((item, i) => (
          <Dot onClick={() => handleClick(i)} />
        ))}
        <Active
          style={{
            left: activeStyle.left,
          }}
        />
      </Indicator>
    </Container>
  );
};

export default HeroSection;
