import styled from "styled-components";
import { animated } from "react-spring";

//mobile first approch
export const Grid = styled.div`
  //margin-top: 2rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
`;

export const GridItem = styled.div`
  display: flex;
`;
