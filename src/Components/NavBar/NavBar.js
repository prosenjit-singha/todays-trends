import { useSpring, useSprings, config } from "react-spring";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint, useComponentSize, useWindowSize } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger/Hamburger";
import Logo from "./Logo";
import { menuItems as mi } from "./MenuItems";
import {
  ActiveLinkEffect,
  Nav,
  MenuWrapper,
  MenuList,
  MenuListItem,
  MenuLink,
} from "./styles";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const NavBar = () => {
  const activeRef = useRef();
  const menuRefs = useRef([]);
  const { pathname } = useLocation();
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [hoverLocation, setHoverLocation] = useState({
    active: {},
    left: 0,
    width: 0,
  });
  const [openMenu, toggleMenu] = useState(false);
  const smDevice = useBreakpoint(789);
  const { width: windowWidth } = useWindowSize();

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
  const applyLinkStyle = useCallback(
    (i) => {
      setMenuItems.start((index) => {
        if (index === i)
          return {
            ...mi[index],
            textShadow: mi[index].textShadowTo,
            color: "white",
          };
        else
          return {
            ...mi[index],
            textShadow: mi[index].textShadowFrom,
          };
      });
    },
    [setMenuItems]
  );

  const activeEffect = useSpring({
    opacity: hoverLocation.left === 0 ? 0 : 1,
    left: hoverLocation.left,
    width: hoverLocation.width,
    config: config.wobbly,
  });
  const activeThisLink = (i) => {
    toggleMenu(!openMenu);
    applyLinkStyle(i);
  };
  //styling-end
  const handleMouseEnter = (e) => {
    const { offsetLeft, offsetWidth } = e.target.parentElement;
    setHoverLocation({
      ...hoverLocation,
      width: offsetWidth,
      left: offsetLeft,
    });
  };
  const handleMouseLeave = () => {
    const { left: offsetLeft, width: offsetWidth } = hoverLocation.active;
    setHoverLocation({
      ...hoverLocation,
      width: offsetWidth,
      left: offsetLeft,
    });
  };
  useEffect(() => {
    let i = 0;
    if (pathname === "/") i = 0;
    else if (pathname === "/command-list") i = 1;
    else if (pathname === "/about") i = 2;
    applyLinkStyle(i);
    const currentActive = menuRefs.current[i].parentElement;
    const { offsetLeft, offsetWidth } = menuRefs.current[i].parentElement;
    setHoverLocation({
      ...hoverLocation,
      active: {
        left: currentActive.offsetLeft,
        width: currentActive.offsetWidth,
      },
      left: offsetLeft,
      width: offsetWidth,
    });
  }, [pathname, applyLinkStyle, windowWidth]);
  return (
    <Nav>
      <Logo activeThisLink={activeThisLink} />
      {smDevice && <Hamburger openMenu={openMenu} toggleMenu={toggleMenu} />}
      <MenuWrapper style={smDevice ? menuStyles : { maxHeight: "3.2rem" }}>
        <MenuList {...menuRef}>
          {menuItems.map(
            ({ id, name, path, color, textShadow, boxShadow }, i) => (
              <MenuListItem
                key={i}
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseLeave={handleMouseLeave}
              >
                {/* <MenuLink
                  ref={(r) => (menuRefs.current[i] = r)}
                  id={id}
                  style={{ color, textShadow, boxShadow }}
                  to={path}
                  onClick={() => activeThisLink(i)}
                >
                  {name}
                </MenuLink> */}
                <MenuLink
                  ref={(r) => (menuRefs.current[i] = r)}
                  id={id}
                  activeClassName="active"
                  //style={{ color, textShadow, boxShadow }}
                  to={path}
                  onClick={() => activeThisLink(i)}
                >
                  {name}
                </MenuLink>
              </MenuListItem>
            )
          )}

          {!smDevice && (
            <ActiveLinkEffect ref={activeRef} style={activeEffect} />
          )}
          {!smDevice && <ThemeSwitch />}
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
