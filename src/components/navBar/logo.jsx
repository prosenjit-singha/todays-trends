import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { redG } from "../../utils/gradient-colors";
import FavIcon from "../../img/icons/favicon.png";

export const Hero = styled(Link)`
  font-family: Staatliches;
  letter-spacing: 2px;
  grid-column: 1/2;
  justify-self: start;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 2rem;
  color: ${(props) => props.theme.accent};
  padding-block: 0.17em;
  padding-left: 1em;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: color 500ms ease;
  background-image: linear-gradient(
    to right,
    hsl(345, 95%, 50%) 0%,
    hsl(333, 73%, 50%) 51%,
    hsl(350, 80%, 50%) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const Logo = ({ toggleMenu }) => {
  return (
    <Hero
      id="logo"
      to="/"
      onClick={() => toggleMenu(false)}
      text={"Today's Trends"}
    >
      <img
        src={FavIcon}
        alt="logo"
        style={{ width: "3.5rem", marginRight: "0.5rem" }}
      />
      Today's Trends
    </Hero>
  );
};

export default Logo;
