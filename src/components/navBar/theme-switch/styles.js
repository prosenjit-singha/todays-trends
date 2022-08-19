import styled from "styled-components";
import { animated } from "react-spring";
import { redG } from "../../../utils/gradient-colors";
import { device } from "../../../utils/device";

export const Container = styled.div`
  height: fit-content;
  margin-left: 2rem;
  margin-bottom: 1rem;
  width: fit-content;
  padding: 5px;
  border-radius: 50%;
  background-image: ${redG};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const Image = styled(animated.div)`
  display: flex;
`;
