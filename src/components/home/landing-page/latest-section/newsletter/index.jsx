import React from "react";
import styled from "styled-components";
import { blue } from "../../../../../utils/colors";
import GradientButton from "../../../../button/gradient-button";

const Container = styled.form`
  width: 100%;
  height: fit-content;
  padding: 2rem 1rem;
  margin-bottom: 3rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.025);
`;
const Title = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;
const SubTitle = styled.p`
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: ${(props) => props.theme.text};
  background-color: rgba(255, 255, 255, 0.15);
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  &:focus-visible {
    outline: 2px solid ${blue[400]};
    outline-offset: 2px;
  }
`;
// const Button = styled.button`
//   border: none;
//   outline: none;
//   color: white;
//   background-color: ${blue[400]};
//   font-size: 1.25rem;
//   font-weight: 600;
//   padding: 0.4rem 0.5rem;
//   border-radius: 0.25rem;
//   cursor: pointer;
//   width: 100%;
//   text-transform: uppercase;
// `;

const Newsletter = () => {
  const btnStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1.25rem",
    width: "100%",
  };

  return (
    <Container>
      <Title>Subscribe to our newsletter</Title>
      <SubTitle>
        No spam, notifications only about latest news & updates.
      </SubTitle>
      <Input type="email" required placeholder="...@exampl.com" />
      <GradientButton style={btnStyle}>Subscribe Now</GradientButton>
    </Container>
  );
};

export default Newsletter;
