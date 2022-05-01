import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { neutral, blue } from "../../Utiles/Colors";

export const Hero = styled(animated(Link))`
  font-family: "Lobster", cursive;
  grid-column: 1/2;
  justify-self: start;
  align-items: center;
  color: ${neutral[200]};
  text-decoration: none;
  font-size: 2rem;
  padding: 0px 15px;
  padding-bottom: 5px;
`;

const Logo = ({ activeThisLink }) => {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    color: hovered ? `${blue[100]}` : `${blue[300]}`,

    textShadow: `0px 0px ${hovered ? 20 : 0}px ${blue[100]}`,
  });
  return (
    <Hero
      id="logo"
      to="/"
      onClick={() => activeThisLink(0)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={props}
    >
      Today's Trends
    </Hero>
  );
};

export default Logo;
