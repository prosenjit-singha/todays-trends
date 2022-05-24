import { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch } from "react-redux";
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
const useAlan = () => {
  const dispatch = useDispatch();
  const [alan, setAlan] = useState();
  useEffect(() => {
    if (alan !== undefined) return;
    else {
      setAlan(
        alanBtn({
          key: process.env.REACT_APP_ALAN_KEY,
          onCommand: ({ command, articles, number, params }) => {
            if (command === "by source") {
              console.log("Console: ", params);
              dispatch(setCategory("All"));
              dispatch(setCountry("All"));
              dispatch(setKeyword(""));
              dispatch(setAPI(params.API));
              dispatch(setAPI_KEY(params.API));
              dispatch(setPage(1));
              //setActiveArticle(0);
              dispatch(setSource(params.source.toUpperCase()));
            } else if (command === "by terms") {
              dispatch(setCategory("All"));
              dispatch(setCountry("All"));
              dispatch(setSource("All"));
              dispatch(setAPI(params.API));
              dispatch(setAPI_KEY(params.API));
              dispatch(setPage(1));
              //dispatch(setActiveArticle(0));
              dispatch(setKeyword(params.keyword));
            } else if (command === "by categories") {
              dispatch(setSource("All"));
              dispatch(setCountry("All"));
              dispatch(setKeyword(""));
              dispatch(setAPI(params.API));
              dispatch(setAPI_KEY(params.API));
              //setActiveArticle(0);
              dispatch(setPage(1));
              dispatch(setCategory(toTitle(params.category)));
            } else if (command === "highlight") {
              dispatch(setActiveArticle(params.activeIndex));
              //setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if (command === "open") {
              const parsedNumber =
                number.length > 2
                  ? wordsToNumbers(number, { fuzzy: true })
                  : number;
              const article = articles[parsedNumber - 1];

              if (parsedNumber > articles.length) {
                alanBtn().playText("Please try that again...");
              } else if (article) {
                window.open(article.url, "_blank");
                alanBtn().playText("Opening...");
              } else {
                alanBtn().playText("Please try that again...");
              }
            } else if (command === "set page") {
              const page = wordsToNumbers(params.page);
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
