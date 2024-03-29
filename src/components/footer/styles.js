import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../utils/device";
import { red, blueGrey } from "@mui/material/colors";

export const Footer = styled.footer`
  position: relative;
  width: auto;
  border-top: 1px solid ${(props) => props.theme.forground};
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
    props.theme.darkMode ? blueGrey[900] : blueGrey[300]};
  backdrop-filter: blur(10px);
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
  color: ${(props) => props.theme.inactiveLink};
  font-weight: 500;
  text-decoration: none;
  transition: color 300ms ease;
  &.${(props) => props.active_class_name} {
    color: ${(props) => props.theme.activeLink};
    font-weight: 600;
  }
  &:hover {
    color: ${(props) => props.theme.activeLink};
    text-decoration: underline;
  }
`;
export const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 3/4;
  gap: 0.5rem;
  @media ${device.tabletM} {
    flex-direction: row;
    justify-content: center;
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

export const Rights = styled.p`
  grid-row: 4/5;
  font-family: Poppins;
  text-align: center;
  font-size: 1rem;
  padding: 0 1rem;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.forground};
  font-weight: 400;
  color: ${(props) => props.theme.text};
  @media ${device.tabletM} {
    grid-row: 3/-1;
    grid-column: 1/-1;
  }
`;
export const Hr = styled.div`
  background-color: ${red[500]};
  border-radius: 2px;
  height: 3px;
  width: 90%;
  margin: 8px 0rem;
  @media ${device.tabletM} {
    display: none;
  }
`;
export const Title = styled.h3`
  font-family: Inter;
  font-weight: bold;
  margin: 0;
  /* margin-right: 0.5rem; */
  color: ${(props) => props.theme.text.primary};
`;
