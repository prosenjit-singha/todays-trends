import styled from "styled-components";
import { animated } from "react-spring";
import { margin } from "../../../../styles/global-constants";

//wrapper
export const Container = styled.div`
  user-select: none;
  width: 100%;
  height: fit-content;
  //background: blue;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
export const Pages = styled(animated.div)`
  position: relative;
  width: 100%;
  height: max(75vh, 500px);
  overflow: hidden;
`;
export const Page = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  touch-action: none;
`;

export const Image = styled(animated.div)`
  position: relative;
  touch-action: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
`;
export const Dots = styled.div`
  position: relative;
  top: -40px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Dot = styled(animated.div)`
  width: 10px;
  height: 10px;
  margin-inline: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Content = styled(animated.div)`
  position: absolute;
  bottom: 10%;
  left: 2rem;
`;
export const Title = styled.h1`
  margin-top: 0.5rem;
  text-transform: capitalize;
`;
export const Category = styled.h4`
  display: inline-block;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accent};
`;
export const Info = styled.div`
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;
  margin-bottom: 1rem;
`;
export const Admin = styled.span`
  color: ${(props) => props.theme.text};
`;
