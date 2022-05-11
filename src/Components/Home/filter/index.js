import React, { useRef, useState, useEffect } from "react";
import { useBreakpoint } from "react-use-size";
import { useSelector, useDispatch } from "react-redux";
import {
  setCountry,
  setCategory,
  setSource,
  setKeyword,
} from "../../../redux/features/filter/filter-slice";
import {
  FilterDiv,
  Label,
  TextField,
  Button,
  BlockContainer,
  Block,
  Blocks,
  SearchBlock,
} from "./style";
import Dropdown from "../../dropdown";
import { useRippleEffect } from "../../ripple-effect";
import { red } from "../../../utils/colors";
import { fetchArticles } from "../../../redux/features/news/news-slice";
import { useSpring } from "react-spring";
import { useMeasure } from "../../../utils/helpers";

const getString = (data) => {
  if (typeof data === "string")
    if (data !== "") return "everything?q=" + data.split(" ").join("-") + "&";
    else return "";
  if (data.selected === "All") return "top-headlines?";
  else {
    return "&" + data.id + "=" + data.list[data.selected];
  }
};

const Filter = () => {
  const data = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isOpenSB, setIsOpenSB] = useState(false);
  const [blocksRef, { height: blockHeight, width: blockWidth }] = useMeasure();
  const isTabletM = useBreakpoint(790);
  const background = red[400];
  const searchRef = useRippleEffect();
  const searchBoxRef = useRef();
  const [tempCountry, setTempCountry] = useState(data.country);
  const [tempCategory, setTempCategory] = useState(data.category);
  const [tempSource, setTempSource] = useState(data.source);

  //functions
  const resetCC = () => {
    setTempCountry({ ...tempCountry, selected: "All" });
    setTempCategory({ ...tempCategory, selected: "All" });
  };
  const resetS = () => {
    setTempSource({ ...tempSource, selected: "All" });
  };
  const handleOnChange = (e) => {
    if (e.target.value !== "") {
      resetCC();
      resetS();
    }
  };
  const handleClick = (e) => {
    //console.log("addEventListener");
    setIsOpenSB(true);
    const handleListener = (e) => {
      if (e.target !== searchBoxRef.current) {
        //console.log("removeEventListener");
        setIsOpenSB(false);
        document.removeEventListener("click", handleListener);
      }
    };
    document.addEventListener("click", handleListener);
  };
  const handleSearch = () => {
    dispatch(setCountry(tempCountry.selected));
    dispatch(setCategory(tempCategory.selected));
    dispatch(setSource(tempSource.selected));
    dispatch(setKeyword(searchBoxRef.current.value));
    const params = {
      country: getString(tempCountry),
      category: getString(tempCategory),
      source: getString(tempSource),
      keyword: getString(searchBoxRef.current.value),
    };
    dispatch(fetchArticles(params));
    //handleAPI();
  };
  //animation
  const blockStyle = useSpring({
    //maxHeight: blockHeight,
    //maxWidth: blockWidth,
  });
  console.log("Block Height", blockHeight);
  console.log("Block Width", blockWidth);

  return (
    <FilterDiv>
      <BlockContainer>
        <Blocks {...blocksRef}>
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

          <Block>
            <Label>Source</Label>
            <Dropdown
              data={tempSource}
              handleData={setTempSource}
              reset={resetCC}
              background={background}
            />
          </Block>
          {/* sources */}
        </Blocks>
      </BlockContainer>

      <SearchBlock>
        {/* searchbox */}
        <TextField
          ref={searchBoxRef}
          placeholder="keyword/phrase"
          onClick={handleClick}
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
      </SearchBlock>
    </FilterDiv>
  );
};

export default Filter;
