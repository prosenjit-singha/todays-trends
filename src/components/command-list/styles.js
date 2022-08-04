import styled from "styled-components";
import { boxShadow } from "../../utils/functions";
import { red } from "@mui/material/colors";
import { device } from "../../utils/device";
import { margin } from "../../styles/global-constants";

export const Blocks = styled.section`
  //outline: 1px solid red;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  margin: ${margin};
  margin-bottom: 1rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptopM} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const Blocks2 = styled(Blocks)`
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
  @media ${device.laptopM} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Block = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.forground};
  border: 1px solid ${(props) => props.theme.forground};
  backdrop-filter: blur(10px);
  box-shadow: ${boxShadow.default()};
  //margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  display: inline-block;
  grid-column: 1/-1;
  grid-row: 1/2;
  color: ${red[400]};
  text-align: center;
  padding-bottom: 0.15em;
  background-color: ${(props) => props.theme.forground};
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.forgroundShadow};
  backdrop-filter: blur(10px);
`;

export const Headline = styled.h3`
  padding-block: 0.15em;
`;

export const Body = styled.ul`
  list-style: inside;
`;

export const Text = styled.li``;
