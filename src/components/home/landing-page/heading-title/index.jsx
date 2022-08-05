import React from "react";
import styled from "styled-components";
import { redG } from "../../../../utils/gradient-colors";

const TitleContainer = styled.div`
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
`;
const DoubleLine = styled.div`
  width: 100%;
  height: 0.5rem;
  border-block: 2px solid gray; //dont forget to adjust the color
`;
const Title = styled.h1`
  margin: 0;
  margin-right: 0.5rem;
  min-width: fit-content;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;
  color: ${(props) => props.theme.text};
  //background: -webkit-linear-gradient(#eee, #333);
  background-image: ${redG};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
`;
const HeadingTitle = ({ children, fontSize }) => {
  return (
    <TitleContainer>
      <Title fontSize={fontSize}>{children}</Title>
      <DoubleLine />
    </TitleContainer>
  );
};

export default HeadingTitle;
