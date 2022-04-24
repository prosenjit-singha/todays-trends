import styled from "styled-components";
import { yellow } from "../../../Utiles/Colors";

const smDevice = `(max-width: 1035px)`;
// const giveOuterShadow = (positive, color) => {
//   if (positive) return `3px 3px 5px ${color}`;
//   else return `-3px -3px 5px ${color}`;
// };

export const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 1.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme.forground};
  box-shadow: 3px 3px 8px ${(props) => props.theme.backgroundShadow};
  @media ${smDevice} {
    flex-direction: column;
  }
`;
export const Label = styled.label`
  color: ${(props) => props.theme.text};
  padding: 0 0.5rem;
  margin: 0;
`;
export const TextField = styled.input`
  width: 180px;
  height: 30.38px;
  color: ${(props) => props.theme.text};
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  box-shadow: 3px 3px 5px ${(props) => props.theme.forgroundShadow},
    inset 3px 3px 5px ${(props) => props.theme.forgroundShadow},
    -3px -3px 5px ${(props) => props.theme.forgroundHighlight},
    inset -3px -3px 5px ${(props) => props.theme.forgroundHighlight};
  &:focus-visible {
    outline: none;
  }
`;
export const Button = styled.button`
  width: 5rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${yellow[500]};
`;

export const BlockContainer = styled.div`
  //min-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //flex-wrap: wrap;
  @media ${smDevice} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
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
export const SearchBlock = styled(Block)`
  justify-content: end;
  @media ${smDevice} {
    justify-content: space-around;
  }
`;
