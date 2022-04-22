import React, { useRef, useState } from "react";
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
import { lightGreen, blue, pink } from "../../../Utiles/Colors";

//const smDevice = `(max-width: 790px)`;

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
  console.log("Filter Rendered!");
  const searchRef = useRippleEffect();
  const searchBoxRef = useRef();
  const [tempCountry, setTempCountry] = useState(country);
  const [tempCategory, setTempCategory] = useState(category);
  const [tempSource, setTempSource] = useState(source);

  //functions
  const handleSearch = () => {
    // console.log("Country: ", tempCountry.selected);
    // console.log("Category: ", tempCategory.selected);
    // console.log("Source: ", tempSource.selected);
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
            background={blue[500]}
          />
        </Block>

        <Block>
          {/* categories */}
          <Label>Category</Label>
          <Dropdown
            data={tempCategory}
            handleData={setTempCategory}
            background={lightGreen[700]}
          />
        </Block>

        <Block>
          <Label>Source</Label>
          <Dropdown
            data={tempSource}
            handleData={setTempSource}
            background={pink[300]}
          />
        </Block>
        {/* sources */}
      </BlockContainer>

      <SearchBlock>
        {/* searchbox */}
        <TextField ref={searchBoxRef} placeholder="keyword/phrase" />
        <Button ref={searchRef} type="button" onClick={handleSearch}>
          Search
        </Button>
      </SearchBlock>
    </FilterDiv>
  );
};

export default React.memo(Filter);
