import React from "react";
import { Container, Header, Text, TextBox, Span } from "./styles.js";
import { Button } from "../../styles/button";

const Newsletter = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Successfully Subscribed!");
  }
  return (
    <Container onSubmit={handleSubmit}>
      <Header>
        Subscribe to our <Span>newsletter</Span>
      </Header>
      <Text>No spam, notifications only about new products, updates.</Text>
      <TextBox type="email" placeholder="Enter Your Email Here" required />
      <Button fontSize={1.5} borderRadius={0.4}>
        Subscribe
      </Button>
    </Container>
  );
};

export default Newsletter;
