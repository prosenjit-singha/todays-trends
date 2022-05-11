import React, { useEffect } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { red } from "../../utils/colors";
import { device } from "../../utils/device";
import { boxShadow } from "../../utils/functions";

const convertInRem = (value) => {
  return `${value}rem`;
};

const Container = styled(animated.button)`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: ${(props) => convertInRem(props.fontSize)};
  letter-spacing: 1px;
  color: white;
  width: ${(props) =>
    props.width ? convertInRem(props.width) : "fit-content"};
  height: fit-content;
  margin: 0.5rem;
  padding: 0.25em 0.5em;
  background-color: ${(props) => (props.active ? red[500] : red[400])};
  border: 2px solid ${red[400]};
  border-radius: ${(props) => convertInRem(props.border_radius)};
  box-shadow: ${boxShadow.default()};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  &:active {
    background-color: ${red[500]};
  }
  &:hover {
    color: white;
  }
  @media ${device.tabletM} {
    color: ${(props) => (props.active ? "white" : red[400])};
    background-color: ${(props) => props.theme.forground};
    transition: color 400ms ease;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: ${(props) => (props.active ? "100%" : 0)};
      top: 0;
      left: 0;
      background-color: ${red[400]};
      z-index: 0;
      transition: width 400ms ease;
    }
    &::after {
      content: attr(text);
      position: absolute;
      transition: width 400ms ease;
    }
    &:hover:before {
      width: 100%;
    }
    &:hover {
      color: white;
    }
  }
`;

const Button = ({
  active,
  fontSize = 1,
  borderRadius = 0.5,
  children,
  width,
  handleClick,
}) => {
  useEffect(() => {}, []);
  return (
    <Container
      active={active}
      border_radius={borderRadius}
      width={width}
      text={children}
      fontSize={fontSize}
      onClick={() => handleClick(children)}
    >
      {children}
    </Container>
  );
};

export default Button;
