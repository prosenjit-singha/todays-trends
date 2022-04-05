import { colors } from "./Variables";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { animated } from "react-spring";

const smDevice = "791px";

export const GlobalStyle = createGlobalStyle`
 
    *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 15px;
      }
    &::-webkit-scrollbar-track{
      background-color: ${colors.neutral[900]};
      border-radius: 10px;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.1),
    inset 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 5px 0px rgba(255, 255, 255, 0.1);
    }
    &::-webkit-scrollbar-thumb{
      margin: 2px;
      background-color: ${colors.neutral[800]};
      border-radius: 5px;
      box-shadow: inset 4px 4px 3px 0px rgba(255, 255, 255, 0.1),
      inset -4px -4px 3px 0px  rgba(0, 0, 0, 0.3);
      &:hover{
        background-color: ${colors.neutral[700]};
      }
    }
    &::-webkit-scrollbar-corner{
      background-color: transparent;
    }
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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 5px ${colors.neutral[1000]};
  position: fixed;
  z-index: 30;
  overflow: hidden;
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
  will-change: max-height;
  grid-column: 1/-1;
  grid-row: 2/-1;
  width: 100%;
  height: 100%;
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
  overflow: visible;
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
  overflow: visible;
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
  will-change: text-shadow, color;
  font-family: "Comfortaa", cursive;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding-top: 0.25rem;
  padding-left: 2rem;
  overflow: visible;
  //color: white;
  font-weight: bolder;
  text-shadow: none;
  cursor: pointer;
  transition: color, text-shadow 300ms ease;
  @media (min-width: ${smDevice}) {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }
`;

export const ActiveLinkEffectContainer = styled(animated.span)`
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 91.6875px;
  height: 32px;
  filter: blur(0px);
  border: 1px solid red;
  //z-index: 60;
  opacity: 1;
`;
export const ActiveLinkEffect = styled(animated.span)`
  width: 80%;
  height: 60%;
  background-color: blue;
`;
export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 95vh;
  padding: 1.5rem;
`;

export const Footer = styled.footer`
  position: relative;
  width: 100vw;
  height: fit-content;
`;
