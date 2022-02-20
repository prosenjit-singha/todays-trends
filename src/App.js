import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards/NewsCards";

const alanKey =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <React.Fragment>
      <h1>TODAY'S TRENDS</h1>
      <NewsCards articles={newsArticles} />
    </React.Fragment>
  );
};

export default App;
