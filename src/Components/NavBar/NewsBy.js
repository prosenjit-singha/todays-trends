import React from "react";
import { useState, useEffect, useRef } from "react";
import Categories from "./Categories";
import Sources from "./Sources";
import Terms from "./Terms";
import { MdOutlineKeyboardArrowRight as RightArrow } from "react-icons/md";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

const NewsBy = ({ newsByClicked, setNewsByClicked }) => {
  const [windowHight, windowWidth] = useWindowSize();
  const [categoriesClicked, setCategoriesClicked] = useState(false);
  const [sourcesClicked, setSourcesClicked] = useState(false);
  const [termsClicked, setTermsClicked] = useState(false);
  const menuRef = useRef();
  const categoriesRef = useRef();
  const sourcesRef = useRef();
  const termsRef = useRef();

  useEffect(() => {
    const isClickedOutside = (event) => {
      if (
        categoriesRef.current &&
        categoriesRef.current.contains(event.target)
      ) {
        const link1 = document.getElementById("categories");
        const link2 = document.getElementById("sources");
        const link3 = document.getElementById("terms");
        link1.className = "selectedLink";
        link2.className = "submenu-link nav-link";
        link3.className = "submenu-link nav-link";
      } else if (
        sourcesRef.current &&
        sourcesRef.current.contains(event.target)
      ) {
        const link1 = document.getElementById("categories");
        const link2 = document.getElementById("sources");
        const link3 = document.getElementById("terms");
        link1.className = "submenu-link  nav-link";
        link2.className = "selectedLink";
        link3.className = "submenu-link  nav-link";
      } else if (termsRef.current && termsRef.current.contains(event.target)) {
        const link1 = document.getElementById("categories");
        const link2 = document.getElementById("sources");
        const link3 = document.getElementById("terms");
        link1.className = "submenu-link nav-link";
        link2.className = "submenu-link nav-link";
        link3.className = "selectedLink";
      }

      if (
        newsByClicked &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setNewsByClicked(false);
      }
    };
    document.addEventListener("click", isClickedOutside);
    return () => {
      document.removeEventListener("click", isClickedOutside);
    };
  }, [
    newsByClicked,
    setNewsByClicked,
    categoriesClicked,
    sourcesClicked,
    termsClicked,
  ]);

  const handleMainSubmenuClick = (clicked) => {
    if (windowWidth >= 992) {
      if (clicked === "categories") {
        setCategoriesClicked(!categoriesClicked);
        setSourcesClicked(false);
        setTermsClicked(false);
      }
      if (clicked === "sources") {
        setSourcesClicked(!sourcesClicked);
        setCategoriesClicked(false);
        setTermsClicked(false);
      }
      if (clicked === "terms") {
        setTermsClicked(!termsClicked);
        setCategoriesClicked(false);
        setSourcesClicked(false);
      }
    } else {
      if (clicked === "categories") {
        setCategoriesClicked(!categoriesClicked);
      }
      if (clicked === "sources") {
        setSourcesClicked(!sourcesClicked);
      }
      if (clicked === "terms") {
        setTermsClicked(!termsClicked);
      }
    }
  };

  return (
    <ul className="main-submenu span-button" ref={menuRef}>
      <li id="categories" className="submenu-link nav-link">
        <span
          role="button"
          onClick={() => handleMainSubmenuClick("categories")}
          ref={categoriesRef}
        >
          Categories
          <RightArrow />
        </span>

        {categoriesClicked && (
          <Categories
            newsByClicked={newsByClicked}
            setNewsByClicked={setNewsByClicked}
          />
        )}
      </li>
      <li className="submenu-link  nav-link" id="sources">
        <span
          role="button"
          onClick={() => handleMainSubmenuClick("sources")}
          ref={sourcesRef}
        >
          Sources
          <RightArrow />
        </span>
        {sourcesClicked && (
          <Sources
            newsByClicked={newsByClicked}
            setNewsByClicked={setNewsByClicked}
          />
        )}
      </li>
      <li className="submenu-link nav-link " id="terms">
        <span
          role="button"
          onClick={() => handleMainSubmenuClick("terms")}
          ref={termsRef}
        >
          Terms
          <RightArrow />
        </span>
        {termsClicked && (
          <Terms
            newsByClicked={newsByClicked}
            setNewsByClicked={setNewsByClicked}
          />
        )}
      </li>
    </ul>
  );
};

export default NewsBy;
