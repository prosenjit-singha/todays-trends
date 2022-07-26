import styled from "styled-components";
import { device } from "../../../../utils/device";
import { margin } from "../../../../styles/global-constants";

export const Sources = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: gray;
`;
export const Title = styled.h1`
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
  background-color: blue;
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
