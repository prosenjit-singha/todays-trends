import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCountry,
  setCategory,
  setSource,
  setKeyword,
  //setPage,
} from "../../../redux/features/filter/filter-slice";
import { setPage } from "../../../redux/features/news/news-slice";
import { setAPI, setAPI_KEY } from "../../../redux/features/news/news-slice";
import {
  FilterDiv,
  Label,
  TextField,
  Button,
  CountryContainer,
  CategoryContainer,
  SourceContainer,
  Block,
  Blur,
} from "./styles";
import Dropdown from "../../dropdown";
import { useRippleEffect } from "../../../hooks/ripple-effect";
import { red } from "../../../utils/colors";
import { getAPI } from "../../../utils/functions";

const getString = (data, source) => {
  if (typeof data === "string")
    if (data !== "")
      return (
        "everything?q=" +
        data
          .toLowerCase()
          .split(" ")
          .join("-") +
        "&"
      );
    else if (source.selected !== "All") return "everything?";
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
  const [tempCountry, setTempCountry] = useState(data.country);
  const [tempCategory, setTempCategory] = useState(data.category);
  const [tempSource, setTempSource] = useState(data.source);
  const [tempKeyword, setTempKeyword] = useState(data.keyword.text);

  //functions
  const resetCC = () => {
    setTempCountry({ ...tempCountry, selected: "All" });
    setTempCategory({ ...tempCategory, selected: "All" });
    searchRef.current.value = "";
    //setTempKeyword("");
  };
  const resetS = () => {
    setTempSource({ ...tempSource, selected: "All" });
    searchRef.current.value = "";
    //setTempKeyword("");
    //console.log(searchRef.current.value);
  };
  const handleOnChange = (e) => {
    setTempKeyword(e.target.value);
    if (e.target.value !== "") {
      resetCC();
      resetS();
    }
  };
  //source
  useEffect(() => {
    setTempSource(data.source);
  }, [data.source]);
  //country
  useEffect(() => {
    setTempCountry(data.country);
  }, [data.country]);
  //category
  useEffect(() => {
    setTempCategory(data.category);
  }, [data.category]);
  //keyword
  useEffect(() => {
    setTempKeyword(data.keyword.text);
  }, [data.keyword]);

  const handleSearch = () => {
    console.log("handle search clicked");
    dispatch(setCountry(tempCountry.selected));
    dispatch(setCategory(tempCategory.selected));
    dispatch(setSource(tempSource.selected));
    dispatch(setKeyword(searchBoxRef.current.value));
    dispatch(setPage(1));

    const params = {
      country: getString(tempCountry),
      category: getString(tempCategory),
      source: getString(tempSource),
      keyword: getString(tempKeyword, tempSource),
    };
    dispatch(setAPI(getAPI(params)));
    dispatch(setAPI_KEY(getAPI(params) + "&page=1"));
    // localStorage.setItem("API", getAPI(params));
    // localStorage.setItem("API_KEY", getAPI(params));
    //dispatch(fetchArticles(getAPI(params)));
    //handleAPI();
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    } else return;
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
            reset={() => {
              resetS();
              setTempKeyword("");
            }}
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
            reset={() => {
              resetS();
              setTempKeyword("");
            }}
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
            reset={() => {
              resetCC();
              setTempKeyword("");
            }}
            background={background}
          />
        </Block>
      </SourceContainer>

      {/* searchbox */}
      <TextField
        type="search"
        ref={searchBoxRef}
        value={tempKeyword}
        placeholder="keyword/phrase"
        onKeyDown={handleEnterKeyPress}
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
      <Blur></Blur>
    </FilterDiv>
  );
};

export default Filter;
