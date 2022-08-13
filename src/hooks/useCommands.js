import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COMMANDS } from "../utils/commands";
import wordsToNumbers from "words-to-numbers";
import { useLocation } from "react-router-dom";
import {
  setSource,
  setCategory,
  setKeyword,
  setCountry,
} from "../redux/features/filter/filter-slice";
import {
  setAPI,
  setAPI_KEY,
  setActiveArticle,
  setPage,
  setCommand,
} from "../redux/features/news/news-slice";
//not important
// import articles from "../data/articles.json";

const useCommands = (alan) => {
  const dispatch = useDispatch();
  const { articles, page } = useSelector((state) => state.news);
  const location = useLocation();

  const openArticle = useCallback(
    ({ detail }) => {
      const page = page;
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
      if (location.pathname === "/news") {
        if (isValid(formatedNumber) && index <= articles.length) {
          //important line
          const article = articles[getIndex(formatedNumber)];

          window.open(article.url, "_blank");
          alan.playText("opening...");
        } else {
          alan.playText("invalid number!");
        }
      } else {
        alan.playText("Go to the news page first.");
      }
    },
    [articles, page, alan]
  );

  const readHeadlines = useCallback(() => {
    if (alan !== undefined) {
      //use for api
      if (location.pathname === "/news") {
        console.log("Reading headlines");
        alan.callProjectApi("readHeadlines", { articles });
      } else {
        alan.playText("Go to the news page first.");
      }
    }
  }, [alan, articles]);

  // Hooks
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
