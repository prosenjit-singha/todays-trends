// filter styles
import { animated } from "react-spring";
import styled from "styled-components";
import { device } from "../../../utils/device";
import { boxShadow } from "../../../utils/functions";

const smDevice = `(max-width: 1035px)`;
// const giveOuterShadow = (positive, color) => {
//   if (positive) return `3px 3px 5px ${color}`;
//   else return `-3px -3px 5px ${color}`;
// };

export const FilterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.forground};
  background-color: ${(props) => props.theme.forgroundShadow};
  box-shadow: ${boxShadow.default()};
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
export const TextField = styled.input`
  width: 180px;
  height: 30.38px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  &:focus-visible {
    outline: none;
  }
`;
export const Button = styled.button`
  width: 5rem;
  color: ${(props) => props.theme.text};
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${(props) => props.background};
`;

export const Blocks = styled.div`
  //min-width: 700px;
  outline: 2px solid white;
  width: fit-content;
  //position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //justify-content: space-between;

  //flex-wrap: wrap;
  @media ${device.tabletM} {
    flex-direction: row;
    align-items: center;
  }
`;
export const Block = styled.div`
  width: 100%;
  //background-color: blue;
  display: flex;
  @media ${smDevice} {
    justify-content: space-around;
    padding-bottom: 0.25rem;
    margin-bottom: 0.25rem;
    border-bottom: 2px solid ${(props) => props.theme.forgroundShadow};
  }
`;
export const BlockContainer = styled(animated.div)`
  //overflow: hidden;
  width: fit-content;
`;
export const SearchBlock = styled(Block)`
  justify-content: end;
  @media ${smDevice} {
    justify-content: space-around;
  }
`;
