import React, { useRef, useState } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import Dropdown from "../Dropdown/Dropdown";
import { useRippleEffect } from "../RippleEffect";
import { neutral, lightGreen, blue, pink, yellow } from "../../Utiles/Colors";

const smDevice = `(max-width: 790px)`;
const giveOuterShadow = (positive, color) => {
  if (positive) return `3px 3px 5px ${color}`;
  else return `-3px -3px 5px ${color}`;
};

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  border-radius: 0.5rem;
  align-items: center;
  background-color: ${neutral[800]};
  box-shadow: ${giveOuterShadow(true, neutral[1000])};
  @media ${smDevice} {
    flex-direction: column;
  }
`;
const Label = styled.label`
  color: ${neutral[200]};
  padding: 0 0.5rem;
  margin: 0;
`;
const TextField = styled.input`
  width: 180px;
  height: 30.38px;
  color: ${neutral[200]};
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  box-shadow: 3px 3px 5px ${neutral[900]}, inset 3px 3px 5px ${neutral[900]},
    -3px -3px 5px ${neutral[700]}, inset -3px -3px 5px ${neutral[700]};
  &:focus-visible {
    outline: none;
  }
`;
const Button = styled.button`
  width: 5rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${yellow[500]};
`;

const BlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${smDevice} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Block = styled.div`
  width: 100%;
  //background-color: blue;
  display: flex;
  @media ${smDevice} {
    justify-content: space-around;
    padding-bottom: 0.25rem;
    margin-bottom: 0.25rem;
    border-bottom: 2px solid ${neutral[900]};
`;
const SearchBlock = styled(Block)`
  justify-content: end;
  @media ${smDevice} {
    justify-content: space-around;
  }
`;
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
