import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const ImageContainer = styled.div`
  width: 100%;
  height: max(80vh, 580px);
  overflow: hidden;
  background-color: hsla(170, 5%, 10%, 1);
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
`;

export const Title = styled.h1`
  font-family: Nexa;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 3rem;
`;
export const Subtitle = styled.p`
  font-family: Poppins;
  font-size: 2rem;
`;

export const Caption = styled(Carousel.Caption)`
  bottom: 10%;
`;
