import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  FilterDiv,
  Label,
  TextField,
  Button,
  BlockContainer,
  Block,
  SearchBlock,
} from "./filterStyle";
import Dropdown from "../../Dropdown/Dropdown";
import { useRippleEffect } from "../../RippleEffect";
import { red } from "../../../utiles/Colors";

const Filter = ({
  country,
  setCountry,
  category,
  setCategory,
  source,
  setSource,
  keyword,
  setKeyword,
}) => {
  const themeStyle = useSelector((state) => state.theme);
  const background = red[400];
  const searchRef = useRippleEffect();
  const searchBoxRef = useRef();
  const [tempCountry, setTempCountry] = useState(country);
  const [tempCategory, setTempCategory] = useState(category);
  const [tempSource, setTempSource] = useState(source);

  //functions
  const handleSearch = () => {
    setCountry({ ...country, selected: tempCountry.selected });
    setCategory({ ...category, selected: tempCategory.selected });
    setSource({ ...source, selected: tempSource.selected });
    setKeyword(searchBoxRef.current.value);
  };
  return (
    <FilterDiv>
      <BlockContainer>
        <Block>
          {/* Country */}
          <Label>Country</Label>
          <Dropdown
            data={tempCountry}
            handleData={setTempCountry}
            background={background}
          />
        </Block>

        <Block>
          {/* categories */}
          <Label>Category</Label>
          <Dropdown
            data={tempCategory}
            handleData={setTempCategory}
            background={background}
          />
        </Block>

        <Block>
          <Label>Source</Label>
          <Dropdown
            data={tempSource}
            handleData={setTempSource}
            background={background}
          />
        </Block>
        {/* sources */}
      </BlockContainer>

      <SearchBlock>
        {/* searchbox */}
        <TextField ref={searchBoxRef} placeholder="keyword/phrase" />
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

export default React.memo(Filter);
