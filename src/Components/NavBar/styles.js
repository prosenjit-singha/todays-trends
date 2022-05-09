// Navbar Styles //
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import { colors } from "../../styles/variables";
import { device } from "../../utils/device";
import { red } from "../../utils/colors";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  width: 100vw;
  height: auto;
  background-color: ${(props) => props.theme.forground};
  //backdrop-filter: blur(10px);
  box-shadow: 0px 4px 5px 0px ${(props) => props.theme.backgroundShadow};
  position: fixed;
  z-index: 30;
  overflow: hidden;
  @media ${device.tabletM} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
  }
`;

export const MenuWrapper = styled(animated.div)`
  will-change: max-height;
  grid-column: 1/-1;
  grid-row: 2/-1;
  width: 100%;
  height: 100%;
  @media ${device.tabletM} {
    position: relative;
    display: flex;
    align-items: center;
    height: 500px;
    grid-column: 2/-1;
    grid-row: 1/2;
  }
`;

export const MenuList = styled.ul`
  /* background-color: ${colors.neutral[900]}; */
  //outline: 1px solid red;
  width: 100%;
  height: fit-content;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: visible;
  flex-direction: column;
  align-content: center;
  @media ${device.tabletM} {
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
  @media ${device.tabletM} {
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
  color: ${(props) => (props.theme.name === "dark" ? red[400] : red[500])};
  font-weight: bolder;
  text-shadow: none;
  cursor: pointer;
  transition: color, text-shadow 300ms ease;
  &:hover {
    color: ${(props) => (props.theme.name === "dark" ? red[500] : red[600])};
  }
  @media ${device.tabletM} {
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
  background-color: ${(props) =>
    props.theme.name === "dark" ? red[400] : red[500]};
  z-index: 1;
  @media ${device.tabletM} {
    bottom: 7px;
  }
`;
