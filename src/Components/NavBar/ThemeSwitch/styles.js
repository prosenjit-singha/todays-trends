import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  height: auto;
  width: auto;
  //outline: 1px solid red;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(animated.div)`
  height: auto;
  filter: drop-shadow(0 0 5px white);
`;
