import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../../../Data/sources.json";

const Sources = ({ toggleMenuButton, sourcesRef }) => {
  return (
    <ul {...sourcesRef} id="sourceList" className="submenuChildList">
      {Data.map((source, i) => (
        <li key={i}>
          <NavLink
            className="menuItem"
            onClick={toggleMenuButton}
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
