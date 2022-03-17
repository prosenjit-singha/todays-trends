import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../../../Data/terms.json";
// import "./terms.css";
// import "../../../Styles/index.css";

const Terms = ({ toggleMenuButton }) => {
  return (
    <ul id="termList" className="submenuChildList">
      {Data.map((term, i) => (
        <li key={i}>
          <NavLink
            className="menuItem"
            onClick={toggleMenuButton}
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
