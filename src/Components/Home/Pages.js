import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../utiles/functions";
import Button from "../Button/Button";

const Container = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
`;
const Item = styled.button`
  position: relative;
  color: ${(props) => props.theme.text};
  font-size: 1.1rem;
  font-weight: bold;
  width: auto;
  padding: 0.4rem 1rem;
  margin: 0.2rem 0.5rem;
  text-align: center;
  border: none;
  //border: 1px solid ${(props) => props.theme.forground};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.forground};
  box-shadow: ${boxShadow.default()};
  //z-index: 2;
  &::before {
    content: "${(props) => props.text}";
    color: red;
    position: absolute;
    padding: 0.4rem 1rem;
    background: ${(props) => props.theme.success};
    max-height: 0;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    //z-index: 4;
    overflow: hidden;
    transition: max-height 300ms ease;
  }
  &:hover::before {
    max-height: 40px;
  }
`;

// const Button = styled(Item)`
//   width: auto;
//   text-align: center;
//   padding: 0 0.8rem;
// `;

const Pages = ({ totalResults }) => {
  const fontSize = 1.2;
  const limit = parseInt(totalResults / 10);
  return (
    <Container>
      <Button fontSize={fontSize}>Previous</Button>
      {[...Array(limit)].map((element, index) => (
        <Button key={index} fontSize={fontSize} width={3}>
          {index + 1}
        </Button>
      ))}
      <Button fontSize={fontSize}>Next</Button>
    </Container>
  );
};

export default Pages;
