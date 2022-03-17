import React from "react";
import Data from "../../../Data/categories.json";
import { NavLink } from "react-router-dom";
// import "./categories.css";
// import "../../../Styles/index.css";
const Categories = ({ toggleMenuButton }) => {
  return (
    <ul id="categoryList" className="submenuChildList">
      {Data.map((category, i) => (
        <li key={i}>
          <NavLink
            className="menuItem"
            onClick={toggleMenuButton}
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
