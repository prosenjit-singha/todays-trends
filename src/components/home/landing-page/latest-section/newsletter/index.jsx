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
  background-color: ${(props) => props.theme.background.paper};
`;
const Title = styled.h4`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;
const SubTitle = styled.p`
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) =>
    props.theme.isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  transition: background-color 300ms ease;
  &:focus-visible {
    background-color: ${(props) =>
      props.theme.isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    text-align: center;
    outline: 2px solid ${blue[400]};
    outline-offset: 2px;
  }
`;

const Newsletter = () => {
  const btnStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1.25rem",
    width: "100%",
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("Successfully subscribed!");
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Subscribe to our newsletter</Title>
      <SubTitle>
        No spam, notifications only about latest news & updates.
      </SubTitle>
      <Input type="email" required placeholder="...@exampl.com" />
      <GradientButton style={btnStyle} type="submit">
        Subscribe Now
      </GradientButton>
    </Container>
  );
};

export default Newsletter;
