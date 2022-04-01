import styled from "styled-components";
import { animated } from "react-spring";
import { colors } from "../Styles/Variables";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.neutral[900]};
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.1),
    inset 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 5px 0px rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  min-height: 500px;
`;

const tbrl = "10px";
export const Card = styled.div`
  border: 2px solid ${colors.neutral[900]};
  border-radius: 0.5rem;
  background-color: ${colors.neutral[800]};
  overflow: hidden;
  position: absolute;
  padding: 0.5rem;
  transform: translateY(0);
  box-shadow: none;
  top: ${tbrl};
  bottom: ${tbrl};
  left: ${tbrl};
  right: ${tbrl};
  transition: transform, box-shadow, 300ms ease-in-out;
  &:hover {
    transform: translateY(-5%);
    box-shadow: 10px 15px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 190px;
  background-image: url(${(props) => props.imgURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Source = styled.span`
  font-size: 1.3rem;
`;

export const Date = styled.span`
  font-size: 1.25rem;
  font-style: italic;
`;
export const Title = styled.h1`
  font-size: 1.25rem;
`;
export const Desc = styled.p`
  font-size: 1rem;
  z-index: 3;
`;

export const ReadMore = styled.button`
  border: 0;
  padding: 0;
`;
