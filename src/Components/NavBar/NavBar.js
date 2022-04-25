import { to, useSpring, useSprings } from "react-spring";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { menuItems as mi } from "./MenuItems";
import { useSelector } from "react-redux";

import {
  Nav,
  MenuWrapper,
  MenuList,
  MenuListItem,
  MenuLink,
} from "../Styles/Containers";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const getBoxShadow = {
  highlight: "rgba(255,255,255,0.4)",
  shadow: "rgba(0,0,0,0.4)",
  from(highlight, shadow) {
    return `4px 4px 5px 0px ${this.shadow},
    -4px -4px 5px 0px ${this.highlight},
    inset 0px 0px 0px 0px ${this.shadow},
    inset 0px 0px 0px 0px ${this.highlight}`;
  },
  to(highlight, shadow) {
    return `0px 0px 0px 0px ${this.shadow},
    0px 0px 0px 0px ${this.highlight},
    inset 4px 4px 5px 0px ${this.shadow},
    inset -4px -4px 5px 0px ${this.highlight}`;
  },
};
const NavBar = () => {
  const themeStyle = useSelector((state) => state.theme);
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
    boxShadow:
      mi[index].path === pathname
        ? getBoxShadow.to(
            themeStyle.forgroundHighlight,
            themeStyle.forgroundShadow
          )
        : getBoxShadow.from(
            themeStyle.forgroundHighlight,
            themeStyle.forgroundShadow
          ),
    textShadow:
      mi[index].path === pathname
        ? mi[index].textShadowTo
        : mi[index].textShadowFrom,
    config: {
      duration: 100,
    },
  }));
  const applyLinkStyle = useCallback(
    (i) => {
      setMenuItems.start((index) => {
        if (index === i)
          return {
            ...mi[index],
            textShadow: mi[index].textShadowTo,
            color: "white",
            boxShadow: getBoxShadow.to(
              themeStyle.forgroundHighlight,
              themeStyle.forgroundShadow
            ),
          };
        else
          return {
            ...mi[index],
            textShadow: mi[index].textShadowFrom,
            boxShadow: getBoxShadow.from(
              themeStyle.forgroundHighlight,
              themeStyle.forgroundShadow
            ),
          };
      });
    },
    [setMenuItems]
  );
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
  }, [pathname, applyLinkStyle, localStorage.getItem("theme")]);
  return (
    <Nav>
      <Logo activeThisLink={activeThisLink} />
      {smDevice && <Hamburger openMenu={openMenu} toggleMenu={toggleMenu} />}
      <MenuWrapper style={smDevice ? menuStyles : { maxHeight: "3.2rem" }}>
        <MenuList {...menuRef}>
          {menuItems.map(
            ({ id, name, path, color, textShadow, boxShadow }, i) => (
              <MenuListItem key={i}>
                <MenuLink
                  ref={(r) => (menuRefs.current[i] = r)}
                  id={id}
                  activeClassname="active"
                  to={path}
                  onClick={() => activeThisLink(i)}
                >
                  {name}
                </MenuLink>
              </MenuListItem>
            )
          )}
          {!smDevice && <ThemeSwitch />}
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
