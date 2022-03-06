import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const terms = ["BitCoin", "PlayStation"];
const categories = [
  "Business",
  "Entertainment",
  "General",
  "Science",
  "Sports",
  "Technology",
];
const sources = [
  "CNN",
  "Wired",
  "BBC News",
  "Time",
  "IGN",
  "Buzzfeed",
  "ABC News",
];

function NavItem(props) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return <li className="nav-item dropdown">{props.children}</li>;
}

function DropdownMenu() {
  function DropdownItems(props) {
    return <li>{props.children}</li>;
  }
  return (
    <div>
      <NavLink
        className="nav-link dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        to="/news-by"
      >
        News by
      </NavLink>
      <ul className="dropdown-menu dropdown-menu-dark">
        <DropdownItems>
          <NavLink className="dropdown-item" to="/t">
            Terms
          </NavLink>
          <NavLink className="dropdown-item" to="/c">
            Categories
          </NavLink>
          <NavLink className="dropdown-item" to="/c">
            Sources
          </NavLink>
        </DropdownItems>
      </ul>
    </div>
  );
}
function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Today's Trends
        </a>
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
          {/* menu-list */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{props.children}</ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

const NavBar2 = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <NavBar>
      <NavItem>
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <DropdownMenu />
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/developers">
          Developers
        </NavLink>
      </NavItem>
    </NavBar>
    // <div>
    //   <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         Navbar
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <NavItem name="Home" link="/home" />
    //           <NavItem name="Command List" link="/command-list" />
    //           <li className="nav-item dropdown">
    //             <span
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               id="navbarDropdown"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //               onClick={() => setOpen(!open)}
    //             >
    //               News by
    //             </span>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li>
    //                 <div className=" dropend">
    //                   <span
    //                     className="dropdown-toggle dropdown-item"
    //                     data-bs-toggle="dropdown"
    //                     aria-expanded="false"
    //                   >
    //                     Dropright
    //                   </span>
    //                   <ul className="dropdown-menu">
    //                     <li>
    //                       <a className="dropdown-item" href="#">
    //                         Action
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a className="dropdown-item" href="#">
    //                         Another action
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a className="dropdown-item" href="#">
    //                         Something else here
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Categories
    //                 </a>
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Source
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //           <NavItem name="About" link="/about" />
    //           <NavItem name="Developers" link="/developers" />
    //         </ul>
    //         <form className="d-flex">
    //           <input
    //             className="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button className="btn btn-outline-success" type="submit">
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavBar2;
