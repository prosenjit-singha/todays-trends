import { colors } from "./Variables";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { animated } from "react-spring";

const smDevice = "791px";

export const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
 /* font-family: 'Comfortaa', cursive; */
 @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
 /* font-family: 'Fjalla One', sans-serif; */
    *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    }
    body{
        color: ${colors.neutral[100]};
        background-color: ${colors.neutral[900]};
    }
`;

export const NavBarSpace = styled.div`
  padding-bottom: 56px;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  width: 100vw;
  height: auto;
  /* background-color: ${colors.neutral[800]}; */
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 5px ${colors.neutral[1000]};
  position: fixed;
  z-index: 10;
  @media (min-width: ${smDevice}) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
  }
`;

export const Hero = styled(animated(Link))`
  font-family: "Lobster", cursive;
  grid-column: 1/2;
  justify-self: start;
  align-items: center;
  color: ${colors.neutral[200]};
  text-decoration: none;
  font-size: 2rem;
  padding: 0px 15px;
  padding-bottom: 5px;
`;

export const HamburgerContainer = styled.div`
  grid-column: 2/-1;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 2rem;
`;

export const Line = styled(animated.span)`
  /* will-change: background-color; */
  position: absolute;
  display: block;
  height: 0.25rem;
  width: 100%;
  left: 0;
  background-color: ${colors.neutral[700]};
  border-radius: 5px;

  &:nth-child(1) {
    /* background-color: red; */
  }

  &:nth-child(2) {
    /* background-color: green; */
  }
  &:nth-child(3) {
    /* background-color: blue; */
  }
`;
export const Hamburger = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    ${Line} {
      /* box-shadow: 0px 0px 3px ${colors.neutral[100]}; */
    }
  }
`;
export const MenuWrapper = styled(animated.div)`
  grid-column: 1/-1;
  grid-row: 2/-1;
  width: 100%;
  height: 100%;
  will-change: max-height;
  overflow: hidden;
  @media (min-width: ${smDevice}) {
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
  width: 100%;
  height: fit-content;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  @media (min-width: ${smDevice}) {
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

  &:last-child {
    margin-bottom: 0.5rem;
  }
  @media (min-width: ${smDevice}) {
    width: fit-content;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
`;

export const MenuLink = styled(animated(NavLink))`
  font-family: "Comfortaa", cursive;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding-top: 0.25rem;
  padding-left: 2rem;
  color: ${colors.neutral[200]};
  cursor: pointer;
  &:hover {
    color: ${colors.neutral[100]};
    background-color: transparent;
  }
  @media (min-width: ${smDevice}) {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }
`;

export const ActiveLinkEffect = styled(animated.span)`
  will-change: transform;
  position: absolute;
  width: 5.55rem;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: ${colors.neutral[700]};
  transform: translateX(100%);
`;

export const Container = styled.div`
  /* display: flex; */
  width: 100vw;
  height: fit-content;
  padding: 1.5rem;
`;

export const Footer = styled.footer`
  float: bottom;
  display: flex;
  width: 100vw;
  height: 20vh;
  backdrop-filter: blur(10px);
`;
