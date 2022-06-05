import React from "react";
import { Container } from "../../styles/containers";
import {
  neutral,
  red,
  blue,
  yellow,
  cyan,
  green,
  lightGreen,
  magenta,
  orange,
} from "../../utils/colors";
import styled from "styled-components";

const Box = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  grid-template-rows: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Color = styled.div`
  //width: 3rem;
  //height: 3rem;
  background-color: ${(props) => props.background};
  color: black;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const ColorBox = ({ color }) => {
  const colors = Object.values(color);
  return (
    <Box>
      {colors.map((background, i) => (
        <Color key={i} background={background}>
          {background}
        </Color>
      ))}
    </Box>
  );
};
const Colors = () => {
  return (
    <Container>
      <Title>neutral</Title>
      <ColorBox color={neutral} />
      <Title>red</Title>
      <ColorBox color={red} />
      <Title>blue</Title>
      <ColorBox color={blue} />
      <Title>cyan</Title>
      <ColorBox color={cyan} />
      <Title>yellow</Title>
      <ColorBox color={yellow} />
      <Title>lightGreen</Title>
      <ColorBox color={lightGreen} />
      <Title>green</Title>
      <ColorBox color={green} />
      <Title>magenta</Title>
      <ColorBox color={magenta} />
      <Title>orange</Title>
      <ColorBox color={orange} />
    </Container>
  );
};

export default Colors;
