import styled from "styled-components";
import { device } from "../../../../../utils/device";

export const Main = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-gap: 0.5rem;
  margin-top: 1rem;
`;
export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.3rem;
  @media ${device.laptop} {
    width: 50%;
  }
`;
export const Item = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  @media ${device.tablet} {
    height: 15rem;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const SubTitle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.secondary};
`;
