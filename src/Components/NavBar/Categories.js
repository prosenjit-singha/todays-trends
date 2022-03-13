import React from "react";
import Data from "../../Data/categories.json";
import { NavLink } from "react-router-dom";

const Categories = ({ newsByClicked, setNewsByClicked }) => {
  return (
    <ul className="child-submenu">
      {Data.map((category, i) => (
        <li key={i}>
          <NavLink
            className="nav-link submenu-link"
            onClick={() => setNewsByClicked(!newsByClicked)}
            to={category.path}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
