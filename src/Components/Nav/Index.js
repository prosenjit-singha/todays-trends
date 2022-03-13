import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { MdOutlineKeyboardArrowDown as DownArrow } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight as RightArrow } from "react-icons/md";
// import Categories from "../../Data/categories.json";
// import Sources from "../../Data/sources.json";
// import Terms from "../../Data/terms.json";
import Categories from "./Categories/Categories";
import Sources from "./Sources/Sources";
import Terms from "./Terms/Terms";
import "./style.css";

const Index = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenuButton = () => {
    setOpenMenu(!openMenu);
  };
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
          <NavLink className="menuItem" to="/" onClick={toggleMenuButton}>
            Home
          </NavLink>
        </li>
        <li>
          <input className="toggleButton" id="newsBy" type="checkbox" />
          <label className="dropDown menuItem" htmlFor="newsBy">
            News By
          </label>
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
            className="menuItem"
            to="/command-list"
            onClick={toggleMenuButton}
          >
            Command List
          </NavLink>
        </li>
        <li>
          <NavLink className="menuItem" to="/about" onClick={toggleMenuButton}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menuItem"
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
