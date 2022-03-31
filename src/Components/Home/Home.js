import React, { useState } from "react";
import { useMeasure } from "../../Helpers";
import { useSpring, animated } from "react-spring";
import "./style.css";
import NewsCards from "../NewsCards/NewsCards";
const Home = ({ articles, activeArticles }) => {
  const [isOpen, setOpen] = useState(false);
  const [menuRef, { height: menuHeight }] = useMeasure();

  function handler() {
    setOpen(!isOpen);
    console.log(isOpen);
    console.log(menuHeight);
  }
  const menuStyle = useSpring({
    maxHeight: isOpen ? menuHeight : 0,
    backgroundColor: "red",
  });

  return (
    <div>
      {/* <NavBarSpace />
      <button onClick={handler}>Click Me</button>
      <animated.div style={menuStyle}>
        <ul {...menuRef}>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      </animated.div> */}
    </div>
  );
};

export default Home;
