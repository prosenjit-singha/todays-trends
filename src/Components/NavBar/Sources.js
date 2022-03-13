import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../../Data/sources.json";
const Sources = ({ newsByClicked, setNewsByClicked }) => {
  return (
    <ul className="child-submenu">
      {Data.map((source, i) => (
        <li key={i}>
          <NavLink
            className="nav-link submenu-link"
            onClick={() => setNewsByClicked(!newsByClicked)}
            to={source.path}
          >
            {source.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sources;
