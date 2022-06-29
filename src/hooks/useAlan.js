import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch } from "react-redux";
import { toTitle } from "../utils/functions";
import wordsToNumbers from "words-to-numbers";
import { COMMANDS } from "../utils/commands";
import { getPath } from "../utils/functions";
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
import useCommands from "./useCommands";

const useAlan = () => {
  console.log("useAlan newsData: ");
  const navigate = useNavigate();
  const [alan, setAlan] = useState();
  const dispatch = useDispatch();

  useCommands(alan);
  useEffect(() => {
    if (alan !== undefined) return;
    else {
      setAlan(
        alanBtn({
          key: process.env.REACT_APP_ALAN_KEY,
          onCommand: ({ command, payload }) => {
            if (command === COMMANDS.NEWS_BY_SOURCE) {
              console.log("<--source-->");
              console.log("Console: ", payload);
              dispatch(setCategory("All"));
              dispatch(setCountry("All"));
              dispatch(setKeyword(""));
              dispatch(setAPI(payload.API));
              dispatch(setAPI_KEY(payload.API));
              dispatch(setPage(1));
              dispatch(setSource(payload.source.toUpperCase()));
            } else if (command === COMMANDS.NEWS_BY_TERMS) {
              dispatch(setCategory("All"));
              dispatch(setCountry("All"));
              dispatch(setSource("All"));
              dispatch(setAPI(payload.API));
              dispatch(setAPI_KEY(payload.API));
              dispatch(setPage(1));
              dispatch(setKeyword(payload.keyword));
            } else if (command === COMMANDS.NEWS_BY_CATEGORY) {
              dispatch(setSource("All"));
              dispatch(setCountry("All"));
              dispatch(setKeyword(""));
              dispatch(setAPI(payload.API));
              dispatch(setAPI_KEY(payload.API));
              dispatch(setPage(1));
              dispatch(setCategory(toTitle(payload.category)));
            } else if (command === COMMANDS.HIGHLIGHT) {
              dispatch(setActiveArticle(payload.activeIndex));
            } else if (command === COMMANDS.OPEN_PAGE) {
              const page = wordsToNumbers(payload.page);
              if (page === "one") {
                dispatch(setPage(page));
              } else {
                dispatch(setPage(parseInt(page)));
              }
            } else if (command === COMMANDS.READ_HEADLINES) {
              window.dispatchEvent(new CustomEvent(command));
            } else if (command === COMMANDS.OPEN_ARTICLE) {
              window.dispatchEvent(
                new CustomEvent(command, { detail: payload })
              );
            } else if (command === COMMANDS.NAVIGATE) {
              const path = getPath(payload.pathName);
              console.log(path);
              navigate(path);
            }
          },
        })
      );
    }
  }, []);
  return alan;
};

export default useAlan;
