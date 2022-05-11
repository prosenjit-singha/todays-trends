import styled from "styled-components";
import { animated } from "react-spring";
const borderRadius = "0.4rem";

export const Label = styled.label`
  text-transform: capitalize;
  user-select: none;
  width: 100%;
  padding: 0.2rem 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Radio = styled.input`
  display: none;
`;
export const Option = styled(animated.div)`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.background};
`;
export const Options = styled(animated.div)`
  //overflow: hidden;
  max-height: 250px;
  background-color: ${(props) => props.theme.forground};
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.forgroundHighlight};
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.backgroundShadow};
    border-radius: 2px;
    &:hover {
      background-color: ${(props) => props.theme.background};
    }
  }
`;
export const OptionContainer = styled(animated.div)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2;
  border-radius: ${borderRadius};
  margin-top: 0.2rem;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;
export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.bg};
  border-radius: ${borderRadius};
  padding: 0.2rem 0.75rem;
  cursor: pointer;
`;
export const Select = styled.div`
  color: ${(props) => props.theme.text};
  text-transform: capitalize;
`;
export const Title = styled.div`
  text-transform: capitalize;
  text-align: center;
`;
export const Container = styled(animated.div)`
  position: relative;
  width: 160px;
  height: fit-content;
`;
