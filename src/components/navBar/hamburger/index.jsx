import React from "react";
import { config, useSpring } from "react-spring";
import ThemeSwitch from "../theme-switch";
import { HamburgerContainer, Hamburger as HB, Line } from "./style";
const Hamburger = ({ openMenu, toggleMenu, darkMode, setDarkMode }) => {
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
      <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      <HB onClick={() => toggleMenu(!openMenu)}>
        <Line style={firstLine} />
        <Line style={secondLine} />
        <Line style={thirdLine} />
      </HB>
    </HamburgerContainer>
  );
};

export default React.memo(Hamburger);
