import styled from "styled-components";
import { device } from "../utils/device";
export const Container = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 95vh;
`;

export const Section = styled.section`
  width: 100%;
  margin-block: 1rem;
  padding-block: 1rem;
  padding-inline: 2.5rem;
  @media ${device.tablet} {
    padding-inline: 5rem;
  }
  @media ${device.laptop} {
    padding-inline: 8rem;
  }
`;
export const NavBarSpace = styled.div`
  height: 51.19px;
`;
