import styled from "styled-components";
import { animated } from "react-spring";
import { margin } from "../../../../styles/global-constants";

// (pointer: coarse)

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: max(500px, 70vh);
  user-select: none;
`;
export const Pages = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (pointer: coarse) {
  }
`;
export const Page = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: ${margin};
  scroll-snap-align: start;
  @media (pointer: coarse) {
  }
`;

export const Content = styled.div``;
export const Title = styled.h1`
  font-size: 3rem;
  color: white;
`;
export const SubTitle = styled.div`
  color: white;
  font-size: 1.4rem;
`;
//Call to action button
export const Button = styled.button`
  color: white;
  font-weight: 700;
  background-color: ${(props) => props.theme.accent};
  font-size: 1.5rem;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.2em;
  margin-block: 1rem;
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
`;
export const Dot = styled(animated.div)`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};
  &:not(:last-child) {
    //margin-right: 10px;
  }
`;
export const Active = styled(animated.div)`
  height: 10px;
  width: 20px;
  left: 0;
  transform: translateX(50%);
  border-radius: 5px;
  background-color: beige;
  position: absolute;
`;
