import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../../Data/terms.json";
const Terms = ({ newsByClicked, setNewsByClicked }) => {
  return (
    <ul className="child-submenu">
      {Data.map((term, i) => (
        <li key={i}>
          <NavLink
            className="nav-link submenu-link"
            onClick={() => setNewsByClicked(!newsByClicked)}
            to={term.path}
          >
            {term.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Terms;
