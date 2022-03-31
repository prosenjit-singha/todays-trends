import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Hero } from "../Styles/Containers";
import { colors } from "../Styles/Variables";
const Logo = () => {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    color: hovered ? `${colors.red[300]}` : `${colors.blue[300]}`,
    fontSize: hovered ? `2.015rem` : `2rem`,
    textShadow: `${hovered ? 3 : 0}px ${hovered ? 3 : 0}px 1px black`,
    //backgroundColor: hovered ? "red" : "blue",
  });
  return (
    <Hero
      to="/"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={props}
    >
      Today's Trends
    </Hero>
  );
};

export default Logo;
