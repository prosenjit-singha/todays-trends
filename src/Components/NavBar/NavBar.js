import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { MdOutlineKeyboardArrowDown as DownArrow } from "react-icons/md";
import NewsBy from "./NewsBy";
const NavBar2 = () => {
  const [newsByClicked, setNewsByClicked] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Today's Trends
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/command-list">
                Command List
              </NavLink>
            </li>
            <li className="nav-item">
              <span
                id="newsBy"
                className="nav-link span-button"
                role="button"
                onClick={() => setNewsByClicked(!newsByClicked)}
              >
                News By
                <DownArrow className="down-arrow" />
              </span>

              {newsByClicked && (
                <NewsBy
                  newsByClicked={true}
                  setNewsByClicked={setNewsByClicked}
                />
              )}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/developers">
                Developers
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link">test</button>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
