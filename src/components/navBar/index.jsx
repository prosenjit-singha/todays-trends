import { useSpring, useSprings, config } from "react-spring";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint, useWindowSize } from "react-use-size";
import { useMeasure } from "../../hooks/helpers";
import Hamburger from "./hamburger";
import Logo from "./logo";
import { menuItems as mi } from "./menu-items";
import {
  ActiveLinkEffect,
  Header,
  Nav,
  MenuList,
  MenuListItem,
  MenuLink,
} from "./styles";
import ThemeSwitch from "./theme-switch";
import { red } from "@mui/material/colors";

const NavBar = () => {
  const activeRef = useRef();
  const menuRefs = useRef([]);
  const { pathname } = useLocation();
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [hoverLocation, setHoverLocation] = useState({
    active: {},
    top: 0,
    left: 0,
    bgColor: red[400],
    width: 0,
    height: 0,
  });
  const [openMenu, toggleMenu] = useState(false);
  const tabletM = useBreakpoint(991);
  const { width: windowWidth } = useWindowSize();

  //styling-start
  const menuStyles = useSpring({
    maxHeight: openMenu ? menuHeight : 0,
  });

  const activeEffect = useSpring({
    background: hoverLocation.bgColor,
    left: hoverLocation.left,
    width: hoverLocation.width,
    config: config.wobbly,
  });
  const mobileActiveEffect = useSpring({
    background: hoverLocation.bgColor,
    left: 10,
    top: hoverLocation.top,
    width: 5,
    height: hoverLocation.height,
    config: config.wobbly,
  });
  const activeThisLink = (i) => {
    toggleMenu(!openMenu);
  };
  //styling-end
  const handleMouseEnter = (e) => {
    const {
      offsetTop,
      offsetLeft,
      offsetHeight,
      offsetWidth,
    } = e.target.parentElement;
    setHoverLocation({
      ...hoverLocation,
      height: offsetHeight,
      width: offsetWidth,
      left: offsetLeft,
      top: offsetTop,
    });
  };
  const handleMouseLeave = () => {
    const {
      left: offsetLeft,
      width: offsetWidth,
      top: offsetTop,
      height: offsetHeight,
    } = hoverLocation.active;
    setHoverLocation({
      ...hoverLocation,

      top: offsetTop,
      left: offsetLeft,
      height: offsetHeight,
      width: offsetWidth,
    });
  };
  useEffect(() => {
    let i = 0;
    if (pathname === "/") i = 0;
    else if (pathname === "/news") i = 1;
    else if (pathname === "/command-list") i = 2;
    else if (pathname === "/about") i = 3;
    //const currentActive = menuRefs.current[i].parentElement;

    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight,
    } = menuRefs.current[i].parentElement;
    setHoverLocation({
      ...hoverLocation,
      active: {
        top: offsetTop,
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight,
      },
      top: offsetTop,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight,
    });
  }, [pathname, windowWidth]);

  return (
    <Header>
      <Logo activeThisLink={activeThisLink} />
      {tabletM && <Hamburger openMenu={openMenu} toggleMenu={toggleMenu} />}
      <Nav style={tabletM ? menuStyles : { maxHeight: "3.2rem" }}>
        <MenuList {...menuRef}>
          {mi.map(({ id, name, path }, i) => (
            <MenuListItem
              key={i}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={handleMouseLeave}
            >
              <MenuLink
                ref={(r) => (menuRefs.current[i] = r)}
                id={id}
                to={path}
                onClick={() => activeThisLink(i)}
              >
                {name}
              </MenuLink>
            </MenuListItem>
          ))}
          {tabletM && openMenu ? (
            <ActiveLinkEffect ref={activeRef} style={mobileActiveEffect} />
          ) : (
            ""
          )}
          <ActiveLinkEffect
            ref={activeRef}
            style={tabletM ? mobileActiveEffect : activeEffect}
          />
          {!tabletM && <ThemeSwitch />}
        </MenuList>
      </Nav>
    </Header>
  );
};

export default React.memo(NavBar);
