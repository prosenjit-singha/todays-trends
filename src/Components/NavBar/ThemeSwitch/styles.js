import styled from "styled-components";
import { animated } from "react-spring";
import { red } from "../../../Utiles/Colors";

export const Container = styled.div`
  height: auto;
  width: auto;
  padding: 5px;
  border-radius: 50%;
  background-color: ${red[400]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(animated.div)`
  height: auto;
  //filter: drop-shadow(0 0 5px white);
`;
