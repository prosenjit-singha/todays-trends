import React from "react";
import styled from "styled-components";

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
  margin-right: 0.5rem;
  min-width: fit-content;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;
  color: ${(props) => props.theme.text};
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
