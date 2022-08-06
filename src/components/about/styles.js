import styled from "styled-components";
import { device } from "../../utils/device";
import Hero from "../../img/hero/hero-9.jpg";
import { Section } from "../../styles/containers";

export const Header = styled(Section)`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: flex-start;
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;

  @media ${device.tablet} {
    min-height: 50vh;
  }

  @media ${device.laptop} {
    min-height: 70vh;
  }
`;
export const Content = styled.div``;
export const HeaderContent = styled(Content)`
  width: 80%;
  margin-top: auto;
  @media ${device.tablet} {
    width: 50%;
  }
`;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-family: Nexa;
  font-weight: bolder;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const IconContainer = styled.div`
  height: 10rem;
  width: 10rem;
`;
export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Grid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: row;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  @media ${device.laptop} {
  }
`;

export const ItemTitle = styled.h4`
  font-family: Nexa;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;
export const Item = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.background.paper};
`;

export const Image = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 0.25rem;
  object-fit: cover;
  aspect-ratio: 16/9;
  @media ${device.laptop} {
    width: 50%;
  }
`;
export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const FooterTitle = styled(Title)`
  text-align: left;
`;
export const FooterText = styled(Text)`
  text-align: justify;
`;

export const FooterSection = styled(Section)`
  background-image: linear-gradient(135deg, #6111cb12, #ff004d0f);
`;
