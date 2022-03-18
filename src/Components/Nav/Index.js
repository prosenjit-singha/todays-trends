import React, { Component } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import rippleEffect from "../RippleEffect";
import Categories from "./Categories/Categories";
import Sources from "./Sources/Sources";
import Terms from "./Terms/Terms";
// import "./style.css";
import "../../Styles/index.css";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

const Index = () => {
  const [windowHight, windowWidth] = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);
  const [openNewsBy, setOpenNewsBy] = useState(false);
  const toggleMenuButton = () => {
    console.log(windowWidth);
    //mobile device
    if (windowWidth <= 790) {
      setOpenMenu(!openMenu);
    }
    //desktop device
    else {
      if (openNewsBy) {
        setOpenNewsBy(false);
      }
    }
  };
  const toggleNewsBy = () => {
    const x = document.getElementById("nb");
    setOpenNewsBy(!openNewsBy);
    if (!openNewsBy) {
      x.classList.add("active");
    } else {
      x.classList.remove("active");
    }
  };

  useEffect(() => {
    if (!openMenu) {
      setOpenNewsBy(false);
    }
  }, [openMenu]);

  return (
    <nav className="myNav">
      <NavLink className="myLogo" to="/">
        Today' Trends
      </NavLink>
      <input
        className="toggleButton"
        id="menuButton"
        type="checkbox"
        checked={openMenu}
        onChange={(e) => setOpenMenu(e.target.checked)}
      />
      <label className="menuIcon" htmlFor="menuButton">
        <span className="hamburger"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            className="menuItem ripple"
            to="/"
            onClick={toggleMenuButton}
          >
            Home
          </NavLink>
        </li>
        <li>
          <input
            className="toggleButton"
            id="newsBy"
            type="checkbox"
            checked={openNewsBy}
            onChange={(e) => setOpenNewsBy(e.target.checked)}
          />
          <span
            id="nb"
            className="menuItem ripple"
            htmlFor="newsBy"
            onClick={toggleNewsBy}
          >
            News By
          </span>
          <ul className="submenu">
            <li>
              <input className="toggleButton" id="categories" type="checkbox" />
              <label id="ex" className="menuItem" htmlFor="categories">
                Categories
              </label>
              <Categories toggleMenuButton={toggleMenuButton} />
            </li>
            <li>
              <input className="toggleButton" id="sources" type="checkbox" />
              <label className="menuItem" htmlFor="sources">
                Sources
              </label>
              <Sources toggleMenuButton={toggleMenuButton} />
            </li>
            <li>
              <input className="toggleButton" id="terms" type="checkbox" />
              <label className="menuItem" htmlFor="terms">
                Terms
              </label>
              <Terms toggleMenuButton={toggleMenuButton} />
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            className="menuItem ripple"
            to="/command-list"
            onClick={toggleMenuButton}
          >
            Command List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menuItem ripple"
            to="/about"
            onClick={toggleMenuButton}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menuItem ripple"
            to="/developers"
            onClick={toggleMenuButton}
          >
            Developers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
