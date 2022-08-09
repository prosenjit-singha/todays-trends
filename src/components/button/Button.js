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
  font-weight: 600;
  font-family: Inter;
  text-transform: capitalize;
  font-size: ${(props) => convertInRem(props.fontSize)};
  letter-spacing: 1px;
  color: ${(props) => (props.disabled ? neutral[800] : neutral[100])};
  width: ${(props) =>
    props.width ? convertInRem(props.width) : "fit-content"};
  height: fit-content;
  margin-block: 0.5rem;
  padding: 0.25em 0.5em;
  background-color: ${(props) =>
    props.isactive === "true"
      ? props.theme.accent
      : props.disabled
      ? neutral[900]
      : props.theme.accent};
  border: 2px solid
    ${(props) =>
      props.disabled ? props.theme.forgroundShadow : props.theme.accent};
  border-radius: ${(props) => convertInRem(props.border_radius)};
  // box-shadow: ${(props) => (props.disabled ? "none" : boxShadow.default())};
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
  @media ${device.laptop} {
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
        props.disabled ? props.theme.background : props.theme.accent};
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
  margin,
  handleClick,
  styles,
}) => {
  useEffect(() => {}, []);
  return (
    <Container
      style={styles}
      isactive={isactive ? "true" : "false"}
      border_radius={borderRadius}
      width={width}
      text={children}
      fontSize={fontSize}
      disabled={disabled}
      onClick={() => handleClick(children)}
      margin={margin}
    >
      {children}
    </Container>
  );
};

export default Button;
