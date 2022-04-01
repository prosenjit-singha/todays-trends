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
  min-height: 510px;
`;

const tbrl = "10px";

export const Card = styled(animated.div)`
  will-change: transform, box-shadow;
  //border: 2px solid ${colors.neutral[900]};
  border-radius: 0.5rem;
  background-color: ${colors.neutral[800]};
  overflow: hidden;
  position: absolute;
  padding: 0.5rem;
  transform: translateY(0);
  //box-shadow: inset 4px 4px 5px 0px rgba(255, 255, 255, 0.1),
  //  inset -4px -4px 5px 0px rgba(0, 0, 0, 0.3);
  top: ${tbrl};
  bottom: ${tbrl};
  left: ${tbrl};
  right: ${tbrl};
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.imgURL});
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    content: "${(props) => props.index}";
    position: absolute;
    color: rgba(255, 255, 255, 0.6);
    font-size: 10rem;
    font-family: "Anton", sans-serif;
    letter-spacing: 0;
    -webkit-text-stroke: 2px rgba(0, 0, 0, 0.1);
    top: -2rem;
    right: 15px;
  }
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
  position: absolute;
  border: 0;
  border-radius: 0.8rem;
  padding: 0.2rem 0.5rem;
  background-color: ${colors.yellow[300]};
  bottom: ${tbrl};
  right: ${tbrl};
  box-shadow: none;
  transition: box-shadow, font-weight 250ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 1rem ${colors.yellow[300]};
    font-weight: bold;
  }
`;
