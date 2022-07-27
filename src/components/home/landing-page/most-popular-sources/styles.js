import styled from "styled-components";
import { device } from "../../../../utils/device";
import { margin } from "../../../../styles/global-constants";
import { animated } from "react-spring";

export const Title = styled.h1`
  margin-right: 0.5rem;
  min-width: fit-content;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;
export const Container = styled.div`
  width: 100%;
  height: fit-content;
  @media ${device.tablet} {
    display: flex;
  }
`;
export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: blue; */
  padding: ${margin};
  @media ${device.tablet} {
    width: auto;
    flex-basis: 80%;
  }
`;
export const Side = styled.div`
  background-color: red;
  width: 100%;
  min-height: 100vh;
  @media ${device.tablet} {
    width: auto;
    flex-basis: 20%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  width: fit-content;
`;

export const Button = styled(animated.button)`
  padding: 0.5rem 1rem;
  height: fit-content;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border-top-left-radius: ${(props) =>
    props.data_btn_id === "first" ? "0.2rem" : "0rem"};
  border-bottom-left-radius: ${(props) =>
    props.data_btn_id === "first" ? "0.2rem" : "0rem"};
  border-top-right-radius: ${(props) =>
    props.data_btn_id === "last" ? "0.2rem" : "0rem"};
  border-bottom-right-radius: ${(props) =>
    props.data_btn_id === "last" ? "0.2rem" : "0rem"};
  border: 1px solid red;
  border-right: ${(props) => (props.data_btn_id === "last" ? "" : "none")};
`;
export const TitleContainer = styled.div`
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
`;
export const DoubleLine = styled.div`
  width: 100%;
  height: 0.5rem;
  border-block: 2px solid gray; //dont forget to adjust the color
`;
