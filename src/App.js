import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards/NewsCards";
import classNames from "classnames";

const alanKey =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);
  return (
    <React.Fragment>
      <div className={classNames.logo}>
        <img />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </React.Fragment>
  );
};

export default App;
