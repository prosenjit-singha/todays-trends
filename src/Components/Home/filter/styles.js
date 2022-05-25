// filter styles
import { animated } from "react-spring";
import styled from "styled-components";
import { device } from "../../../utils/device";
import { boxShadow } from "../../../utils/functions";

export const FilterDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr;
  margin-bottom: 1.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  box-shadow: ${boxShadow.default()};
  background-color: ${(props) => props.theme.forgroundShadow};
  border: 1px solid ${(props) => props.theme.forgroundShadow};
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 6rem;
    grid-template-rows: 1fr;
  }
`;
export const CountryContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  @media ${device.tabletS} {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;
export const CategoryContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  @media ${device.tabletS} {
    grid-column: 2/-1;
    grid-row: 1/2;
  }
  @media ${device.tablet} {
    grid-column: 2/3;
  }
`;
export const SourceContainer = styled(animated.div)`
  grid-column: 1/-1;
  grid-row: 3/4;
  @media ${device.tabletS} {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 1/2;
  }
`;

export const TextField = styled.input`
  width: 180px;
  height: 30px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  justify-self: center;
  grid-column: 1/2;
  grid-row: 4/5;
  &:focus-visible {
    outline: none;
  }
  @media ${device.tabletS} {
    width: 95%;
    grid-column: 2/-1;
    grid-row: 2/3;
  }
  @media ${device.tablet} {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  @media ${device.laptop} {
    width: 95%;
    justify-self: center;
    //margin-left: 10px;
    grid-column: 4/5;
    grid-row: 1/2;
  }
`;
export const Button = styled.button`
  width: 5rem;
  height: 30px;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  margin-left: 0.5rem;
  justify-self: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${(props) => props.background};
  grid-column: 2/-1;
  grid-row: 4/5;
  @media ${device.tabletS} {
    margin-right: 0.3rem;
    justify-self: end;
    grid-column: 2/-1;
    grid-row: 4/5;
  }
  @media ${device.tablet} {
    width: 160px;
    grid-column: 3/4;
    grid-row: 2/3;
  }
  @media ${device.laptop} {
    width: 5rem;
    grid-column: 5/6;
    grid-row: 1/2;
  }
`;
export const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: none;
  @media ${device.tabletM} {
    flex-direction: row;
  }
`;
export const Label = styled.label`
  color: ${(props) => props.theme.text};
  padding: 0 0.5rem;
  padding-top: 0.2rem;
  margin: 0;
`;

export const Block = styled.div`
  width: 100%;
  //background-color: blue;
  display: flex;
  justify-content: space-around;
  padding-bottom: 0.25rem;
  margin-bottom: 0.25rem;
  //border-bottom: 2px solid ${(props) => props.theme.background};
  @media ${device.laptop} {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const SearchBlock = styled(Block)`
  justify-content: space-around;
  @media ${device.tabletM} {
    justify-content: end;
  }
`;