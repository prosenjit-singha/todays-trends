import React, { useState } from "react";
import { useSpring } from "react-spring";
import { Hero } from "../Styles/Containers";
import { colors } from "../Styles/Variables";
const Logo = ({ activeThisLink }) => {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    color: hovered ? `${colors.blue[100]}` : `${colors.blue[300]}`,

    textShadow: `0px 0px ${hovered ? 20 : 0}px ${colors.blue[100]}`,
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
