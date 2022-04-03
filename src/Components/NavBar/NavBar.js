import { useSpring, useSprings } from "react-spring";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { colors } from "../Styles/Variables";
import { menuItems as mi } from "./MenuItems";

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

  const [menuItems, setMenuItems] = useSprings(mi.length, (index) => ({
    ...mi[index],
    textShadow:
      mi[index].path === pathname
        ? mi[index].textShadowTo
        : mi[index].textShadowFrom,
    config: {
      duration: 200,
    },
  }));

  const activeThisLink = (i) => {
    //let style = {};
    toggleMenu(!openMenu);
    setMenuItems.start((index) => {
      if (index === i)
        return { ...mi[index], textShadow: mi[index].textShadowTo };
      else return { ...mi[index], textShadow: mi[index].textShadowFrom };
    });
  };
  const print = (isActive) => {
    console.log(isActive ? "true" : "false");
  };
  //styling-end
  const menu = useRef();

  return (
    <Nav>
      <Logo />
      {smDevice && <Hamburger openMenu={openMenu} toggleMenu={toggleMenu} />}
      <MenuWrapper style={smDevice ? menuStyles : { maxHeight: "3.2rem" }}>
        <MenuList {...menuRef}>
          {!smDevice && <ActiveLinkEffect style={activeMenuStyle} />}
          {menuItems.map(({ name, path, color, textShadow }, i) => (
            <MenuListItem key={i}>
              <MenuLink
                {...menu}
                id={name}
                style={{ color, textShadow }}
                to={path}
                onClick={() => activeThisLink(i)}
              >
                {name}
              </MenuLink>
            </MenuListItem>
          ))}
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
