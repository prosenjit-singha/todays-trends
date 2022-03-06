import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <span>Today's Trends</span>
      </div>
      <div className={classes.menu}>
        {/* <div className="home menu-item">Home</div>
        <div className="about menu-item">About</div>
        <div className="dev menu-item">Developers</div> */}
        <ul>
          <li>
            <NavLink
              className={(info) =>
                info.isActive
                  ? (classes.menuItem, classes.active)
                  : classes.menuItem
              }
              to="/home"
            >
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={(info) =>
                info.isActive
                  ? (classes.menuItem, classes.active)
                  : classes.menuItem
              }
              to="/command-list"
            >
              Commands Info
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={(info) =>
                info.isActive
                  ? (classes.menuItem, classes.active)
                  : classes.menuItem
              }
              to="/about"
            >
              About
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={(info) =>
                info.isActive
                  ? (classes.menuItem, classes.active)
                  : classes.menuItem
              }
              to="/developers"
            >
              Developers
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
