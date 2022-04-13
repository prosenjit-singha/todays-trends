import styled from "styled-components";
import { animated } from "react-spring";
import { neutral, green } from "../../Utiles/Colors";
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
  border-bottom: 1px solid ${neutral[900]};
`;
export const Options = styled(animated.div)`
  //overflow: hidden;
  max-height: 250px;
  background-color: ${neutral[800]};
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${neutral[900]};
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${neutral[700]};
    border-radius: 2px;
    &:hover {
      background-color: ${neutral[700]};
    }
  }
`;
export const OptionContainer = styled(animated.div)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 1;
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
  color: ${neutral[800]};
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