import { useSpring, useSprings } from "react-spring";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { menuItems as mi } from "./MenuItems";

import {
  Nav,
  MenuWrapper,
  MenuList,
  MenuListItem,
  MenuLink,
} from "../Styles/Containers";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const NavBar = () => {
  const menuRefs = useRef([]);
  const { pathname } = useLocation();
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [openMenu, toggleMenu] = useState(false);
  const smDevice = useBreakpoint(790);

  //styling-start
  const menuStyles = useSpring({
    maxHeight: openMenu ? menuHeight : 0,
  });

  const [menuItems, setMenuItems] = useSprings(mi.length, (index) => ({
    ...mi[index],
    textShadow:
      mi[index].path === pathname
        ? mi[index].textShadowTo
        : mi[index].textShadowFrom,
    config: {
      duration: 100,
    },
  }));
  const applyLinkStyle = (i) => {
    setMenuItems.start((index) => {
      if (index === i)
        return {
          ...mi[index],
          textShadow: mi[index].textShadowTo,
          color: "white",
        };
      else return { ...mi[index], textShadow: mi[index].textShadowFrom };
    });
  };
  const activeThisLink = (i) => {
    toggleMenu(!openMenu);
    applyLinkStyle(i);
  };
  //styling-end
  useEffect(() => {
    let i = 0;
    if (pathname === "/") i = 0;
    else if (pathname === "/command-list") i = 1;
    else if (pathname === "/about") i = 2;
    applyLinkStyle(i);
  }, [pathname]);
  return (
    <Nav>
      <Logo activeThisLink={activeThisLink} />
      {smDevice && <Hamburger openMenu={openMenu} toggleMenu={toggleMenu} />}
      <MenuWrapper style={smDevice ? menuStyles : { maxHeight: "3.2rem" }}>
        <MenuList {...menuRef}>
          {menuItems.map(({ id, name, path, color, textShadow }, i) => (
            <MenuListItem key={i}>
              <MenuLink
                ref={(r) => (menuRefs.current[i] = r)}
                id={id}
                style={{ color, textShadow }}
                to={path}
                onClick={() => activeThisLink(i)}
              >
                {name}
              </MenuLink>
            </MenuListItem>
          ))}
          {!smDevice && <ThemeSwitch />}
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
