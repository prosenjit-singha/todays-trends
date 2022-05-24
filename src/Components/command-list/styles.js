import styled from "styled-components";
import { boxShadow } from "../../utils/functions";
import { red } from "../../utils/colors";
import { device } from "../../utils/device";
import { BsQuestionSquareFill as Icon } from "react-icons/bs";

const calGrid = (string) => {
  if (string === "nc") return `1fr 1fr`;
  if (string === "ac") return `1fr`;
};

export const Blocks = styled.div`
  //outline: 1px solid red;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  margin-bottom: 2rem;
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
  background-color: ${(props) => props.theme.forgroundShadow};
  box-shadow: ${boxShadow.default()};
  //margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  grid-column: 1/-1;
  grid-row: 1/2;
  color: ${red[400]};
  text-align: center;
  padding-bottom: 0.15em;
`;

export const Headline = styled.h3`
  padding-block: 0.15em;
`;

export const Body = styled.ul`
  list-style: inside;
`;

export const Text = styled.li``;
