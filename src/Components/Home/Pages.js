import React from "react";
import styled from "styled-components";
import { neutral } from "../../Utiles/Colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Item = styled.button`
  color: ${neutral[200]};
  width: 2rem;
  padding: 0 0.5rem;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  background-color: ${neutral[700]};
  margin: 0.1rem 0.25rem;
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
