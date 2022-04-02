import styled from "styled-components";
import { animated } from "react-spring";
import { colors } from "../Styles/Variables";

export const CardContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid ${colors.neutral[900]};
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.1),
    inset 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 5px 0px rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  height: fit-content;
`;

const tbrl = "10px";

export const Card = styled(animated.div)`
  /* display: flex;
  flex-direction: column; */
  height: 30rem;
  position: relative;
  max-height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  //background-color: ${colors.yellow[300]};
  //overflow: hidden;
`;

export const GlowEffect = styled(animated.a)`
  will-change: box-shadow, background-image;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 0.5rem;
  z-index: 7;
`;

export const Image = styled(animated.div)`
  position: relative;
  width: auto;
  flex-basis: 450px;
  background-image: url("${(props) => props.image}");
  display: block;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: blur(5px); */
  &::after {
    position: absolute;
    content: "${(props) => ("0" + (props.index + 1)).slice(-2)}";
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.6);
    font-size: 10rem;
    font-family: "Anton", sans-serif;
    //background-color: red;
    text-align: end;
    letter-spacing: 0;
    -webkit-text-stroke: 2px rgba(0, 0, 0, 0.1);
    top: -2rem;
    right: 1rem;
  }
`;

export const Content = styled(animated.div)`
  will-change: max-height;
  position: relative;
  display: flex;
  flex-direction: column;
  //width: 100%;
  height: 50%;
  flex-basis: 100%;
  padding: 1.5rem 1.5rem;
  margin-bottom: 0.8rem;
  max-height: auto;
  overflow: hidden;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  z-index: 6;
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
  bottom: 0;
`;
export const Desc = styled.div`
  font-size: 1rem;
  text-align: justify;
  z-index: 3;
`;

export const ReadMore = styled(animated.a)`
  will-change: box-shadow, font-weight;
  position: absolute;
  border-bottom-left-radius: 0.65rem;
  border-bottom-right-radius: 0.65rem;
  height: 2.8rem;
  width: 100%;
  padding-top: 1rem;
  background-color: rgba(255, 196, 0, 1);
  text-align: center;
  text-decoration: none;
  color: ${colors.neutral[900]};
  z-index: 5;
  bottom: 0rem;
  &:hover {
    color: ${colors.neutral[900]};
  }
`;
export const Shine = styled(animated.div)`
  position: absolute;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 2.8rem;
  width: 100%;
  padding-top: 1rem;
  z-index: 5;
  bottom: 0rem;
  //opacity: 0.5;
`;

export const ContentWrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 30rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  //background-color: blue;
  background-color: ${colors.neutral[800]};
  z-index: 6;
`;
