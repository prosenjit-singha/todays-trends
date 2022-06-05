//Hamburger Styles
import styled from "styled-components";
import { animated } from "react-spring";
import { red } from "../../../utils/colors";

export const HamburgerContainer = styled.div`
  grid-column: 2/-1;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 2rem;
`;

export const Line = styled(animated.span)`
  /* will-change: background-color; */
  position: absolute;
  display: block;
  height: 0.25rem;
  width: 100%;
  left: 0;
  background-color: ${red[400]};
  border-radius: 5px;
  transition: background-color 500ms ease;
  &:nth-child(1) {
    /* background-color: red; */
  }

  &:nth-child(2) {
    /* background-color: green; */
  }
  &:nth-child(3) {
    /* background-color: blue; */
  }
`;
export const Hamburger = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
  margin-left: 1rem;
  cursor: pointer;
  &:hover ${Line} {
    background-color: ${red[500]};
  }
`;
