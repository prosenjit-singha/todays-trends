import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "../utils/device";

//const tbrl = "10px";

export const CardContainer = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.5); */
  border-radius: 0.25rem;
  height: fit-content;
  z-index: 1;
`;

export const Card = styled(animated.div)`
  /* display: flex;
  flex-direction: column; */
  height: 25rem;
  position: relative;
  max-height: 100%;
  width: 100%;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.background.paper};
  overflow: hidden;
`;
export const ContentWrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 22.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  //z-index: 6;
`;

export const Image = styled(animated.div)`
  position: relative;
  width: auto;
  flex-basis: 450px;
  background-image: url("${(props) => props.image}");
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: blur(5px); */
  &::after {
    position: absolute;
    content: "${(props) => ("0" + props.index).slice(-2)}";
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.6);
    font-size: 10rem;
    font-family: Anton;
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
  /* gap: 0.5rem; */
  height: 50%;
  flex-basis: 100%;
  padding: 1rem 1rem;
  /* margin-bottom: 0.8rem; */
  max-height: auto;
  overflow: hidden;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  //z-index: 6;
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
  margin-block: 0.5rem;
  bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Desc = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReadMore = styled(animated.a)`
  will-change: box-shadow, font-weight;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  border-radius: 0.25em;
  padding: 0.1em 0.5em;
  height: auto;
  width: auto;
  border: 2px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  text-decoration: none;
  z-index: 5;
  bottom: 0rem;
  //overflow: hidden;
  position: relative;
  transition: color 400ms ease;
  &:visited {
    color: white;
  }
  &:hover {
    color: white;
  }

  @media ${device.tabletM} {
    color: ${(props) => props.theme.accent};
    background-color: ${(props) => props.theme.forground};

    &:visited {
      color: ${(props) => props.theme.accent};
    }
    &:hover {
      color: white;
    }
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 0%;
      left: 0;
      top: 0;
      //border-radius: 0;
      background-color: ${(props) => props.theme.accent};
      z-index: -1;
      transition: width 400ms ease;
    }

    &:hover:before {
      width: 100%;
    }
  }
`;
export const BottomBlock = styled.div`
  position: relative;
  padding: 1em;
  display: flex;
  align-items: center;
  height: 2.8rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.forgroundShadow};
  background-color: ${(props) => props.theme.forground};
  bottom: 0rem;
  z-index: 2;
`;

export const Accuracy = styled.span`
  margin-left: auto;
  color: ${(props) => props.theme.text.secondary};
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  cursor: help;
  //background-color: aqua;
`;

export const Tooltip = styled.div`
  //float: left;
  z-index: 5;
  position: absolute;
  padding: 0.5rem;
  right: 3%;
  bottom: 90%;
  color: white;
  background-color: hsla(0, 2%, 5%, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 0.5rem;
`;
