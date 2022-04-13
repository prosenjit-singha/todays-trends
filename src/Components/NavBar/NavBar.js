import { useSpring, useSprings } from "react-spring";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "react-use-size";
import { useMeasure } from "../../Helpers";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { colors } from "../Styles/Variables";
import { menuItems as mi } from "./MenuItems";

import {
  ActiveLinkEffectContainer,
  ActiveLinkEffect,
  Nav,
  MenuWrapper,
  MenuList,
  MenuListItem,
  MenuLink,
} from "../Styles/Containers";

const NavBar = () => {
  const menuRefs = useRef([]);
  const { pathname } = useLocation();
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [openMenu, toggleMenu] = useState(false);
  const smDevice = useBreakpoint(790);

  // function handleActiveNav(slug) {
  //   toggleMenu(!openMenu);
  //   //setLinkActive(!isLinkActive);
  //   if (slug === "home")
  //     setActiveNav({
  //       home: true,
  //       commandList: false,
  //       about: false,
  //     });
  //   if (slug === "commandList")
  //     setActiveNav({
  //       home: false,
  //       commandList: true,
  //       about: false,
  //     });
  //   if (slug === "about")
  //     setActiveNav({
  //       home: false,
  //       commandList: false,
  //       about: true,
  //     });
  // }
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

  const activeThisLink = (i) => {
    toggleMenu(!openMenu);
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

  //styling-end

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
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
};

export default React.memo(NavBar);
