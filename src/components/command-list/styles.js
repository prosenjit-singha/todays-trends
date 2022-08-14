import styled from "styled-components";
import { red } from "@mui/material/colors";
import { redG } from "../../utils/gradient-colors";
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
  margin-block: 0.5rem;
`;

export const Title = styled.h1`
  color: ${red[400]};
  text-align: Left;
  font-family: Inter;
  font-weight: bold;
  margin-bottom: 0.15em;
  background-image: ${redG};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
`;

export const Headline = styled.h4`
  margin-block: 0.15em;
`;

export const Body = styled.ul`
  list-style: inside;
`;

export const Text = styled.li`
  font-size: 1.2rem;
`;
