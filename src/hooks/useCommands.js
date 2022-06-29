import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { COMMANDS } from "../utils/commands";
import wordsToNumbers from "words-to-numbers";
//not important
import articles from "../data/articles.json";

const useCommands = (alan) => {
  const newsData = useSelector((state) => state.news);
  //const {articles} = newsData;

  const openArticle = useCallback(
    ({ detail }) => {
      const page = newsData.page;
      function getIndex(number) {
        return number - 1 - (page - 1) * 12;
      }

      function isValid(number) {
        const startIndex = (page - 1) * 12;
        const endIndex = 1 + page * 12;
        if (startIndex < number && number < endIndex) return true;
        else return false;
      }
      const parsedNumber =
        detail.number.length > 2
          ? wordsToNumbers(detail.number, { fuzzy: true })
          : detail.number;
      // converting string to integer
      const formatedNumber = parseInt(parsedNumber);
      const index = getIndex(formatedNumber);
      if (isValid(formatedNumber) && index <= articles.length) {
        //important line
        const article = articles[getIndex(formatedNumber)];

        console.log(article);
        window.open(article.url, "_blank");
        alan.playText("opening...");
      } else {
        alan.playText("invalid number!");
      }
    },
    [newsData.articles, newsData.page, alan]
  );

  const readHeadlines = useCallback(() => {
    if (alan !== undefined) {
      //use for api
      //const { articles } = newsData;
      const isActive = alan.isActive();
      if (!isActive) {
        alan.activate();
        alan.callProjectApi("readHeadlines", { articles });
        alan.deactivate();
      } else {
        alan.callProjectApi("readHeadlines", { articles });
      }
    }
  }, [alan, newsData.articles]);

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_ARTICLE, openArticle);
    window.addEventListener(COMMANDS.READ_HEADLINES, readHeadlines);
    return () => {
      window.removeEventListener(COMMANDS.OPEN_ARTICLE, openArticle);
      window.removeEventListener(COMMANDS.READ_HEADLINES, readHeadlines);
    };
  }, [openArticle]);
  return null;
};

export default useCommands;
