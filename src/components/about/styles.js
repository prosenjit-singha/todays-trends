import styled from "styled-components";
import { boxShadow } from "../../utils/functions";
import { device } from "../../utils/device";

export const Section = styled.section`
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.forground};
  backdrop-filter: blur(15px);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: ${boxShadow.default()};
  @media ${device.tabletM} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;
export const Block = styled.div`
  padding: 1rem;
  @media ${device.tabletM} {
    grid-column: ${(props) => (props.position === "on-left" ? 1 / 2 : 2 / -1)};
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  padding-bottom: 1rem;
  @media ${device.tabletM} {
    font-size: 2rem;
  }
`;
export const Text = styled.p`
  text-align: justify;
  @media ${device.tabletM} {
    font-size: 1.5rem;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), hsla(0, 0%, 15%, 1)),
    url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  @media ${device.tabletM} {
    background-image: url(${(props) => props.src});
    margin-bottom: 0;
    grid-column: ${(props) => (props.position === "on-left" ? 1 / 2 : 2 / -1)};
    height: 100%;
  }
`;
