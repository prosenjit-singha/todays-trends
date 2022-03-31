import styled from "styled-components";
import { animated } from "react-spring";
import { colors } from "../Styles/Variables";
import { style } from "@mui/system";
//mobile first approch
export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8rem;
`;

export const GridItem = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  background-color: ${colors.green[400]};
  box-shadow: 4px 4px 5px 0px black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  height: 190px;
  background-image: url(${(props) => props.imgURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
`;
export const Desc = styled.p`
  font-size: 1rem;
`;
