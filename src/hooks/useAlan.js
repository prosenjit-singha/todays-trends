import { useState, useEffect, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch, useSelector } from "react-redux";
import { toTitle } from "../utils/functions";
import wordsToNumbers from "words-to-numbers";
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
} from "../redux/features/news/news-slice";
import { setPage } from "../redux/features/news/news-slice";

const COMMANDS = {
  OPEN_ARTICLE: "open-article",
  NEWS_BY_SOURCE: "news-by-source",
  NEWS_BY_CATEGORY: "news-by-category",
  NEWS_BY_TERMS: "news-by-terms",
  OPEN_PAGE: "open-page",
};
// hello world

const useAlan = () => {
  console.log("useAlan newsData: ");
  const [alan, setAlan] = useState();
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  //articles, page, index
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
      if (isValid(formatedNumber) && index <= newsData.articles.length) {
        const article = newsData.articles[getIndex(formatedNumber)];
        console.log(article);
        window.open(article.url, "_blank");
        alan.playText("opening...");
      } else {
        alan.playText("invalid number!");
      }
    },
    [newsData.articles, newsData.page, alan]
  );

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_ARTICLE, openArticle);
    return () => {
      window.removeEventListener(COMMANDS.OPEN_ARTICLE, openArticle);
    };
  }, [openArticle]);

  useEffect(() => {
    if (alan !== undefined) return;
    else {
      setAlan(
        alanBtn({
          key: process.env.REACT_APP_ALAN_KEY,
          onCommand: ({ command, param }) => {
            if (command === COMMANDS.NEWS_BY_SOURCE) {
              console.log("<--source-->");
              console.log("Console: ", param);
              dispatch(setCategory("All"));
              dispatch(setCountry("All"));
              dispatch(setKeyword(""));
              dispatch(setAPI(param.API));
              dispatch(setAPI_KEY(param.API));
              dispatch(setPage(1));
              dispatch(setSource(param.source.toUpperCase()));
            } else if (command === COMMANDS.NEWS_BY_TERMS) {
              dispatch(setCategory("All"));
              dispatch(setCountry("All"));
              dispatch(setSource("All"));
              dispatch(setAPI(param.API));
              dispatch(setAPI_KEY(param.API));
              dispatch(setPage(1));
              dispatch(setKeyword(param.keyword));
            } else if (command === COMMANDS.NEWS_BY_CATEGORY) {
              dispatch(setSource("All"));
              dispatch(setCountry("All"));
              dispatch(setKeyword(""));
              dispatch(setAPI(param.API));
              dispatch(setAPI_KEY(param.API));
              dispatch(setPage(1));
              dispatch(setCategory(toTitle(param.category)));
            } else if (command === "highlight") {
              dispatch(setActiveArticle(param.activeIndex));
            } else if (command === COMMANDS.OPEN_ARTICLE) {
              window.dispatchEvent(new CustomEvent(command, { detail: param }));
            } else if (command === COMMANDS.OPEN_PAGE) {
              const page = wordsToNumbers(param.page);
              if (page === "one") {
                dispatch(setPage(page));
              } else {
                dispatch(setPage(parseInt(page)));
              }
            }
          },
        })
      );
    }
  }, []);
  return alan;
};

export default useAlan;
