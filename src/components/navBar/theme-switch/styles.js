import styled from "styled-components";
import { animated } from "react-spring";
import { redG } from "../../../utils/gradient-colors";

export const Container = styled.div`
  height: auto;
  width: auto;
  padding: 5px;
  border-radius: 50%;
  background-image: ${redG};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(animated.div)`
  display: flex;
`;
