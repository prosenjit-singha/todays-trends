import { useSpring } from "react-spring";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

import {
  ActiveLinkEffect,
  Nav,
  MenuWrapper,
  MenuList,
  MenuListItem,
  MenuLink,
} from "../Styles/Containers";

const NavBar = () => {
  const { pathname } = useLocation();
  const homeRef = useRef();
  function calTrans() {
    if (pathname === "/" || pathname === "/home")
      return { scl: 1, trans: -289 };
    if (pathname === "/command-list") return { scl: 1.9, trans: -147 };
    if (pathname === "/about") return { scl: 1, trans: -1 };
  }
  const activeMenuStyle = useSpring({
    transform: `translateX(${calTrans().trans}%) scaleX(${calTrans().scl})`,
    config: {
      mass: 0.8,
      tension: 140,
      friction: 10,
    },
  });
  const cmdListRef = useRef();
  const aboutRef = useRef();
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [openMenu, toggleMenu] = useState(false);
  const smDevice = useBreakpoint(790);
  const [activeNav, setActiveNav] = useState({
    home: true,
    commandList: false,
    about: false,
  });

  function handleActiveNav(slug) {
    if (slug === "home")
      setActiveNav({
        home: true,
        commandList: false,
        about: false,
      });
    if (slug === "commandList")
      setActiveNav({
        home: false,
        commandList: true,
        about: false,
      });
    if (slug === "about")
      setActiveNav({
        home: false,
        commandList: false,
        about: true,
      });
  }
  //styling-start
  const menuStyles = useSpring({
    maxHeight: openMenu ? menuHeight : 0,
  });
  //styling-end

  return (
    <Nav>
      <Logo />
      {smDevice && <Hamburger openMenu={openMenu} toggleMenu={toggleMenu} />}
      <MenuWrapper style={smDevice ? menuStyles : { maxHeight: "3.2rem" }}>
        <MenuList {...menuRef}>
          {!smDevice && <ActiveLinkEffect style={activeMenuStyle} />}
          <MenuListItem>
            <MenuLink to="/" onClick={() => toggleMenu(!openMenu)}>
              Home
            </MenuLink>
          </MenuListItem>

          <MenuListItem>
            <MenuLink to="/command-list" onClick={() => toggleMenu(!openMenu)}>
              Command List
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about" onClick={() => toggleMenu(!openMenu)}>
              About
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
