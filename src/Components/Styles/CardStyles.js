import styled from "styled-components";
import { animated } from "react-spring";
import { colors } from "../Styles/Variables";

//const tbrl = "10px";

export const CardContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid ${colors.neutral[900]};
  box-shadow: 4px 4px 5px 0px ${(props) => props.theme.backgroundShadow},
    -4px -4px 5px 0px ${(props) => props.theme.backgroundHighlight},
    inset 4px 4px 5px 0px ${(props) => props.theme.backgroundShadow},
    inset -4px -4px 5px 0px ${(props) => props.theme.backgroundHighlight};
  border-radius: 0.5rem;
  height: fit-content;
`;

export const Card = styled(animated.div)`
  /* display: flex;
  flex-direction: column; */
  height: 25rem;
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
  //flex-wrap: wrap;
  flex-direction: column;
  //width: 100%;
  height: 50%;
  flex-basis: 100%;
  padding: 1rem 1rem;
  margin-bottom: 0.8rem;
  max-height: auto;
  overflow: hidden;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  z-index: 6;
`;

export const Source = styled.span`
  float: right;
  font-size: 1rem;
`;

export const Date = styled.span`
  font-size: 0.8rem;
`;
export const Title = styled.h3`
  font-size: 1rem;
  padding-top: 0.5rem;
  bottom: 0;
`;
export const Desc = styled.div`
  font-size: 0.9rem;
  font-weight: lighter;
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
  height: 25rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  //background-color: blue;
  background-color: ${(props) => props.theme.forground};
  border: 1px solid ${(props) => props.theme.background};
  z-index: 6;
`;
