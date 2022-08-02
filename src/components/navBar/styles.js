// Navbar Styles //
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import { device } from "../../utils/device";
import { red } from "@mui/material/colors";

const setColor = (darkMode) => {
  const LIGHT = `hsla(255, 100%, 98%, 0.85)`;
  const DARK = `hsla(270, 15%, 10%, 0.85)`;
  return darkMode ? DARK : LIGHT;
};

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  height: auto;
  //background-color: ${(props) => props.theme.forground};
  background-color: ${(props) => setColor(props.theme.darkMode)};
  //opacity: 0.2;
  backdrop-filter: blur(15px);
  box-shadow: 0px 4px 5px 0px ${(props) => props.theme.backgroundShadow};
  position: sticky;
  top: 0;
  z-index: 30;
  overflow: hidden;
  @media ${device.laptop} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
  }
`;

export const Nav = styled(animated.nav)`
  will-change: max-height;
  grid-column: 1/-1;
  grid-row: 2/-1;
  width: 100%;
  height: 100%;
  @media ${device.laptop} {
    position: relative;
    display: flex;
    align-items: center;
    height: 500px;
    grid-column: 2/-1;
    grid-row: 1/2;
  }
`;

export const MenuList = styled.ul`
  width: 100%;
  height: fit-content;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: visible;
  flex-direction: column;
  align-content: center;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: end;
    padding-right: 2rem;
    align-items: center;
  }
`;

export const MenuListItem = styled.li`
  width: 100%;
  height: 2rem;
  position: relative;
  user-select: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: visible;
  &:last-child {
    margin-bottom: 0.5rem;
  }
  @media ${device.laptop} {
    width: fit-content;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
`;

export const MenuLink = styled(animated(NavLink))`
  will-change: text-shadow, color;
  font-family: "JosefinSans";
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding-top: 0.25em;
  padding-left: 2em;
  overflow: visible;
  color: ${(props) => props.theme.accent};
  font-weight: bolder;
  text-shadow: none;
  cursor: pointer;
  transition: color, text-shadow 300ms ease;
  &:hover {
    color: ${red[500]};
  }

  @media ${device.laptop} {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    &.${(props) => props.activeClassName} {
      border: none;
    }
  }
`;

export const ActiveLinkEffect = styled(animated.span)`
  position: absolute;
  left: 0;
  border-radius: 2px;
  bottom: 0px;
  width: 20px;
  height: 5px;
  background-color: ${(props) => props.theme.accent};
  z-index: 1;
  @media ${device.laptop} {
    bottom: 7px;
  }
`;
