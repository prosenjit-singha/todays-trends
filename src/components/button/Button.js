import React, { useEffect } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { red, neutral } from "../../utils/colors";
import { device } from "../../utils/device";
import { boxShadow } from "../../utils/functions";

const convertInRem = (value) => {
  return `${value}rem`;
};

const Container = styled(animated.button)`
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
  font-size: ${(props) => convertInRem(props.fontSize)};
  letter-spacing: 1px;
  color: ${(props) => (props.disabled ? neutral[800] : neutral[100])};
  width: ${(props) =>
    props.width ? convertInRem(props.width) : "fit-content"};
  height: fit-content;
  margin: 0.5rem;
  padding: 0.25em 0.5em;
  background-color: ${(props) =>
    props.isactive === "true"
      ? red[500]
      : props.disabled
      ? neutral[900]
      : red[400]};
  border: 2px solid
    ${(props) => (props.disabled ? props.theme.forgroundShadow : red[400])};
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
    color: ${(props) => (props.disabled ? neutral[800] : neutral[100])};
  }
  @media ${device.tabletM} {
    color: ${(props) =>
      props.isactive === "true"
        ? "white"
        : props.disabled
        ? props.theme.forgroundShadow
        : red[400]};
    background-color: ${(props) => props.theme.forground};
    transition: color 400ms ease;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: ${(props) =>
        props.isactive === "true" ? "100%" : props.disabled ? "100%" : "0%"};
      top: 0;
      left: 0;
      border-radius: ${(props) => convertInRem(props.border_radius - 0.2)};
      background-color: ${(props) =>
        props.disabled ? props.theme.background : red[400]};
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
      color: ${(props) =>
        props.disabled ? props.theme.forgroundShadow : "white"};
    }
  }
`;

const Button = ({
  isactive,
  fontSize = 1,
  borderRadius = 0.5,
  children,
  disabled = false,
  width,
  handleClick,
}) => {
  useEffect(() => {}, []);
  return (
    <Container
      isactive={isactive ? "true" : "false"}
      border_radius={borderRadius}
      width={width}
      text={children}
      fontSize={fontSize}
      disabled={disabled}
      onClick={() => handleClick(children)}
    >
      {children}
    </Container>
  );
};

export default Button;
