import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-image: ${(props) => props.color};
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

const GradientButton = ({
  color = "red",
  children,
  handleClick,
  style,
  type = "button",
}) => {
  const red = `linear-gradient(to right, hsl(10, 100%, 59%) 0%, hsl(333, 73%, 50%) 51%, hsl(10, 100%, 59%) 100%
      )`;
  const blue = `linear-gradient(to right, hsl(230, 68%, 60%) 0%, hsl(260, 82%, 62%) 51%, hsl(230, 68%, 60%) 100%
    )`;
  const cyan = `linear-gradient(to right, 	hsl(205, 100%, 56%) 0%, 	hsl(189, 96%, 53%) 51%, 	hsl(205, 100%, 56%)100%
    )`;

  let bgColor;
  switch (color) {
    case "red":
      bgColor = red;
      break;
    case "blue":
      bgColor = blue;
      break;
    case "cyan":
      bgColor = cyan;
      break;
    default:
      bgColor = red;
      break;
  }

  return (
    <Button color={bgColor} onClick={handleClick} style={style} type={type}>
      {children}
    </Button>
  );
};

export default GradientButton;
