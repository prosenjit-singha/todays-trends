import styled from "styled-components";
import { device } from "../../../../utils/device";
import { margin } from "../../../../styles/global-constants";
import { animated } from "react-spring";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: blue; */
  padding: ${margin};
  @media ${device.tablet} {
    width: auto;
    flex-basis: 75%;
  }
`;
export const Side = styled.div`
  width: 100%;
  min-height: fit-content;
  padding: 1.8rem;
  @media ${device.tablet} {
    width: auto;
    flex-basis: 25%;
  }
`;

export const SideContent = styled.div`
  position: sticky;
  top: 2rem;
  padding-top: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptopM} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: fit-content;
`;

export const Button = styled(animated.button)`
  padding: 0.5rem 1rem;
  height: fit-content;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  font-weight: bold;
  border-top-left-radius: ${(props) =>
    props.data_btn_id === "first" ? "0.2rem" : "0rem"};
  border-bottom-left-radius: ${(props) =>
    props.data_btn_id === "first" ? "0.2rem" : "0rem"};
  border-top-right-radius: ${(props) =>
    props.data_btn_id === "last" ? "0.2rem" : "0rem"};
  border-bottom-right-radius: ${(props) =>
    props.data_btn_id === "last" ? "0.2rem" : "0rem"};
  border: 1px solid hsla(0, 25%, 50%, 0.25);
  border-right: ${(props) => (props.data_btn_id === "last" ? "" : "none")};

  @media ${device.tabletM} {
    font-size: 1.2rem;
  }
`;
export const Main = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 0.5rem;
  margin-top: 1rem;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 300ms ease;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  /* outline: 1px solid red; */
  &:hover ${Image} {
    transform: scale(1.1);
  }
`;

export const HeaderImage = styled.div`
  grid-row: 1 / span 2;
  position: relative;
  overflow: hidden;
  border-radius: 0.3rem;
  &:hover > ${Image} {
    transform: scale(1.1);
  }
`;
export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.3rem;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Badge = styled.button`
  padding: 0.24rem 0.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.accent};
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;
export const ItemTitle = styled.h3`
  cursor: pointer;
`;
export const SubTitle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondaryText};
`;
