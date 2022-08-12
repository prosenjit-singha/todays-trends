import styled from "styled-components";
import { device } from "../../../../utils/device";
import { margin } from "../../../../styles/global-constants";
import { animated } from "react-spring";
import { red } from "@mui/material/colors";
import { redG } from "../../../../utils/gradient-colors";
import { Button as BTN } from "../../../../styles/button";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media ${device.tabletM} {
    flex-direction: row;
  }
`;
export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: blue; */
  padding: ${margin};
  @media ${device.tabletM} {
    width: 65%;
  }
  @media ${device.laptop} {
    width: 75%;
  }
`;
export const Side = styled.div`
  width: 100%;
  min-height: fit-content;
  padding: 1.8rem;
  @media ${device.tabletM} {
    width: auto;
    width: 35%;
  }
  @media ${device.laptop} {
    width: 25%;
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
  flex-wrap: wrap;
  gap: 5px;
  @media ${device.tablet} {
    gap: 0;
    flex-wrap: nowrap;
  }
`;

export const Button = styled(BTN)`
  padding: 0.5rem 1rem;
  height: fit-content;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.25rem;
  margin-block: 0;
  transition: color 300ms ease, background 300ms ease, border 300ms ease;
  @media ${device.tablet} {
    font-size: 1.2rem;
    border-top-left-radius: ${(props) =>
      props.data_btn_id === "first" ? "0.2rem" : "0rem"};
    border-bottom-left-radius: ${(props) =>
      props.data_btn_id === "first" ? "0.2rem" : "0rem"};
    border-top-right-radius: ${(props) =>
      props.data_btn_id === "last" ? "0.2rem" : "0rem"};
    border-bottom-right-radius: ${(props) =>
      props.data_btn_id === "last" ? "0.2rem" : "0rem"};
    border: 1px solid hsla(1, 83%, 63%, 0.2);
    border-right: ${(props) => (props.data_btn_id === "last" ? "" : "none")};

    &:hover {
      color: ${(props) =>
        props.isactive === "true" ? props.theme.light : props.theme.accent};
      background: ${(props) =>
        props.isactive === "true"
          ? "hsla(1, 83%, 60%,1)"
          : "hsla(1, 83%, 63%,0.15)"};
      border: 1px solid hsla(1, 83%, 63%, 0.25);
      border-right: ${(props) => (props.data_btn_id === "last" ? "" : "none")};
    }
  }
  @media ${device.laptop} {
    &::before,
    &::after {
      display: none;
    }
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

export const Date = styled.p`
  color: ${(props) => props.theme.text.secondary};
  margin: 0;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.3rem;
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const Badge = styled.button`
  padding: 0.24rem 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  background-image: ${redG};
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;
export const ItemTitle = styled.a`
  font-size: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const Title = styled(ItemTitle)`
  color: rgba(255, 255, 255, 0.9);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
export const SubTitle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.secondary};
`;

export const HeaderImage = styled.div`
  color: rgba(255, 255, 255, 0.9);
  grid-row: 1 / span 2;
  position: relative;
  overflow: hidden;
  border-radius: 0.3rem;
  &:hover > ${Image} {
    transform: scale(1.1);
  }
  & ${SubTitle}, ${Date} {
    color: rgba(255, 255, 255, 0.8);
  }
`;
