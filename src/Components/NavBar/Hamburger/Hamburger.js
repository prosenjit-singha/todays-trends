import React, { useState } from "react";
import { config, useSpring } from "react-spring";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { HamburgerContainer, Hamburger as HB, Line } from "./Style";
const Hamburger = ({ openMenu, toggleMenu }) => {
  const [menuIconHover, setMenuIconHover] = useState(false);
  const firstLine = useSpring({
    transform: openMenu
      ? "rotate(45deg) translateY(0px)"
      : "rotate(0deg) translateY(-8px)",
    config: config.wobbly,
  });
  const secondLine = useSpring({
    transform: openMenu ? "scale(0)" : "scale(1)",
  });

  const thirdLine = useSpring({
    transform: openMenu
      ? "rotate(-45deg) translateY(0px)"
      : "rotate(0deg) translateY(8px)",
    config: config.wobbly,
  });

  return (
    <HamburgerContainer>
      <ThemeSwitch />
      <HB
        onClick={() => toggleMenu(!openMenu)}
        onMouseEnter={() => setMenuIconHover(true)}
        onMouseLeave={() => setMenuIconHover(false)}
      >
        <Line style={firstLine} />
        <Line style={secondLine} />
        <Line style={thirdLine} />
      </HB>
    </HamburgerContainer>
  );
};

export default Hamburger;
