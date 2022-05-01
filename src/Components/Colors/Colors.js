import React from "react";
import { Container } from "../Styles/Containers";
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
} from "../../Utiles/Colors";
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
      <ColorBox color={neutral} />
      <ColorBox color={red} />
      <ColorBox color={blue} />
      <ColorBox color={cyan} />
      <ColorBox color={yellow} />
      <ColorBox color={lightGreen} />
      <ColorBox color={green} />
      <ColorBox color={magenta} />
      <ColorBox color={orange} />
    </Container>
  );
};

export default Colors;
