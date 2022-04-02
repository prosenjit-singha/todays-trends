import { useSpring } from "react-spring";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { colors } from "../Styles/Variables";

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
  function calTrans() {
    if (pathname === "/" || pathname === "/home")
      return { scl: 1, trans: -422, bgColor: colors.green[200] };
    if (pathname === "/command-list")
      return { scl: 1.9, trans: -225, bgColor: colors.blue[200] };
    if (pathname === "/about")
      return { scl: 1, trans: -21, bgColor: colors.yellow[200] };
  }
  const [isLinkActive, setLinkActive] = useState(false);
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [openMenu, toggleMenu] = useState(false);
  const smDevice = useBreakpoint(790);
  const [activeNav, setActiveNav] = useState({});

  function handleActiveNav(slug) {
    toggleMenu(!openMenu);
    //setLinkActive(!isLinkActive);
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
  const activeMenuStyle = useSpring({
    backgroundColor: `${calTrans().bgColor}`,
    transform: `translateX(${calTrans().trans}%) scaleX(${calTrans().scl})`,
    config: {
      mass: 0.8,
      tension: 140,
      friction: 10,
    },
  });
  const homeStyle = useSpring({
    color: `${activeNav.home ? "white" : colors.green[200]}`,
    textShadow: `0px 0px ${activeNav.home ? "10" : "0"}px ${colors.green[100]}`,
  });
  const cmdStyle = useSpring({
    color: `${activeNav.commandList ? "white" : colors.blue[200]}`,
    textShadow: `0px 0px ${activeNav.commandList ? "10" : "0"}px ${
      colors.blue[100]
    }`,
    //backgroundColor: activeNav.commandList ? "red" : "blue",
  });
  const aboutStyle = useSpring({
    color: `${activeNav.about ? "white" : colors.yellow[200]}`,
    textShadow: `0px 0px ${activeNav.about ? "10" : "0"}px ${
      colors.yellow[100]
    }`,
    //backgroundColor: activeNav.about ? "red" : "blue",
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
            <MenuLink
              style={homeStyle}
              color={colors.green[200]}
              to="/"
              onClick={() => handleActiveNav("home")}
            >
              Home
            </MenuLink>
          </MenuListItem>

          <MenuListItem>
            <MenuLink
              style={cmdStyle}
              color={colors.blue[200]}
              to="/command-list"
              onClick={() => handleActiveNav("commandList")}
            >
              Command List
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink
              style={aboutStyle}
              color={colors.yellow[200]}
              to="/about"
              onClick={() => handleActiveNav("about")}
            >
              About
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
