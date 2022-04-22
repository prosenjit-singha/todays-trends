import styled from "styled-components";

//mobile first approch
export const Grid = styled.div`
  //margin-top: 2rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8rem;
`;

export const GridItem = styled.div`
  display: flex;
`;
