import { useSpring, useSprings, config } from "react-spring";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint, useWindowSize } from "react-use-size";
import { useMeasure } from "../../utils/helpers";
import Hamburger from "./hamburger";
import Logo from "./logo";
import { menuItems as mi } from "./menu-items";
import {
  ActiveLinkEffect,
  Nav,
  MenuWrapper,
  MenuList,
  MenuListItem,
  MenuLink,
} from "./styles";
import ThemeSwitch from "./theme-switch";
import { useSelector } from "react-redux";
import { red } from "../../utils/colors";

const NavBar = () => {
  const themeStyle = useSelector((state) => state.theme.props);
  const activeRef = useRef();
  const menuRefs = useRef([]);
  const { pathname } = useLocation();
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [hoverLocation, setHoverLocation] = useState({
    active: {},
    top: 0,
    left: 0,
    bgColor: themeStyle.name === "dark" ? red[500] : red[600],
    width: 0,
    height: 0,
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
    applyLinkStyle(i);
  };
  //styling-end
  const handleMouseEnter = (e) => {
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } =
      e.target.parentElement;
    setHoverLocation({
      ...hoverLocation,
      height: offsetHeight,
      width: offsetWidth,
      left: offsetLeft,
      top: offsetTop,
      bgColor: themeStyle.name === "dark" ? red[500] : red[600],
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
      bgColor: themeStyle.name === "dark" ? red[400] : red[500],
    });
  };
  useEffect(() => {
    let i = 0;
    if (pathname === "/") i = 0;
    else if (pathname === "/command-list") i = 1;
    else if (pathname === "/about") i = 2;
    applyLinkStyle(i);
    //const currentActive = menuRefs.current[i].parentElement;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } =
      menuRefs.current[i].parentElement;
    console.log(offsetHeight);
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
                  to={path}
                  onClick={() => activeThisLink(i)}
                >
                  {name}
                </MenuLink>
              </MenuListItem>
            )
          )}
          <ActiveLinkEffect
            ref={activeRef}
            style={smDevice ? mobileActiveEffect : activeEffect}
          />
          {!smDevice && <ThemeSwitch />}
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
