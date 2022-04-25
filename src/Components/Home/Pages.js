import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Item = styled.button`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  width: 2rem;
  padding: 0 0.5rem;
  margin: 0.2rem 0.5rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.forgroundHighlight};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.forground};
  box-shadow: 4px 4px 5px 0px ${(props) => props.theme.backgroundShadow},
    -4px -4px 5px 0px ${(props) => props.theme.backgroundHighlight};
`;

const Button = styled(Item)`
  width: auto;
  padding: 0 0.8rem;
`;

const Pages = ({ totalResults }) => {
  const limit = parseInt(totalResults / 10);
  return (
    <Container>
      <Button>Previous</Button>
      {[...Array(limit)].map((element, index) => (
        <Item key={index}>{index + 1}</Item>
      ))}
      <Button>Next</Button>
    </Container>
  );
};

export default Pages;
