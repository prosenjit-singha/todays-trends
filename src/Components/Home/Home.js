import React from "react";
import rippleEffect from "../RippleEffect";
import "./style.css";
import NewsCards from "../NewsCards/NewsCards";
const Home = ({ articles, activeArticles }) => {
  return (
    <div>
      <button className="ripple">Button</button>
    </div>
    // <NewsCards articles={articles} activeArticle={activeArticles} />
  );
};

export default Home;
