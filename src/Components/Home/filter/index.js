import React, { useRef, useState } from "react";
import { useBreakpoint } from "react-use-size";
import { useSelector, useDispatch } from "react-redux";
import {
  setCountry,
  setCategory,
  setSource,
  setKeyword,
  setPage,
} from "../../../redux/features/filter/filter-slice";
import { setAPI_KEY } from "../../../redux/features/news/news-slice";
import {
  FilterDiv,
  Label,
  TextField,
  Button,
  CountryContainer,
  CategoryContainer,
  SourceContainer,
  Block,
} from "./styles";
import Dropdown from "../../dropdown";
import { useRippleEffect } from "../../ripple-effect";
import { red } from "../../../utils/colors";
import { fetchArticles } from "../../../redux/features/news/news-slice";
import { getAPI } from "../../../utils/functions";

const getString = (data) => {
  if (typeof data === "string")
    if (data !== "") return "everything?q=" + data.split(" ").join("-") + "&";
    else return "top-headlines?";
  if (data.selected === "All") return "";
  else {
    return "&" + data.id + "=" + data.list[data.selected];
  }
};

const Filter = () => {
  const data = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const background = red[400];
  const searchRef = useRippleEffect();
  const searchBoxRef = useRef();
  const [pageNo, setPageNo] = useState(data.page);
  const [tempCountry, setTempCountry] = useState(data.country);
  const [tempCategory, setTempCategory] = useState(data.category);
  const [tempSource, setTempSource] = useState(data.source);

  //functions
  const resetCC = () => {
    setTempCountry({ ...tempCountry, selected: "All" });
    setTempCategory({ ...tempCategory, selected: "All" });
    searchRef.current.value = "";
  };
  const resetS = () => {
    setTempSource({ ...tempSource, selected: "All" });
    searchRef.current.value = "";
  };
  const handleOnChange = (e) => {
    if (e.target.value !== "") {
      resetCC();
      resetS();
    }
  };
  // const handleClick = (e) => {
  //   //console.log("addEventListener");
  //   //setIsOpenSB(true);
  //   const handleListener = (e) => {
  //     if (e.target !== searchBoxRef.current) {
  //       //console.log("removeEventListener");
  //       //setIsOpenSB(false);
  //       document.removeEventListener("click", handleListener);
  //     }
  //   };
  //   document.addEventListener("click", handleListener);
  // };
  const handleSearch = () => {
    setPageNo(1);
    dispatch(setCountry(tempCountry.selected));
    dispatch(setCategory(tempCategory.selected));
    dispatch(setSource(tempSource.selected));
    dispatch(setKeyword(searchBoxRef.current.value));
    dispatch(setPage(1));
    const params = {
      country: getString(tempCountry),
      category: getString(tempCategory),
      source: getString(tempSource),
      keyword: getString(searchBoxRef.current.value),
    };
    dispatch(setAPI_KEY(getAPI(params)));
    dispatch(fetchArticles(getAPI(params)));
    //handleAPI();
  };

  return (
    <FilterDiv>
      <CountryContainer>
        <Block>
          {/* Country */}
          <Label>Country</Label>
          <Dropdown
            data={tempCountry}
            handleData={setTempCountry}
            reset={resetS}
            background={background}
          />
        </Block>
      </CountryContainer>
      <CategoryContainer>
        <Block>
          {/* categories */}
          <Label>Category</Label>
          <Dropdown
            data={tempCategory}
            handleData={setTempCategory}
            reset={resetS}
            background={background}
          />
        </Block>
      </CategoryContainer>
      <SourceContainer>
        <Block>
          {/* sources */}
          <Label>Source</Label>
          <Dropdown
            data={tempSource}
            handleData={setTempSource}
            reset={resetCC}
            background={background}
          />
        </Block>
      </SourceContainer>

      {/* searchbox */}
      <TextField
        ref={searchBoxRef}
        placeholder="keyword/phrase"
        //onClick={handleClick}
        onChange={handleOnChange}
      />
      <Button
        ref={searchRef}
        type="button"
        onClick={handleSearch}
        background={background}
      >
        Search
      </Button>
    </FilterDiv>
  );
};

export default Filter;
