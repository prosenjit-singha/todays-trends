import React, { useState } from "react";
import { useSpring } from "react-spring";
import {
  HamburgerContainer,
  Hamburger as HB,
  Line,
} from "../Styles/Containers";
const Hamburger = ({ openMenu, toggleMenu }) => {
  const [menuIconHover, setMenuIconHover] = useState(false);
  const firstLine = useSpring({
    boxShadow: `0px 0px ${menuIconHover ? 5 : 0}px 0px rgba(255,255,255,0.2)`,
    transform: openMenu
      ? "rotate(45deg) translateY(0px)"
      : "rotate(0deg) translateY(-8px)",
  });
  const secondLine = useSpring({
    boxShadow: `0px 0px ${menuIconHover ? 5 : 0}px 0px rgba(255,255,255,0.2)`,
    transform: openMenu ? "scale(0)" : "scale(1)",
  });

  const thirdLine = useSpring({
    boxShadow: `0px 0px ${menuIconHover ? 5 : 0}px 0px rgba(255,255,255,0.2)`,
    transform: openMenu
      ? "rotate(-45deg) translateY(0px)"
      : "rotate(0deg) translateY(8px)",
  });

  return (
    <HamburgerContainer>
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
