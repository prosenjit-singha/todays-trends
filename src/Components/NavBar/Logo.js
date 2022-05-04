import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated } from "react-spring";
import styled from "styled-components";
import { red } from "../../Utiles/Colors";

export const Hero = styled(animated(Link))`
  font-family: Staatliches;
  letter-spacing: 2px;
  grid-column: 1/2;
  justify-self: start;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  color: ${(props) => (props.theme.name === "dark" ? red[400] : red[500])};
  //padding: 0px 15px;
  //padding-bottom: 5px;
  padding: 0.05em 1em;
  //padding-bottom: 0.05em;
  position: relative;
  overflow: hidden;
  transition: all 500ms ease;
  &:before {
    content: attr(text);
    position: absolute;
    color: ${red[200]};
    overflow: hidden;
    width: 0%;
    transition: width 500ms ease;
  }
  &:hover:before {
    width: 100%;
  }
  &:hover {
    color: ${(props) => (props.theme.name === "dark" ? red[400] : red[500])};
    //font-size: 2.1rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8));
  }
`;

const Logo = ({ activeThisLink }) => {
  return (
    <Hero
      id="logo"
      to="/"
      onClick={() => activeThisLink(0)}
      text={"Today's Trends"}
    >
      Today's Trends
    </Hero>
  );
};

export default Logo;
