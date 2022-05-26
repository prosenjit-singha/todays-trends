import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { lightGreen, orange } from "../../utils/colors";
import { device } from "../../utils/device";

const smDevice = "791px";

export const Footer = styled.footer`
  position: relative;
  width: auto;
  //height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  width: 100%;
  justify-content: center;
  min-height: 100px;
  max-height: fit-content;
  background-color: ${(props) =>
    props.theme.name === "dark" ? lightGreen[1000] : orange[400]};
  padding-top: 0.8rem;
  z-index: 10;
  overflow: hidden;
  @media ${device.tabletM} {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

export const BriefAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: 1/2;
  @media ${device.tabletM} {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;
export const TextBox = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  //font-weight: lighter;
  width: 85%;
  color: ${(props) => props.theme.text};
  text-align: center;
`;
export const UsefulLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: 2/3;
  @media ${device.tabletM} {
    align-items: start;
    grid-row: 1/3;
    grid-column: 2/3;
    padding-top: 1rem;
    height: 100%;
  }
`;

export const FLink = styled(NavLink)`
  color: ${(props) => props.theme.link};
  font-weight: 500;
  text-decoration: none;
  transition: color 300ms ease;
  &.${(props) => props.active_class_name} {
    color: white;
  }
  &:hover {
    color: white;
  }
`;
export const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 3/4;
  @media ${device.tabletM} {
    flex-direction: row;
    justify-content: center;
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

export const Rights = styled.span`
  display: flex;
  justify-content: center;
  grid-row: 4/5;
  text-align: center;
  padding: 0.5rem 0rem;
  padding-bottom: 1rem;
  font-weight: lighter;
  color: ${(props) => props.theme.text};
  @media ${device.tabletM} {
    grid-row: 3/-1;
    grid-column: 1/-1;
  }
`;
export const Hr = styled.div`
  background-color: rgb(6 36 40);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6),
    -2px -2px 2px rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  height: 3px;
  width: 90%;
  margin: 8px 0rem;
  @media ${device.tabletM} {
    display: none;
  }
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.text};
`;
