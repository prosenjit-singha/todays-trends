import styled from "styled-components";
import { animated } from "react-spring";
const borderRadius = "0.3rem";

const dark = "hsla(265, 5%, 15%, 0.7)";
const light = "hsla(0, 5%, 90%, 0.8)";

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
  background-color: ${(props) => (props.theme.name === "dark" ? dark : light)};
  backdrop-filter: blur(20px);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.25)"};
    border-radius: 2px;
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
  height: 30px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  background-color: ${(props) => props.bg};
  border-radius: ${borderRadius};
  padding: 0.2rem 0.75rem;
  cursor: pointer;
`;
export const Select = styled.div`
  color: inherit;
  font-family: Poppins;
  font-weight: bold;
  text-transform: capitalize;
`;
export const Title = styled.div`
  text-transform: capitalize;
  text-align: center;
`;
export const Container = styled(animated.div)`
  position: relative;
  min-width: 160px;
  height: fit-content;
`;
