import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useMeasure, usePrevious } from "../../../src/Helpers";
import { useBreakpoint } from "react-use-size";
import Categories from "./Categories/Categories";
import Sources from "./Sources/Sources";
import Terms from "./Terms/Terms";

// import "../../Styles/index.css";

const Index = () => {
  // console.log("outside of useEffect");
  const smDevice = useBreakpoint(790);
  const [menuRef, { height: menuHeight }] = useMeasure();
  const [newsByRef, { height: newsByHeight }] = useMeasure();
  const [categoryRef, { height: categoryListHeight }] = useMeasure();
  const [sourcesRef, { height: sourceListHeight }] = useMeasure();
  const [termsRef, { height: termListHeight }] = useMeasure();

  const [openMenu, setOpenMenu] = useState(false);
  const [openNewsBy, setOpenNewsBy] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openSources, setOpenSources] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  const openMenuPrevState = usePrevious(openMenu);
  const openNewsByPrevState = usePrevious(openNewsBy);

  //for nav animation
  const menuStyles = useSpring({
    maxHeight: openMenu ? menuHeight : 0,
    config: { duration: 300 },
  });
  const newsByStyles = useSpring({
    maxHeight: openNewsBy ? newsByHeight : 0,
    config: { duration: 300 },
  });
  const categoryListStyles = useSpring({
    maxHeight: openCategories ? categoryListHeight : 0,
    config: { duration: 300 },
  });
  const sourceListStyles = useSpring({
    maxHeight: openSources ? sourceListHeight : 0,
    config: { duration: 300 },
  });
  const termListStyles = useSpring({
    maxHeight: openTerms ? termListHeight : 0,
    config: { duration: 300 },
  });
  const toggleMenuButton = () => {
    //mobile device
    if (smDevice) {
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
      <animated.div className="menuWrapper" style={menuStyles}>
        <ul {...menuRef} className="menu">
          <li>
            <NavLink
              className="menuItem ripple"
              to="/"
              onClick={toggleMenuButton}
            >
              Home
            </NavLink>
          </li>
          {/* news by disable */}
          {/* <li>
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
            <animated.div className="submenuWrapper" style={newsByStyles}>
              <ul {...newsByRef} className="submenu">
                <li>
                  <input
                    className="toggleButton"
                    id="categories"
                    type="checkbox"
                    checked={openCategories}
                    onChange={(e) => setOpenCategories(e.target.checked)}
                  />
                  <label id="ex" className="menuItem" htmlFor="categories">
                    Categories
                  </label>
                  <animated.div
                    className="childListWrapper"
                    style={categoryListStyles}
                  >
                    <Categories
                      toggleMenuButton={toggleMenuButton}
                      categoryRef={categoryRef}
                    />
                  </animated.div>
                </li>
                <li>
                  <input
                    className="toggleButton"
                    id="sources"
                    type="checkbox"
                    checked={openSources}
                    onChange={(e) => setOpenSources(e.target.checked)}
                  />
                  <label className="menuItem" htmlFor="sources">
                    Sources
                  </label>
                  <animated.div
                    className="childListWrapper"
                    style={sourceListStyles}
                  >
                    <Sources
                      toggleMenuButton={toggleMenuButton}
                      sourcesRef={sourcesRef}
                    />
                  </animated.div>
                </li>
                <li>
                  <input
                    className="toggleButton"
                    id="terms"
                    type="checkbox"
                    checked={openTerms}
                    onChange={(e) => setOpenTerms(e.target.checked)}
                  />
                  <label className="menuItem" htmlFor="terms">
                    Terms
                  </label>
                  <animated.div
                    className="childListWrapper"
                    style={termListStyles}
                  >
                    <Terms
                      toggleMenuButton={toggleMenuButton}
                      termsRef={termsRef}
                    />
                  </animated.div>
                </li>
              </ul>
            </animated.div>
          </li> */}
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
        </ul>{" "}
      </animated.div>
    </nav>
  );
};

export default React.memo(Index);
